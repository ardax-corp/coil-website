// Runs the coil compiler, built for wasm32-wasip1, against an in-memory file
// system. Shared by the browser worker and the Node scripts that check the
// playground, so both run programs the same way.
//
// The program's files sit at the root of an in-memory file system, which is
// also the working directory, next to the standard library (STDLIB) and /tmp.
// Nothing is persisted.

import { STDLIB } from "./plan.mjs";
import { ConsoleStdout, Directory, File, OpenFile, PreopenDirectory, WASI, WASIProcExit, strace, wasi as defs } from "@bjorn3/browser_wasi_shim";

const encoder = new TextEncoder();

// Output is captured, not a terminal: no progress bars or colour codes.
class Pipe extends ConsoleStdout {
  fd_fdstat_get() {
    const r = super.fd_fdstat_get();
    r.fdstat.fs_filetype = defs.FILETYPE_UNKNOWN;
    return r;
  }
}

/** Builds a Directory from a { "a/b.hy": "source" } map. */
export function tree(files) {
  const root = new Map();
  for (const [path, text] of Object.entries(files)) {
    const parts = path.split("/").filter(Boolean);
    let dir = root;
    for (const part of parts.slice(0, -1)) {
      if (!dir.has(part)) dir.set(part, new Directory(new Map()));
      dir = dir.get(part).contents;
    }
    dir.set(parts.at(-1), new File(typeof text === "string" ? encoder.encode(text) : text));
  }
  return new Directory(root);
}

/**
 * Runs `coil <args>` once.
 *
 *   module   a compiled WebAssembly.Module
 *   stdlib   { "path.hy": source } of the standard library
 *   files    { "main.hy": source } of the program, at the root
 *   args     arguments after `coil`, e.g. ["--root", STDLIB, "-A", "main.hy"]
 *   stdin    text the program reads from standard input
 *   onStdout, onStderr  called with each chunk of output text
 *
 * Returns the exit code. Throws when the module traps (a compiler crash).
 */
export async function runCoil({ module, stdlib, files, args, stdin = "", onStdout, onStderr }) {
  const root = tree(files);
  const lib = tree(Object.fromEntries(Object.entries(stdlib).map(([p, t]) => [`${STDLIB.slice(1)}/${p}`, t])));
  for (const [name, dir] of [...lib.contents, ["tmp", new Directory(new Map())]]) {
    dir.parent = root;
    root.contents.set(name, dir);
  }
  const decoder = (fn) => {
    const d = new TextDecoder();
    return new Pipe((bytes) => fn?.(d.decode(bytes, { stream: true })));
  };
  const fds = [
    new OpenFile(new File(encoder.encode(stdin))),
    decoder(onStdout),
    decoder(onStderr),
    new PreopenDirectory("/", root.contents),
  ];
  // TMPDIR keeps the compiler's caches inside the sandbox.
  const wasi = new WASI(["coil", ...args], ["TMPDIR=/tmp", "NO_COLOR=1"], fds, { debug: false });
  const instance = await WebAssembly.instantiate(module, { wasi_snapshot_preview1: globalThis.COIL_STRACE ? strace(wasi.wasiImport, []) : wasi.wasiImport });
  try {
    return wasi.start(instance);
  } catch (e) {
    if (e instanceof WASIProcExit) return e.code;
    throw e;
  }
}
