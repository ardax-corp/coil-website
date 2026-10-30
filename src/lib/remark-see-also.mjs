// "See also" links from docs pages to the API reference, placed at the end of
// each section (## or ###) so they sit next to the examples that use them.
// A section links the reference pages it mentions: module and item paths in
// inline code (`io::fs`, `io::file::read_text`, `Vec`, `format!`) and the names
// its code blocks import with `use`. Imports nearly every example carries
// (println, format) count only when the section's prose mentions them, and
// each item is linked once per page, in the first section that uses it.
//
// Each link carries a hover card with the item's kind, path, signature and
// summary; styles live in src/styles/prose.css, placement in Docs.astro.

import { readFileSync, readdirSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { REFERENCE_KINDS } from "./reference-kinds.mjs";

const ROOT = new URL("../../", import.meta.url).pathname;
const REFERENCE_DIR = join(ROOT, "src/content/reference");
// coil-stdlib and package API pages: src/content/api/<package>/...
const API_DIR = join(ROOT, "src/content/api");
const DOCS_DIR = join(ROOT, "src/content/docs");


const TYPE_KINDS = new Set(["class", "enum", "trait", "primitive"]);
/** A `use`-only name imported by more than this share of docs pages is boilerplate. */
const COMMON_SHARE = 0.2;
const MAX_PER_SECTION = 12;

function* markdownFiles(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* markdownFiles(p);
    else if (e.name.endsWith(".md")) yield p;
  }
}

/** Frontmatter written by scripts/sync-reference.mjs: one `key: <JSON value>` per line. */
function frontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  const data = {};
  for (const line of m ? m[1].split("\n") : []) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (!kv) continue;
    try {
      data[kv[1]] = JSON.parse(kv[2]);
    } catch {
      data[kv[1]] = kv[2];
    }
  }
  return data;
}

function fullPath(d) {
  if (d.kind === "module") return d.module;
  return `${d.module}::${d.parent ? `${d.parent}::${d.name}` : d.name}`;
}

/** "io/fs/index" → "/docs/reference/io/fs"; "io/open" → "/docs/reference/io/open". */
const referenceHref = (id) => `/docs/reference/${id.replace(/(^|\/)index$/, "")}`.replace(/\/$/, "");
/** "stdlib/io/sync/println" → "/packages/stdlib/reference/io/sync/println" (see apiHref in nav.ts). */
const apiHref = (id) => {
  const [pkg, ...rest] = id.split("/");
  return `/packages/${pkg}/reference/${rest.join("/")}`.replace(/(^|\/)index$/, "").replace(/\/$/, "");
};

let index;

function buildIndex() {
  if (index) return index;
  const byPath = new Map();
  const byAlias = new Map();
  const auto = new Set();
  // The language first: a path it documents wins over a library's.
  for (const [dir, href] of [[REFERENCE_DIR, referenceHref], [API_DIR, apiHref]]) {
    for (const file of markdownFiles(dir)) {
      const d = frontmatter(readFileSync(file, "utf8"));
      if (!d.kind || d.kind === "keyword") continue;
      d.id = d.slug ?? relative(dir, file).split(sep).join("/").replace(/\.md$/, "");
      d.href = href(d.id);
      if (byPath.has(fullPath(d))) continue;
      byPath.set(fullPath(d), d);
      if (d.kind === "module" && d.auto) auto.add(d.module);
    }
  }
  const alias = (key, d) => {
    if (byPath.has(key)) return;
    const seen = byAlias.get(key);
    byAlias.set(key, seen === undefined || seen === d ? d : null);
  };
  for (const [path, d] of byPath) {
    // Every proper suffix of at least two segments: io::fs::read → fs::read.
    const segs = path.split("::");
    for (let i = 1; i < segs.length - 1; i++) alias(segs.slice(i).join("::"), d);
    // Types by bare name (`Vec`), members by type (`Vec::push`).
    if (d.parent) alias(`${d.parent}::${d.name}`, d);
    else if (TYPE_KINDS.has(d.kind)) alias(d.name, d);
    if (d.kind === "macro") alias(`${d.name}!`, d);
  }
  index = { byPath, byAlias, auto, useShare: new Map() };

  const docs = [...markdownFiles(DOCS_DIR)];
  const counts = new Map();
  for (const file of docs) {
    const body = readFileSync(file, "utf8");
    const paths = new Set();
    for (const m of body.matchAll(/^```[^\n]*\n([\s\S]*?)^```/gm)) for (const p of importsOf(m[1])) paths.add(p);
    for (const p of paths) counts.set(p, (counts.get(p) ?? 0) + 1);
  }
  for (const [p, n] of counts) index.useShare.set(p, n / Math.max(docs.length, 1));
  return index;
}

function resolve(raw) {
  const { byPath, byAlias } = buildIndex();
  const d = byPath.get(raw) ?? byAlias.get(raw);
  return d ? fullPath(d) : undefined;
}

/** Paths imported by the `use` lines of a code block. */
function importsOf(code) {
  const out = [];
  for (const m of code.matchAll(/^\s*(?:pub\s+)?use\s+([\w:]+?)(?:::\{([^}]*)\}|::(\w+))?\s*;/gm)) {
    const [, base, group, single] = m;
    const names = group ? group.split(",").map((n) => n.trim().split(/\s+as\s+/)[0]) : single ? [single] : [];
    for (const raw of [base, ...names.filter((n) => /^\w+$/.test(n)).map((n) => `${base}::${n}`)]) {
      const p = resolve(raw);
      if (p) out.push(p);
    }
  }
  return out;
}

/** Paths an inline code span names. */
function mentionsOf(span) {
  const code = span.trim();
  const raws = [];
  const use = code.match(/^use\s+([\w:]+?)(?:::\{([^}]*)\})?;?$/);
  if (use) {
    raws.push(use[1], ...(use[2] ?? "").split(",").map((n) => n.trim()).filter((n) => /^\w+$/.test(n)).map((n) => `${use[1]}::${n}`));
  } else {
    // Whole-span names: `Vec`, `Vec<T>`, `format!`, `format!(…)`.
    const whole = code.match(/^([A-Z]\w*)(?:<.*>)?$/) ?? code.match(/^(\w+!)(?:\(.*\))?$/);
    if (whole) raws.push(whole[1]);
    else for (const [p] of code.matchAll(/\b[A-Za-z_]\w*(?:::[A-Za-z_]\w*)+/g)) raws.push(p);
  }
  return raws.map(resolve).filter(Boolean);
}

function collect(node, mentioned, imported) {
  if (node.type === "inlineCode") mentioned.push(...mentionsOf(node.value));
  else if (node.type === "code") imported.push(...importsOf(node.value));
  for (const child of node.children ?? []) collect(child, mentioned, imported);
}

const el = (tagName, className, children, extra = {}) => ({
  type: "seeAlso",
  data: { hName: tagName, hProperties: { className: className ? [className] : undefined, ...extra } },
  children,
});
const text = (value) => ({ type: "text", value });

function block(paths) {
  const { byPath, auto } = buildIndex();
  const items = paths.map((p) => {
    const d = byPath.get(p);
    const label = d.kind !== "module" && auto.has(d.module) ? p.slice(d.module.length + 2) : p;
    const signatures = d.signatures ?? (d.signature ? [d.signature] : []);
    const card = [
      el("span", "see-kind", [text(`${REFERENCE_KINDS[d.kind] ?? d.kind} · `), { type: "inlineCode", value: p }]),
      ...signatures.map((s) => ({ type: "code", lang: "coil", value: s })),
      ...(d.description ? [el("p", null, [text(d.description)])] : []),
    ];
    return el("li", null, [
      el("a", null, [{ type: "inlineCode", value: label }], { href: d.href }),
      el("div", "see-pop", card, { role: "tooltip", dataPlainCode: "" }),
    ]);
  });
  return el("aside", "see-also", [el("span", "see-label", [text("See also")]), el("ul", null, items)], {
    ariaLabel: "See also",
  });
}

export function remarkSeeAlso() {
  return (tree, file) => {
    const path = file.path ?? file.history?.[0] ?? "";
    if (!path.startsWith(DOCS_DIR)) return;
    const { byPath, useShare } = buildIndex();

    // Sections: the intro, then each ## / ### heading up to the next one.
    const out = [];
    const linked = new Set(); // each page links an item once, at its first section
    let section = [];
    const flush = () => {
      const mentioned = [];
      const imported = [];
      for (const n of section) collect(n, mentioned, imported);
      const prose = new Set(mentioned);
      const paths = [...new Set([...mentioned, ...imported])]
        .filter((p) => prose.has(p) || (useShare.get(p) ?? 0) <= COMMON_SHARE)
        .filter((p) => byPath.has(p) && !linked.has(p));
      // Modules first, then items, each in order of appearance.
      const ordered = [
        ...paths.filter((p) => byPath.get(p).kind === "module"),
        ...paths.filter((p) => byPath.get(p).kind !== "module"),
      ].slice(0, MAX_PER_SECTION);
      ordered.forEach((p) => linked.add(p));
      out.push(...section);
      if (ordered.length) out.push(block(ordered));
      section = [];
    };
    for (const node of tree.children) {
      if (node.type === "heading" && node.depth <= 3) {
        flush();
        out.push(node);
      } else section.push(node);
    }
    flush();
    tree.children = out;
  };
}
