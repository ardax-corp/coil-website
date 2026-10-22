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
// Without a `fn main`, top-level declarations stay at the top level and the
// remaining statements are wrapped in `fn main() { … }`. An `// Output:` block
// right after the fence (```text) is compared with the program's stdout.

import { execFileSync, spawnSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const args = process.argv.slice(2);
const opt = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  if (i < 0) return fallback;
  const v = args[i + 1];
  args.splice(i, 2);
  return v;
};
const coil = opt("coil", "coil");
const stdlib = opt("stdlib", "../coil-stdlib/src");
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
    if (depth === 0 && DECL.test(line)) inDecl = true;
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
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^```coil\b\s*(.*)$/);
    if (!m) continue;
    const mode = m[1].trim().split(/\s+/)[0] || "run";
    const start = i + 1;
    let j = start;
    while (j < lines.length && !/^```\s*$/.test(lines[j])) j++;
    const code = lines.slice(start, j).join("\n");
    i = j;
    if (mode === "ignore") continue;
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
    const src = join(dir, "example.hy");
    writeFileSync(src, `${wrap(code)}\n`);
    const where = `${file}:${start}`;
    const argv = ["--root", stdlib, "-A", ...(mode === "no_run" ? ["compile", src, "-o", join(dir, "out.hyc")] : [src])];
    const r = spawnSync(coil, argv, { encoding: "utf8", timeout: 20000, input: "" });
    const ok = mode === "fail" ? r.status !== 0 : r.status === 0;
    const outOk = expected === undefined || r.stdout.trimEnd() === expected.trimEnd();
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
