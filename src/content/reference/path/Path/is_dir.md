---
slug: "path/Path/is_dir"
title: "Path::is_dir"
description: "Returns whether this path is a directory. See io::fs::is_dir."
module: "path"
kind: "method"
name: "is_dir"
parent: "Path"
signature: "pub fn is_dir() -> Result<bool, IoError>"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/69c79b1dd8c070fe7ca03a71c7a372ea4cc06f82/src/path.hy#L429"
order: 11
---

Returns whether this path is a directory. See [`io::fs::is_dir`](/docs/reference/io/fs/is_dir).

Called on a `Path` value as `value.is_dir(…)`.

## Returns

`Result<bool, IoError>`

## See also

- [`io::fs::is_dir`](/docs/reference/io/fs/is_dir)
- [`Path`](/docs/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::from`](/docs/reference/path/Path/from): Creates a path from `s` as written.
- [`Path::as_str`](/docs/reference/path/Path/as_str): Returns the path as a string.
- [`Path::join`](/docs/reference/path/Path/join): Returns this path followed by `other`, with exactly one separator between them.
- [`Path::dirname`](/docs/reference/path/Path/dirname): Returns the path without its last component.
- [`Path::basename`](/docs/reference/path/Path/basename): Returns the last component, ignoring trailing separators (`""` for an empty path or `/`).
- [`Path::extension`](/docs/reference/path/Path/extension): Returns the text after the last `.` of the last component, or `""` when there is none.
