// Live diagnostics for the editors: compiles the files without running them
// (`coil compile --log-lsp`, which prints one LSP Diagnostic per line) on the
// analysis runner, and groups what it reports by file.

import { hasMain } from "../examples.mjs";
import { analysis } from "./client.mjs";
import { STDLIB } from "./plan.mjs";

let generation = 0;

/**
 * { path: source } → { path: [lsp Diagnostic] }, or null when a newer call
 * replaced this one or the compiler could not run. Each file is compiled as
 * an entry of its own (the one with `fn main` first), since a module or test
 * file the entry does not import would otherwise go unchecked.
 */
export async function diagnose(files) {
  const mine = ++generation;
  const paths = Object.keys(files).filter((p) => p.endsWith(".hy"));
  const entry = paths.find((p) => hasMain(files[p]));
  const order = entry ? [entry, ...paths.filter((p) => p !== entry)] : paths;
  const byFile = Object.fromEntries(paths.map((p) => [p, []]));
  const seen = new Set();
  for (const path of order) {
    if (mine !== generation) return null;
    let out = "";
    const result = await analysis.run({
      files,
      args: ["compile", path, "-o", "/tmp/check.hyc", "--include-tests", "--log-lsp", "--root", STDLIB, "-A"],
      timeoutMs: 10000,
      onOutput: (stream, text) => {
        if (stream === "stdout") out += text;
      },
    });
    if (result.code === undefined) return null;
    for (const line of out.split("\n")) {
      if (!line.startsWith("{")) continue;
      let d;
      try {
        d = JSON.parse(line);
      } catch {
        continue;
      }
      const uri = String(d.uri ?? "").replace(/^(\.\/|\/)+/, "");
      const key = `${uri}:${JSON.stringify(d.range)}:${d.message}`;
      if (!(uri in byFile) || seen.has(key)) continue;
      seen.add(key);
      byFile[uri].push(d);
    }
  }
  return mine === generation ? byFile : null;
}
