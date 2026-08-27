---
title: References
description: Lookup docs for language constructs and compiler-provided APIs. For a guided introduction, start with the manual.
---

# References

Lookup docs for language constructs and compiler-provided APIs. For a guided introduction, start with the [manual](/docs/manual/getting-started).

Compiler builtins live in **virtual modules** (not `.hy` files). Every file gets prelude auto-injected (`inject_prelude_scope` — `prelude`, `prelude::ops`, `prelude::test`, `prelude::math`; no source `use` needed). FFI, `io`, `string`, `thread`, `time`, `env`, and `gc` require an explicit `use` with concrete or brace imports (`use io::{stdout, open};`). `use path::*` is always rejected (`E0124`).

## Language

| Document | Contents |
|----------|----------|
| [Syntax](/docs/references/syntax) | Grammar overview, declarations, expressions |
| [Types](/docs/references/types) | Type system, aliases, aggregates, generics |
| [Operators](/docs/references/operators) | Arithmetic, comparison, logical, field access |
| [Keywords](/docs/references/keywords) | Reserved words and constructs |
| [Modules](/docs/references/modules) | Namespace rules, `use` resolution |
| [Project config](/docs/references/project-config) | `coil.toml` manifest format |
| [Error codes](/docs/references/error-codes) | Stable `E####` diagnostic codes |

## Built-ins and virtual modules

| Document | Kind | Purpose |
|----------|------|---------|
| [Option / Result](/docs/references/option-result) | Prelude enums | Built-in sum types |
| [print](/docs/references/print) | Migration note | Removed statement; use `io` + `string` |
| [format](/docs/references/format) | Intrinsic | `string::format(...)` builds a formatted string |
| [string](/docs/references/string) | Virtual module | `format` / UTF-8 byte conversions |
| [arrays](/docs/references/arrays) | Types / expression | Fixed `[T; N]`, growable `Vec<T>`, `len` |
| [math](/docs/references/math) | Prelude | IEEE float math plus `dot` / `matmul` / `cross` / `Matrix` |
| [FFI](/docs/references/ffi) | Virtual module | `dload` / `declare` / `invoke` / `extern` |
| [done](/docs/references/done) | Expression | Coroutine finished? |
| [io](/docs/references/io) | Virtual module | Non-blocking streams, TCP, UDP |
| [io::fs](/docs/references/io-fs) | Virtual module | Path / metadata helpers |
| [Iterator](/docs/references/iterator) | Prelude traits | `for x in` protocol |
| [assert](/docs/references/assert) | Prelude test | `assert(cond[, msg]) → Result` |
| [test harness](/docs/references/test-harness) | CLI | `test("…")` / `#[test]` |
| [panic](/docs/references/panic) | Keyword | Abort with a message |
| [casts](/docs/references/casts) | Expression | `expr as T` |
| [time](/docs/references/time) | Virtual module | Timestamps, sleep |
| [env](/docs/references/env) | Virtual module | Args, env vars, `exec` |
| [crypto](/docs/references/crypto) | Userland package | [coil-crypto](https://github.com/ardax-corp/coil-crypto) — hashes / AEAD via `dload` |
| [regex](/docs/references/regex) | Userland package | [coil-regex](https://github.com/ardax-corp/coil-regex) — PCRE2 via FFI |
| [tls](/docs/references/tls) | Userland package | [coil-tls](https://github.com/ardax-corp/coil-tls) — rustls via `dload("tls")` |
| [gc](/docs/references/gc) | Virtual module | `Root` / `Weak` pins |
| [ord / char](/docs/references/ord-char) | Prelude | Single-byte string ↔ `byte` |
| [host natives](/docs/references/host-natives) | Embedder API | Rust closures via `HostInvoke` |
| [What is NOT a builtin](/docs/references/not-builtins) | Scope | Gaps vs builtins |
| [coil-stdlib](https://github.com/ardax-corp/coil-stdlib/blob/main/docs/README.md) | Userland | `bytes`, `text`, `collections`, `io::sync`, … |
| [coil-regex](https://github.com/ardax-corp/coil-regex/blob/main/docs/README.md) | Userland | PCRE2 regex — see [regex](/docs/references/regex) |
| [coil-tls](https://github.com/ardax-corp/coil-tls) | Userland | TLS (`libtls`) — see [tls](/docs/references/tls) |
| [coil-crypto](https://github.com/ardax-corp/coil-crypto) | Userland | hashes / AEAD — see [crypto](/docs/references/crypto) |

Do not document coil-stdlib APIs here; they live in that repo. Workspace
`[module].roots` look for `./.deps/coil-stdlib/src` or `../coil-stdlib/src`.

## Related

- [Manual](/docs/manual/getting-started) — tutorials and examples
- [Internals](https://github.com/ardax-corp/coil-lang/blob/main/docs/internals/README.md) — pipeline, VM, debug info
