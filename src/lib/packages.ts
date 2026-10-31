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
      {
        name: "csv",
        repo: `${ORG}/coil-csv`,
        use: "use csv::{parse, stringify, CsvError};",
        summary: "CSV (RFC 4180).",
        detail: "Parse and write comma-separated records with quoted fields and \"\" escapes. Errors carry line and column.",
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
        name: "url",
        repo: `${ORG}/coil-url`,
        use: "use url::{parse, join, Url, UrlError};",
        summary: "URLs (RFC 3986).",
        detail: "Parse, build and resolve URLs, read and set query parameters, and percent-encode text.",
        native: false,
      },
      {
        name: "tls",
        repo: `${ORG}/coil-tls`,
        use: "use tls::{client, server};",
        summary: "TLS streams on rustls.",
        detail: 'A native library loaded with dload("tls") that attaches to ordinary io streams.',
        native: true,
        featured: true,
      },
      {
        name: "crypto",
        repo: `${ORG}/coil-crypto`,
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
        name: "gzip",
        repo: `${ORG}/coil-gzip`,
        use: "use gzip::{compress, decompress, GzipError};",
        summary: "gzip files (RFC 1952).",
        detail: "Read and write .gz data: a gzip header and CRC32 around a deflate body, in pure Coil.",
        native: false,
      },
      {
        name: "time",
        repo: `${ORG}/coil-time`,
        use: "use time::{timestamp};",
        summary: "Calendar and monotonic time.",
        detail: "UTC timestamps, calendar periods, chrono-style format/parse and Instant for elapsed time.",
        native: false,
      },
      {
        name: "uuid",
        repo: `${ORG}/coil-uuid`,
        use: "use uuid::{v4, v7, parse, Uuid};",
        summary: "UUIDs (RFC 9562).",
        detail: "Generate v1, v4, v6 and v7 UUIDs and parse or format any version. Randomness comes from crypto.",
        native: true,
      },
      {
        name: "log",
        repo: `${ORG}/coil-log`,
        use: "use log::{Logger, Level};",
        summary: "Leveled logging.",
        detail: "A small logger that writes one line per event to stderr or any stream, with levels and timestamps.",
        native: false,
      },
    ],
  },
  {
    title: "Terminal",
    blurb: "Command-line and full-screen programs.",
    packages: [
      {
        name: "cli",
        repo: `${ORG}/coil-cli`,
        use: "use cli::style::{Painter, fg, red};",
        summary: "Terminal building blocks.",
        detail: "Styled output, colour detection, key and mouse input, a line editor and prompts, argument parsing, progress bars and a diffing cell buffer.",
        native: false,
      },
      {
        name: "tui",
        repo: `${ORG}/coil-tui`,
        use: "use tui::run::run;",
        summary: "Terminal user interfaces.",
        detail: "Components, row and column layout, focus, keyboard and mouse input and dialogs, drawn through cli's diffing screen.",
        native: false,
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
