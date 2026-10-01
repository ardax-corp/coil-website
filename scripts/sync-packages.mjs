#!/usr/bin/env node
// Sync package documentation from public ardax-corp repositories into
// src/content/ecosystem/<package>/. Run with `npm run sync:packages`, review
// the diff, and commit it: builds use the committed snapshot and never fetch.
//
// Each repo's README.md becomes the package overview (index), docs/README.md
// becomes "guide", and docs/<page>.md becomes <page>. Relative links are
// rewritten to on-site pages or pinned GitHub URLs, and references to the
// internal issue tracker are stripped.
//
// Hand-written pages in the same folders (no `source:` in frontmatter) are
// left alone.
//
// Usage: node scripts/sync-packages.mjs [package ...]

import { execFileSync } from "node:child_process";
import { mkdtempSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { basename, join } from "node:path";

const ORG = "ardax-corp";
const OUT = new URL("../src/content/ecosystem/", import.meta.url).pathname;

/** package slug → repository. Keep in sync with src/lib/packages.ts. */
const REPOS = {
  spool: "spool",
  stdlib: "coil-stdlib",
  json: "coil-json",
  toml: "coil-toml",
  msgpack: "coil-msgpack",
  http: "coil-http",
  tls: "coil-tls",
  crypto: "coil-crypto",
  regex: "coil-regex",
  deflate: "coil-deflate",
  time: "coil-time",
  greet: "coil-greet",
};

const repoToPkg = Object.fromEntries(Object.entries(REPOS).map(([pkg, repo]) => [repo, pkg]));

function git(args, cwd) {
  return execFileSync("git", args, { cwd, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
}

/** Page slug for a repo-relative markdown path, or null if it is not synced. */
function pageSlug(path) {
  if (path === "README.md") return "index";
  const m = path.match(/^docs\/([^/]+)\.md$/);
  if (!m) return null;
  return m[1] === "README" ? "guide" : m[1].toLowerCase();
}

function pageHref(pkg, slug) {
  return slug === "index" ? `/packages/${pkg}` : `/packages/${pkg}/${slug}`;
}

/** Resolve `target` relative to the directory of `from` (both repo-relative). */
function resolvePath(from, target) {
  const parts = from.split("/").slice(0, -1);
  for (const seg of target.split("/")) {
    if (seg === "" || seg === ".") continue;
    if (seg === "..") parts.pop();
    else parts.push(seg);
  }
  return parts.join("/");
}

function rewriteLink(url, { pkg, repo, sha, file }) {
  const [base, hash = ""] = url.split("#");
  const frag = hash ? `#${hash}` : "";

  // Cross-repo GitHub links to synced docs → on-site pages.
  const gh = base.match(/^https:\/\/github\.com\/ardax-corp\/([^/]+)\/blob\/[^/]+\/(.+)$/);
  if (gh) {
    if (gh[1] === "coil-lang") {
      const doc = gh[2].match(/^docs\/((?:manual|references)\/.+)\.md$/);
      if (doc) return `/docs/${doc[1].replace(/\/README$/, "").replace(/\/index$/, "")}${frag}`;
      return url;
    }
    const other = repoToPkg[gh[1]];
    const slug = other && pageSlug(gh[2]);
    return slug ? pageHref(other, slug) + frag : url;
  }

  if (/^[a-z]+:/i.test(base) || base.startsWith("/") || base === "") return url;

  // Relative link inside this repo.
  let target = resolvePath(file, base);
  if (target === "docs" || target === "docs/") target = "docs/README.md";
  const slug = pageSlug(target);
  if (slug) return pageHref(pkg, slug) + frag;
  const kind = base.endsWith("/") || !/\.[a-z0-9]+$/i.test(target) ? "tree" : "blob";
  return `https://github.com/${ORG}/${repo}/${kind}/${sha}/${target}${frag}`;
}

/** Drop references to the internal issue tracker, which is not public. */
function stripTracker(md) {
  const id = String.raw`(?:\[COI-\d+\]\(https:\/\/linear\.app\/[^)]*\)|COI-\d+)`;
  return md
    // Ids used as words in a sentence need rephrasing, not just deletion.
    .replace(new RegExp(String.raw`\buntil ${id}\.`, "g"), "for now.")
    .replace(new RegExp(String.raw`\bUntil ${id},? `, "g"), "For now, ")
    .replace(new RegExp(String.raw`\bare ${id}\.`, "g"), "are planned.")
    .split("\n")
    .filter((line) => !/Linear project/i.test(line))
    // "Design: [doc](linear.app/…)" pointers lead nowhere for readers.
    .filter((line) => !(/linear\.app/.test(line) && /^\s*(Locked )?design\b/i.test(line)))
    .join("\n")
    .replace(/\[([^\]]+)\]\(https:\/\/linear\.app\/[^)]*\)/g, "$1")
    .replace(/ ?\(\[COI-\d+\]\(https:\/\/linear\.app\/[^)]*\)\)/g, "")
    .replace(/\[COI-\d+\]\(https:\/\/linear\.app\/[^)]*\)/g, "")
    .replace(/ ?\(COI-\d+(?:\s*[–-]\s*\d+)?\)/g, "")
    .replace(/,? ?COI-\d+(?:\s*[–-]\s*\d+)?/g, "");
}

function rewriteLinks(md, ctx) {
  // Skip fenced code blocks; rewrite [text](url) and <a href> elsewhere.
  return md
    .split(/(^```[\s\S]*?^```)/m)
    .map((chunk, i) =>
      i % 2 === 1
        ? chunk
        : chunk.replace(/(\]\()([^)\s]+)(\))/g, (_, a, url, b) => a + rewriteLink(url, ctx) + b),
    )
    .join("");
}

function plain(text) {
  return text
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[`*_]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function frontmatter(md) {
  const h1 = md.match(/^#\s+(.+)$/m);
  const title = h1 ? plain(h1[1]) : "Untitled";
  const afterH1 = h1 ? md.slice(md.indexOf(h1[0]) + h1[0].length) : md;
  const para = afterH1
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .find((p) => p && !/^(#|```|\||-|\*|>|<)/.test(p));
  let description = para ? plain(para) : title;
  if (description.length > 180) description = description.slice(0, 177).replace(/\s+\S*$/, "") + "…";
  return { title, description };
}

function yamlString(s) {
  return JSON.stringify(s);
}

function syncPackage(pkg, repo, work) {
  const dir = join(work, repo);
  git(["clone", "--quiet", "--depth", "1", `https://github.com/${ORG}/${repo}.git`, dir]);
  const sha = git(["rev-parse", "HEAD"], dir);

  const files = ["README.md"];
  if (existsSync(join(dir, "docs"))) {
    for (const f of readdirSync(join(dir, "docs")).sort()) if (f.endsWith(".md")) files.push(`docs/${f}`);
  }

  const outDir = join(OUT, pkg);
  mkdirSync(outDir, { recursive: true });
  // Remove previously synced pages; keep hand-written ones.
  for (const f of readdirSync(outDir)) {
    const p = join(outDir, f);
    if (f.endsWith(".md") && /^source: /m.test(readFileSync(p, "utf8").split("\n---")[0])) rmSync(p);
  }

  for (const file of files) {
    const slug = pageSlug(file);
    let md = readFileSync(join(dir, file), "utf8");
    md = stripTracker(md);
    md = rewriteLinks(md, { pkg, repo, sha, file });
    const { title, description } = frontmatter(md);
    const fm = [
      "---",
      `title: ${yamlString(title)}`,
      `description: ${yamlString(description)}`,
      `source: ${yamlString(`https://github.com/${ORG}/${repo}/blob/${sha}/${file}`)}`,
      "---",
      "",
    ].join("\n");
    writeFileSync(join(outDir, `${slug}.md`), fm + md.replace(/^\s+/, ""));
  }
  console.log(`${pkg.padEnd(8)} ${repo.padEnd(14)} ${sha.slice(0, 7)}  ${files.length} page(s)`);
}

const only = process.argv.slice(2);
const work = mkdtempSync(join(tmpdir(), "coil-sync-"));
try {
  for (const [pkg, repo] of Object.entries(REPOS)) {
    if (only.length && !only.includes(pkg)) continue;
    syncPackage(pkg, repo, work);
  }
} finally {
  rmSync(work, { recursive: true, force: true });
}
console.log(`\nWrote ${basename(OUT)}/ — review with git diff, then commit.`);
