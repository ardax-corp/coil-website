#!/usr/bin/env node
// A stand-in for the `coil` binary that runs the playground's WebAssembly
// build through the same in-memory file system the browser uses, so the
// examples and challenges can be checked against exactly what readers run:
//
//   node scripts/check-examples.mjs --coil scripts/coil-wasm.mjs …
//
// The working directory is copied in (it must be small), absolute paths under
// it are made relative, and `--root DIR` becomes the in-memory /stdlib.
// The module comes from COIL_WASM, or the one sync-playground.mjs fetched.

import { readdirSync, readFileSync, statSync } from "node:fs";
import { gunzipSync } from "node:zlib";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { runCoil } from "../src/lib/playground/run-coil.mjs";

const here = dirname(fileURLToPath(import.meta.url));

function walk(dir, out = {}, base = dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path, out, base);
    else out[relative(base, path)] = readFileSync(path);
  }
  return out;
}

const cwd = process.cwd();
const args = process.argv.slice(2);
let stdlib = {};
const i = args.indexOf("--root");
if (i >= 0) {
  stdlib = walk(resolve(args[i + 1]));
  args[i + 1] = "/stdlib";
}
const mapped = args.map((a) => (a.startsWith(`${cwd}/`) ? relative(cwd, a) : a));

const wasmPath = process.env.COIL_WASM;
const synced = join(here, "../public/playground");
const bytes = wasmPath
  ? readFileSync(wasmPath)
  : gunzipSync(readFileSync(join(synced, JSON.parse(readFileSync(join(synced, "manifest.json"), "utf8")).wasm)));
const module = await WebAssembly.compile(bytes);
let stdin = "";
if (!process.stdin.isTTY) {
  try {
    stdin = readFileSync(0, "utf8");
  } catch {}
}
process.exitCode = await runCoil({
  module,
  stdlib,
  files: walk(cwd),
  args: mapped,
  stdin,
  onStdout: (s) => process.stdout.write(s),
  onStderr: (s) => process.stderr.write(s),
});
