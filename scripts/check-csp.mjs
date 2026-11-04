#!/usr/bin/env node
// Fail the build when an inline <script> in dist/ is not allowed by the
// Content-Security-Policy in vercel.json. The policy allows inline scripts by
// SHA-256 hash, so editing one (or a @vercel/* update changing the snippets
// they inline) needs its new hash added there; this prints it.
import { createHash } from "node:crypto";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const DIST = join(ROOT, "dist");

const csp = JSON.parse(readFileSync(join(ROOT, "vercel.json"), "utf8"))
  .headers.flatMap((h) => h.headers)
  .find((h) => h.key === "Content-Security-Policy")?.value;
if (!csp) throw new Error("vercel.json sets no Content-Security-Policy");
const scriptSrc = csp.split(";").map((d) => d.trim()).find((d) => d.startsWith("script-src ")) ?? "";
const allowed = new Set([...scriptSrc.matchAll(/'sha256-([^']+)'/g)].map((m) => m[1]));

const missing = new Map();
const used = new Set();
function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) walk(path);
    else if (entry.name.endsWith(".html")) {
      const html = readFileSync(path, "utf8");
      for (const m of html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)) {
        const hash = createHash("sha256").update(m[1]).digest("base64");
        used.add(hash);
        if (!allowed.has(hash) && !missing.has(hash)) missing.set(hash, path.slice(DIST.length + 1));
      }
    }
  }
}
walk(DIST);

if (missing.size) {
  console.error("Inline scripts not allowed by the CSP in vercel.json (add to script-src):");
  for (const [hash, page] of missing) console.error(`  'sha256-${hash}'  (first seen in ${page})`);
  process.exit(1);
}
const stale = [...allowed].filter((h) => !used.has(h));
if (stale.length) console.warn(`CSP hashes no longer used (safe to drop): ${stale.map((h) => `'sha256-${h}'`).join(" ")}`);
console.log(`CSP allows all ${used.size} inline scripts.`);
