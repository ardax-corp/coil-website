// The playground's Web Worker: loads the compiler once, then runs one coil
// command per "run" message. Output streams back as it is written. The page
// terminates the worker to stop a program that runs too long.

import { runCoil } from "./run-coil.mjs";
import { packagesFor } from "./plan.mjs";

let loaded;

async function load() {
  const res = await fetch("/playground/manifest.json");
  if (!res.ok) throw new Error("the compiler is not part of this build of the site");
  const manifest = await res.json();
  const wasm = fetch(`/playground/${manifest.wasm}`).then(async (res) => {
    if (!res.ok) throw new Error(`compiler download failed (HTTP ${res.status})`);
    // Gzipped by sync-playground.mjs; a server that already undid that (by
    // sending Content-Encoding: gzip) hands over the plain module instead.
    let bytes = new Uint8Array(await res.arrayBuffer());
    if (bytes[0] === 0x1f && bytes[1] === 0x8b) {
      bytes = new Uint8Array(await new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer());
    }
    return WebAssembly.compile(bytes);
  });
  const stdlib = fetch(`/playground/${manifest.stdlib}`).then((res) => res.json());
  const packages = manifest.packages ? fetch(`/playground/${manifest.packages}`).then((res) => res.json()) : {};
  return { module: await wasm, stdlib: await stdlib, packages: await packages };
}

/**
 * The standard library plus the packages this program uses, in one
 * directory: a package's `src/json.hy` is `json.hy` next to stdlib's
 * modules, which is where `use json::…` looks.
 */
function libraryFor(files, stdlib, packages) {
  const { names, missing } = packagesFor(files);
  const lib = { ...stdlib };
  for (const name of names) {
    for (const [path, text] of Object.entries(packages[name] ?? {})) lib[path] ??= text;
  }
  return { lib, missing };
}

self.onmessage = async ({ data }) => {
  if (data.type === "load") {
    loaded ??= load();
    loaded.catch(() => (loaded = undefined));
    return;
  }
  if (data.type !== "run") return;
  try {
    loaded ??= load();
    const { module, stdlib, packages } = await loaded;
    const { lib, missing } = libraryFor(data.files, stdlib, packages);
    self.postMessage({ type: "ready" });
    if (missing.length) {
      const text = `playground: ${missing.join(", ")} cannot run in the browser (only pure-Coil packages are available here)\n`;
      self.postMessage({ type: "out", stream: "stderr", text });
    }
    const code = await runCoil({
      module,
      stdlib: lib,
      files: data.files,
      args: data.args,
      stdin: data.stdin,
      onStdout: (text) => self.postMessage({ type: "out", stream: "stdout", text }),
      onStderr: (text) => self.postMessage({ type: "out", stream: "stderr", text }),
    });
    self.postMessage({ type: "exit", code });
  } catch (e) {
    loaded = undefined;
    self.postMessage({ type: "error", message: String(e?.message ?? e) });
  }
};
