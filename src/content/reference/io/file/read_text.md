---
slug: "io/file/read_text"
title: "read_text"
description: "Read an entire file as a UTF-8 string."
module: "io::file"
kind: "fn"
name: "read_text"
signature: "fn read_text(string path) -> Result<string, IoError>"
import: "use io::file::{read_text};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/io/file.hy#L44"
order: 2
---

Read an entire file as a UTF-8 string.

## Parameters

| Name | Type |
|------|------|
| `path` | `string` |

## Returns

`Result<string, IoError>`

## See also

- [`read_bytes`](/docs/reference/io/file/read_bytes): Read an entire file as bytes (open + read_to_end + close).
- [`write_bytes`](/docs/reference/io/file/write_bytes): Write buf to path, creating/truncating ("w").
- [`write_text`](/docs/reference/io/file/write_text): Write a UTF-8 string to path.
- [`append_bytes`](/docs/reference/io/file/append_bytes): Append bytes to path ("a" mode).
- [`append_text`](/docs/reference/io/file/append_text): Append a UTF-8 string to path.
