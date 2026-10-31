---
slug: "stdlib/io/index"
package: "stdlib"
title: "io"
description: "Stdlib adapters over the compiler's io module: blocking helpers, whole-file reads and buffered streams."
module: "io"
kind: "module"
name: "io"
origin: "stdlib"
auto: false
order: 27
---

The streams themselves ([`Stream`](/docs/reference/io/Stream), [`open`](/docs/reference/io/open), [`read`](/docs/reference/io/fn.read), [`write`](/docs/reference/io/fn.write)) are the compiler's [`io`](/docs/reference/io) module; these submodules are coil-stdlib code built on top of it.

Part of [coil-stdlib](/packages/stdlib), not the compiler. spool projects declare it as their `stdlib` dependency (`spool new` adds it); with plain `coil`, pass `--root` with the `src` of a coil-stdlib checkout.

## Modules

| Module | Description |
|--------|-------------|
| [`io::buffered`](/packages/stdlib/reference/io/buffered) | Buffered, deadline-aware Reader and Writer over io streams. |
| [`io::file`](/packages/stdlib/reference/io/file) | Read and write whole files in one call. |
| [`io::sync`](/packages/stdlib/reference/io/sync) | Blocking IO helpers: println, read_line, write_all, read_to_end. |
