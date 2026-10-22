---
slug: "path/Path/append_bytes"
title: "Path::append_bytes"
description: "Appends buf to the file, creating it if needed. See io::file::append_bytes."
module: "path"
kind: "method"
name: "append_bytes"
parent: "Path"
signature: "pub fn append_bytes(Vec<byte> buf) -> Result<int, IoError>"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/path.hy#L491"
order: 24
---

Appends `buf` to the file, creating it if needed. See [`io::file::append_bytes`](/docs/reference/io/file/append_bytes).

Called on a `Path` value as `value.append_bytes(…)`.

## Parameters

| Name | Type |
|------|------|
| `buf` | `Vec<byte>` |

## Returns

`Result<int, IoError>`

## See also

- [`io::file::append_bytes`](/docs/reference/io/file/append_bytes)
- [`Path`](/docs/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::from`](/docs/reference/path/Path/from): Creates a path from s as written.
- [`Path::as_str`](/docs/reference/path/Path/as_str): Returns the path as a string.
- [`Path::join`](/docs/reference/path/Path/join): Returns this path followed by other, with exactly one separator between them.
- [`Path::dirname`](/docs/reference/path/Path/dirname): Returns the path without its last component.
- [`Path::basename`](/docs/reference/path/Path/basename): Returns the last component, ignoring trailing separators ("" for an empty path or /).
- [`Path::extension`](/docs/reference/path/Path/extension): Returns the text after the last .
