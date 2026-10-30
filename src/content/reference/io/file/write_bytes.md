---
slug: "io/file/write_bytes"
title: "write_bytes"
description: "Replaces the contents of the file at path with buf, creating it if needed, and returns the number of bytes written. Needs --allow-write."
module: "io::file"
kind: "fn"
name: "write_bytes"
signature: "fn write_bytes(string path, Vec<byte> buf) -> Result<int, IoError>"
import: "use io::file::{write_bytes};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/861c7aeb486ced606d1bcfb819f42cb6f6934441/src/io/file.hy#L33"
order: 1
---

Replaces the contents of the file at `path` with `buf`, creating it if needed, and returns the number of bytes written. Needs `--allow-write`.

## Parameters

| Name | Type |
|------|------|
| `path` | `string` |
| `buf` | `Vec<byte>` |

## Returns

`Result<int, IoError>`

## See also

- [`read_bytes`](/docs/reference/io/file/read_bytes): Reads the whole file at `path`.
- [`read_text`](/docs/reference/io/file/read_text): Reads the whole file at `path` as UTF-8 text.
- [`write_text`](/docs/reference/io/file/write_text): Replaces the contents of the file at `path` with `text`, creating it if needed, and returns the number of bytes written.
- [`append_bytes`](/docs/reference/io/file/append_bytes): Appends `buf` to the file at `path`, creating it if needed.
- [`append_text`](/docs/reference/io/file/append_text): Appends `text` to the file at `path`, creating it if needed.
