---
title: Regular expressions
description: PCRE2 regex is userland in coil-regex, not a compiler builtin.
---

# Regular expressions

PCRE2 regex is **userland** in [coil-regex](https://github.com/ardax-corp/coil-regex), not a compiler builtin. It binds the system libpcre2-8 directly, so there is no native library to build: install libpcre2-8 (`libpcre2-8-0` on Debian/Ubuntu, `pcre2` on Homebrew).

## Install via spool (future)

```toml
[dependencies]
regex = { git = "https://github.com/ardax-corp/coil-regex.git", version = "^0.1", trusted = true }

[module]
roots = ["./src", "./.spool/deps/regex/src"]

[ffi]
allow = ["pcre2-8"]
```

The package loads `libpcre2-8.so.0` (`libpcre2-8.dylib` on macOS), dload stem `pcre2-8`. That needs `[ffi] allow` plus `trusted = true` (or a matching lock `sha256`). Spool passes these to `coil` as `--allow-dload pcre2-8`, `--dload-trusted pcre2-8` (or `--dload-pin pcre2-8=SHA256` with `--ffi-search-path` naming the library's directory); `coil` reads neither `coil.toml` nor `coil.lock`.

Run `spool install`, then:

```coil
use regex::{compile, find_all, Regex};
```

**Docs:** [coil-regex](https://github.com/ardax-corp/coil-regex/blob/main/docs/README.md)

## Sibling checkout

Clone [coil-regex](https://github.com/ardax-corp/coil-regex) beside your project and point `coil.toml` at it:

```toml
[module]
roots = ["./src", "../coil-regex/src"]

[ffi]
allow = ["pcre2-8"]

[dependencies]
regex = { path = "../coil-regex", trusted = true }
```

Same gate: allow plus trusted (or a hash pin). Spool turns the manifest above into flags for `coil`; without spool, pass them yourself:

```bash
lib=$(pkg-config --variable=libdir libpcre2-8)/libpcre2-8.so.0
coil --root ../coil-regex/src --ffi-search-path "$(dirname "$lib")" \
  --allow-dload pcre2-8 --dload-pin pcre2-8=$(sha256sum "$lib" | cut -d' ' -f1) app.hy
```

`--dload-trusted pcre2-8` instead of the pin skips the hash and lets the system loader find the library.

See [consume.md](https://github.com/ardax-corp/coil-regex/blob/main/docs/consume.md) for flags, `RegexError`, and `fn drop()` lifecycle.

## Migrating from virtual `regex`

Add coil-regex to `[module].roots` — `use regex::{compile}` without roots is a module-not-found error. Recompile any stale `.hyc` archives (archive **2.11** drops the old `regex_*` HostInvoke table).

---

## Related

- [Getting Started](/docs/manual/getting-started)
- [Modules](/docs/references/modules)
