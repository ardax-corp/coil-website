// Documentation structure. The markdown under src/content/docs is synced from
// the language repo, so ordering, grouping and short labels live here rather
// than in frontmatter. Docs not listed below still build and show up under
// "More" so nothing silently disappears from the sidebar.

import type { CollectionEntry } from "astro:content";
import { packages } from "./packages";

export type Track = "learn" | "reference" | "packages";

export type NavLink = {
  /** Nested links, shown under this one while a page inside it is open. */
  children?: NavLink[];
  /** Doc collection id, e.g. "manual/tutorial/01-basics". */
  id?: string;
  /** Site path or external URL (used instead of id). */
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
export const STDLIB = "/packages/stdlib";
export const SHOWCASE = `${REPO}/blob/main/examples/projects/README.md`;
export const INTERNALS = `${REPO}/blob/main/docs/internals/README.md`;
export const SPOOL = "/packages/spool";

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
      { id: "manual/tutorial/08-coroutines", label: "Coroutines", hint: "`gen fn`, `yield`, `resume`, `yield from`." },
      { id: "manual/tutorial/09-error-handling", label: "Error handling", hint: "`Option`, `Result`, `raise`, `?`, `??`, `?.`." },
      { id: "manual/tutorial/10-io-streams", label: "IO streams", hint: "Bytes, streams, files, TCP and UDP." },
      { id: "manual/tutorial/11-threads", label: "OS threads", hint: "`spawn`, `join`, channels and mutexes." },
      { id: "manual/tutorial/12-tasks", label: "Tasks", hint: "`task::scope`, `spawn`, `join`: concurrent IO on one VM." },
      { id: "manual/tutorial/13-macros", label: "Macros", hint: "`name!(…)`, `#[attr(…)]` and `#[derive(…)]`: code that writes code." },
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
      { href: "/docs/reference", label: "Reference index", hint: "Every module, type and function, and the language pages." },
      { id: "language/syntax", label: "Syntax", hint: "Grammar overview: declarations, statements, expressions." },
      { id: "language/types", label: "Type system", hint: "Inference, generics, traits, aliases, aggregates." },
      { id: "language/operators", label: "Operators", hint: "Precedence table and operand rules." },
      { id: "language/arrays", label: "Arrays & Vec", hint: "Fixed `[T; N]` and growable `Vec<T>`." },
      { id: "language/casts", label: "Casts", hint: "`expr as T` between primitives." },
      { id: "language/modules", label: "Modules", hint: "`use`, `mod`, roots and how a path finds its file." },
      { id: "language/macros", label: "Macros", hint: "Derives, attribute macros, `name!(…)` macros, `quote`." },
      { id: "language/comptime", label: "Compile-time code", hint: "Computed `const`s, `comptime` and IO grants." },
      { id: "language/effects", label: "Effects", hint: "`pure fn`, `uses {…}` and inferred effects." },
      { id: "language/contracts", label: "Contracts", hint: "`requires`, `ensures`, invariants and `--contracts` levels." },
      { id: "language/permissions", label: "Permissions", hint: "`--allow-read`, `--allow-net` and the reachability check." },
      { id: "language/panic", label: "Panics", hint: "`panic` and what aborts a program." },
      { id: "language/done", label: "done", hint: "Has a coroutine finished?" },
      { id: "language/test-harness", label: "Tests", hint: "`test(\"…\") { … }` cases run by `coil test`." },
      { id: "language/project-config", label: "coil.toml", hint: "Project manifest: roots, entry, package metadata." },
      { id: "language/error-codes", label: "Error codes", hint: "Stable `E####` diagnostics." },
      { id: "language/host-natives", label: "Host embedder API", hint: "Rust closures callable from bytecode." },
      { id: "language/not-builtins", label: "What is not built in", hint: "Where the compiler stops and userland starts." },
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
  return !item.id && /^https?:/.test(item.href ?? "");
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

/** An item followed by its nested children, depth first. */
function flatten(items: NavLink[]): NavLink[] {
  return items.flatMap((i) => [i, ...flatten(i.children ?? [])]);
}

/** The listed link an href belongs to: itself, or its nearest listed parent path. */
function nearest(all: NavGroup[], href: string): string | undefined {
  const listed = new Set(all.flatMap((g) => flatten(g.items)).map(linkHref));
  for (let h = href; h.length > 1; h = h.replace(/\/[^/]*$/, "")) if (listed.has(h)) return h;
  return undefined;
}

/** Find the page at `href` (a site path) and its neighbours within its track. */
export function locate(all: NavGroup[], href: string): Located | undefined {
  const target = nearest(all, href);
  if (!target) return undefined;
  const at = (i: NavLink) => linkHref(i) === target;
  // A page can be linked from several tracks (coil-stdlib is also under
  // Learn → Keep going); it belongs to the track its URL lives in.
  const home: Track | undefined = href.startsWith("/packages/") ? "packages" : undefined;
  const matches = all.filter((g) => flatten(g.items).some(at));
  const group = matches.find((g) => !home || g.track === home) ?? matches[0];
  if (!group) return undefined;
  const item = flatten(group.items).find(at)!;
  const sequence = all.filter((g) => g.track === group.track).flatMap((g) => flatten(g.items).filter((i) => !isExternal(i)));
  const pos = sequence.findIndex(at);
  const exact = target === href;
  const located: Located = {
    group,
    item,
    prev: exact ? sequence[pos - 1] : undefined,
    next: exact ? sequence[pos + 1] : undefined,
  };
  if (group.key === "tutorial") {
    located.chapter = group.items.indexOf(item) + 1;
    located.chapters = group.items.length;
  }
  return located;
}

// -------------------------------------------------------------- reference

export const REFERENCE = "/docs/reference";

/** "io/fs/index" → "/docs/reference/io/fs"; "io/open" → "/docs/reference/io/open". */
export function referenceHref(id: string): string {
  return `${REFERENCE}/${id.replace(/(^|\/)index$/, "")}`.replace(/\/$/, "");
}

/** Sections of the API reference, by module path. */
export const REFERENCE_SECTIONS: { key: string; title: string; blurb: string; pick: (m: CollectionEntry<"reference">) => boolean }[] = [
  {
    key: "ref-core",
    title: "Prelude & primitives",
    blurb: "In scope in every file, no `use` needed.",
    pick: (m) => ["types", "keywords"].includes(m.data.module) || m.data.module === "prelude" || m.data.module.startsWith("prelude::"),
  },
  {
    key: "ref-builtin",
    title: "Compiler modules",
    blurb: "Shipped with the compiler; import what you use.",
    pick: (m) => m.data.origin !== "stdlib",
  },
  {
    key: "ref-stdlib",
    title: "Standard library",
    blurb: "coil-stdlib: collections, text, numbers, blocking IO.",
    pick: (m) => m.data.origin === "stdlib",
  },
];

const KIND_RANK: Record<string, number> = { primitive: 0, class: 1, enum: 1, trait: 2, type: 3, const: 4, macro: 5, fn: 6, keyword: 7 };

/** Module pages in display order (parents before children). */
export function referenceModules(entries: CollectionEntry<"reference">[]): CollectionEntry<"reference">[] {
  return entries.filter((e) => e.data.kind === "module").sort((a, b) => a.data.order - b.data.order);
}

/** Items directly in a module (not members of a type), in display order. */
export function moduleItems(entries: CollectionEntry<"reference">[], module: string): CollectionEntry<"reference">[] {
  return entries
    .filter((e) => e.data.module === module && e.data.kind !== "module" && !e.data.parent)
    .sort((a, b) => (KIND_RANK[a.data.kind] ?? 9) - (KIND_RANK[b.data.kind] ?? 9) || a.data.order - b.data.order);
}

/** Sidebar groups for the API reference (Reference track). */
export function referenceGroups(entries: CollectionEntry<"reference">[]): NavGroup[] {
  const mods = referenceModules(entries);
  const taken = new Set<string>();
  return REFERENCE_SECTIONS.map((sec) => {
    const picked = mods.filter((m) => !taken.has(m.id) && sec.pick(m));
    picked.forEach((m) => taken.add(m.id));
    return {
      key: sec.key,
      title: sec.title,
      track: "reference" as const,
      blurb: sec.blurb,
      items: picked.map((m) => ({
        href: referenceHref(m.id),
        label: m.data.title,
        hint: m.data.description,
        children: moduleItems(entries, m.data.module).map((e) => ({
          href: referenceHref(e.id),
          label: e.data.kind === "macro" ? `${e.data.name}!` : e.data.name,
          hint: e.data.description,
        })),
      })),
    };
  });
}

// --------------------------------------------------------------- packages

/** Display names for packages that are not in src/lib/packages.ts. */
const TOOLING: Record<string, { title: string; blurb: string }> = {
  spool: { title: "spool", blurb: "The package manager: commands, manifest and lockfile." },
  stdlib: { title: "coil-stdlib", blurb: "The userland standard library." },
  greet: { title: "greet (example)", blurb: "A minimal package consumed via spool." },
};

const PAGE_LABELS: Record<string, string> = {
  index: "Overview",
  guide: "Guide",
  consume: "Install & use",
};

/** "json/consume" → "/packages/json/consume"; "json" (its README) → "/packages/json". */
export function packageHref(id: string): string {
  return `/packages/${id.replace(/\/index$/, "")}`;
}

function splitId(id: string): [string, string] {
  const [pkg, page = "index"] = id.split("/");
  return [pkg, page];
}

/**
 * One sidebar group per package, in the Packages track. Pages are ordered:
 * overview, hand-written pages by `order`, then the order the package's guide
 * (or README) links to them, then alphabetically.
 */
export function packageGroups(entries: CollectionEntry<"ecosystem">[]): NavGroup[] {
  const byPkg = new Map<string, CollectionEntry<"ecosystem">[]>();
  for (const e of entries) {
    const [pkg] = splitId(e.id);
    byPkg.set(pkg, [...(byPkg.get(pkg) ?? []), e]);
  }
  const known = ["spool", "stdlib", ...packages.map((p) => p.name), "greet"];
  const order = [...known.filter((k) => byPkg.has(k)), ...[...byPkg.keys()].filter((k) => !known.includes(k)).sort()];

  return order.map((pkg) => {
    const pages = byPkg.get(pkg)!;
    const index = pages.find((p) => splitId(p.id)[1] === "index");
    const guide = pages.find((p) => splitId(p.id)[1] === "guide");
    const linkOrder = `${guide?.body ?? ""}\n${index?.body ?? ""}`;
    const pos = (e: CollectionEntry<"ecosystem">) => {
      const at = linkOrder.indexOf(`](${packageHref(e.id)})`);
      return at < 0 ? Number.MAX_SAFE_INTEGER : at;
    };
    const rank = (e: CollectionEntry<"ecosystem">) => {
      const page = splitId(e.id)[1];
      if (page === "index") return -2;
      if (page === "guide") return -1;
      return e.data.order ?? 1000;
    };
    pages.sort((a, b) => rank(a) - rank(b) || pos(a) - pos(b) || a.id.localeCompare(b.id));

    const meta = packages.find((p) => p.name === pkg);
    return {
      key: `pkg-${pkg}`,
      title: TOOLING[pkg]?.title ?? pkg,
      track: "packages" as const,
      blurb: TOOLING[pkg]?.blurb ?? meta?.summary ?? "",
      items: pages.map((e) => ({
        href: packageHref(e.id),
        label: PAGE_LABELS[splitId(e.id)[1]] ?? plainTitle(e.data.title),
        hint: e.data.description,
      })),
    };
  });
}

/** Every docs group: learn, reference and packages tracks. */
export function allGroups(
  docs: CollectionEntry<"docs">[],
  ecosystem: CollectionEntry<"ecosystem">[],
  reference: CollectionEntry<"reference">[] = [],
): NavGroup[] {
  return [...resolveGroups(docs), ...referenceGroups(reference), ...packageGroups(ecosystem)];
}
