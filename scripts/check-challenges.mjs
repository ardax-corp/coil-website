#!/usr/bin/env node
// Check the tutorial challenges (see src/lib/remark-challenges.mjs): every
// challenge with a check or expected output needs a reference solution in
// scripts/challenges/<id>.coil that passes it the way the site runs it, and a
// starter that does not pass it yet.
//
//   node scripts/check-challenges.mjs --coil ../coil-lang/target/release/coil \
//     --stdlib ../coil-stdlib/src src/content/docs/manual/tutorial/*.md
//
// Pass `--coil scripts/coil-wasm.mjs` to check with the playground's own
// WebAssembly build.

import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { parseInfo } from "../src/lib/examples.mjs";
import { STDLIB, planRun } from "../src/lib/playground/plan.mjs";

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
    if (info.challenge) {
      const c = get(info.challenge);
      c.where ??= `${file}:${line}`;
      if (info.attrs.args) c.args = ["--", ...info.attrs.args.split(",")];
      if (info.mode === "stdin") c.stdin = body;
      else (c.starter ??= {})[info.file ?? "main.coil"] = body;
    }
    if (m[2] === "coil" && info.check) get(info.check).check = body;
    if (m[2] === "text" && info.attrs.expect) Object.assign(get(info.attrs.expect), { expect: body, stream: info.attrs.stream ?? "stdout", match: info.attrs.match ?? "all" });
  }
  return [...found.values()];
}

const dir = mkdtempSync(join(tmpdir(), "coil-challenges-"));
const failures = [];
let pass = 0;

const matches = (c, out) => {
  const got = out.trim();
  const want = c.expect.trim();
  return c.match === "prefix" ? got.startsWith(want) : c.match === "contains" ? got.includes(want) : got === want;
};

/** A solution is scripts/challenges/<id>.coil (main.coil) or a <id>/ directory. */
function readSolution(id) {
  const one = join(solutions, `${id}.coil`);
  if (existsSync(one)) return { "main.coil": readFileSync(one, "utf8") };
  const dir = join(solutions, id);
  if (!existsSync(dir)) return undefined;
  const files = {};
  const walk = (d, base) => {
    for (const name of readdirSync(d)) {
      const path = join(d, name);
      if (statSync(path).isDirectory()) walk(path, `${base}${name}/`);
      else files[`${base}${name}`] = readFileSync(path, "utf8");
    }
  };
  walk(dir, "");
  return files;
}

/** The command line the site uses for a set of files (see plan.mjs). */
function programRun(files, c) {
  const plan = planRun(files);
  const argv = plan.args.map((a) => (a === STDLIB ? stdlib : a));
  return run(plan.files, [...argv, ...(c.args ?? [])], c.stdin);
}

function run(files, argv, input = "") {
  rmSync(join(dir, "w"), { recursive: true, force: true });
  for (const [path, body] of Object.entries(files)) {
    mkdirSync(join(dir, "w", path, ".."), { recursive: true });
    writeFileSync(join(dir, "w", path), `${body}\n`);
  }
  return spawnSync(coil, argv, { encoding: "utf8", timeout: 30000, input, cwd: join(dir, "w") });
}

for (const file of args) {
  for (const c of challenges(file)) {
    if (only && c.id !== only) continue;
    const fail = (why, r) => failures.push({ id: c.id, where: c.where ?? file, why, out: r ? `${r.stdout}\n${r.stderr}`.trim().slice(0, 2000) : "" });
    if (!c.starter) {
      fail("check or expect block without a challenge block");
      continue;
    }
    const solution = readSolution(c.id);
    // Explore-and-see challenges (no check) need no reference solution.
    if (!c.check && c.expect === undefined && !solution) {
      pass++;
      continue;
    }
    if (!solution) {
      fail(`no reference solution in ${solutions}${c.id}.coil or ${c.id}/`);
      continue;
    }
    if (c.check) {
      const r = run({ "src/solution.coil": solution["main.coil"], "tests/check.coil": c.check }, ["test", "--root", stdlib, "-A", "tests"]);
      if (r.status !== 0) {
        fail("the reference solution fails the check", r);
        continue;
      }
      // The starter as given must not already pass.
      const s = run({ "src/solution.coil": c.starter["main.coil"], "tests/check.coil": c.check }, ["test", "--root", stdlib, "-A", "tests"]);
      if (s.status === 0) {
        fail("the starter already passes the check", s);
        continue;
      }
    } else if (c.expect !== undefined) {
      const out = (r) => (c.stream === "stderr" ? r.stderr : r.stdout);
      const s = programRun(c.starter, c);
      if (s.status !== null && matches(c, out(s))) {
        fail("the starter already prints the expected text", s);
        continue;
      }
      const r = programRun({ ...c.starter, ...solution }, c);
      if (r.status === null || !matches(c, out(r))) {
        fail(`the reference solution's ${c.stream} does not match (${c.match}):\n--- expected\n${c.expect.trim()}\n--- got\n${out(r).trim()}`, r);
        continue;
      }
    } else {
      const r = programRun({ ...c.starter, ...solution }, c);
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
