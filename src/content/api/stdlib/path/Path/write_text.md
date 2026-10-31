---
slug: "stdlib/path/Path/write_text"
package: "stdlib"
title: "Path::write_text"
description: "Replaces the file's contents with text and returns the number of bytes written. See io::file::write_text."
module: "path"
kind: "method"
name: "write_text"
parent: "Path"
signature: "pub fn write_text(string text) -> Result<int, IoError>"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/path.hy#L479"
order: 20
---

Replaces the file's contents with `text` and returns the number of bytes written. See [`io::file::write_text`](/packages/stdlib/reference/io/file/write_text).

Called on a `Path` value as `value.write_text(…)`.

## Parameters

| Name | Type |
|------|------|
| `text` | `string` |

## Returns

`Result<int, IoError>`

## See also

- [`io::file::write_text`](/packages/stdlib/reference/io/file/write_text)
- [`Path`](/packages/stdlib/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::from`](/packages/stdlib/reference/path/Path/from): Creates a path from `s` as written.
- [`Path::as_str`](/packages/stdlib/reference/path/Path/as_str): Returns the path as a string.
- [`Path::join`](/packages/stdlib/reference/path/Path/join): Returns this path followed by `other`, with exactly one separator between them.
- [`Path::dirname`](/packages/stdlib/reference/path/Path/dirname): Returns the path without its last component.
- [`Path::basename`](/packages/stdlib/reference/path/Path/basename): Returns the last component, ignoring trailing separators (`""` for an empty path or `/`).
- [`Path::extension`](/packages/stdlib/reference/path/Path/extension): Returns the text after the last `.` of the last component, or `""` when there is none.
