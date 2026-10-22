---
slug: "io/file/read_bytes"
title: "read_bytes"
description: "Read an entire file as bytes (open + read_to_end + close)."
module: "io::file"
kind: "fn"
name: "read_bytes"
signature: "fn read_bytes(string path) -> Result<Vec<byte>, IoError>"
import: "use io::file::{read_bytes};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/io/file.hy#L10"
order: 0
---

Read an entire file as bytes (`open` + `read_to_end` + `close`).

## Parameters

| Name | Type |
|------|------|
| `path` | `string` |

## Returns

`Result<Vec<byte>, IoError>`

## See also

- [`write_bytes`](/docs/reference/io/file/write_bytes): Write buf to path, creating/truncating ("w").
- [`read_text`](/docs/reference/io/file/read_text): Read an entire file as a UTF-8 string.
- [`write_text`](/docs/reference/io/file/write_text): Write a UTF-8 string to path.
- [`append_bytes`](/docs/reference/io/file/append_bytes): Append bytes to path ("a" mode).
- [`append_text`](/docs/reference/io/file/append_text): Append a UTF-8 string to path.
