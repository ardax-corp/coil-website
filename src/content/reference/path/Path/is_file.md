---
slug: "path/Path/is_file"
title: "Path::is_file"
description: "Returns whether this path is a regular file. See io::fs::is_file."
module: "path"
kind: "method"
name: "is_file"
parent: "Path"
signature: "pub fn is_file() -> Result<bool, IoError>"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/de7dc3b341ae9bbbcdd775a2dfa282870f0cbf82/src/path.hy#L416"
order: 10
---

Returns whether this path is a regular file. See [`io::fs::is_file`](/docs/reference/io/fs/is_file).

Called on a `Path` value as `value.is_file(…)`.

## Returns

`Result<bool, IoError>`

## See also

- [`io::fs::is_file`](/docs/reference/io/fs/is_file)
- [`Path`](/docs/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::from`](/docs/reference/path/Path/from): Creates a path from s as written.
- [`Path::as_str`](/docs/reference/path/Path/as_str): Returns the path as a string.
- [`Path::join`](/docs/reference/path/Path/join): Returns this path followed by other, with exactly one separator between them.
- [`Path::dirname`](/docs/reference/path/Path/dirname): Returns the path without its last component.
- [`Path::basename`](/docs/reference/path/Path/basename): Returns the last component, ignoring trailing separators ("" for an empty path or /).
- [`Path::extension`](/docs/reference/path/Path/extension): Returns the text after the last .
