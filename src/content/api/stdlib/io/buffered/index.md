---
slug: "stdlib/io/buffered/index"
package: "stdlib"
title: "io::buffered"
description: "Buffered, deadline-aware Reader and Writer over io streams."
module: "io::buffered"
kind: "module"
name: "io::buffered"
origin: "stdlib"
auto: false
order: 16
---

Part of [coil-stdlib](/packages/stdlib), not the compiler. spool projects declare it as their `stdlib` dependency (`spool new` adds it); with plain `coil`, pass `--root` with the `src` of a coil-stdlib checkout.

Import what you use (`use path::*` is not allowed):

```coil
use io::buffered::{Reader, Writer};
```

## Types

| Name | Description |
|------|-------------|
| [`Reader`](/packages/stdlib/reference/io/buffered/Reader) | A buffered reader over any `Stream`: lines, delimited frames, exact counts, and the leftover bytes for a protocol switch. |
| [`Writer`](/packages/stdlib/reference/io/buffered/Writer) | A buffered writer over any `Stream`: small writes collect in memory and go out in one call once 8 KiB are held, or on `flush`. |
