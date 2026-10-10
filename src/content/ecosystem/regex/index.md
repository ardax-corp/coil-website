---
title: "coil-regex"
description: "Userland PCRE2 regex for coil. Replaces the former virtual use regex::{…} module with an FFI package and Regex class with fn drop()."
source: "https://github.com/ardax-corp/coil-regex/blob/bff02b7f82ecbf0c304f99daef5b0349a63faf99/README.md"
---
# coil-regex

Userland PCRE2 regex for [coil](https://github.com/ardax-corp/coil-lang). Replaces the former virtual `use regex::{…}` module with an FFI package and `Regex` class with `fn drop()`.

## Requirements

- coil-lang with finalizers (inherent `fn drop()`)
- libpcre2-8 (`libpcre2-dev` on Debian/Ubuntu, `pcre2` on Homebrew)
- libffi (for coil FFI)

There is no native shim to build: `src/regex.hy` calls libpcre2-8 directly through `extern`.

## Quick start

```bash
make test     # coil language harness (needs coil on PATH)
```

Run the demo (the library must be granted and pinned, see [consume.md](/packages/regex/consume)):

```bash
coil --allow-dload pcre2-8 --dload-pin pcre2-8=<sha256> --ffi-search-path <libdir> examples/regex_demo.hy
# true,2,a->1 b->2,a|b|c
```

## Docs

- [API](/packages/regex/api)
- [Consuming in a project](/packages/regex/consume)

## License

MIT — see [LICENSE](https://github.com/ardax-corp/coil-regex/tree/bff02b7f82ecbf0c304f99daef5b0349a63faf99/LICENSE).
