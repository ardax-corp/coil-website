---
slug: "stdlib/io/file/append_bytes"
package: "stdlib"
title: "append_bytes"
description: "Appends buf to the file at path, creating it if needed. Needs --allow-write."
module: "io::file"
kind: "fn"
name: "append_bytes"
signature: "fn append_bytes(string path, Vec<byte> buf) -> Result<int, IoError>"
import: "use io::file::{append_bytes};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/io/file.coil#L97"
order: 4
---

Appends `buf` to the file at `path`, creating it if needed. Needs `--allow-write`.

## Parameters

| Name | Type |
|------|------|
| `path` | `string` |
| `buf` | `Vec<byte>` |

## Returns

`Result<int, IoError>`

## See also

- [`read_bytes`](/packages/stdlib/reference/io/file/read_bytes): Reads the whole file at `path`.
- [`write_bytes`](/packages/stdlib/reference/io/file/write_bytes): Replaces the contents of the file at `path` with `buf`, creating it if needed, and returns the number of bytes written.
- [`read_text`](/packages/stdlib/reference/io/file/read_text): Reads the whole file at `path` as UTF-8 text.
- [`write_text`](/packages/stdlib/reference/io/file/write_text): Replaces the contents of the file at `path` with `text`, creating it if needed, and returns the number of bytes written.
- [`append_text`](/packages/stdlib/reference/io/file/append_text): Appends `text` to the file at `path`, creating it if needed.
