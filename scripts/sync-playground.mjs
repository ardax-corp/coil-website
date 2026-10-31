#!/usr/bin/env node
// Fetch what the in-browser playground runs: the coil compiler built for
// wasm32-wasip1 (from coil-lang's `edge` release), the standard library
// sources (coil-stdlib main) and the `src` of each package in
// PLAYGROUND_PACKAGES (default branch). Runs before every build; the outputs
// land in public/playground/ and are not committed.
//
//   node scripts/sync-playground.mjs                       download everything
//   node scripts/sync-playground.mjs --wasm PATH --stdlib DIR --packages DIR
//                                                          use local builds and
//                                                          checkouts (DIR/coil-json, ...)
//
// The module is gzipped under a made-up extension (.wasm-gz), so no server
// adds a Content-Encoding header that would hide the gzip from the worker.
// File names carry a content hash so browsers may cache them forever;
// manifest.json names the current pair. When the download fails the build
// still succeeds and the playground says it is unavailable.

import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, relative } from "node:path";
import { gzipSync } from "node:zlib";
import { PLAYGROUND_PACKAGES } from "../src/lib/playground/plan.mjs";

const OUT = new URL("../public/playground/", import.meta.url).pathname;
const TAG = process.env.COIL_PLAYGROUND_TAG || "edge";
const WASM_URL = `https://github.com/ardax-corp/coil-lang/releases/download/${TAG}/coil-wasm32-wasip1.wasm`;
const STDLIB_URL = "https://codeload.github.com/ardax-corp/coil-stdlib/tar.gz/refs/heads/main";

const args = process.argv.slice(2);
const opt = (name) => {
  const i = args.indexOf(`--${name}`);
  return i < 0 ? undefined : args[i + 1];
};

function walk(dir, out = {}, base = dir) {
  for (const name of readdirSync(dir).sort()) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path, out, base);
    // `.hy` is the pre-rename spelling of a package not yet renamed.
    else if (name.endsWith(".coil") || name.endsWith(".hy")) out[relative(base, path)] = readFileSync(path, "utf8");
  }
  return out;
}

async function download(url) {
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

async function stdlibSources() {
  const local = opt("stdlib");
  if (local) return walk(local);
  const dir = mkdtempSync(join(tmpdir(), "coil-stdlib-"));
  try {
    writeFileSync(join(dir, "src.tar.gz"), await download(STDLIB_URL));
    execFileSync("tar", ["-xzf", "src.tar.gz", "--strip-components=1"], { cwd: dir });
    return walk(join(dir, "src"));
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

/** { name: { "path.coil": source } } of every playground package's src. */
async function packageSources() {
  const out = {};
  const local = opt("packages");
  for (const [name, { repo }] of Object.entries(PLAYGROUND_PACKAGES)) {
    if (local) {
      out[name] = walk(join(local, repo, "src"));
      continue;
    }
    const dir = mkdtempSync(join(tmpdir(), `${repo}-`));
    try {
      writeFileSync(join(dir, "src.tar.gz"), await download(`https://codeload.github.com/ardax-corp/${repo}/tar.gz/HEAD`));
      execFileSync("tar", ["-xzf", "src.tar.gz", "--strip-components=1"], { cwd: dir });
      out[name] = walk(join(dir, "src"));
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  }
  return out;
}

const hash = (bytes) => createHash("sha256").update(bytes).digest("hex").slice(0, 12);

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
try {
  const wasm = opt("wasm") ? readFileSync(opt("wasm")) : await download(WASM_URL);
  const stdlib = Buffer.from(JSON.stringify(await stdlibSources()));
  // Packages are optional: without them programs that only use the standard
  // library still run.
  let packages;
  try {
    packages = Buffer.from(JSON.stringify(await packageSources()));
  } catch (e) {
    console.warn(`playground: packages unavailable in this build (${e.message})`);
  }
  const gz = gzipSync(wasm, { level: 9 });
  const manifest = {
    wasm: `coil-${hash(wasm)}.wasm-gz`,
    stdlib: `stdlib-${hash(stdlib)}.json`,
    packages: packages ? `packages-${hash(packages)}.json` : undefined,
    source: opt("wasm") ? "local" : TAG,
  };
  writeFileSync(join(OUT, manifest.wasm), gz);
  writeFileSync(join(OUT, manifest.stdlib), stdlib);
  if (packages) writeFileSync(join(OUT, manifest.packages), packages);
  writeFileSync(join(OUT, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(`playground: ${manifest.wasm} (${(gz.length / 1e6).toFixed(1)} MB), ${manifest.stdlib}, ${manifest.packages ?? "no packages"}`);
} catch (e) {
  console.warn(`playground: unavailable in this build (${e.message})`);
}
