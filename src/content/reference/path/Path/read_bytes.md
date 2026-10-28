---
slug: "path/Path/read_bytes"
title: "Path::read_bytes"
description: "Reads the whole file. See io::file::read_bytes."
module: "path"
kind: "method"
name: "read_bytes"
parent: "Path"
signature: "pub fn read_bytes() -> Result<Vec<byte>, IoError>"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/69c79b1dd8c070fe7ca03a71c7a372ea4cc06f82/src/path.hy#L484"
order: 21
---

Reads the whole file. See [`io::file::read_bytes`](/docs/reference/io/file/read_bytes).

Called on a `Path` value as `value.read_bytes(…)`.

## Returns

`Result<Vec<byte>, IoError>`

## See also

- [`io::file::read_bytes`](/docs/reference/io/file/read_bytes)
- [`Path`](/docs/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::from`](/docs/reference/path/Path/from): Creates a path from `s` as written.
- [`Path::as_str`](/docs/reference/path/Path/as_str): Returns the path as a string.
- [`Path::join`](/docs/reference/path/Path/join): Returns this path followed by `other`, with exactly one separator between them.
- [`Path::dirname`](/docs/reference/path/Path/dirname): Returns the path without its last component.
- [`Path::basename`](/docs/reference/path/Path/basename): Returns the last component, ignoring trailing separators (`""` for an empty path or `/`).
- [`Path::extension`](/docs/reference/path/Path/extension): Returns the text after the last `.` of the last component, or `""` when there is none.
