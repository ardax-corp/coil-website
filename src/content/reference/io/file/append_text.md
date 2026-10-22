---
slug: "io/file/append_text"
title: "append_text"
description: "Append a UTF-8 string to path."
module: "io::file"
kind: "fn"
name: "append_text"
signature: "fn append_text(string path, string text) -> Result<int, IoError>"
import: "use io::file::{append_text};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/io/file.hy#L76"
order: 5
---

Append a UTF-8 string to [`path`](/docs/reference/path).

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
- [`write_text`](/docs/reference/io/file/write_text): Write a UTF-8 string to path.
- [`append_bytes`](/docs/reference/io/file/append_bytes): Append bytes to path ("a" mode).
