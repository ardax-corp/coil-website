---
slug: "stdlib/io/file/append_text"
package: "stdlib"
title: "append_text"
description: "Appends text to the file at path, creating it if needed. Needs --allow-write."
module: "io::file"
kind: "fn"
name: "append_text"
signature: "fn append_text(string path, string text) -> Result<int, IoError>"
import: "use io::file::{append_text};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/io/file.hy#L114"
order: 5
---

Appends `text` to the file at `path`, creating it if needed. Needs `--allow-write`.

## Parameters

| Name | Type |
|------|------|
| `path` | `string` |
| `text` | `string` |

## Returns

`Result<int, IoError>`

## See also

- [`read_bytes`](/packages/stdlib/reference/io/file/read_bytes): Reads the whole file at `path`.
- [`write_bytes`](/packages/stdlib/reference/io/file/write_bytes): Replaces the contents of the file at `path` with `buf`, creating it if needed, and returns the number of bytes written.
- [`read_text`](/packages/stdlib/reference/io/file/read_text): Reads the whole file at `path` as UTF-8 text.
- [`write_text`](/packages/stdlib/reference/io/file/write_text): Replaces the contents of the file at `path` with `text`, creating it if needed, and returns the number of bytes written.
- [`append_bytes`](/packages/stdlib/reference/io/file/append_bytes): Appends `buf` to the file at `path`, creating it if needed.
