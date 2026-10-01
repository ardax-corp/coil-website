---
title: "coil-regex"
description: "Userland PCRE2 regex for coil. Replaces the former virtual use regex::{…} module with an FFI package and Regex class with fn drop()."
source: "https://github.com/ardax-corp/coil-regex/blob/aab76a13000a001f6889056d4ba271af3e1e9e62/README.md"
---
# coil-regex

Userland PCRE2 regex for [coil](https://github.com/ardax-corp/coil-lang). Replaces the former virtual `use regex::{…}` module with an FFI package and `Regex` class with `fn drop()`.

## Requirements

- coil-lang with finalizers (inherent `fn drop()`)
- libpcre2-8 (`libpcre2-dev` on Debian/Ubuntu, `pcre2` on Homebrew)
- libffi (for coil FFI)

## Quick start

```bash
make          # native/libregex.{so,dylib,dll}
make smoke    # C ABI smoke (optional)
make test     # coil language harness (needs coil on PATH)
```

Or build only the native tree:

```bash
make -C native
```

Run the demo:

```bash
coil examples/regex_demo.hy
# true,2,a->1 b->2,a|b|c
```

## Docs

- [API](/packages/regex/api)
- [Consuming in a project](/packages/regex/consume)

## License

MIT — see [LICENSE](https://github.com/ardax-corp/coil-regex/tree/aab76a13000a001f6889056d4ba271af3e1e9e62/LICENSE).
