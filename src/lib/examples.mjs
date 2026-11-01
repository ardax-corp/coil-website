// How a ```coil block in the docs runs. Shared by scripts/check-examples.mjs,
// which checks every example at build time, and the Run buttons on the site,
// so a block runs the same way in both.
//
// Fence info after `coil`:
//   (nothing)      compiled and run
//   no_run         compiled only (servers, programs that wait for input)
//   ignore         skipped (fragments, deliberate errors)
//   fail           must fail to compile
//   file=src/x.coil  part of the page's project (see check-examples.mjs)
//   challenge=ID   a tutorial challenge's starter code; check=ID holds its
//                  hidden test cases (see src/lib/remark-challenges.mjs)

const DECL = /^(pub\s+|pure\s+|gen\s+|async\s+|static\s+|readonly\s+|#\[)*(fn|class|enum|trait|impl|type|const|macro|extern|static|mod)\b|^#\[/;

/** Reads a fence's info string (the text after ```coil). */
export function parseInfo(info) {
  const words = (info ?? "").trim().split(/\s+/).filter(Boolean);
  const attrs = Object.fromEntries(words.filter((w) => w.includes("=")).map((w) => w.split(/=(.*)/s).slice(0, 2)));
  const mode = words.find((w) => !w.includes("=")) || "run";
  return { mode, file: attrs.file, challenge: attrs.challenge, check: attrs.check, attrs };
}

/** True when the code defines its own `fn main`. */
export const hasMain = (code) => /^\s*(pub\s+)?fn\s+main\s*\(/m.test(code);

/** True for a block of `test("…") { … }` cases, which runs under `coil test`. */
export const isTestBlock = (code) => /^test\(/m.test(code);

/** Split an example into top-level declarations and loose statements. */
export function wrap(code) {
  const lines = code.split("\n");
  if (hasMain(code)) return code;
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
