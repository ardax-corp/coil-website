// The playground's Inspect panel: what `coil dissect` makes of the program
// (bytecode, HIR, MIR, IL, effects, AST, macro expansion), compiled on the
// analysis runner so it never waits behind a running program.

import { hasMain, isTestBlock } from "../examples.mjs";
import { analysis } from "./client.mjs";
import { STDLIB } from "./plan.mjs";

const MAX_CHARS = 400_000;

/** [label, dissect flag, section header] */
const VIEWS = [
  ["Bytecode", "", "bytecode"],
  ["HIR", "--hir", "hir"],
  ["MIR", "--mir", "mir"],
  ["IL", "--il", "il"],
  ["Optimized IL", "--il-post", "il (optimized)"],
  ["Effects", "--effects", "effects"],
  ["AST", "--ast", "ast"],
  ["Macro expansion", "--expand", null],
];

const LEVELS = [
  ["-O2 (default)", "2"],
  ["-O0", "0"],
  ["-O1", "1"],
  ["-O3", "3"],
  ["-Os", "s"],
];

function select(label, options) {
  const el = document.createElement("select");
  el.setAttribute("aria-label", label);
  for (const [text, value] of options) el.append(new Option(text, value));
  return el;
}

/** The sections of dissect output, by their `=== name ===` headers. */
function sections(text) {
  const out = { "": "" };
  let name = "";
  for (const line of text.split("\n")) {
    const m = /^=== (.+) ===$/.exec(line);
    if (m) {
      name = m[1];
      out[name] = "";
    } else out[name] += `${line}\n`;
  }
  return out;
}

/** Function names a program defines, for the function filter. */
function definedFunctions(files) {
  const names = new Set();
  for (const src of Object.values(files)) for (const m of src.matchAll(/\bfn\s+([A-Za-z_][A-Za-z0-9_]*)/g)) names.add(m[1]);
  return [...names].sort((a, b) => (a === "main" ? -1 : b === "main" ? 1 : a.localeCompare(b)));
}

export class InspectPanel {
  /** getFiles() returns the current { path: source }. */
  constructor(el, getFiles) {
    this.el = el;
    this.getFiles = getFiles;
    el.classList.add("pg-inspect");
    const bar = el.appendChild(document.createElement("div"));
    bar.className = "pg-inspect-bar";
    this.view = select("View", VIEWS.map(([label], i) => [label, String(i)]));
    this.fn = select("Function", [["All functions", ""]]);
    this.level = select("Optimization level", LEVELS);
    const source = document.createElement("label");
    this.source = document.createElement("input");
    this.source.type = "checkbox";
    this.source.checked = true;
    source.append(this.source, " source lines");
    bar.append(this.view, this.fn, this.level, source);
    this.body = el.appendChild(document.createElement("pre"));
    this.body.className = "pg-inspect-body";
    this.status = el.appendChild(document.createElement("div"));
    this.status.className = "pg-status";
    for (const c of [this.view, this.fn, this.level, this.source]) c.addEventListener("change", () => this.refresh());
    this.timer = undefined;
    this.generation = 0;
    this.shown = "";
  }

  /** Refreshes a moment after the code changes (call on every edit). */
  changed() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.refresh(), 800);
  }

  updateFunctions(files) {
    const names = definedFunctions(files);
    const current = this.fn.value;
    this.fn.replaceChildren(new Option("All functions", ""), ...names.map((n) => new Option(`fn ${n}`, n)));
    this.fn.value = names.includes(current) ? current : "";
  }

  async refresh() {
    clearTimeout(this.timer);
    const files = { ...this.getFiles() };
    this.updateFunctions(files);
    const paths = Object.keys(files);
    const entry = paths.find((p) => p === "main.hy" && hasMain(files[p])) ?? paths.find((p) => hasMain(files[p]));
    const target = entry ?? paths.find((p) => isTestBlock(files[p])) ?? paths[0];
    if (!target) return;
    const [, flag, section] = VIEWS[Number(this.view.value)];
    const args = ["dissect", target, "--root", STDLIB, "-A", "-O", this.level.value];
    if (!entry) args.push("--tests");
    if (flag) args.push(flag);
    if (this.fn.value) args.push("--fn", this.fn.value);
    if (!this.source.checked) args.push("--no-source");
    const key = JSON.stringify([files, args]);
    if (key === this.shown) return;
    const mine = ++this.generation;
    this.status.textContent = "Compiling…";
    this.status.dataset.kind = "busy";
    let stdout = "";
    let stderr = "";
    const result = await analysis.run({
      files,
      args,
      timeoutMs: 20000,
      onOutput: (stream, text) => {
        if (stream === "stdout") stdout += text;
        else stderr += text;
      },
    });
    if (mine !== this.generation) return;
    this.shown = key;
    let text;
    if (result.code === 0) {
      const parts = sections(stdout);
      text = section === null ? stdout : (parts[section] ?? "").replace(/^\n+/, "");
      if (!text.trim()) text = section === "mir" ? "No MIR: none of these functions has a numeric body.\n" : "(nothing to show)\n";
      this.status.textContent = "";
      this.status.dataset.kind = "";
    } else {
      text = stderr || stdout;
      this.status.textContent = /E0902/.test(text)
        ? "Nothing matches that function here: it may have been inlined or folded away. Try -O0."
        : result.timedOut ? "Stopped: compiling took too long." : result.error ? `The playground could not run this: ${result.error}` : "The program does not compile.";
      this.status.dataset.kind = "fail";
      this.shown = "";
    }
    if (text.length > MAX_CHARS) text = `${text.slice(0, MAX_CHARS)}\n… truncated; pick one function to see the rest`;
    this.body.textContent = text;
  }
}
