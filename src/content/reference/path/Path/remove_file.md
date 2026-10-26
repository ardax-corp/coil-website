---
slug: "path/Path/remove_file"
title: "Path::remove_file"
description: "Deletes the file at this path. See io::fs::remove_file."
module: "path"
kind: "method"
name: "remove_file"
parent: "Path"
signature: "pub fn remove_file() -> Result<int, IoError>"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/a5615b7cd941dfa56fc0e1f42de4832c354630a3/src/path.hy#L456"
order: 16
---

Deletes the file at this path. See [`io::fs::remove_file`](/docs/reference/io/fs/remove_file).

Called on a `Path` value as `value.remove_file(…)`.

## Returns

`Result<int, IoError>`

## See also

- [`io::fs::remove_file`](/docs/reference/io/fs/remove_file)
- [`Path`](/docs/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::from`](/docs/reference/path/Path/from): Creates a path from `s` as written.
- [`Path::as_str`](/docs/reference/path/Path/as_str): Returns the path as a string.
- [`Path::join`](/docs/reference/path/Path/join): Returns this path followed by `other`, with exactly one separator between them.
- [`Path::dirname`](/docs/reference/path/Path/dirname): Returns the path without its last component.
- [`Path::basename`](/docs/reference/path/Path/basename): Returns the last component, ignoring trailing separators (`""` for an empty path or `/`).
- [`Path::extension`](/docs/reference/path/Path/extension): Returns the text after the last `.` of the last component, or `""` when there is none.
