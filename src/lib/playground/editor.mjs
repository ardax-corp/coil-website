// The code editor used by the playground, the docs' Edit buttons and the
// tutorial challenges: CodeMirror with a small Coil mode whose colours follow
// the site's syntax theme (src/lib/shiki-themes.ts, via CSS variables).

import { defaultKeymap, history, historyKeymap, indentWithTab } from "@codemirror/commands";
import { HighlightStyle, StreamLanguage, bracketMatching, indentOnInput, indentUnit, syntaxHighlighting } from "@codemirror/language";
import { linter, lintGutter } from "@codemirror/lint";
import { EditorState } from "@codemirror/state";
import { EditorView, drawSelection, highlightActiveLine, keymap, lineNumbers } from "@codemirror/view";
import { tags as t } from "@lezer/highlight";

const KEYWORDS = new Set(
  "if else while for in break continue return raise panic match yield from resume with defer default use mod as new typeof test pub readonly where pure uses".split(" "),
);
const STORAGE = new Set("fn let const static enum class trait type impl extern gen async attr struct".split(" "));
const ATOMS = new Set(["true", "false", "self"]);

const coil = StreamLanguage.define({
  name: "coil",
  startState: () => ({ comment: 0 }),
  token(stream, state) {
    if (state.comment) {
      while (!stream.eol()) {
        if (stream.match("*/")) {
          state.comment--;
          if (!state.comment) break;
        } else if (stream.match("/*")) state.comment++;
        else stream.next();
      }
      return "comment";
    }
    if (stream.eatSpace()) return null;
    if (stream.match("//")) {
      stream.skipToEnd();
      return "comment";
    }
    if (stream.match("/*")) {
      state.comment = 1;
      return "comment";
    }
    if (stream.match(/^"(?:[^"\\]|\\.)*"?/)) return "string";
    if (stream.match(/^'(?:[^'\\]|\\.)'/)) return "string";
    if (stream.match(/^(0x[0-9a-fA-F_]+|0b[01_]+|\d[\d_]*(\.\d+)?([eE][+-]?\d+)?)/)) return "number";
    if (stream.match(/^#\[[^\]]*\]/)) return "meta";
    const word = stream.match(/^[A-Za-z_][A-Za-z0-9_]*!?/);
    if (word) {
      const w = word[0];
      if (KEYWORDS.has(w)) return "keyword";
      // Contextual: `region {`, `shared class`, `mut place` (`for mut x`, `use (mut x)`).
      const rest = stream.string.slice(stream.pos);
      if (w === "region" && /^\s*\{/.test(rest)) return "keyword";
      if (w === "shared" && /^\s+(readonly\s+)?class\b/.test(rest)) return "keyword";
      if (w === "mut" && /^\s+(?!in\b)[A-Za-z_]/.test(rest)) return "keyword";
      if (STORAGE.has(w)) return "definitionKeyword";
      if (ATOMS.has(w)) return "atom";
      if (w.endsWith("!")) return "macroName";
      if (/^[A-Z]/.test(w)) return "typeName";
      if (/^\s*\(/.test(stream.string.slice(stream.pos))) return "function";
      return "variableName";
    }
    stream.next();
    return /[-+*/%=<>!&|^~?:.]/.test(stream.current()) ? "operator" : null;
  },
  languageData: { commentTokens: { line: "//" }, closeBrackets: { brackets: ["(", "[", "{", '"'] } },
  tokenTable: { function: t.function(t.variableName), definitionKeyword: t.definitionKeyword },
});

const highlight = HighlightStyle.define([
  { tag: [t.keyword, t.definitionKeyword], color: "var(--syn-keyword)" },
  { tag: t.comment, color: "var(--syn-comment)", fontStyle: "italic" },
  { tag: t.string, color: "var(--syn-string)" },
  { tag: [t.number, t.atom, t.bool], color: "var(--syn-number)" },
  { tag: t.typeName, color: "var(--syn-type)" },
  { tag: [t.function(t.variableName), t.macroName], color: "var(--syn-fn)" },
  { tag: t.meta, color: "var(--syn-attribute)" },
  { tag: t.operator, color: "var(--syn-operator)" },
]);

const theme = EditorView.theme({
  "&": { backgroundColor: "var(--code-bg)", color: "var(--syn-fg)", fontSize: "0.88rem", height: "100%" },
  "&.cm-focused": { outline: "none" },
  ".cm-scroller": { fontFamily: "var(--font-mono)", lineHeight: "1.6" },
  ".cm-content": { caretColor: "var(--accent)", padding: "0.75rem 0" },
  ".cm-gutters": { backgroundColor: "var(--code-bg)", border: "none", color: "var(--faint)" },
  ".cm-activeLine": { backgroundColor: "color-mix(in srgb, var(--accent) 6%, transparent)" },
  ".cm-activeLineGutter": { backgroundColor: "transparent", color: "var(--muted)" },
  "&.cm-focused .cm-selectionBackground, .cm-selectionBackground, ::selection": {
    backgroundColor: "color-mix(in srgb, var(--accent) 22%, transparent) !important",
  },
  ".cm-matchingBracket": { backgroundColor: "color-mix(in srgb, var(--patina) 22%, transparent)", outline: "none" },
  ".cm-tooltip": { backgroundColor: "var(--bg-elev)", border: "1px solid var(--border-strong)", color: "var(--fg)" },
  ".cm-diagnostic": { fontFamily: "var(--font-mono)", fontSize: "0.8rem", padding: "0.3rem 0.6rem" },
  ".cm-diagnostic-error": { borderLeftColor: "var(--danger)" },
  ".cm-diagnostic-warning": { borderLeftColor: "var(--warning)" },
  ".cm-diagnosticSource": { color: "var(--faint)" },
  ".cm-lintRange-error": { backgroundImage: "none", textDecoration: "underline wavy var(--danger)", textUnderlineOffset: "3px" },
  ".cm-lintRange-warning": { backgroundImage: "none", textDecoration: "underline wavy var(--warning)", textUnderlineOffset: "3px" },
  ".cm-lint-marker": { width: "0.8em", height: "0.8em" },
});

const SEVERITY = { 1: "error", 2: "warning", 3: "info", 4: "hint" };

/** LSP diagnostics (0-based line/character) → CodeMirror ones. */
function toCodeMirror(doc, list) {
  const pos = ({ line, character }) => {
    if (line >= doc.lines) return doc.length;
    const l = doc.line(line + 1);
    return Math.min(l.from + character, l.to);
  };
  return list.map((d) => {
    const from = pos(d.range.start);
    let to = pos(d.range.end);
    if (to <= from) to = Math.min(from + 1, doc.length);
    const help = d.data?.help ? `\n${d.data.help}` : "";
    return { from, to, severity: SEVERITY[d.severity] ?? "error", source: d.code, message: `${d.message}${help}` };
  });
}

/**
 * Creates an editor in `parent`. onRun is bound to Ctrl/Cmd+Enter and
 * onChange gets the new text after every edit. `diagnostics`, when given,
 * is called a moment after typing stops and resolves to the LSP diagnostics
 * of the text being edited (or null to leave the current ones).
 */
export function createEditor(parent, { doc = "", onRun, onChange, diagnostics } = {}) {
  const runKeys = onRun ? [{ key: "Mod-Enter", run: () => (onRun(), true) }] : [];
  const lint = diagnostics
    ? [
        lintGutter(),
        linter(
          async (view) => {
            const doc = view.state.doc;
            const list = await diagnostics();
            // A null result belongs to text that has changed since: CodeMirror
            // drops what a lint of an older document returns anyway.
            return list ? toCodeMirror(doc, list) : [];
          },
          { delay: 600 },
        ),
      ]
    : [];
  const view = new EditorView({
    parent,
    state: EditorState.create({
      doc,
      extensions: [
        lineNumbers(),
        history(),
        drawSelection(),
        indentOnInput(),
        bracketMatching(),
        highlightActiveLine(),
        indentUnit.of("    "),
        EditorState.tabSize.of(4),
        keymap.of([...runKeys, indentWithTab, ...defaultKeymap, ...historyKeymap]),
        coil,
        syntaxHighlighting(highlight),
        theme,
        lint,
        EditorView.updateListener.of((u) => {
          if (u.docChanged) onChange?.(u.state.doc.toString());
        }),
      ],
    }),
  });
  return {
    view,
    get value() {
      return view.state.doc.toString();
    },
    set value(text) {
      view.dispatch({ changes: { from: 0, to: view.state.doc.length, insert: text } });
    },
    focus: () => view.focus(),
  };
}
