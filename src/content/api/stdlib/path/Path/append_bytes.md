---
slug: "stdlib/path/Path/append_bytes"
package: "stdlib"
title: "Path::append_bytes"
description: "Appends buf to the file, creating it if needed. See io::file::append_bytes."
module: "path"
kind: "method"
name: "append_bytes"
parent: "Path"
signature: "pub fn append_bytes(Vec<byte> buf) -> Result<int, IoError>"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/path.hy#L499"
order: 24
---

Appends `buf` to the file, creating it if needed. See [`io::file::append_bytes`](/packages/stdlib/reference/io/file/append_bytes).

Called on a `Path` value as `value.append_bytes(…)`.

## Parameters

| Name | Type |
|------|------|
| `buf` | `Vec<byte>` |

## Returns

`Result<int, IoError>`

## See also

- [`io::file::append_bytes`](/packages/stdlib/reference/io/file/append_bytes)
- [`Path`](/packages/stdlib/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::from`](/packages/stdlib/reference/path/Path/from): Creates a path from `s` as written.
- [`Path::as_str`](/packages/stdlib/reference/path/Path/as_str): Returns the path as a string.
- [`Path::join`](/packages/stdlib/reference/path/Path/join): Returns this path followed by `other`, with exactly one separator between them.
- [`Path::dirname`](/packages/stdlib/reference/path/Path/dirname): Returns the path without its last component.
- [`Path::basename`](/packages/stdlib/reference/path/Path/basename): Returns the last component, ignoring trailing separators (`""` for an empty path or `/`).
- [`Path::extension`](/packages/stdlib/reference/path/Path/extension): Returns the text after the last `.` of the last component, or `""` when there is none.
