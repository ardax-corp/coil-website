---
slug: "stdlib/io/file/index"
package: "stdlib"
title: "io::file"
description: "Read and write whole files in one call."
module: "io::file"
kind: "module"
name: "io::file"
origin: "stdlib"
auto: false
order: 17
---

Each function opens the file, does the whole job and closes it. Reading needs `--allow-read` and writing `--allow-write`. For large files or streaming, open a [`Stream`](/docs/reference/io/Stream) with [`io::open`](/docs/reference/io/open) and use [`io::sync`](/packages/stdlib/reference/io/sync).

Part of [coil-stdlib](/packages/stdlib), not the compiler. spool projects declare it as their `stdlib` dependency (`spool new` adds it); with plain `coil`, pass `--root` with the `src` of a coil-stdlib checkout.

Import what you use (`use path::*` is not allowed):

```coil
use io::file::{read_bytes, write_bytes};
```

## Functions

| Name | Description |
|------|-------------|
| [`read_bytes`](/packages/stdlib/reference/io/file/read_bytes) | Reads the whole file at `path`. |
| [`write_bytes`](/packages/stdlib/reference/io/file/write_bytes) | Replaces the contents of the file at `path` with `buf`, creating it if needed, and returns the number of bytes written. |
| [`read_text`](/packages/stdlib/reference/io/file/read_text) | Reads the whole file at `path` as UTF-8 text. |
| [`write_text`](/packages/stdlib/reference/io/file/write_text) | Replaces the contents of the file at `path` with `text`, creating it if needed, and returns the number of bytes written. |
| [`append_bytes`](/packages/stdlib/reference/io/file/append_bytes) | Appends `buf` to the file at `path`, creating it if needed. |
| [`append_text`](/packages/stdlib/reference/io/file/append_text) | Appends `text` to the file at `path`, creating it if needed. |
