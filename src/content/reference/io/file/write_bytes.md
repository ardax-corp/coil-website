---
slug: "io/file/write_bytes"
title: "write_bytes"
description: "Write buf to path, creating/truncating (\"w\")."
module: "io::file"
kind: "fn"
name: "write_bytes"
signature: "fn write_bytes(string path, Vec<byte> buf) -> Result<int, IoError>"
import: "use io::file::{write_bytes};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/io/file.hy#L27"
order: 1
---

Write `buf` to [`path`](/docs/reference/path), creating/truncating (`"w"`).

## Parameters

| Name | Type |
|------|------|
| `path` | `string` |
| `buf` | `Vec<byte>` |

## Returns

`Result<int, IoError>`

## See also

- [`path`](/docs/reference/path)
- [`read_bytes`](/docs/reference/io/file/read_bytes): Read an entire file as bytes (open + read_to_end + close).
- [`read_text`](/docs/reference/io/file/read_text): Read an entire file as a UTF-8 string.
- [`write_text`](/docs/reference/io/file/write_text): Write a UTF-8 string to path.
- [`append_bytes`](/docs/reference/io/file/append_bytes): Append bytes to path ("a" mode).
- [`append_text`](/docs/reference/io/file/append_text): Append a UTF-8 string to path.
