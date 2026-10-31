// Old documentation URLs and where they live now. Astro writes a redirect
// page for each (astro.config.mjs), so links from before the reference was
// split into per-item pages keep working.

import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, relative, sep } from "node:path";

const ROOT = new URL("../../", import.meta.url).pathname;

// coil-stdlib's API pages used to sit in the language reference
// (/docs/reference/collections/map/HashMap); they now live under
// /packages/stdlib/reference. Every generated stdlib page whose path the
// language reference does not use (it keeps `io`) gets a redirect.
function stdlibMoves() {
  const dir = join(ROOT, "src/content/api/stdlib");
  const lang = join(ROOT, "src/content/reference");
  if (!existsSync(dir)) return {};
  const out = {};
  const walk = (d) => {
    for (const e of readdirSync(d, { withFileTypes: true })) {
      const p = join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith(".md")) {
        const rel = relative(dir, p).split(sep).join("/");
        if (existsSync(join(lang, rel))) continue;
        // The frontmatter slug keeps the id's case; it starts with "stdlib/".
        const slug = readFileSync(p, "utf8").match(/^slug: "stdlib\/(.*)"$/m)?.[1] ?? rel.replace(/\.md$/, "");
        const path = slug.replace(/(^|\/)index$/, "");
        out[`/docs/reference/${path}`] = `/packages/stdlib/reference/${path}`;
      }
    }
  };
  walk(dir);
  return out;
}

const moved = [
  "syntax", "types", "operators", "modules", "macros", "comptime", "effects", "contracts", "permissions",
  "project-config", "error-codes", "casts", "arrays", "panic", "done", "test-harness", "host-natives", "not-builtins",
];

// Tutorial chapters renumbered when the tutorial was rewritten.
const chapters = {
  "03-enums-and-match": "05-enums-and-match",
  "04-records-and-fields": "05-enums-and-match",
  "05-aggregates": "03-collections",
  "06-modules": "09-modules",
  "07-ffi": "16-ffi",
  "08-coroutines": "12-generators",
  "09-error-handling": "06-error-handling",
  "10-io-streams": "10-files-and-io",
  "11-threads": "14-threads",
  "12-tasks": "13-tasks",
  "13-macros": "15-macros",
};

export const redirects = {
  ...stdlibMoves(),
  ...Object.fromEntries(Object.entries(chapters).map(([from, to]) => [`/docs/manual/tutorial/${from}`, `/docs/manual/tutorial/${to}`])),
  "/docs/references": "/docs/reference",
  "/docs/language": "/docs/reference",
  ...Object.fromEntries(moved.map((p) => [`/docs/references/${p}`, `/docs/language/${p}`])),
  "/docs/references/assert": "/packages/stdlib/reference/tests/assert",
  "/docs/references/crypto": "/packages/crypto",
  "/docs/references/env": "/docs/reference/env",
  "/docs/references/ffi": "/docs/reference/ffi",
  "/docs/references/format": "/docs/reference/string/format",
  "/docs/references/gc": "/docs/reference/gc",
  "/docs/references/io": "/docs/reference/io",
  "/docs/references/io-fs": "/docs/reference/io/fs",
  "/docs/references/iterator": "/docs/reference/prelude/Iterator",
  "/docs/references/keywords": "/docs/reference/keywords",
  "/docs/references/math": "/docs/reference/prelude/math",
  "/docs/references/option-result": "/docs/reference/prelude/Option",
  "/docs/references/ord-char": "/docs/reference/prelude/ord",
  "/docs/references/print": "/packages/stdlib/reference/io/sync/println",
  "/docs/references/regex": "/packages/regex",
  "/docs/references/string": "/docs/reference/string",
  "/docs/references/time": "/packages/time",
  "/docs/references/tls": "/packages/tls",
};
