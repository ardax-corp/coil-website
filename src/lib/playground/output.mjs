// Shows a run's output: stdout and stderr interleaved as they arrive, then a
// status line. Shared by the playground, the docs' Run buttons and the
// tutorial challenges (styles in src/styles/playground.css).

import { runProgram } from "./client.mjs";
import { planRun } from "./plan.mjs";

const MAX_CHARS = 200_000;

export class OutputPanel {
  constructor(el) {
    this.el = el;
    el.classList.add("pg-output");
    el.setAttribute("aria-live", "polite");
    this.body = el.appendChild(document.createElement("pre"));
    this.statusLine = el.appendChild(document.createElement("div"));
    this.statusLine.className = "pg-status";
    this.clear();
  }

  clear() {
    this.body.replaceChildren();
    this.size = 0;
    this.status("");
  }

  append(stream, text) {
    if (this.size > MAX_CHARS) return;
    this.size += text.length;
    if (this.size > MAX_CHARS) text = `${text}\n… output truncated`;
    const last = this.body.lastElementChild;
    if (last?.dataset.stream === stream) last.textContent += text;
    else {
      const span = this.body.appendChild(document.createElement("span"));
      span.dataset.stream = stream;
      span.textContent = text;
    }
    this.el.scrollTop = this.el.scrollHeight;
  }

  /** kind: "" | "busy" | "ok" | "fail" */
  status(text, kind = "") {
    this.statusLine.textContent = text;
    this.statusLine.dataset.kind = kind;
    this.el.dataset.state = kind;
  }

  get stdout() {
    return [...this.body.children].filter((s) => s.dataset.stream === "stdout").map((s) => s.textContent).join("");
  }
}

/** Describes how a run ended, for the status line. */
export function describeExit(result, mode = "run") {
  if (result.timedOut) return ["Stopped: the program ran longer than the time limit.", "fail"];
  if (result.stopped) return ["Stopped.", "fail"];
  if (result.error) return [`The playground could not run this: ${result.error}`, "fail"];
  if (result.code === 0) return [mode === "test" ? "All tests passed." : "Finished.", "ok"];
  return [mode === "test" ? "Some tests failed." : `Exited with status ${result.code}.`, "fail"];
}

/**
 * Runs files into a panel and returns { result, mode, stdout }.
 * `args` overrides the planned command line.
 */
export async function runInto(panel, { files, stdin = "", args, mode, timeoutMs, quiet = false }) {
  const plan = args ? { files, args, mode: mode ?? "run" } : planRun(files);
  panel.clear();
  let stdout = "";
  const result = await runProgram({
    files: plan.files,
    args: plan.args,
    stdin,
    timeoutMs,
    onStatus: (s) => panel.status(s === "loading" ? "Loading the compiler (about 3 MB, once)…" : "Running…", "busy"),
    onOutput: (stream, text) => {
      if (stream === "stdout") stdout += text;
      if (!quiet) panel.append(stream, text);
    },
  });
  if (!quiet) panel.status(...describeExit(result, plan.mode));
  return { result, mode: plan.mode, stdout };
}
