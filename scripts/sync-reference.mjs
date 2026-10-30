#!/usr/bin/env node
// Generate the API reference from the `///` docs in the Coil sources. One page
// per module, type, function, method, macro, primitive type and keyword.
//
// Three kinds of library, each in its own place on the site:
//   - the language: the compiler's builtin doc stubs and embedded modules
//     (coil-lang) -> src/content/reference/, served under /docs/reference;
//   - the standard library (coil-stdlib) -> src/content/api/stdlib/, served
//     under /packages/stdlib/reference;
//   - each package in PACKAGES (coil-json, ...) -> src/content/api/<package>/,
//     served under /packages/<package>/reference.
// A package with no `///` docs gets no pages; its synced guide stays its docs.
//
// Run with `npm run sync:reference`, review the diff and commit it: builds use
// the committed pages and never fetch. By default the repositories are cloned
// at their default branch; point at local checkouts instead with
//   node scripts/sync-reference.mjs --lang ../coil-lang --stdlib ../coil-stdlib --packages ..
// (`--packages DIR` reads coil-json and friends from DIR/coil-json, ...).
//
// Hand-written module introductions live in scripts/reference/intros/<module>.md
// for the language and scripts/reference/packages/<package>/<module>.md for
// the stdlib and packages (module path with `::` as `/`, e.g. `io/fs.md`).

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, relative } from "node:path";
import { parseItems, splitDocs } from "./reference/parse.mjs";

const ORG = "ardax-corp";
const ROOT = new URL("..", import.meta.url).pathname;
const REFERENCE_OUT = join(ROOT, "src/content/reference");
const API_OUT = join(ROOT, "src/content/api");

/**
 * Packages with an API reference: site name -> repository. Public repositories
 * only (the site is public). Keep in sync with src/lib/packages.ts.
 *
 * Not listed yet: crypto, regex, tls and time. Their public functions have no
 * `///` docs (crypto and regex document internal helpers instead), so a
 * generated reference would show the wrong surface; their synced API pages
 * stay their docs. Add them here once their sources document the public API.
 */
const PACKAGES = {
  json: "coil-json",
  toml: "coil-toml",
  msgpack: "coil-msgpack",
  http: "coil-http",
  deflate: "coil-deflate",
  cli: "coil-cli",
};

// ------------------------------------------------------------------ sources

function arg(name) {
  const i = process.argv.indexOf(`--${name}`);
  return i > 0 ? process.argv[i + 1] : undefined;
}

const git = (args, cwd) => execFileSync("git", args, { cwd, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();

let scratch;
function checkout(repo, local) {
  if (local) return { dir: local, commit: git(["rev-parse", "HEAD"], local) };
  scratch ??= mkdtempSync(join(tmpdir(), "coil-reference-"));
  const dir = join(scratch, repo);
  git(["clone", "--depth=1", `https://github.com/${ORG}/${repo}.git`, dir]);
  return { dir, commit: git(["rev-parse", "HEAD"], dir) };
}

const blob = (repo, commit, file, line) =>
  `https://github.com/${ORG}/${repo}/blob/${commit}/${file}${line ? `#L${line}` : ""}`;

/**
 * A library: its modules, where its pages go and which other libraries its
 * docs may link to (`deps`, tried after its own names).
 */
function library(key, props) {
  return { key, modules: new Map(), index: new Map(), ...props };
}

const lang = library("lang", {
  ...checkout("coil-lang", arg("lang")),
  repo: "coil-lang",
  out: REFERENCE_OUT,
  base: "/docs/reference",
  intros: join(ROOT, "scripts/reference/intros"),
  idPrefix: "",
  deps: ["stdlib"],
});
const stdlib = library("stdlib", {
  ...checkout("coil-stdlib", arg("stdlib")),
  repo: "coil-stdlib",
  out: join(API_OUT, "stdlib"),
  base: "/packages/stdlib/reference",
  intros: join(ROOT, "scripts/reference/packages/stdlib"),
  idPrefix: "stdlib/",
  deps: ["lang"],
});
const libs = [lang, stdlib];
const pkgDir = arg("packages");
for (const [key, repo] of Object.entries(PACKAGES)) {
  libs.push(
    library(key, {
      ...checkout(repo, pkgDir && join(pkgDir, repo)),
      repo,
      out: join(API_OUT, key),
      base: `/packages/${key}/reference`,
      intros: join(ROOT, "scripts/reference/packages", key),
      idPrefix: `${key}/`,
      deps: ["stdlib", "lang"],
    }),
  );
}
const libByKey = new Map(libs.map((l) => [l.key, l]));

/**
 * Module sources. `stub`: every item is documented API (doc stubs); otherwise
 * only items with `///` docs (and the public members of documented types) are.
 */
function addModule(lib, path, props) {
  if (!lib.modules.has(path)) lib.modules.set(path, { path, lib, items: [], files: [], ...props });
  return lib.modules.get(path);
}

// Compiler virtual modules: compiler/src/builtin_docs.rs lists them.
const docsRs = readFileSync(join(lang.dir, "compiler/src/builtin_docs.rs"), "utf8");
// Natives that the `task` and `process` modules wrap; user code never calls them.
const INTERNAL = new Set(["prelude::task", "prelude::process"]);
for (const [, path, file] of docsRs.matchAll(/\("([a-z:_]+)",\s*include_str!\("([^"]+)"\)\)/g)) {
  if (INTERNAL.has(path)) continue;
  const auto = path === "prelude" || path.startsWith("prelude::");
  addModule(lang, path, { origin: "builtin", auto }).files.push({ file: `compiler/src/${file}`, stub: true });
}

// Modules written in Coil and embedded in the compiler (compiler/src/macros/mod.rs).
const macrosRs = readFileSync(join(lang.dir, "compiler/src/macros/mod.rs"), "utf8");
const embeddedPaths = Object.fromEntries(
  [...macrosRs.matchAll(/pub const (\w+)_MODULE: &str = "([a-z_]+)";/g)].map((m) => [m[1], m[2]]),
);
for (const [, key, file] of macrosRs.matchAll(/pub const (\w+)_SOURCE: &str = include_str!\("([^"]+)"\);/g)) {
  const path = embeddedPaths[key];
  if (!path || path === "derive") continue; // derives are documented under Macros
  // `core` (Option / Result methods) is part of the prelude.
  const target = path === "core" ? "prelude" : path;
  addModule(lang, target, { origin: "embedded", auto: target === "prelude" }).files.push({
    file: join("compiler/src/macros", file).replace(/^compiler\/src\/macros\/\.\.\//, "compiler/src/"),
    stub: false,
  });
}

// coil-stdlib and packages: src/a/b.hy is module a::b.
function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : e.name.endsWith(".hy") ? [join(dir, e.name)] : [],
  );
}
for (const lib of libs.slice(1)) {
  const src = join(lib.dir, "src");
  if (!existsSync(src)) continue;
  for (const f of walk(src).sort()) {
    const rel = relative(src, f);
    const path = rel.replace(/\.hy$/, "").split("/").join("::");
    addModule(lib, path, { origin: lib === stdlib ? "stdlib" : "package", auto: false }).files.push({ file: `src/${rel}`, stub: false });
  }
}

// Intermediate modules with no file of their own (`io::net`).
for (const lib of libs) {
  for (const mod of [...lib.modules.values()]) {
    const segs = mod.path.split("::");
    for (let k = 1; k < segs.length; k++) addModule(lib, segs.slice(0, k).join("::"), { origin: mod.origin, auto: false });
  }
}

// ------------------------------------------------------------------- model

const hidden = (name) => name.startsWith("__");

/** Merge impl blocks into their types; drop undocumented helpers. */
function collect(mod) {
  const types = new Map();
  const loose = [];
  const impls = [];
  for (const f of mod.files) {
    const { lib } = mod;
    const src = readFileSync(join(lib.dir, f.file), "utf8");
    for (const item of parseItems(src)) {
      item.source = blob(lib.repo, lib.commit, f.file, item.line);
      item.stub = f.stub;
      for (const m of item.members ?? []) {
        m.source = blob(lib.repo, lib.commit, f.file, m.line);
        m.stub = f.stub;
      }
      if (item.kind === "impl") impls.push(item);
      else if (["class", "enum", "trait"].includes(item.kind) && types.has(item.name)) {
        // The same type in a stub and an embedded module (Option, Result):
        // keep the richer docs, merge members.
        const prev = types.get(item.name);
        if (!prev.docs || (item.docs && item.docs.length > prev.docs.length && !prev.stub)) prev.docs = item.docs;
        prev.members = [...(prev.members ?? []), ...(item.members ?? []).filter((m) => !prev.members?.some((p) => p.kind === m.kind && p.name === m.name))];
      } else if (["class", "enum", "trait"].includes(item.kind)) types.set(item.name, item);
      else loose.push(item);
    }
  }
  for (const impl of impls) {
    const ty = types.get(impl.name);
    if (!ty) {
      pendingImpls.push({ mod, impl });
      continue;
    }
    attachImpl(ty, impl);
  }
  // Module constants cannot carry `///`; their `//` comment is their doc.
  // Packages document with `///` only: their `//` comments are often notes.
  if (mod.origin !== "package") for (const it of loose) if (it.kind === "const" && !it.docs && it.comment) it.docs = it.comment;
  // A type is API, even without `///` docs of its own, when its public
  // methods have docs (coil-http's `Client`).
  const documentedMembers = (it) => (it.members ?? []).some((m) => m.pub && m.docs && !hidden(m.name));
  const keep = (it) => !hidden(it.name) && (it.stub || it.docs || documentedMembers(it));
  const items = [...types.values(), ...loose].filter(keep);
  // A type without `///` docs of its own is still API when documented API in
  // this module names it (coil-regex's `compile` returns a `Regex`). Internal
  // helper types that nothing documented mentions stay out.
  const signatures = (it) => [it.signature ?? "", ...(it.members ?? []).filter((m) => m.pub || m.kind === "variant").map((m) => m.signature ?? "")];
  for (let grew = true; grew; ) {
    grew = false;
    const text = items.flatMap(signatures).join("\n");
    for (const ty of types.values()) {
      if (items.includes(ty) || hidden(ty.name) || !new RegExp(`\\b${ty.name}\\b`).test(text)) continue;
      items.push(ty);
      grew = true;
    }
  }
  for (const it of items) {
    it.module = mod.path;
    it.lib = mod.lib;
  }
  return items;
}

function attachImpl(ty, impl) {
  if (impl.trait) {
    ty.traitImpls ??= [];
    ty.traitImpls.push({ trait: impl.trait, target: impl.target, source: impl.source });
    return;
  }
  ty.members ??= [];
  for (const m of impl.members ?? []) {
    if (ty.members.some((p) => p.name === m.name && p.kind === m.kind)) continue;
    ty.members.push(m);
  }
}

const pendingImpls = [];
const allModules = () => libs.flatMap((l) => [...l.modules.values()]);
for (const mod of allModules()) mod.items = collect(mod);
// An impl for a type in another module of the same library.
for (const { mod: from, impl } of pendingImpls) {
  for (const mod of from.lib.modules.values()) {
    const ty = mod.items.find((i) => i.name === impl.name && ["class", "enum", "trait"].includes(i.kind));
    if (ty) {
      attachImpl(ty, impl);
      break;
    }
  }
}

// Members shown on a type page: public methods (documented or not, once the
// type is), variants, public fields, trait methods.
function visibleMembers(ty) {
  return (ty.members ?? []).filter((m) => {
    if (hidden(m.name)) return false;
    if (m.kind === "variant" || m.kind === "associated type") return true;
    if (m.kind === "field") return m.pub;
    if (ty.kind === "trait") return true;
    return m.pub || m.stub;
  });
}

// Primitive types and keywords.
const typesSrc = readFileSync(join(lang.dir, "compiler/src/builtin_docs/types.hy"), "utf8");
const primitives = parseItems(typesSrc).map((it) => ({
  ...it,
  kind: "primitive",
  module: "types",
  lib: lang,
  stub: true,
  source: blob("coil-lang", lang.commit, "compiler/src/builtin_docs/types.hy", it.line),
}));
addModule(lang, "types", { origin: "builtin", auto: true, items: primitives, files: [] });

const kwFile = "compiler/src/builtin_docs/keywords.md";
const kwSrc = readFileSync(join(lang.dir, kwFile), "utf8");
const keywords = [];
{
  const lines = kwSrc.split("\n");
  let cur = null;
  lines.forEach((line, n) => {
    const m = line.match(/^## (.+?)\s*$/);
    if (m) {
      cur = { kind: "keyword", name: m[1], line: n + 1, docs: [], module: "keywords", lib: lang };
      keywords.push(cur);
    } else if (cur) cur.docs.push(line);
  });
  for (const k of keywords) {
    k.docs = k.docs.join("\n").trim();
    k.source = blob("coil-lang", lang.commit, kwFile, k.line);
  }
}
addModule(lang, "keywords", { origin: "builtin", auto: true, items: keywords, files: [] });

// ------------------------------------------------------------------- pages

const modSlug = (path) => path.split("::").join("/");
const slugName = (name) => name.replace(/[^A-Za-z0-9_]/g, (c) => `_${c.charCodeAt(0).toString(16)}`);
// Items whose names differ only in case (`Channel` and `channel`) would get
// paths that clash on case-insensitive file systems, so the one that is not
// a type gets its kind as a prefix: `task/fn.channel`.
const TYPE_KINDS = new Set(["class", "enum", "trait", "type", "primitive"]);
const caseClash = new Map(); // `${library}|${module}::${name}` -> prefix
for (const mod of allModules()) {
  const types = new Set(mod.items.filter((it) => TYPE_KINDS.has(it.kind)).map((it) => it.name.toLowerCase()));
  for (const it of mod.items) {
    if (!TYPE_KINDS.has(it.kind) && types.has(it.name.toLowerCase())) caseClash.set(`${mod.lib.key}|${mod.path}::${it.name}`, it.kind);
  }
}
const itemSlug = (lib, mod, name) => {
  const kind = caseClash.get(`${lib.key}|${mod}::${name}`);
  return `${modSlug(mod)}/${kind ? `${kind}.` : ""}${slugName(name)}`;
};
const moduleHref = (mod) => `${mod.lib.base}/${modSlug(mod.path)}`;
const itemHref = (item) => `${item.lib.base}/${itemSlug(item.lib, item.module, item.name)}`;
const memberHref = (ty, m) => `${itemHref(ty)}/${slugName(m.name)}`;

const displayName = (it) => (it.kind === "macro" ? `${it.name}!` : it.name);

// Name index for auto-linking `code` spans in docs, one per library.
const put = (lib, key, href) => {
  if (!lib.index.has(key)) lib.index.set(key, href);
};
// Primitive type names win over same-named modules (`string`).
for (const it of primitives) put(lang, it.name, `${lang.base}/types/${it.name}`);
for (const mod of allModules()) {
  if (mod.path === "keywords") continue;
  const put = (key, href) => {
    if (!mod.lib.index.has(key)) mod.lib.index.set(key, href);
  };
  put(mod.path, moduleHref(mod));
  for (const it of mod.items) {
    const href = itemHref(it);
    put(`${mod.path}::${it.name}`, href);
    if (it.kind === "macro") put(`${mod.path}::${it.name}!`, href);
    if (mod.auto) {
      put(it.name, href);
      if (it.kind === "macro") put(`${it.name}!`, href);
    }
    for (const m of visibleMembers(it)) {
      if (m.kind === "field" || m.kind === "associated type") continue;
      const mh = m.kind === "variant" ? `${href}#variant-${m.name.toLowerCase()}` : memberHref(it, m);
      for (const sep of ["::", "."]) {
        put(`${mod.path}::${it.name}${sep}${m.name}`, mh);
        if (mod.auto) put(`${it.name}${sep}${m.name}`, mh);
      }
    }
  }
}

/**
 * Resolve inline code to a reference URL, trying the current module first.
 * Each candidate path is looked up in the current library, then in the
 * libraries it depends on (`ctx.lib.deps`).
 */
function resolve(code, ctx) {
  const c = code.replace(/\(\)$/, "").replace(/<[^<>]*>/g, "");
  if (!/^[A-Za-z_][\w:.]*!?$/.test(c)) return null;
  const libs = [ctx.lib, ...ctx.lib.deps.map((k) => libByKey.get(k))];
  const tries = [];
  if (ctx.type) tries.push(`${ctx.module}::${ctx.type}::${c}`, `${ctx.module}::${ctx.type}.${c}`);
  tries.push(`${ctx.module}::${c}`, c);
  // `io::open` written relative to a parent module, `fs::read_dir` from io.
  for (const lib of libs) {
    for (const mod of lib.modules.values()) if (mod.path.endsWith(`::${c.split("::")[0]}`)) tries.push(`${mod.path.replace(/::[^:]+$/, "")}::${c}`);
  }
  for (const t of tries) {
    for (const lib of libs) {
      const href = lib.index.get(t);
      // The page itself (`io` on the io page) is not looked up elsewhere.
      if (href === ctx.self) break;
      if (href) return href;
    }
  }
  return null;
}

/** Rewrite doc markdown: example fences, hidden lines, headings, links. */
/** `ctx` for rendering the docs of `it`, which leaves its parameter names unlinked. */
const withParams = (ctx, it) => ({ ...ctx, params: new Set((it.params ?? []).map((p) => p.name)) });

function renderDocs(md, ctx, mentions) {
  const out = [];
  let fence = null;
  for (const line of md.split("\n")) {
    // Info strings separate attributes with commas or spaces: ```coil,no_run / ```coil no_run.
    const f = line.match(/^(\s*)```\s*([\w, ]*?)\s*$/);
    if (f) {
      if (fence === null) {
        const tag = f[2].split(/[,\s]+/)[0];
        fence = tag;
        const lang = ["", "coil", "ignore", "no_run", "should_panic", "compile_fail"].includes(tag) ? "coil" : tag;
        out.push(`${f[1]}\`\`\`${lang}`);
      } else {
        fence = null;
        out.push(line);
      }
      continue;
    }
    if (fence !== null) {
      const isCoil = ["", "coil", "ignore", "no_run", "should_panic", "compile_fail"].includes(fence);
      // Lines hidden on hover (`# use tests::assert;`) are shown here, so
      // every example can be copied and run as is.
      out.push(isCoil ? line.replace(/^(\s*)# ?/, (m, ws) => (/^\s*#(\s|$)/.test(line) ? ws : m)) : line);
      continue;
    }
    out.push(
      line.replace(/(\[[^\]]*\]\([^)]*\))|`([^`]+)`/g, (whole, link, code) => {
        if (link) return link;
        // A parameter name (`path`, `text`) is not the module of that name.
        if (ctx.params?.has(code)) return whole;
        const href = resolve(code, ctx);
        if (!href) return whole;
        mentions?.add(href);
        return `[\`${code}\`](${href})`;
      }),
    );
  }
  return out.join("\n");
}

const esc = (s) => String(s).replace(/\|/g, "\\|");
const yaml = (s) => JSON.stringify(s ?? "");
const plain = (md) =>
  md
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/`/g, "")
    .replace(/\s+/g, " ")
    .trim();
const firstSentence = (s) => {
  // A full stop inside `code` does not end the sentence.
  const m = s.match(/^((?:`[^`]*`|[^`])+?[.!?])(\s|$)/);
  return m ? m[1] : s;
};

function importLine(mod, name) {
  if (mod.auto) return null;
  return `use ${mod.path}::{${name}};`;
}

const KIND_LABEL = {
  fn: "Function",
  method: "Method",
  "static method": "Associated function",
  macro: "Macro",
  class: "Class",
  enum: "Enum",
  trait: "Trait",
  type: "Type alias",
  const: "Constant",
  primitive: "Primitive type",
  keyword: "Keyword",
};

/** Sections every callable page shares: params, returns, errors, panics, contracts. */
function callableSections(fn, parts, ctx, mentions) {
  const lines = [];
  const params = fn.params ?? [];
  if (params.length) {
    const documented = params.some((p) => p.doc);
    lines.push("## Parameters", "", documented ? "| Name | Type | Description |" : "| Name | Type |", documented ? "|------|------|-------------|" : "|------|------|");
    for (const p of params) {
      const doc = p.doc ? renderDocs(p.doc.replace(/\n/g, " "), ctx, mentions) : "";
      const type = `\`${esc(p.type)}${p.rest ? "..." : ""}\``;
      lines.push(documented ? `| \`${esc(p.name)}\` | ${type} | ${esc(doc)} |` : `| \`${esc(p.name)}\` | ${type} |`);
    }
    lines.push("");
  }
  const ret = fn.returns && fn.returns !== "unit" ? fn.returns : null;
  if (ret || parts.sections.Returns) {
    lines.push("## Returns", "");
    if (ret) lines.push(`\`${ret}\``, "");
    if (parts.sections.Returns) lines.push(renderDocs(parts.sections.Returns, ctx, mentions), "");
  }
  for (const s of ["Errors", "Panics", "Safety"]) {
    if (parts.sections[s]) lines.push(`## ${s}`, "", renderDocs(parts.sections[s], ctx, mentions), "");
  }
  const contracts = (fn.clauses ?? []).filter((c) => c.kind === "requires" || c.kind === "ensures");
  if (contracts.length) {
    lines.push("## Contracts", "", "Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).", "", "```coil");
    for (const c of contracts) lines.push(`${c.kind} ${c.text}`);
    lines.push("```", "");
  }
  return lines;
}

const KNOWN_SECTIONS = new Set(["Examples", "Returns", "Errors", "Panics", "Safety", "See also"]);

function trailingSections(parts, ctx, mentions) {
  const lines = [];
  for (const [name, text] of Object.entries(parts.sections)) {
    if (KNOWN_SECTIONS.has(name)) continue;
    lines.push(`## ${name}`, "", renderDocs(text, ctx, mentions), "");
  }
  if (parts.sections.Examples) lines.push("## Examples", "", renderDocs(parts.sections.Examples, ctx, mentions), "");
  return lines;
}

function seeAlso(parts, ctx, mentions, related) {
  const links = [];
  const seen = new Set([ctx.self]);
  if (parts.sections["See also"]) {
    return ["## See also", "", renderDocs(parts.sections["See also"], ctx, mentions), ""];
  }
  for (const href of mentions) {
    if (seen.has(href.replace(/#.*$/, ""))) continue;
    seen.add(href.replace(/#.*$/, ""));
    const label = labels.get(href.replace(/#.*$/, ""));
    if (label) links.push(`- [\`${label}\`](${href.replace(/#.*$/, "")})`);
  }
  for (const r of related) {
    if (seen.has(r.href) || links.length >= 8) continue;
    seen.add(r.href);
    links.push(`- [\`${r.label}\`](${r.href})${r.summary ? `: ${r.summary}` : ""}`);
  }
  return links.length ? ["## See also", "", ...links, ""] : [];
}

// href -> display label for "See also".
const labels = new Map();
for (const mod of allModules()) {
  labels.set(moduleHref(mod), mod.path);
  for (const it of mod.items) {
    labels.set(itemHref(it), mod.auto ? displayName(it) : `${mod.path}::${displayName(it)}`);
    for (const m of visibleMembers(it)) {
      if (["method", "static method"].includes(m.kind)) labels.set(memberHref(it, m), `${it.name}::${m.name}`);
    }
  }
}

const pages = new Map(); // output file -> content

function page(lib, slug, front, body) {
  const file = join(lib.out, `${slug}.md`);
  if (pages.has(file)) throw new Error(`duplicate reference page ${lib.key}/${slug}`);
  // An explicit slug keeps the id's case (`prelude/Vec`, not `prelude/vec`).
  // Stdlib and package pages share one collection, so their ids start with
  // the library (`json/json/Json`).
  front = { slug: `${lib.idPrefix}${slug}`, ...(lib === lang ? {} : { package: lib.key }), ...front };
  const fm = Object.entries(front)
    .filter(([, v]) => v !== undefined && v !== null)
    .map(([k, v]) => `${k}: ${typeof v === "string" ? yaml(v) : JSON.stringify(v)}`)
    .join("\n");
  pages.set(file, `---\n${fm}\n---\n\n${body.join("\n").replace(/\n{3,}/g, "\n\n").trim()}\n`);
}

/** The summary as markdown for lists and tables: keeps `code`, drops links (rendering adds its own). */
const summaryMd = (it) =>
  splitDocs(it.docs ?? "")
    .summary.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();

function siblings(mod, it) {
  return mod.items
    .filter((o) => o !== it && o.kind === it.kind)
    .map((o) => ({ href: itemHref(o), label: displayName(o), summary: firstSentence(summaryMd(o)) }));
}

function memberTable(title, ty, members, ctx) {
  if (!members.length) return [];
  const lines = [`## ${title}`, "", "| Name | Description |", "|------|-------------|"];
  for (const m of members) {
    const s = firstSentence(summaryMd(m));
    lines.push(`| [\`${m.name}\`](${memberHref(ty, m)}) | ${esc(renderDocs(s, withParams(ctx, m)))} |`);
  }
  return [...lines, ""];
}

function typePage(mod, ty, order) {
  const parts = splitDocs(ty.docs ?? "");
  const ctx = { lib: mod.lib, module: mod.path, type: ty.name, self: itemHref(ty) };
  const mentions = new Set();
  const members = visibleMembers(ty);
  const body = [];
  if (parts.summary) body.push(renderDocs(parts.summary, ctx, mentions), "");
  if (parts.body) body.push(renderDocs(parts.body, ctx, mentions), "");
  const variants = members.filter((m) => m.kind === "variant");
  if (variants.length) {
    body.push("## Variants", "");
    for (const v of variants) {
      body.push(`### \`${v.signature}\` {#variant-${v.name.toLowerCase()}}`, "");
      if (v.docs) body.push(renderDocs(v.docs, ctx, mentions), "");
    }
  }
  const fields = members.filter((m) => m.kind === "field");
  if (fields.length) {
    body.push("## Fields", "", "| Field | Type | Description |", "|-------|------|-------------|");
    for (const f of fields) body.push(`| \`${f.name}\` | \`${esc(f.type)}\` | ${esc(renderDocs((f.docs ?? "").replace(/\n/g, " "), ctx, mentions))} |`);
    body.push("");
  }
  const assoc = members.filter((m) => m.kind === "associated type");
  if (assoc.length) {
    body.push("## Associated types", "");
    for (const a of assoc) body.push(`- \`${a.signature}\`${a.docs ? `: ${renderDocs(a.docs.replace(/\n/g, " "), ctx, mentions)}` : ""}`);
    body.push("");
  }
  const statics = members.filter((m) => m.kind === "static method");
  const methods = members.filter((m) => m.kind === "method");
  body.push(...memberTable("Associated functions", ty, statics, ctx));
  body.push(...memberTable(ty.kind === "trait" ? "Required methods" : "Methods", ty, methods, ctx));
  if (ty.traitImpls?.length) {
    body.push("## Trait implementations", "");
    for (const t of ty.traitImpls) {
      const href = resolve(t.trait.replace(/<.*$/, ""), ctx);
      body.push(`- ${href ? `[\`${t.trait}\`](${href})` : `\`${t.trait}\``} for \`${t.target}\``);
    }
    body.push("");
  }
  if (ty.invariants?.length) {
    body.push("## Invariants", "", "Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).", "", "```coil", ...ty.invariants.map((i) => `invariant ${i}`), "```", "");
  }
  body.push(...trailingSections(parts, ctx, mentions));
  body.push(...seeAlso(parts, ctx, mentions, siblings(mod, ty)));
  page(mod.lib, itemSlug(mod.lib, mod.path, ty.name), front(mod, ty, parts, order), body);

  let n = 0;
  for (const m of [...statics, ...methods]) memberPage(mod, ty, m, n++);
}

function front(mod, it, parts, order, parent) {
  const name = parent ? `${parent.name}::${it.name}` : displayName(it);
  const signature =
    it.kind === "keyword" ? null : it.kind === "primitive" ? `type ${it.name}` : it.signature + (it.kind === "class" || it.kind === "enum" || it.kind === "trait" ? "" : "");
  return {
    title: name,
    description: plain(parts.summary) || `${KIND_LABEL[it.kind] ?? it.kind} ${name}.`,
    module: mod.path,
    kind: it.kind,
    name: it.name,
    parent: parent?.name,
    signature: signature ? signature.replace(/\s*\{\s*\}\s*$/, "") : undefined,
    signatures: it.overloads?.length ? [it.signature, ...it.overloads.map((o) => o.signature)] : undefined,
    import: parent ? importLine(mod, parent.name) : it.kind === "keyword" || it.kind === "primitive" ? null : importLine(mod, it.name),
    origin: mod.origin,
    auto: mod.auto || undefined,
    source: it.source,
    order,
  };
}

function memberPage(mod, ty, m, order) {
  const parts = splitDocs(m.docs ?? "");
  const self = memberHref(ty, m);
  const ctx = withParams({ lib: mod.lib, module: mod.path, type: ty.name, self }, m);
  const mentions = new Set();
  const body = [];
  if (parts.summary) body.push(renderDocs(parts.summary, ctx, mentions), "");
  else body.push(`*No documentation yet.*`, "");
  if (parts.body) body.push(renderDocs(parts.body, ctx, mentions), "");
  if (m.kind === "method" && ty.kind !== "trait") {
    body.push(`Called on a \`${ty.name}\` value as \`value.${m.name}(…)\`.`, "");
  }
  body.push(...callableSections(m, parts, ctx, mentions));
  body.push(...trailingSections(parts, ctx, mentions));
  const rel = visibleMembers(ty)
    .filter((o) => o !== m && (o.kind === "method" || o.kind === "static method"))
    .map((o) => ({ href: memberHref(ty, o), label: `${ty.name}::${o.name}`, summary: firstSentence(summaryMd(o)) }));
  body.push(...seeAlso(parts, ctx, mentions, [{ href: itemHref(ty), label: ty.name, summary: firstSentence(summaryMd(ty)) }, ...rel]));
  const slug = `${itemSlug(mod.lib, mod.path, ty.name)}/${slugName(m.name)}`;
  page(mod.lib, slug, front(mod, m, parts, order, ty), body);
}

function fnPage(mod, fn, order) {
  const parts = splitDocs(fn.docs ?? "");
  const ctx = withParams({ lib: mod.lib, module: mod.path, self: itemHref(fn) }, fn);
  const mentions = new Set();
  const body = [];
  if (parts.summary) body.push(renderDocs(parts.summary, ctx, mentions), "");
  if (parts.body) body.push(renderDocs(parts.body, ctx, mentions), "");
  if (fn.kind === "macro") body.push(`Invoke it as \`${fn.name}!(…)\`; the arguments are passed as code (\`Expr\`), not values.`, "");
  if (fn.overloads?.length) {
    // Overloads: one section per signature (an `int` and a `string` version,
    // or a macro with and without a message).
    for (const o of [fn, ...fn.overloads]) {
      const title = fn.kind === "macro" ? `${o.name}!(${o.params.map((p) => p.name).join(", ")})` : o.signature.replace(/\s*(requires|ensures)\b.*$/, "");
      body.push(`### \`${title}\``, "");
      const op = splitDocs(o.docs ?? "");
      if (o !== fn && op.summary) body.push(renderDocs(op.summary, ctx, mentions), "");
      body.push(...callableSections(o, { sections: {} }, ctx, mentions).map((l) => l.replace(/^## /, "#### ")));
    }
  } else body.push(...callableSections(fn, parts, ctx, mentions));
  body.push(...trailingSections(parts, ctx, mentions));
  body.push(...seeAlso(parts, ctx, mentions, siblings(mod, fn)));
  page(mod.lib, itemSlug(mod.lib, mod.path, fn.name), front(mod, fn, parts, order), body);
}

function simplePage(mod, it, order) {
  const parts = splitDocs(it.docs ?? "");
  const ctx = { lib: mod.lib, module: mod.path, self: itemHref(it) };
  const mentions = new Set();
  const body = [];
  if (parts.summary) body.push(renderDocs(parts.summary, ctx, mentions), "");
  if (parts.body) body.push(renderDocs(parts.body, ctx, mentions), "");
  if (it.kind === "type" && it.value) body.push("## Definition", "", "```coil", `type ${it.name} = ${it.value};`, "```", "");
  body.push(...trailingSections(parts, ctx, mentions));
  body.push(...seeAlso(parts, ctx, mentions, siblings(mod, it)));
  page(mod.lib, itemSlug(mod.lib, mod.path, it.name), front(mod, it, parts, order), body);
}

const GROUPS = [
  ["Types", (i) => ["class", "enum", "primitive"].includes(i.kind)],
  ["Traits", (i) => i.kind === "trait"],
  ["Type aliases", (i) => i.kind === "type"],
  ["Constants", (i) => i.kind === "const"],
  ["Macros", (i) => i.kind === "macro"],
  ["Functions", (i) => i.kind === "fn"],
  ["Keywords", (i) => i.kind === "keyword"],
];

const ORIGIN_NOTE = {
  builtin: "Built into the compiler.",
  embedded: "Written in Coil and shipped inside the compiler.",
  stdlib: "Part of [coil-stdlib](/packages/stdlib), not the compiler. spool projects declare it as their `stdlib` dependency (`spool new` adds it); with plain `coil`, pass `--root` with the `src` of a coil-stdlib checkout.",
  package: (lib) =>
    `Part of the [${lib.key}](/packages/${lib.key}) package ([${lib.repo}](https://github.com/${ORG}/${lib.repo})), not the compiler or coil-stdlib. Add it to \`[dependencies]\` in \`coil.toml\` to use it (see the [package overview](/packages/${lib.key})).`,
};

/** A module gets a page when it, or a module below it, has documented items. */
const hasPage = (mod) => mod.items.length > 0 || [...mod.lib.modules.values()].some((m) => m.path.startsWith(`${mod.path}::`) && m.items.length > 0);

function modulePage(mod, order) {
  const introFile = join(mod.lib.intros, `${modSlug(mod.path)}.md`);
  const intro = existsSync(introFile) ? readFileSync(introFile, "utf8") : "";
  const introMatch = intro.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  const meta = Object.fromEntries(
    (introMatch?.[1] ?? "").split("\n").filter(Boolean).map((l) => {
      const i = l.indexOf(":");
      return [l.slice(0, i).trim(), l.slice(i + 1).trim().replace(/^"(.*)"$/, "$1")];
    }),
  );
  const text = (introMatch ? introMatch[2] : intro).trim();
  const ctx = { lib: mod.lib, module: mod.path, self: moduleHref(mod) };
  const body = [];
  if (text) body.push(renderDocs(text, ctx), "");
  const note = ORIGIN_NOTE[mod.origin];
  body.push(typeof note === "function" ? note(mod.lib) : (note ?? ""), "");
  if (!mod.auto && mod.items.length) {
    const names = mod.items.slice(0, 2).map((i) => i.name).join(", ");
    body.push("Import what you use (`use path::*` is not allowed):", "", "```coil", `use ${mod.path}::{${names}};`, "```", "");
  }
  const subs = [...mod.lib.modules.values()].filter((m) => m.path.startsWith(`${mod.path}::`) && !m.path.slice(mod.path.length + 2).includes("::") && hasPage(m));
  if (subs.length) {
    body.push("## Modules", "", "| Module | Description |", "|--------|-------------|");
    for (const s of subs) body.push(`| [\`${s.path}\`](${moduleHref(s)}) | ${esc(s.summary ?? "")} |`);
    body.push("");
  }
  for (const [title, test] of GROUPS) {
    const items = mod.items.filter(test);
    if (!items.length) continue;
    body.push(`## ${title}`, "", "| Name | Description |", "|------|-------------|");
    for (const it of items) body.push(`| [\`${displayName(it)}\`](${itemHref(it)}) | ${esc(renderDocs(firstSentence(splitDocs(it.docs ?? "").summary), withParams(ctx, it)))} |`);
    body.push("");
  }
  page(mod.lib, `${modSlug(mod.path)}/index`, {
    title: meta.title ?? mod.path,
    description: meta.description ?? mod.summary ?? `The ${mod.path} module.`,
    module: mod.path,
    kind: "module",
    name: mod.path,
    origin: mod.origin,
    auto: mod.auto,
    order,
  }, body);
}

// Module summaries (for tables and the sidebar) come from intro frontmatter.
for (const mod of allModules()) {
  const f = join(mod.lib.intros, `${modSlug(mod.path)}.md`);
  const m = existsSync(f) && readFileSync(f, "utf8").match(/\ndescription:\s*"?(.*?)"?\n/);
  mod.summary = m ? m[1] : undefined;
}

// Overloads (same name twice, e.g. `assert!` with and without a message).
for (const mod of allModules()) {
  const byName = new Map();
  mod.items = mod.items.filter((it) => {
    const prev = byName.get(`${it.kind}:${it.name}`);
    if (prev) {
      (prev.overloads ??= []).push(it);
      if (!prev.docs) prev.docs = it.docs;
      return false;
    }
    byName.set(`${it.kind}:${it.name}`, it);
    return true;
  });
}

for (const lib of libs) {
  let order = 0;
  for (const mod of lib.modules.values()) {
    if (!hasPage(mod)) continue;
    modulePage(mod, order++);
    mod.items.forEach((it, n) => {
      if (["class", "enum", "trait", "primitive"].includes(it.kind) && it.kind !== "primitive") typePage(mod, it, n);
      else if (["fn", "macro"].includes(it.kind)) fnPage(mod, it, n);
      else simplePage(mod, it, n);
    });
  }
}

rmSync(REFERENCE_OUT, { recursive: true, force: true });
rmSync(API_OUT, { recursive: true, force: true });
for (const [file, content] of pages) {
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content);
}
writeFileSync(join(REFERENCE_OUT, "sources.json"), `${JSON.stringify({ "coil-lang": lang.commit }, null, 2)}\n`);
mkdirSync(API_OUT, { recursive: true });
writeFileSync(
  join(API_OUT, "sources.json"),
  `${JSON.stringify(Object.fromEntries(libs.slice(1).map((l) => [l.repo, l.commit])), null, 2)}\n`,
);
if (scratch) rmSync(scratch, { recursive: true, force: true });
for (const lib of libs) {
  const n = [...pages.keys()].filter((f) => f.startsWith(`${lib.out}/`)).length;
  console.log(`${lib.key.padEnd(8)} ${lib.repo.padEnd(13)} ${lib.commit.slice(0, 7)}  ${n} page(s)`);
}
