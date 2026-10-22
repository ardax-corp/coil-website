// "See also" links from a docs page to the API reference. Found in the page's
// markdown: module and item paths in inline code (`io::fs`, `io::file::read_text`,
// `Vec`, `format!`) and the names imported by `use` lines in code blocks.
// Imports nearly every example carries (println, format) only count when the
// prose mentions them too, so they don't crowd every page.

import type { CollectionEntry } from "astro:content";
import { referenceHref } from "./nav";

type Ref = CollectionEntry<"reference">;

export type SeeAlso = {
  href: string;
  /** Full path, e.g. "io::fs" or "io::file::read_text". */
  path: string;
  /** What the link shows: the path, without the module for auto-imported items (`Vec`, `Eq`). */
  label: string;
  description: string;
  kind: string;
  /** Every signature (overloaded macros have several); empty for modules. */
  signatures: string[];
};

const TYPE_KINDS = new Set(["class", "enum", "trait", "primitive"]);
/** A `use`-only name found in more than this share of docs pages is boilerplate. */
const COMMON_SHARE = 0.2;
const MAX_ITEMS = 24;

function fullPath(e: Ref): string {
  if (e.data.kind === "module") return e.data.module;
  const name = e.data.parent ? `${e.data.parent}::${e.data.name}` : e.data.name;
  return `${e.data.module}::${name}`;
}

type Index = {
  byPath: Map<string, Ref>;
  /** Unambiguous shorter spellings: "fs::read", "Vec", "Vec::push", "format!". */
  byAlias: Map<string, Ref | null>;
  /** Share of docs pages whose `use` lines import each path. */
  useShare: Map<string, number>;
};

let cached: { entries: Ref[]; docs: CollectionEntry<"docs">[]; index: Index } | undefined;

function buildIndex(entries: Ref[], docs: CollectionEntry<"docs">[]): Index {
  if (cached?.entries === entries && cached.docs === docs) return cached.index;
  const byPath = new Map<string, Ref>();
  const byAlias = new Map<string, Ref | null>();
  const alias = (key: string, e: Ref) => {
    if (byPath.has(key)) return;
    const seen = byAlias.get(key);
    byAlias.set(key, seen === undefined || seen === e ? e : null);
  };
  for (const e of entries) {
    if (e.data.kind === "keyword") continue;
    byPath.set(fullPath(e), e);
  }
  for (const [path, e] of byPath) {
    // Every proper suffix of at least two segments: io::fs::read → fs::read.
    const segs = path.split("::");
    for (let i = 1; i < segs.length - 1; i++) alias(segs.slice(i).join("::"), e);
    // Types by bare name (`Vec`), members by type (`Vec::push`).
    if (e.data.parent) alias(`${e.data.parent}::${e.data.name}`, e);
    else if (TYPE_KINDS.has(e.data.kind)) alias(e.data.name, e);
    if (e.data.kind === "macro") alias(`${e.data.name}!`, e);
  }
  const index: Index = { byPath, byAlias, useShare: new Map() };
  const counts = new Map<string, number>();
  for (const d of docs) {
    for (const p of new Set(scan(d.body ?? "", index).imported)) counts.set(p, (counts.get(p) ?? 0) + 1);
  }
  for (const [p, n] of counts) index.useShare.set(p, n / Math.max(docs.length, 1));
  cached = { entries, docs, index };
  return index;
}

function resolve(index: Index, path: string): Ref | undefined {
  return index.byPath.get(path) ?? index.byAlias.get(path) ?? undefined;
}

/** Paths a page mentions in prose and paths its code imports, in order of appearance. */
function scan(body: string, index: Index): { mentioned: string[]; imported: string[] } {
  const mentioned: string[] = [];
  const imported: string[] = [];
  const add = (list: string[], raw: string) => {
    const e = resolve(index, raw);
    if (e) list.push(fullPath(e));
  };

  // Split into fenced code and prose.
  const parts = body.split(/^(```|~~~)[^\n]*$/m);
  let inFence = false;
  for (const part of parts) {
    if (part === "```" || part === "~~~") {
      inFence = !inFence;
      continue;
    }
    if (inFence) {
      for (const m of part.matchAll(/^\s*(?:pub\s+)?use\s+([\w:]+?)(?:::\{([^}]*)\}|::(\w+))?\s*;/gm)) {
        const [, base, group, single] = m;
        const names = group ? group.split(",").map((n) => n.trim().split(/\s+as\s+/)[0]) : single ? [single] : [];
        add(imported, base);
        for (const n of names) if (/^\w+$/.test(n)) add(imported, `${base}::${n}`);
      }
      continue;
    }
    for (const [, span] of part.matchAll(/`([^`\n]+)`/g)) {
      const code = span.trim();
      const use = code.match(/^use\s+([\w:]+?)(?:::\{([^}]*)\})?;?$/);
      if (use) {
        add(mentioned, use[1]);
        for (const n of (use[2] ?? "").split(",")) if (/^\w+$/.test(n.trim())) add(mentioned, `${use[1]}::${n.trim()}`);
        continue;
      }
      // Whole-span names: `Vec`, `Vec<T>`, `format!`, `format!(…)`.
      const whole = code.match(/^([A-Z]\w*)(?:<.*>)?$/) ?? code.match(/^(\w+!)(?:\(.*\))?$/);
      if (whole) {
        add(mentioned, whole[1]);
        continue;
      }
      for (const [p] of code.matchAll(/\b[A-Za-z_]\w*(?:::[A-Za-z_]\w*)+/g)) add(mentioned, p);
    }
  }
  return { mentioned, imported };
}

/** Reference pages a docs page points at: modules first, then items, each in order of appearance. */
export function seeAlso(doc: CollectionEntry<"docs">, docs: CollectionEntry<"docs">[], entries: Ref[]): SeeAlso[] {
  const index = buildIndex(entries, docs);
  const { mentioned, imported } = scan(doc.body ?? "", index);
  const prose = new Set(mentioned);
  const paths = [...new Set([...mentioned, ...imported])].filter(
    (p) => prose.has(p) || (index.useShare.get(p) ?? 0) <= COMMON_SHARE,
  );
  const auto = new Set(entries.filter((e) => e.data.kind === "module" && e.data.auto).map((e) => e.data.module));
  const links = paths.map((p) => {
    const e = index.byPath.get(p)!;
    return {
      href: referenceHref(e.id),
      path: p,
      label: e.data.kind !== "module" && auto.has(e.data.module) ? p.slice(e.data.module.length + 2) : p,
      description: e.data.description,
      kind: e.data.kind,
      signatures: e.data.signatures ?? (e.data.signature ? [e.data.signature] : []),
    };
  });
  const modules = links.filter((l) => l.kind === "module");
  const items = links.filter((l) => l.kind !== "module").slice(0, MAX_ITEMS);
  return [...modules, ...items];
}
