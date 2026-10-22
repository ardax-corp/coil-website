#!/usr/bin/env node
// Generate the API reference (src/content/reference/) from the `///` docs in
// the Coil sources: the compiler's builtin doc stubs and embedded modules
// (coil-lang) and the standard library (coil-stdlib). One page per module,
// type, function, method, macro, primitive type and keyword.
//
// Run with `npm run sync:reference`, review the diff and commit it: builds use
// the committed pages and never fetch. By default the repositories are cloned
// at their default branch; point at local checkouts instead with
//   node scripts/sync-reference.mjs --lang ../coil-lang --stdlib ../coil-stdlib
//
// Hand-written module introductions live in scripts/reference/intros/<module>.md
// (module path with `::` as `/`, e.g. `io/fs.md`).

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, relative } from "node:path";
import { parseItems, splitDocs } from "./reference/parse.mjs";

const ORG = "ardax-corp";
const ROOT = new URL("..", import.meta.url).pathname;
const OUT = join(ROOT, "src/content/reference");
const INTROS = join(ROOT, "scripts/reference/intros");
const BASE = "/docs/reference";

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

const lang = checkout("coil-lang", arg("lang"));
const stdlib = checkout("coil-stdlib", arg("stdlib"));

const blob = (repo, commit, file, line) =>
  `https://github.com/${ORG}/${repo}/blob/${commit}/${file}${line ? `#L${line}` : ""}`;

/**
 * Module sources. `stub`: every item is documented API (doc stubs); otherwise
 * only items with `///` docs (and the public members of documented types) are.
 */
const modules = new Map();

function addModule(path, props) {
  if (!modules.has(path)) modules.set(path, { path, items: [], files: [], ...props });
  return modules.get(path);
}

// Compiler virtual modules: compiler/src/builtin_docs.rs lists them.
const docsRs = readFileSync(join(lang.dir, "compiler/src/builtin_docs.rs"), "utf8");
// Scheduler natives that the `task` module wraps; user code never calls them.
const INTERNAL = new Set(["prelude::task"]);
for (const [, path, file] of docsRs.matchAll(/\("([a-z:_]+)",\s*include_str!\("([^"]+)"\)\)/g)) {
  if (INTERNAL.has(path)) continue;
  const auto = path === "prelude" || path.startsWith("prelude::");
  addModule(path, { origin: "builtin", auto }).files.push({
    repo: "coil-lang",
    commit: lang.commit,
    file: `compiler/src/${file}`,
    stub: true,
  });
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
  addModule(target, { origin: "embedded", auto: target === "prelude" }).files.push({
    repo: "coil-lang",
    commit: lang.commit,
    file: join("compiler/src/macros", file).replace(/^compiler\/src\/macros\/\.\.\//, "compiler/src/"),
    stub: false,
  });
}

// coil-stdlib: src/a/b.hy is module a::b.
function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : e.name.endsWith(".hy") ? [join(dir, e.name)] : [],
  );
}
for (const f of walk(join(stdlib.dir, "src")).sort()) {
  const rel = relative(join(stdlib.dir, "src"), f);
  const path = rel.replace(/\.hy$/, "").split("/").join("::");
  addModule(path, { origin: "stdlib", auto: false }).files.push({
    repo: "coil-stdlib",
    commit: stdlib.commit,
    file: `src/${rel}`,
    stub: false,
  });
}

// Intermediate modules with no file of their own (`io::net`).
for (const mod of [...modules.values()]) {
  const segs = mod.path.split("::");
  for (let k = 1; k < segs.length; k++) addModule(segs.slice(0, k).join("::"), { origin: mod.origin, auto: false });
}

// ------------------------------------------------------------------- model

const hidden = (name) => name.startsWith("__");

/** Merge impl blocks into their types; drop undocumented helpers. */
function collect(mod) {
  const types = new Map();
  const loose = [];
  const impls = [];
  for (const f of mod.files) {
    const src = readFileSync(join(f.repo === "coil-lang" ? lang.dir : stdlib.dir, f.file), "utf8");
    for (const item of parseItems(src)) {
      item.source = blob(f.repo, f.commit, f.file, item.line);
      item.stub = f.stub;
      for (const m of item.members ?? []) {
        m.source = blob(f.repo, f.commit, f.file, m.line);
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
  for (const it of loose) if (it.kind === "const" && !it.docs && it.comment) it.docs = it.comment;
  const keep = (it) => !hidden(it.name) && (it.stub || it.docs);
  const items = [...types.values(), ...loose].filter(keep);
  for (const it of items) it.module = mod.path;
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
for (const mod of modules.values()) mod.items = collect(mod);
for (const { impl } of pendingImpls) {
  for (const mod of modules.values()) {
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
  stub: true,
  source: blob("coil-lang", lang.commit, "compiler/src/builtin_docs/types.hy", it.line),
}));
addModule("types", { origin: "builtin", auto: true, items: primitives, files: [] });

const kwFile = "compiler/src/builtin_docs/keywords.md";
const kwSrc = readFileSync(join(lang.dir, kwFile), "utf8");
const keywords = [];
{
  const lines = kwSrc.split("\n");
  let cur = null;
  lines.forEach((line, n) => {
    const m = line.match(/^## (.+?)\s*$/);
    if (m) {
      cur = { kind: "keyword", name: m[1], line: n + 1, docs: [], module: "keywords" };
      keywords.push(cur);
    } else if (cur) cur.docs.push(line);
  });
  for (const k of keywords) {
    k.docs = k.docs.join("\n").trim();
    k.source = blob("coil-lang", lang.commit, kwFile, k.line);
  }
}
addModule("keywords", { origin: "builtin", auto: true, items: keywords, files: [] });

// ------------------------------------------------------------------- pages

const modSlug = (path) => path.split("::").join("/");
const slugName = (name) => name.replace(/[^A-Za-z0-9_]/g, (c) => `_${c.charCodeAt(0).toString(16)}`);
// Items whose names differ only in case (`Channel` and `channel`) would get
// paths that clash on case-insensitive file systems, so the one that is not
// a type gets its kind as a prefix: `task/fn.channel`.
const TYPE_KINDS = new Set(["class", "enum", "trait", "type", "primitive"]);
const caseClash = new Map(); // `${module}::${name}` -> prefix
for (const mod of modules.values()) {
  const types = new Set(mod.items.filter((it) => TYPE_KINDS.has(it.kind)).map((it) => it.name.toLowerCase()));
  for (const it of mod.items) {
    if (!TYPE_KINDS.has(it.kind) && types.has(it.name.toLowerCase())) caseClash.set(`${mod.path}::${it.name}`, it.kind);
  }
}
const itemSlug = (mod, name) => {
  const kind = caseClash.get(`${mod}::${name}`);
  return `${modSlug(mod)}/${kind ? `${kind}.` : ""}${slugName(name)}`;
};
const moduleHref = (path) => `${BASE}/${modSlug(path)}`;
const itemHref = (item) => `${BASE}/${itemSlug(item.module, item.name)}`;
const memberHref = (ty, m) => `${itemHref(ty)}/${slugName(m.name)}`;

const displayName = (it) => (it.kind === "macro" ? `${it.name}!` : it.name);

// Name index for auto-linking `code` spans in docs.
const index = new Map(); // key -> href
const put = (key, href) => {
  if (!index.has(key)) index.set(key, href);
};
// Primitive type names win over same-named modules (`string`).
for (const it of primitives) put(it.name, `${BASE}/types/${it.name}`);
for (const mod of modules.values()) {
  if (mod.path === "keywords") continue;
  put(mod.path, moduleHref(mod.path));
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

/** Resolve inline code to a reference URL, trying the current module first. */
function resolve(code, ctx) {
  const c = code.replace(/\(\)$/, "").replace(/<[^<>]*>/g, "");
  if (!/^[A-Za-z_][\w:.]*!?$/.test(c)) return null;
  const tries = [];
  if (ctx.type) tries.push(`${ctx.module}::${ctx.type}::${c}`, `${ctx.module}::${ctx.type}.${c}`);
  tries.push(`${ctx.module}::${c}`, c);
  // `io::open` written relative to a parent module, `fs::read_dir` from io.
  for (const mod of modules.values()) if (mod.path.endsWith(`::${c.split("::")[0]}`)) tries.push(`${mod.path.replace(/::[^:]+$/, "")}::${c}`);
  for (const t of tries) {
    const href = index.get(t);
    if (href && href !== ctx.self) return href;
  }
  return null;
}

/** Rewrite doc markdown: example fences, hidden lines, headings, links. */
function renderDocs(md, ctx, mentions) {
  const out = [];
  let fence = null;
  for (const line of md.split("\n")) {
    const f = line.match(/^(\s*)```\s*([\w,]*)\s*$/);
    if (f) {
      if (fence === null) {
        const tag = f[2].split(",")[0];
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
  const m = s.match(/^(.+?[.!?])(\s|$)/);
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
for (const mod of modules.values()) {
  labels.set(moduleHref(mod.path), mod.path);
  for (const it of mod.items) {
    labels.set(itemHref(it), mod.auto ? displayName(it) : `${mod.path}::${displayName(it)}`);
    for (const m of visibleMembers(it)) {
      if (["method", "static method"].includes(m.kind)) labels.set(memberHref(it, m), `${it.name}::${m.name}`);
    }
  }
}

const pages = new Map(); // relative path (no .md) -> content

function page(slug, front, body) {
  if (pages.has(slug)) throw new Error(`duplicate reference page ${slug}`);
  // An explicit slug keeps the id's case (`prelude/Vec`, not `prelude/vec`).
  front = { slug, ...front };
  const fm = Object.entries(front)
    .filter(([, v]) => v !== undefined && v !== null)
    .map(([k, v]) => `${k}: ${typeof v === "string" ? yaml(v) : JSON.stringify(v)}`)
    .join("\n");
  pages.set(slug, `---\n${fm}\n---\n\n${body.join("\n").replace(/\n{3,}/g, "\n\n").trim()}\n`);
}

const summaryOf = (it) => plain(splitDocs(it.docs ?? "").summary);

function siblings(mod, it) {
  return mod.items
    .filter((o) => o !== it && o.kind === it.kind)
    .map((o) => ({ href: itemHref(o), label: displayName(o), summary: firstSentence(summaryOf(o)) }));
}

function memberTable(title, ty, members, ctx) {
  if (!members.length) return [];
  const lines = [`## ${title}`, "", "| Name | Description |", "|------|-------------|"];
  for (const m of members) {
    const s = firstSentence(summaryOf(m));
    lines.push(`| [\`${m.name}\`](${memberHref(ty, m)}) | ${esc(renderDocs(s, ctx))} |`);
  }
  return [...lines, ""];
}

function typePage(mod, ty, order) {
  const parts = splitDocs(ty.docs ?? "");
  const ctx = { module: mod.path, type: ty.name, self: itemHref(ty) };
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
  page(itemSlug(mod.path, ty.name), front(mod, ty, parts, order), body);

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
  const ctx = { module: mod.path, type: ty.name, self };
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
    .map((o) => ({ href: memberHref(ty, o), label: `${ty.name}::${o.name}`, summary: firstSentence(summaryOf(o)) }));
  body.push(...seeAlso(parts, ctx, mentions, [{ href: itemHref(ty), label: ty.name, summary: firstSentence(summaryOf(ty)) }, ...rel]));
  const slug = `${itemSlug(mod.path, ty.name)}/${slugName(m.name)}`;
  page(slug, front(mod, m, parts, order, ty), body);
}

function fnPage(mod, fn, order) {
  const parts = splitDocs(fn.docs ?? "");
  const ctx = { module: mod.path, self: itemHref(fn) };
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
  page(itemSlug(mod.path, fn.name), front(mod, fn, parts, order), body);
}

function simplePage(mod, it, order) {
  const parts = splitDocs(it.docs ?? "");
  const ctx = { module: mod.path, self: itemHref(it) };
  const mentions = new Set();
  const body = [];
  if (parts.summary) body.push(renderDocs(parts.summary, ctx, mentions), "");
  if (parts.body) body.push(renderDocs(parts.body, ctx, mentions), "");
  if (it.kind === "type" && it.value) body.push("## Definition", "", "```coil", `type ${it.name} = ${it.value};`, "```", "");
  body.push(...trailingSections(parts, ctx, mentions));
  body.push(...seeAlso(parts, ctx, mentions, siblings(mod, it)));
  page(itemSlug(mod.path, it.name), front(mod, it, parts, order), body);
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
  stdlib: "Part of [coil-stdlib](/packages/stdlib): add it with `spool add coil-stdlib` or pass `--root path/to/coil-stdlib/src`.",
};

function modulePage(mod, order) {
  const introFile = join(INTROS, `${modSlug(mod.path)}.md`);
  const intro = existsSync(introFile) ? readFileSync(introFile, "utf8") : "";
  const introMatch = intro.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  const meta = Object.fromEntries(
    (introMatch?.[1] ?? "").split("\n").filter(Boolean).map((l) => {
      const i = l.indexOf(":");
      return [l.slice(0, i).trim(), l.slice(i + 1).trim().replace(/^"(.*)"$/, "$1")];
    }),
  );
  const text = (introMatch ? introMatch[2] : intro).trim();
  const ctx = { module: mod.path, self: moduleHref(mod.path) };
  const body = [];
  if (text) body.push(renderDocs(text, ctx), "");
  body.push(ORIGIN_NOTE[mod.origin] ?? "", "");
  if (!mod.auto && mod.items.length) {
    const names = mod.items.slice(0, 2).map((i) => i.name).join(", ");
    body.push("Import what you use (`use path::*` is not allowed):", "", "```coil", `use ${mod.path}::{${names}};`, "```", "");
  }
  const subs = [...modules.values()].filter((m) => m.path.startsWith(`${mod.path}::`) && !m.path.slice(mod.path.length + 2).includes("::"));
  if (subs.length) {
    body.push("## Modules", "", "| Module | Description |", "|--------|-------------|");
    for (const s of subs) body.push(`| [\`${s.path}\`](${moduleHref(s.path)}) | ${esc(s.summary ?? "")} |`);
    body.push("");
  }
  for (const [title, test] of GROUPS) {
    const items = mod.items.filter(test);
    if (!items.length) continue;
    body.push(`## ${title}`, "", "| Name | Description |", "|------|-------------|");
    for (const it of items) body.push(`| [\`${displayName(it)}\`](${itemHref(it)}) | ${esc(renderDocs(firstSentence(splitDocs(it.docs ?? "").summary), ctx))} |`);
    body.push("");
  }
  page(`${modSlug(mod.path)}/index`, {
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
for (const mod of modules.values()) {
  const f = join(INTROS, `${modSlug(mod.path)}.md`);
  const m = existsSync(f) && readFileSync(f, "utf8").match(/\ndescription:\s*"?(.*?)"?\n/);
  mod.summary = m ? m[1] : undefined;
}

// Overloads (same name twice, e.g. `assert!` with and without a message).
for (const mod of modules.values()) {
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

let order = 0;
for (const mod of modules.values()) {
  if (!mod.items.length && ![...modules.keys()].some((p) => p.startsWith(`${mod.path}::`))) continue;
  modulePage(mod, order++);
  mod.items.forEach((it, n) => {
    if (["class", "enum", "trait", "primitive"].includes(it.kind) && it.kind !== "primitive") typePage(mod, it, n);
    else if (["fn", "macro"].includes(it.kind)) fnPage(mod, it, n);
    else simplePage(mod, it, n);
  });
}

rmSync(OUT, { recursive: true, force: true });
for (const [slug, content] of pages) {
  const file = join(OUT, `${slug}.md`);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content);
}
writeFileSync(
  join(OUT, "sources.json"),
  `${JSON.stringify({ "coil-lang": lang.commit, "coil-stdlib": stdlib.commit }, null, 2)}\n`,
);
if (scratch) rmSync(scratch, { recursive: true, force: true });
console.log(`reference: ${pages.size} pages from coil-lang@${lang.commit.slice(0, 7)} and coil-stdlib@${stdlib.commit.slice(0, 7)}`);
