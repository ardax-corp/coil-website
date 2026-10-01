// Public ardax-corp packages that make up the Coil ecosystem.
// Check for new ones with: gh repo list ardax-corp --visibility public

const ORG = "https://github.com/ardax-corp";

export type Package = {
  name: string;
  repo: string;
  /** Reference page on this site, when one exists. */
  docs?: string;
  /** Import line from the package README. */
  use: string;
  summary: string;
  detail: string;
  /** Needs a native library loaded with dload (and an [ffi] allow entry). */
  native: boolean;
  /** Shown on the home page. */
  featured?: boolean;
};

export type PackageCategory = { title: string; blurb: string; packages: Package[] };

export const categories: PackageCategory[] = [
  {
    title: "Data formats",
    blurb: "Encoders and decoders written in pure Coil.",
    packages: [
      {
        name: "json",
        repo: `${ORG}/coil-json`,
        use: "use json::{Json, JsonValue, JsonError};",
        summary: "JSON and JSONC.",
        detail: "Strict RFC 8259 encode/decode, plus a JSONC mode that accepts comments and trailing commas. Errors carry line and column.",
        native: false,
        featured: true,
      },
      {
        name: "toml",
        repo: `${ORG}/coil-toml`,
        use: "use toml::{Toml, TomlValue, TomlError};",
        summary: "TOML 1.0.",
        detail: "Full TOML 1.0.0 syntax: dotted keys, multiline strings, datetimes, inline tables and arrays of tables.",
        native: false,
        featured: true,
      },
      {
        name: "msgpack",
        repo: `${ORG}/coil-msgpack`,
        use: "use msgpack::{Msgpack, MsgpackValue, MsgpackError};",
        summary: "MessagePack.",
        detail: "Binary encode/decode covering every MessagePack type, including extensions and timestamps.",
        native: false,
      },
    ],
  },
  {
    title: "Networking & security",
    blurb: "Talk to the network, securely.",
    packages: [
      {
        name: "http",
        repo: `${ORG}/coil-http`,
        use: "use http::client::Client;",
        summary: "HTTP client and server.",
        detail: "Class-oriented HTTP/1.1 client and server with connection pooling, HTTP/2, WebSockets, and HTTPS via tls.",
        native: false,
        featured: true,
      },
      {
        name: "tls",
        repo: `${ORG}/coil-tls`,
        docs: "/docs/references/tls",
        use: "use tls::{client, server};",
        summary: "TLS streams on rustls.",
        detail: 'A native library loaded with dload("tls") that attaches to ordinary io streams.',
        native: true,
        featured: true,
      },
      {
        name: "crypto",
        repo: `${ORG}/coil-crypto`,
        docs: "/docs/references/crypto",
        use: "use crypto::{sha256, random_bytes, ct_eq};",
        summary: "Hashing and secure randomness.",
        detail: "sha256, random_bytes and constant-time ct_eq, backed by a native library loaded with dload.",
        native: true,
      },
    ],
  },
  {
    title: "Text, bytes & time",
    blurb: "Everyday utilities.",
    packages: [
      {
        name: "regex",
        repo: `${ORG}/coil-regex`,
        docs: "/docs/references/regex",
        use: "use regex::{compile, find_all, Regex};",
        summary: "PCRE2 regular expressions.",
        detail: "PCRE2 bindings loaded through FFI: compile a pattern once, then match and find_all.",
        native: true,
      },
      {
        name: "deflate",
        repo: `${ORG}/coil-deflate`,
        use: "use deflate::{compress, decompress, DeflateError};",
        summary: "DEFLATE compression.",
        detail: "RFC 1951 compress and decompress in pure Coil. Raw DEFLATE blocks only (no gzip or zlib wrapper).",
        native: false,
      },
      {
        name: "time",
        repo: `${ORG}/coil-time`,
        docs: "/docs/references/time",
        use: "use time::{timestamp};",
        summary: "Calendar and monotonic time.",
        detail: "UTC timestamps, calendar periods, chrono-style format/parse and Instant for elapsed time.",
        native: true,
      },
    ],
  },
];

export const packages: Package[] = categories.flatMap((c) => c.packages);

/** Small demo library showing how spool links a dependency. */
export const demo = {
  name: "greet",
  repo: `${ORG}/coil-greet`,
  use: "use greet::hello;",
  detail: "A minimal library consumed via spool. Start here to see how a package is laid out and linked.",
};
