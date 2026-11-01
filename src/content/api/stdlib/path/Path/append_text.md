---
slug: "stdlib/path/Path/append_text"
package: "stdlib"
title: "Path::append_text"
description: "Appends text to the file, creating it if needed. See io::file::append_text."
module: "path"
kind: "method"
name: "append_text"
parent: "Path"
signature: "pub fn append_text(string text) -> Result<int, IoError>"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/path.coil#L494"
order: 23
---

Appends `text` to the file, creating it if needed. See [`io::file::append_text`](/packages/stdlib/reference/io/file/append_text).

Called on a `Path` value as `value.append_text(…)`.

## Parameters

| Name | Type |
|------|------|
| `text` | `string` |

## Returns

`Result<int, IoError>`

## See also

- [`io::file::append_text`](/packages/stdlib/reference/io/file/append_text)
- [`Path`](/packages/stdlib/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::from`](/packages/stdlib/reference/path/Path/from): Creates a path from `s` as written.
- [`Path::as_str`](/packages/stdlib/reference/path/Path/as_str): Returns the path as a string.
- [`Path::join`](/packages/stdlib/reference/path/Path/join): Returns this path followed by `other`, with exactly one separator between them.
- [`Path::dirname`](/packages/stdlib/reference/path/Path/dirname): Returns the path without its last component.
- [`Path::basename`](/packages/stdlib/reference/path/Path/basename): Returns the last component, ignoring trailing separators (`""` for an empty path or `/`).
- [`Path::extension`](/packages/stdlib/reference/path/Path/extension): Returns the text after the last `.` of the last component, or `""` when there is none.
