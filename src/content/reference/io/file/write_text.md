---
slug: "io/file/write_text"
title: "write_text"
description: "Write a UTF-8 string to path."
module: "io::file"
kind: "fn"
name: "write_text"
signature: "fn write_text(string path, string text) -> Result<int, IoError>"
import: "use io::file::{write_text};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/io/file.hy#L53"
order: 3
---

Write a UTF-8 string to [`path`](/docs/reference/path).

## Parameters

| Name | Type |
|------|------|
| `path` | `string` |
| `text` | `string` |

## Returns

`Result<int, IoError>`

## See also

- [`path`](/docs/reference/path)
- [`read_bytes`](/docs/reference/io/file/read_bytes): Read an entire file as bytes (open + read_to_end + close).
- [`write_bytes`](/docs/reference/io/file/write_bytes): Write buf to path, creating/truncating ("w").
- [`read_text`](/docs/reference/io/file/read_text): Read an entire file as a UTF-8 string.
- [`append_bytes`](/docs/reference/io/file/append_bytes): Append bytes to path ("a" mode).
- [`append_text`](/docs/reference/io/file/append_text): Append a UTF-8 string to path.
