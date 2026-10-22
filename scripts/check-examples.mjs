#!/usr/bin/env node
// Compile and run every ```coil example in the given markdown files, the way
// coil-lang runs doc-tests: an example passes when it compiles and exits 0.
//
//   node scripts/check-examples.mjs --coil ../coil-lang/target/release/coil \
//     --stdlib ../coil-stdlib/src src/content/docs/manual/**/*.md
//
// Fence info decides what happens:
//   ```coil            compiled and run
//   ```coil no_run     compiled only (servers, programs that wait for input)
//   ```coil ignore     skipped (fragments, deliberate errors)
//   ```coil fail       must fail to compile
// A block of `test("…") { … }` cases runs under `coil test` instead.
// `file=src/x.hy` after the tag writes the block into a per-page project; the
// block with `fn main` runs that project.
// Without a `fn main`, top-level declarations stay at the top level and the
// remaining statements are wrapped in `fn main() { … }`. An `// Output:` block
// right after the fence (```text) is compared with the program's stdout.

import { spawnSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const args = process.argv.slice(2);
const opt = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  if (i < 0) return fallback;
  const v = args[i + 1];
  args.splice(i, 2);
  return v;
};
const coilArg = opt("coil", "coil");
// Examples run in a scratch directory, so files they write do not land in the repo.
const coil = coilArg.includes("/") ? resolve(coilArg) : coilArg;
const stdlib = resolve(opt("stdlib", "../coil-stdlib/src"));
const files = args;

const DECL = /^(pub\s+|pure\s+|gen\s+|async\s+|static\s+|readonly\s+|#\[)*(fn|class|enum|trait|impl|type|const|macro|extern|static|mod)\b|^#\[/;

/** Split an example into top-level declarations and loose statements. */
function wrap(code) {
  const lines = code.split("\n");
  if (/^\s*(pub\s+)?fn\s+main\s*\(/m.test(code)) return code;
  const uses = [];
  const decls = [];
  const body = [];
  let depth = 0;
  let inDecl = false;
  for (const line of lines) {
    if (depth === 0 && /^use\s/.test(line)) {
      uses.push(line);
      continue;
    }
    if (depth === 0 && (DECL.test(line) || /^\/\/\//.test(line))) inDecl = true;
    (inDecl ? decls : body).push(line);
    for (const c of line.replace(/"(\\.|[^"\\])*"/g, "").replace(/\/\/.*$/, "")) {
      if (c === "{") depth++;
      else if (c === "}") depth--;
    }
    if (depth === 0 && inDecl && /[};]\s*$/.test(line) && !/^#\[/.test(line.trim())) inDecl = false;
  }
  return [...uses, ...decls, "fn main() {", ...body.map((l) => `    ${l}`), "}"].join("\n");
}

const dir = mkdtempSync(join(tmpdir(), "coil-examples-"));
let pass = 0;
const failures = [];

for (const file of files) {
  const lines = readFileSync(file, "utf8").split("\n");
  // Blocks tagged `file=src/x.hy` build one project per page; the one with
  // `fn main` runs it from the project directory.
  const project = join(dir, "project");
  rmSync(project, { recursive: true, force: true });
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^```coil\b\s*(.*)$/);
    if (!m) continue;
    const info = m[1].trim().split(/\s+/).filter(Boolean);
    const target = info.find((t) => t.startsWith("file="))?.slice(5);
    const mode = info.find((t) => !t.includes("=")) || "run";
    const start = i + 1;
    let j = start;
    while (j < lines.length && !/^```\s*$/.test(lines[j])) j++;
    const code = lines.slice(start, j).join("\n");
    i = j;
    if (mode === "ignore") continue;
    if (target) {
      const path = join(project, target);
      mkdirSync(join(path, ".."), { recursive: true });
      writeFileSync(path, `${code}\n`, { flag: "a" });
      if (!/^\s*fn\s+main\s*\(/m.test(code)) continue;
    }
    // Expected output: a ```text block directly after, introduced by "Output".
    let expected;
    const after = lines.slice(j + 1, j + 4).join("\n");
    const out = after.match(/^(?:\s*\n)?(?:\*\*)?Output(?:\*\*)?:?\s*\n+```text\n/);
    if (out) {
      let k = j + 1;
      while (!/^```text/.test(lines[k])) k++;
      let e = k + 1;
      while (!/^```\s*$/.test(lines[e])) e++;
      expected = lines.slice(k + 1, e).join("\n");
    }
    // A file of `test("…") { … }` cases runs under `coil test`.
    const isTest = !target && /^test\(/m.test(code);
    const src = isTest ? join(dir, "tests", "example.hy") : join(dir, "example.hy");
    if (isTest) mkdirSync(join(dir, "tests"), { recursive: true });
    if (!target) writeFileSync(src, isTest ? `${code}\n` : `${wrap(code)}\n`);
    const where = `${file}:${start}`;
    const argv = target
      ? ["--root", stdlib, "-A", target]
      : isTest
      ? ["test", "--root", stdlib, "-A", join(dir, "tests")]
      : mode === "no_run"
        ? ["compile", "--root", stdlib, "-A", src, "-o", join(dir, "out.hyc")]
        : ["--root", stdlib, "-A", src];
    const r = spawnSync(coil, argv, { encoding: "utf8", timeout: 20000, input: "", cwd: target ? project : dir });
    const ok = mode === "fail" ? r.status !== 0 : r.status === 0;
    const outOk = expected === undefined || r.stdout.trimEnd() === expected.trimEnd();
    if (isTest) rmSync(join(dir, "tests"), { recursive: true, force: true });
    if (ok && outOk) pass++;
    else failures.push({ where, mode, status: r.status, stderr: (r.stderr || "").slice(0, 1500), stdout: r.stdout, expected, code: wrap(code) });
  }
}

for (const f of failures) {
  console.log(`\n✗ ${f.where} (${f.mode}, exit ${f.status})`);
  if (f.expected !== undefined) console.log(`  expected:\n${f.expected}\n  got:\n${f.stdout}`);
  console.log(f.stderr.replace(/^/gm, "  "));
}
console.log(`\n${pass} passed, ${failures.length} failed`);
rmSync(dir, { recursive: true, force: true });
process.exit(failures.length ? 1 : 0);
