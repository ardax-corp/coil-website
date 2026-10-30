---
slug: "stdlib/path/Path/read_bytes"
package: "stdlib"
title: "Path::read_bytes"
description: "Reads the whole file. See io::file::read_bytes."
module: "path"
kind: "method"
name: "read_bytes"
parent: "Path"
signature: "pub fn read_bytes() -> Result<Vec<byte>, IoError>"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/path.hy#L484"
order: 21
---

Reads the whole file. See [`io::file::read_bytes`](/packages/stdlib/reference/io/file/read_bytes).

Called on a `Path` value as `value.read_bytes(…)`.

## Returns

`Result<Vec<byte>, IoError>`

## See also

- [`io::file::read_bytes`](/packages/stdlib/reference/io/file/read_bytes)
- [`Path`](/packages/stdlib/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::from`](/packages/stdlib/reference/path/Path/from): Creates a path from `s` as written.
- [`Path::as_str`](/packages/stdlib/reference/path/Path/as_str): Returns the path as a string.
- [`Path::join`](/packages/stdlib/reference/path/Path/join): Returns this path followed by `other`, with exactly one separator between them.
- [`Path::dirname`](/packages/stdlib/reference/path/Path/dirname): Returns the path without its last component.
- [`Path::basename`](/packages/stdlib/reference/path/Path/basename): Returns the last component, ignoring trailing separators (`""` for an empty path or `/`).
- [`Path::extension`](/packages/stdlib/reference/path/Path/extension): Returns the text after the last `.` of the last component, or `""` when there is none.
