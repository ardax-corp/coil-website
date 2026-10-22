// Old documentation URLs and where they live now. Astro writes a redirect
// page for each (astro.config.mjs), so links from before the reference was
// split into per-item pages keep working.

const moved = [
  "syntax", "types", "operators", "modules", "macros", "comptime", "effects", "contracts", "permissions",
  "project-config", "error-codes", "casts", "arrays", "panic", "done", "test-harness", "host-natives", "not-builtins",
];

export const redirects = {
  "/docs/references": "/docs/reference",
  "/docs/language": "/docs/reference",
  ...Object.fromEntries(moved.map((p) => [`/docs/references/${p}`, `/docs/language/${p}`])),
  "/docs/references/assert": "/docs/reference/tests/assert",
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
  "/docs/references/print": "/docs/reference/io/sync/println",
  "/docs/references/regex": "/packages/regex",
  "/docs/references/string": "/docs/reference/string",
  "/docs/references/time": "/packages/time",
  "/docs/references/tls": "/packages/tls",
};
