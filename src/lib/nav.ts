// Documentation structure. The markdown under src/content/docs is synced from
// the language repo, so ordering, grouping and short labels live here rather
// than in frontmatter. Docs not listed below still build and show up under
// "More" so nothing silently disappears from the sidebar.

import type { CollectionEntry } from "astro:content";
import { packages } from "./packages";

export type Track = "learn" | "reference";

export type NavLink = {
  /** Doc collection id, e.g. "manual/tutorial/01-basics". */
  id?: string;
  /** External URL (used instead of id). */
  href?: string;
  label: string;
  /** One-line summary shown on hub pages and pager cards. */
  hint?: string;
};

export type NavGroup = {
  key: string;
  title: string;
  track: Track;
  blurb: string;
  items: NavLink[];
};

export const REPO = "https://github.com/ardax-corp/coil-lang";
export const RELEASES = `${REPO}/releases`;
export const NIGHTLY = `${REPO}/actions/workflows/release-binaries.yml`;
export const STDLIB = "https://github.com/ardax-corp/coil-stdlib/blob/main/docs/README.md";
export const SHOWCASE = `${REPO}/blob/main/examples/projects/README.md`;
export const INTERNALS = `${REPO}/blob/main/docs/internals/README.md`;
export const SPOOL = "https://github.com/ardax-corp/spool";

export const groups: NavGroup[] = [
  {
    key: "start",
    title: "Start here",
    track: "learn",
    blurb: "What Coil is, how to install it, and your first program.",
    items: [
      { id: "index", label: "Overview", hint: "The language at a glance, CLI commands, repository layout." },
      { id: "manual/getting-started", label: "Getting started", hint: "Install the toolkit, run a first program, understand the cache." },
    ],
  },
  {
    key: "tutorial",
    title: "Tutorial",
    track: "learn",
    blurb: "Eleven chapters, from syntax basics to coroutines and OS threads.",
    items: [
      { id: "manual/tutorial/01-basics", label: "Basics", hint: "Literals, functions, `let`, control flow and output." },
      { id: "manual/tutorial/02-types-and-variables", label: "Types & variables", hint: "Primitives, inference, annotations, classes." },
      { id: "manual/tutorial/03-enums-and-match", label: "Enums & match", hint: "Sum types, scalar-backed cases, pattern matching." },
      { id: "manual/tutorial/04-records-and-fields", label: "Records & fields", hint: "Record variants, field access, nested patterns." },
      { id: "manual/tutorial/05-aggregates", label: "Aggregates", hint: "Tuples, `[T; N]`, `Vec<T>`, dicts and type aliases." },
      { id: "manual/tutorial/06-modules", label: "Modules", hint: "`use`, `mod` and the `coil.toml` manifest." },
      { id: "manual/tutorial/07-ffi", label: "Foreign functions", hint: "`extern` blocks and dynamic loading with libffi." },
      { id: "manual/tutorial/08-coroutines", label: "Coroutines", hint: "`async fn`, `yield`, `resume`, `yield from`." },
      { id: "manual/tutorial/09-error-handling", label: "Error handling", hint: "`Option`, `Result`, `raise`, `?`, `??`, `?.`." },
      { id: "manual/tutorial/10-io-streams", label: "IO streams", hint: "Bytes, streams, files, TCP and UDP." },
      { id: "manual/tutorial/11-threads", label: "OS threads", hint: "`spawn`, `join`, channels and mutexes." },
    ],
  },
  {
    key: "next",
    title: "Keep going",
    track: "learn",
    blurb: "Runnable programs and larger projects to read after the tutorial.",
    items: [
      { id: "manual/examples", label: "Examples catalog", hint: "Every runnable demo in the repository, with expected output." },
      { href: SHOWCASE, label: "Showcase projects", hint: "Multi-file apps with co-located tests." },
      { href: STDLIB, label: "coil-stdlib", hint: "Userland standard library: collections, text, IO adapters." },
    ],
  },
  {
    key: "language",
    title: "Language",
    track: "reference",
    blurb: "Grammar, type system and the rules the compiler enforces.",
    items: [
      { id: "references", label: "Reference index", hint: "Map of every reference page and virtual module." },
      { id: "references/syntax", label: "Syntax", hint: "Grammar overview: declarations, statements, expressions." },
      { id: "references/types", label: "Types", hint: "Inference, generics, traits, aliases, aggregates." },
      { id: "references/operators", label: "Operators", hint: "Precedence table and operand rules." },
      { id: "references/keywords", label: "Keywords", hint: "Every reserved word and where it is used." },
      { id: "references/modules", label: "Modules", hint: "`use` resolution and namespace rules." },
      { id: "references/project-config", label: "coil.toml", hint: "Project manifest: roots, entry, package metadata." },
      { id: "references/error-codes", label: "Error codes", hint: "Stable `E####` diagnostics." },
    ],
  },
  {
    key: "core",
    title: "Core & prelude",
    track: "reference",
    blurb: "Built-in types and auto-imported functions.",
    items: [
      { id: "references/option-result", label: "Option & Result", hint: "Built-in sum types." },
      { id: "references/arrays", label: "Arrays & Vec", hint: "Fixed `[T; N]` and growable `Vec<T>`." },
      { id: "references/iterator", label: "Iterator", hint: "The `for x in` protocol." },
      { id: "references/string", label: "string", hint: "UTF-8 and byte conversions." },
      { id: "references/format", label: "string::format", hint: "Checked format specifiers." },
      { id: "references/math", label: "Math", hint: "IEEE float math and linear algebra." },
      { id: "references/casts", label: "Casts", hint: "`expr as T` between primitives." },
      { id: "references/ord-char", label: "ord & char", hint: "Single-byte string ↔ `byte`." },
      { id: "references/done", label: "done", hint: "Has a coroutine finished?" },
      { id: "references/panic", label: "panic", hint: "Abort with a message." },
      { id: "references/print", label: "print (removed)", hint: "Migration note: use `io` + `string`." },
    ],
  },
  {
    key: "testing",
    title: "Testing",
    track: "reference",
    blurb: "The built-in test harness.",
    items: [
      { id: "references/test-harness", label: "test blocks", hint: "`test(\"…\") { … }` cases run by `coil test`." },
      { id: "references/assert", label: "assert", hint: "`assert(cond[, msg])` returns a `Result`." },
    ],
  },
  {
    key: "system",
    title: "System modules",
    track: "reference",
    blurb: "Virtual modules for IO, processes, memory and native code.",
    items: [
      { id: "references/io", label: "io", hint: "Non-blocking files, stdio, TCP, UDP." },
      { id: "references/io-fs", label: "io::fs", hint: "Paths, metadata, directories." },
      { id: "references/env", label: "env", hint: "Arguments, variables, `exec`." },
      { id: "references/gc", label: "gc", hint: "Roots, weak handles, collection." },
      { id: "references/ffi", label: "ffi", hint: "`dload`, `declare`, `invoke`, `extern`." },
      { id: "references/host-natives", label: "Host embedder API", hint: "Rust closures callable from bytecode." },
    ],
  },
  {
    key: "packages",
    title: "Userland packages",
    track: "reference",
    blurb: "Libraries that live outside the compiler.",
    items: [
      // Packages with a reference page link here; the rest link to their repository.
      ...packages.map((p) =>
        p.docs ? { id: p.docs.replace(/^\/docs\//, ""), label: p.name, hint: p.summary } : { href: p.repo, label: p.name, hint: p.summary },
      ),
      { id: "references/not-builtins", label: "What is not built in", hint: "Where the compiler stops and userland starts." },
    ],
  },
];

export function docHref(id: string): string {
  if (id === "index") return "/docs/overview";
  return `/docs/${id.replace(/\/index$/, "")}`;
}

export function linkHref(item: NavLink): string {
  return item.id ? docHref(item.id) : item.href!;
}

export function isExternal(item: NavLink): boolean {
  return !item.id;
}

/** Strip markdown (backticks, links) from a frontmatter title. */
export function plainTitle(title: string): string {
  return title
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/`/g, "")
    .trim();
}

/** Render inline `code` in short labels/hints as <code>. Input is trusted (this file). */
export function inlineCode(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/`([^`]+)`/g, "<code>$1</code>");
}

const warned = new Set<string>();

/**
 * Groups including a trailing "More" group for any doc that is not listed
 * above, so newly synced pages are still reachable.
 */
export function resolveGroups(docs: CollectionEntry<"docs">[]): NavGroup[] {
  const existing = new Set(docs.map((d) => d.id));
  const present = groups.map((g) => ({
    ...g,
    items: g.items.filter((i) => {
      if (!i.id || existing.has(i.id)) return true;
      if (!warned.has(i.id)) {
        warned.add(i.id);
        console.warn(`[nav] "${i.id}" is listed in src/lib/nav.ts but no such doc exists; skipping.`);
      }
      return false;
    }),
  }));
  const listed = new Set(groups.flatMap((g) => g.items.map((i) => i.id).filter(Boolean)));
  const extra = docs
    .filter((d) => !listed.has(d.id))
    .sort((a, b) => a.id.localeCompare(b.id))
    .map((d) => ({ id: d.id, label: plainTitle(d.data.title) }));
  if (extra.length === 0) return present;
  return [
    ...present,
    {
      key: "more",
      title: "More",
      track: extra.every((e) => e.id.startsWith("manual/")) ? "learn" : "reference",
      blurb: "Other pages.",
      items: extra,
    },
  ];
}

export type Located = {
  group: NavGroup;
  item: NavLink;
  /** Position within the track (learn or reference), internal pages only. */
  prev?: NavLink;
  next?: NavLink;
  /** 1-based chapter number when the page is a tutorial chapter. */
  chapter?: number;
  chapters?: number;
};

export function locate(all: NavGroup[], id: string): Located | undefined {
  const group = all.find((g) => g.items.some((i) => i.id === id));
  if (!group) return undefined;
  const item = group.items.find((i) => i.id === id)!;
  const sequence = all.filter((g) => g.track === group.track).flatMap((g) => g.items.filter((i) => i.id));
  const pos = sequence.findIndex((i) => i.id === id);
  const located: Located = {
    group,
    item,
    prev: sequence[pos - 1],
    next: sequence[pos + 1],
  };
  if (group.key === "tutorial") {
    located.chapter = group.items.indexOf(item) + 1;
    located.chapters = group.items.length;
  }
  return located;
}
