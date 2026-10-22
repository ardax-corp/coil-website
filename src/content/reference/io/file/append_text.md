---
slug: "io/file/append_text"
title: "append_text"
description: "Appends text to the file at path, creating it if needed. Needs --allow-write."
module: "io::file"
kind: "fn"
name: "append_text"
signature: "fn append_text(string path, string text) -> Result<int, IoError>"
import: "use io::file::{append_text};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/b5b5517a66f16a51245becefecbc896a1a674022/src/io/file.hy#L114"
order: 5
---

Appends [`text`](/docs/reference/text) to the file at [`path`](/docs/reference/path), creating it if needed. Needs `--allow-write`.

## Parameters

| Name | Type |
|------|------|
| `path` | `string` |
| `text` | `string` |

## Returns

`Result<int, IoError>`

## See also

- [`text`](/docs/reference/text)
- [`path`](/docs/reference/path)
- [`read_bytes`](/docs/reference/io/file/read_bytes): Reads the whole file at path.
- [`write_bytes`](/docs/reference/io/file/write_bytes): Replaces the contents of the file at path with buf, creating it if needed, and returns the number of bytes written.
- [`read_text`](/docs/reference/io/file/read_text): Reads the whole file at path as UTF-8 text.
- [`write_text`](/docs/reference/io/file/write_text): Replaces the contents of the file at path with text, creating it if needed, and returns the number of bytes written.
- [`append_bytes`](/docs/reference/io/file/append_bytes): Appends buf to the file at path, creating it if needed.
