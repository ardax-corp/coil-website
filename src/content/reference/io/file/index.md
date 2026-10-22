---
slug: "io/file/index"
title: "io::file"
description: "The io::file module."
module: "io::file"
kind: "module"
name: "io::file"
origin: "stdlib"
auto: false
order: 23
---

Part of [coil-stdlib](/packages/stdlib): add it with `spool add coil-stdlib` or pass `--root path/to/coil-stdlib/src`.

Import what you use (`use path::*` is not allowed):

```coil
use io::file::{read_bytes, write_bytes};
```

## Functions

| Name | Description |
|------|-------------|
| [`read_bytes`](/docs/reference/io/file/read_bytes) | Read an entire file as bytes (`open` + `read_to_end` + `close`). |
| [`write_bytes`](/docs/reference/io/file/write_bytes) | Write `buf` to [`path`](/docs/reference/path), creating/truncating (`"w"`). |
| [`read_text`](/docs/reference/io/file/read_text) | Read an entire file as a UTF-8 string. |
| [`write_text`](/docs/reference/io/file/write_text) | Write a UTF-8 string to [`path`](/docs/reference/path). |
| [`append_bytes`](/docs/reference/io/file/append_bytes) | Append bytes to [`path`](/docs/reference/path) (`"a"` mode). |
| [`append_text`](/docs/reference/io/file/append_text) | Append a UTF-8 string to [`path`](/docs/reference/path). |
