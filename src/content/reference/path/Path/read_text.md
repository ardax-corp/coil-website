---
slug: "path/Path/read_text"
title: "Path::read_text"
description: "Reads the whole file as UTF-8 text. See io::file::read_text."
module: "path"
kind: "method"
name: "read_text"
parent: "Path"
signature: "pub fn read_text() -> Result<string, IoError>"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/534e3d9afcabefedc5f1aaeedc5f294cae0a64d6/src/path.hy#L466"
order: 19
---

Reads the whole file as UTF-8 text. See [`io::file::read_text`](/docs/reference/io/file/read_text).

Called on a `Path` value as `value.read_text(…)`.

## Returns

`Result<string, IoError>`

## See also

- [`io::file::read_text`](/docs/reference/io/file/read_text)
- [`Path`](/docs/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::from`](/docs/reference/path/Path/from): Creates a path from `s` as written.
- [`Path::as_str`](/docs/reference/path/Path/as_str): Returns the path as a string.
- [`Path::join`](/docs/reference/path/Path/join): Returns this path followed by `other`, with exactly one separator between them.
- [`Path::dirname`](/docs/reference/path/Path/dirname): Returns the path without its last component.
- [`Path::basename`](/docs/reference/path/Path/basename): Returns the last component, ignoring trailing separators (`""` for an empty path or `/`).
- [`Path::extension`](/docs/reference/path/Path/extension): Returns the text after the last `.` of the last component, or `""` when there is none.
