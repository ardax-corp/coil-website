// Run and Edit buttons under the ```coil examples on docs pages. A block runs
// the way scripts/check-examples.mjs runs it (src/lib/examples.mjs): loose
// statements are wrapped in `fn main`, `file=` blocks build the page's
// project, and test cases run under `coil test`. When an "Output:" block
// follows, the run's output is compared with it.

import { hasMain, isTestBlock, parseInfo, wrap } from "../examples.mjs";
import { OutputPanel, runInto } from "./output.mjs";
import { encodeShare } from "./share.mjs";
import { warmUp } from "./client.mjs";

const PLAY = '<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 4v16l14-8z"></path></svg>';

function button(label, { primary = false, html = "" } = {}) {
  const b = document.createElement("button");
  b.type = "button";
  b.className = primary ? "pg-btn primary" : "pg-btn";
  b.innerHTML = html;
  b.append(label);
  return b;
}

/** The text of an "Output:" block right after an example, if there is one. */
function expectedOutput(frame) {
  const label = frame.nextElementSibling;
  if (!label || label.tagName !== "P" || !/^\s*Output:?\s*$/.test(label.textContent)) return undefined;
  const next = label.nextElementSibling;
  const pre = next?.tagName === "PRE" ? next : next?.querySelector("pre");
  return pre ? pre.textContent : undefined;
}

/** Files that run one example: the page's project so far, or a single file. */
function programFor(code, info, project) {
  if (info.file) {
    project[info.file] = project[info.file] ? `${project[info.file]}${code}\n` : `${code}\n`;
    return hasMain(code) ? { files: { ...project }, entry: info.file } : undefined;
  }
  if (isTestBlock(code)) return { files: { "tests/example.hy": `${code}\n` } };
  return { files: { "main.hy": `${wrap(code)}\n` } };
}

function enhance(pre, info, program) {
  const frame = pre.closest(".code-frame") ?? pre;
  const expected = expectedOutput(frame);
  const actions = document.createElement("div");
  actions.className = "pg-actions";
  const run = button("Run", { primary: true, html: PLAY });
  const edit = button("Edit");
  const open = button("Open in playground");
  open.hidden = true;
  const canRun = info.mode === "run" || info.mode === "fail";
  if (canRun) actions.append(run);
  actions.append(edit, open);
  frame.append(actions);

  let panel;
  let editor;
  let files = program.files;
  const entry = program.entry ?? Object.keys(files)[0];

  const current = () => (editor ? { ...files, [entry]: editor.value } : files);

  run.addEventListener("pointerenter", warmUp, { once: true });
  run.addEventListener("click", async () => {
    if (!panel) {
      const el = document.createElement("div");
      frame.append(el);
      panel = new OutputPanel(el);
    }
    run.disabled = true;
    try {
      const { result, stdout } = await runInto(panel, { files: current() });
      if (info.mode === "fail" && result.code !== undefined && result.code !== 0) {
        panel.status("This example is meant to be rejected by the compiler.", "ok");
      }
      if (expected !== undefined && result.code === 0 && !editor) {
        const same = stdout.trimEnd() === expected.trimEnd();
        panel.status(same ? "Finished: the output matches the expected output above." : "Finished, but the output differs from the expected output.", same ? "ok" : "fail");
      }
    } finally {
      run.disabled = false;
    }
  });

  edit.addEventListener("click", async () => {
    if (editor) {
      editor.value = files[entry];
      return;
    }
    const { createEditor } = await import("./editor.mjs");
    const host = document.createElement("div");
    host.className = "pg-inline-editor";
    pre.after(host);
    pre.hidden = true;
    editor = createEditor(host, { doc: files[entry].replace(/\n$/, ""), onRun: () => run.click() });
    editor.focus();
    edit.textContent = "Reset";
    open.hidden = false;
  });

  open.addEventListener("click", async () => {
    const hash = await encodeShare({ files: current() });
    window.open(`/playground#${hash}`, "_blank", "noopener");
  });
}

/** Adds the buttons to every runnable example inside `root`. */
export function enhanceExamples(root) {
  const project = {};
  for (const pre of root.querySelectorAll('pre.astro-code[data-language="coil"]')) {
    // Popovers (See also) quote code from other pages.
    if (pre.closest(".see-pop, [data-plain-code]")) continue;
    const info = parseInfo(pre.dataset.meta);
    if (info.mode === "ignore" || info.challenge || info.check) continue;
    const code = pre.querySelector("code")?.textContent.replace(/\n$/, "") ?? "";
    const program = programFor(code, info, project);
    if (program) enhance(pre, info, program);
  }
}
