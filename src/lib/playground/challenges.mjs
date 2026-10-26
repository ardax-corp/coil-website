// Henry's challenges at the end of each tutorial chapter: an editor with the
// starter code, Run, and Check. Check runs the hidden test cases against the
// reader's code (as the module `solution`) or compares the program's output
// with the expected text. Solved challenges and drafts stay in this browser.
// The data comes from src/lib/remark-challenges.mjs.

import { OutputPanel, runInto } from "./output.mjs";
import { warmUp } from "./client.mjs";
import { encodeShare } from "./share.mjs";

const SOLVED = "coil-challenges-solved";
const DRAFT = "coil-challenge-draft:";

const store = {
  get(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key) ?? "null") ?? fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    try {
      if (value === undefined) localStorage.removeItem(key);
      else localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  },
};

const solved = () => store.get(SOLVED, {});

function button(label, primary = false) {
  const b = document.createElement("button");
  b.type = "button";
  b.className = primary ? "pg-btn primary" : "pg-btn";
  b.textContent = label;
  return b;
}

/** Parses `coil test --json` lines into the file events. */
function testEvents(text) {
  return text
    .split("\n")
    .filter((l) => l.startsWith("{"))
    .map((l) => {
      try {
        return JSON.parse(l);
      } catch {
        return undefined;
      }
    })
    .filter((e) => e?.event === "file");
}

function setup(box, onSolved) {
  const id = box.dataset.challenge;
  const part = (name) => box.querySelector(`textarea[data-part="${name}"]`);
  const starter = part("starter").value;
  const check = part("check")?.value;
  const expect = part("expect");

  const bar = document.createElement("div");
  bar.className = "challenge-bar";
  const open = button(store.get(DRAFT + id) ? "Continue in the editor" : "Try it in the editor");
  const badge = document.createElement("span");
  badge.className = "challenge-solved";
  badge.textContent = "✓ Solved";
  bar.append(open, badge);
  box.append(bar);
  if (solved()[id]) box.dataset.solved = "";

  const markSolved = () => {
    store.set(SOLVED, { ...solved(), [id]: Date.now() });
    box.dataset.solved = "";
    onSolved();
  };

  let editor;
  open.addEventListener("pointerenter", warmUp, { once: true });
  open.addEventListener("click", async () => {
    if (editor) {
      work.hidden = !work.hidden;
      return;
    }
    const { createEditor } = await import("./editor.mjs");
    editorHost.className = "challenge-editor";
    editor = createEditor(editorHost, {
      doc: store.get(DRAFT + id) ?? starter,
      onRun: () => run.click(),
      onChange: (text) => store.set(DRAFT + id, text === starter ? undefined : text),
    });
    work.hidden = false;
    open.textContent = "Hide the editor";
    editor.focus();
  });

  const work = document.createElement("div");
  work.className = "challenge-work";
  work.hidden = true;
  const editorHost = document.createElement("div");
  const actions = document.createElement("div");
  actions.className = "challenge-bar";
  const run = button("Run");
  const verify = check || expect ? button("Check", true) : button("Mark as done", true);
  const reset = button("Start over");
  const playground = button("Open in playground");
  actions.append(verify, run, reset, playground);
  const outHost = document.createElement("div");
  const results = document.createElement("ul");
  results.className = "challenge-results";
  results.hidden = true;
  work.append(editorHost, actions, outHost, results);
  box.append(work);
  const panel = new OutputPanel(outHost);
  outHost.hidden = true;

  const busy = async (fn) => {
    for (const b of [run, verify]) b.disabled = true;
    outHost.hidden = false;
    results.hidden = true;
    try {
      await fn();
    } finally {
      for (const b of [run, verify]) b.disabled = false;
    }
  };

  run.addEventListener("click", () => busy(() => runInto(panel, { files: { "main.hy": editor.value } })));

  reset.addEventListener("click", () => {
    editor.value = starter;
    store.set(DRAFT + id, undefined);
    panel.clear();
    outHost.hidden = true;
    results.hidden = true;
  });

  playground.addEventListener("click", async () => {
    window.open(`/playground#${await encodeShare({ files: { "main.hy": editor.value } })}`, "_blank", "noopener");
  });

  verify.addEventListener("click", () =>
    busy(async () => {
      if (!check && !expect) {
        markSolved();
        return;
      }
      if (expect) {
        const stream = expect.dataset.stream;
        let captured = "";
        const { result } = await runInto(panel, { files: { "main.hy": editor.value } });
        captured = stream === "stderr" ? [...panel.body.children].filter((s) => s.dataset.stream === "stderr").map((s) => s.textContent).join("") : panel.stdout;
        if (result.code === undefined) return;
        const want = expect.value.trim();
        const ok = expect.dataset.match === "prefix" ? captured.trim().startsWith(want) : captured.trim() === want;
        if (ok) {
          panel.status(`Solved: the ${stream === "stderr" ? "error output" : "output"} is what Henry expected.`, "ok");
          markSolved();
        } else {
          const how = expect.dataset.match === "prefix" ? "to start with" : "to be";
          panel.status(`Not yet: Henry expected ${stream === "stderr" ? "standard error" : "the output"} ${how}:\n${want}`, "fail");
        }
        return;
      }
      const files = { "src/solution.hy": editor.value, "tests/check.hy": check };
      const args = ["test", "--json", "--root", "/stdlib", "-A", "tests"];
      panel.clear();
      const { result, stdout } = await runInto(panel, { files, args, mode: "test", quiet: true });
      if (result.code === undefined) {
        panel.status(result.timedOut ? "Stopped: the check ran longer than the time limit. Is there an endless loop?" : "The check could not run.", "fail");
        return;
      }
      const file = testEvents(stdout)[0];
      if (!file) {
        panel.append("stderr", stdout);
        panel.status("The check could not run.", "fail");
        return;
      }
      if (file.diagnostics || (file.message && !file.cases?.length)) {
        panel.append("stderr", file.diagnostics ?? file.message);
        panel.status("Your code does not compile yet (or does not define what the challenge asks for).", "fail");
        return;
      }
      // Failed cases first; names come as written in the source literal.
      const cases = [...file.cases].sort((a, b) => Number(a.ok) - Number(b.ok));
      results.replaceChildren(
        ...cases.map((c) => {
          const li = document.createElement("li");
          li.dataset.ok = String(c.ok);
          li.textContent = c.name.replace(/\\(.)/g, "$1");
          if (!c.ok) {
            const why = document.createElement("span");
            why.className = "reason";
            why.textContent = [c.timed_out ? "timed out" : c.reason, c.stderr].filter(Boolean).join("\n");
            li.append(why);
          }
          return li;
        }),
      );
      results.hidden = false;
      outHost.hidden = true;
      if (file.ok) markSolved();
      results.prepend(
        Object.assign(document.createElement("li"), {
          className: "summary",
          textContent: file.ok ? "Solved! Every check passed." : `${file.failed} of ${file.cases.length} checks failed.`,
        }),
      );
    }),
  );
}

/** Wires up every challenge in `root` and shows the chapter's progress. */
export function enhanceChallenges(root) {
  const boxes = [...root.querySelectorAll(".challenge[data-challenge]")];
  const henry = root.querySelector(".henry-bubble");
  let progress;
  if (henry) {
    progress = document.createElement("p");
    progress.className = "henry-progress";
    henry.append(progress);
  }
  const update = () => {
    if (!progress) return;
    const done = boxes.filter((b) => solved()[b.dataset.challenge]).length;
    progress.innerHTML = done ? `<strong>${done} of ${boxes.length}</strong> solved in this browser.` : `${boxes.length} challenges below, each with an editor. Check tells you when it is solved.`;
  };
  for (const box of boxes) setup(box, update);
  update();
}
