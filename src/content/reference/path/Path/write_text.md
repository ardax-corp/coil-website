---
slug: "path/Path/write_text"
title: "Path::write_text"
description: "Replaces the file's contents with text and returns the number of bytes written. See io::file::write_text."
module: "path"
kind: "method"
name: "write_text"
parent: "Path"
signature: "pub fn write_text(string text) -> Result<int, IoError>"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/de7dc3b341ae9bbbcdd775a2dfa282870f0cbf82/src/path.hy#L471"
order: 20
---

Replaces the file's contents with `text` and returns the number of bytes written. See [`io::file::write_text`](/docs/reference/io/file/write_text).

Called on a `Path` value as `value.write_text(…)`.

## Parameters

| Name | Type |
|------|------|
| `text` | `string` |

## Returns

`Result<int, IoError>`

## See also

- [`io::file::write_text`](/docs/reference/io/file/write_text)
- [`Path`](/docs/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::from`](/docs/reference/path/Path/from): Creates a path from s as written.
- [`Path::as_str`](/docs/reference/path/Path/as_str): Returns the path as a string.
- [`Path::join`](/docs/reference/path/Path/join): Returns this path followed by other, with exactly one separator between them.
- [`Path::dirname`](/docs/reference/path/Path/dirname): Returns the path without its last component.
- [`Path::basename`](/docs/reference/path/Path/basename): Returns the last component, ignoring trailing separators ("" for an empty path or /).
- [`Path::extension`](/docs/reference/path/Path/extension): Returns the text after the last .
