---
slug: "path/Path/append_text"
title: "Path::append_text"
description: "Appends text to the file, creating it if needed. See io::file::append_text."
module: "path"
kind: "method"
name: "append_text"
parent: "Path"
signature: "pub fn append_text(string text) -> Result<int, IoError>"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/bbab8785eee1ff5cde1ade831f952993476bad73/src/path.hy#L486"
order: 23
---

Appends `text` to the file, creating it if needed. See [`io::file::append_text`](/docs/reference/io/file/append_text).

Called on a `Path` value as `value.append_text(…)`.

## Parameters

| Name | Type |
|------|------|
| `text` | `string` |

## Returns

`Result<int, IoError>`

## See also

- [`io::file::append_text`](/docs/reference/io/file/append_text)
- [`Path`](/docs/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::from`](/docs/reference/path/Path/from): Creates a path from `s` as written.
- [`Path::as_str`](/docs/reference/path/Path/as_str): Returns the path as a string.
- [`Path::join`](/docs/reference/path/Path/join): Returns this path followed by `other`, with exactly one separator between them.
- [`Path::dirname`](/docs/reference/path/Path/dirname): Returns the path without its last component.
- [`Path::basename`](/docs/reference/path/Path/basename): Returns the last component, ignoring trailing separators (`""` for an empty path or `/`).
- [`Path::extension`](/docs/reference/path/Path/extension): Returns the text after the last `.` of the last component, or `""` when there is none.
