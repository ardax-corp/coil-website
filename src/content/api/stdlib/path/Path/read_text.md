---
slug: "stdlib/path/Path/read_text"
package: "stdlib"
title: "Path::read_text"
description: "Reads the whole file as UTF-8 text. See io::file::read_text."
module: "path"
kind: "method"
name: "read_text"
parent: "Path"
signature: "pub fn read_text() -> Result<string, IoError>"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/path.hy#L474"
order: 19
---

Reads the whole file as UTF-8 text. See [`io::file::read_text`](/packages/stdlib/reference/io/file/read_text).

Called on a `Path` value as `value.read_text(…)`.

## Returns

`Result<string, IoError>`

## See also

- [`io::file::read_text`](/packages/stdlib/reference/io/file/read_text)
- [`Path`](/packages/stdlib/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::from`](/packages/stdlib/reference/path/Path/from): Creates a path from `s` as written.
- [`Path::as_str`](/packages/stdlib/reference/path/Path/as_str): Returns the path as a string.
- [`Path::join`](/packages/stdlib/reference/path/Path/join): Returns this path followed by `other`, with exactly one separator between them.
- [`Path::dirname`](/packages/stdlib/reference/path/Path/dirname): Returns the path without its last component.
- [`Path::basename`](/packages/stdlib/reference/path/Path/basename): Returns the last component, ignoring trailing separators (`""` for an empty path or `/`).
- [`Path::extension`](/packages/stdlib/reference/path/Path/extension): Returns the text after the last `.` of the last component, or `""` when there is none.
