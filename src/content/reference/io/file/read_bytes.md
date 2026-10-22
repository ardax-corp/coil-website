---
slug: "io/file/read_bytes"
title: "read_bytes"
description: "Reads the whole file at path."
module: "io::file"
kind: "fn"
name: "read_bytes"
signature: "fn read_bytes(string path) -> Result<Vec<byte>, IoError>"
import: "use io::file::{read_bytes};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/io/file.hy#L16"
order: 0
---

Reads the whole file at `path`.

Needs `--allow-read`.

## Parameters

| Name | Type |
|------|------|
| `path` | `string` |

## Returns

`Result<Vec<byte>, IoError>`

## Errors

`IoError::NotFound` when the file does not exist, `PermissionDenied` when it cannot be opened.

## See also

- [`write_bytes`](/docs/reference/io/file/write_bytes): Replaces the contents of the file at path with buf, creating it if needed, and returns the number of bytes written.
- [`read_text`](/docs/reference/io/file/read_text): Reads the whole file at path as UTF-8 text.
- [`write_text`](/docs/reference/io/file/write_text): Replaces the contents of the file at path with text, creating it if needed, and returns the number of bytes written.
- [`append_bytes`](/docs/reference/io/file/append_bytes): Appends buf to the file at path, creating it if needed.
- [`append_text`](/docs/reference/io/file/append_text): Appends text to the file at path, creating it if needed.
