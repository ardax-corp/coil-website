// Decides how to run a set of files: the program with `fn main`, or, when
// there is none, the `test("…")` cases under `coil test`.

import { hasMain, isTestBlock } from "../examples.mjs";

/**
 * Where the standard library sits in the playground's file system. Under
 * .deps/, which `coil test` treats as dependencies: it does not run their
 * doc examples, though the directory is inside the working directory.
 */
export const STDLIB = "/.deps/stdlib";

/**
 * Packages the playground can use, as spool would link them: pure Coil only
 * (packages with a native library or that need the network or a terminal at
 * run time cannot work in the browser). scripts/sync-playground.mjs bundles
 * each one's `src`; at run time they sit in the same directory as the
 * standard library, so `use json::{Json};` resolves without extra flags.
 * `deps` are the packages it needs in turn. Keep in sync with
 * src/lib/packages.ts.
 */
export const PLAYGROUND_PACKAGES = {
  json: { repo: "coil-json", deps: [] },
  toml: { repo: "coil-toml", deps: [] },
  msgpack: { repo: "coil-msgpack", deps: [] },
  csv: { repo: "coil-csv", deps: [] },
  url: { repo: "coil-url", deps: [] },
  deflate: { repo: "coil-deflate", deps: [] },
  gzip: { repo: "coil-gzip", deps: ["deflate"] },
  time: { repo: "coil-time", deps: [] },
  log: { repo: "coil-log", deps: ["time"] },
  cli: { repo: "coil-cli", deps: [] },
};

/** coil-stdlib's own dependency (its `random` module reads the clock through it). */
const STDLIB_DEPS = ["time"];

/**
 * The packages a program gets, the way spool decides them: the names under
 * `[dependencies]` in its coil.toml (and what those depend on), or, with no
 * coil.toml, every package the playground has. Also returns the declared
 * names the playground cannot provide.
 */
export function packagesFor(files) {
  const manifest = files["coil.toml"];
  const declared = manifest === undefined ? Object.keys(PLAYGROUND_PACKAGES) : dependencyNames(manifest);
  const out = new Set();
  const missing = [];
  const add = (name) => {
    if (out.has(name)) return;
    const pkg = PLAYGROUND_PACKAGES[name];
    if (!pkg) {
      // spool links coil-stdlib as `stdlib`; it is always there.
      if (name !== "stdlib") missing.push(name);
      return;
    }
    out.add(name);
    pkg.deps.forEach(add);
  };
  [...declared, ...STDLIB_DEPS].forEach(add);
  return { names: [...out], missing };
}

/** Keys of the `[dependencies]` table in a coil.toml. */
export function dependencyNames(toml) {
  const names = [];
  let inDeps = false;
  for (const raw of toml.split("\n")) {
    const line = raw.replace(/#.*$/, "").trim();
    if (/^\[.*\]$/.test(line)) {
      inDeps = line === "[dependencies]";
      continue;
    }
    const m = inDeps && line.match(/^"?([A-Za-z0-9_-]+)"?\s*=/);
    if (m) names.push(m[1]);
  }
  return names;
}

/**
 * { files } → { files, args, mode } where mode is "run" or "test". `coil test`
 * wants a directory, so test files outside tests/ move into it.
 */
export function planRun(files) {
  const paths = Object.keys(files);
  const entry = paths.find((p) => p === "main.coil" && hasMain(files[p])) ?? paths.find((p) => hasMain(files[p]));
  if (entry) return { files, mode: "run", args: ["--root", STDLIB, "-A", entry] };
  const tests = paths.filter((p) => isTestBlock(files[p]));
  if (!tests.length) return { files, mode: "run", args: ["--root", STDLIB, "-A", paths[0] ?? "main.coil"] };
  const moved = {};
  for (const p of paths) moved[tests.includes(p) && !p.startsWith("tests/") ? `tests/${p.split("/").at(-1)}` : p] = files[p];
  return { files: moved, mode: "test", args: ["test", "--root", STDLIB, "-A", "tests"] };
}

/**
 * `files` with each pre-rename `.hy` name as `.coil` (saved drafts and share
 * links from before the rename), keeping a `.coil` file that already exists.
 */
export function coilFileNames(files) {
  const out = {};
  for (const [name, text] of Object.entries(files ?? {})) {
    const renamed = name.endsWith(".hy") ? `${name.slice(0, -3)}.coil` : name;
    if (!(renamed in out) || renamed === name) out[renamed] = text;
  }
  return out;
}
