export type Package = {
  name: string;
  repo: string;
  /** Reference page on this site. */
  docs: string;
  summary: string;
  detail: string;
};

export const packages: Package[] = [
  {
    name: "regex",
    repo: "https://github.com/ardax-corp/coil-regex",
    docs: "/docs/references/regex",
    summary: "PCRE2 regular expressions.",
    detail: "Userland PCRE2 bindings loaded through FFI: compile a pattern once, then match and find_all.",
  },
  {
    name: "tls",
    repo: "https://github.com/ardax-corp/coil-tls",
    docs: "/docs/references/tls",
    summary: "TLS streams on rustls.",
    detail: "A native cdylib loaded with dload(\"tls\") that attaches to ordinary io streams.",
  },
  {
    name: "crypto",
    repo: "https://github.com/ardax-corp/coil-crypto",
    docs: "/docs/references/crypto",
    summary: "Hashing and secure randomness.",
    detail: "sha256, random_bytes and constant-time ct_eq, backed by a native library loaded with dload.",
  },
  {
    name: "time",
    repo: "https://github.com/ardax-corp/coil-time",
    docs: "/docs/references/time",
    summary: "Calendar and monotonic time.",
    detail: "UTC timestamps, calendar periods, chrono-style format/parse and Instant for elapsed time.",
  },
];
