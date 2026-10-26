#!/usr/bin/env node
// Check the tutorial challenges (see src/lib/remark-challenges.mjs): every
// challenge with a check or expected output needs a reference solution in
// scripts/challenges/<id>.hy that passes it the way the site runs it, and a
// starter that does not pass it yet.
//
//   node scripts/check-challenges.mjs --coil ../coil-lang/target/release/coil \
//     --stdlib ../coil-stdlib/src src/content/docs/manual/tutorial/*.md
//
// Pass `--coil scripts/coil-wasm.mjs` to check with the playground's own
// WebAssembly build.

import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { parseInfo } from "../src/lib/examples.mjs";

const args = process.argv.slice(2);
const opt = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  if (i < 0) return fallback;
  const v = args[i + 1];
  args.splice(i, 2);
  return v;
};
const coilArg = opt("coil", "coil");
const coil = coilArg.includes("/") ? resolve(coilArg) : coilArg;
const stdlib = resolve(opt("stdlib", "../coil-stdlib/src"));
const solutions = new URL("./challenges/", import.meta.url).pathname;
const only = opt("only");

/** challenge id → { starter, check, expect, stream, where } for one page. */
function challenges(file) {
  const text = readFileSync(file, "utf8");
  const found = new Map();
  const get = (id) => found.get(id) ?? found.set(id, { id }).get(id);
  const re = /^([ \t]*)```(\w+)([^\n]*)\n([\s\S]*?)\n\1```[ \t]*$/gm;
  let m;
  while ((m = re.exec(text))) {
    const indent = m[1];
    const body = m[4]
      .split("\n")
      .map((l) => (l.startsWith(indent) ? l.slice(indent.length) : l.trimStart()))
      .join("\n");
    const info = parseInfo(m[3]);
    const line = text.slice(0, m.index).split("\n").length;
    if (m[2] === "coil" && info.challenge) Object.assign(get(info.challenge), { starter: body, where: `${file}:${line}` });
    if (m[2] === "coil" && info.check) get(info.check).check = body;
    if (m[2] === "text" && info.attrs.expect) Object.assign(get(info.attrs.expect), { expect: body, stream: info.attrs.stream ?? "stdout", prefix: info.attrs.match === "prefix" });
  }
  return [...found.values()];
}

const dir = mkdtempSync(join(tmpdir(), "coil-challenges-"));
const failures = [];
let pass = 0;

function run(files, argv) {
  rmSync(join(dir, "w"), { recursive: true, force: true });
  for (const [path, body] of Object.entries(files)) {
    mkdirSync(join(dir, "w", path, ".."), { recursive: true });
    writeFileSync(join(dir, "w", path), `${body}\n`);
  }
  return spawnSync(coil, argv, { encoding: "utf8", timeout: 30000, input: "", cwd: join(dir, "w") });
}

for (const file of args) {
  for (const c of challenges(file)) {
    if (only && c.id !== only) continue;
    const fail = (why, r) => failures.push({ id: c.id, where: c.where ?? file, why, out: r ? `${r.stdout}\n${r.stderr}`.trim().slice(0, 2000) : "" });
    if (!c.starter) {
      fail("check or expect block without a challenge block");
      continue;
    }
    const solPath = join(solutions, `${c.id}.hy`);
    // Explore-and-see challenges (no check) need no reference solution.
    if (!c.check && c.expect === undefined && !existsSync(solPath)) {
      pass++;
      continue;
    }
    if (!existsSync(solPath)) {
      fail(`no reference solution (${solPath})`);
      continue;
    }
    const solution = readFileSync(solPath, "utf8");
    const runArgs = ["--root", stdlib, "-A", "main.hy"];
    if (c.check) {
      const r = run({ "src/solution.hy": solution, "tests/check.hy": c.check }, ["test", "--root", stdlib, "-A", "tests"]);
      if (r.status !== 0) {
        fail("the reference solution fails the check", r);
        continue;
      }
      // The starter as given must not already pass.
      const s = run({ "src/solution.hy": c.starter, "tests/check.hy": c.check }, ["test", "--root", stdlib, "-A", "tests"]);
      if (s.status === 0) {
        fail("the starter already passes the check", s);
        continue;
      }
    } else if (c.expect !== undefined) {
      const r = run({ "main.hy": solution }, runArgs);
      const s = run({ "main.hy": c.starter }, runArgs);
      const starterOut = (c.stream === "stderr" ? s.stderr : s.stdout).trim();
      if (c.prefix ? starterOut.startsWith(c.expect.trim()) : starterOut === c.expect.trim()) {
        fail("the starter already prints the expected text", s);
        continue;
      }
      const got = (c.stream === "stderr" ? r.stderr : r.stdout).trim();
      const ok = c.prefix ? got.startsWith(c.expect.trim()) : got === c.expect.trim();
      if (r.status === null || !ok) {
        fail(`the reference solution's ${c.stream} is not the expected text:\n--- expected\n${c.expect.trim()}\n--- got\n${got}`, r);
        continue;
      }
    } else {
      const r = run({ "main.hy": solution }, runArgs);
      if (r.status === null) {
        fail("the reference solution does not finish", r);
        continue;
      }
    }
    pass++;
  }
}

for (const f of failures) console.log(`\n✗ ${f.id} (${f.where}): ${f.why}${f.out ? `\n${f.out.replace(/^/gm, "  ")}` : ""}`);
console.log(`\n${pass} challenges passed, ${failures.length} failed`);
rmSync(dir, { recursive: true, force: true });
process.exit(failures.length ? 1 : 0);
