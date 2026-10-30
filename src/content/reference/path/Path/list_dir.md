---
slug: "path/Path/list_dir"
title: "Path::list_dir"
description: "Returns the names of the entries in this directory. See io::fs::list_dir."
module: "path"
kind: "method"
name: "list_dir"
parent: "Path"
signature: "pub fn list_dir() -> Result<Vec<string>, IoError>"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/861c7aeb486ced606d1bcfb819f42cb6f6934441/src/path.hy#L439"
order: 13
---

Returns the names of the entries in this directory. See [`io::fs::list_dir`](/docs/reference/io/fs/list_dir).

Called on a `Path` value as `value.list_dir(…)`.

## Returns

`Result<Vec<string>, IoError>`

## See also

- [`io::fs::list_dir`](/docs/reference/io/fs/list_dir)
- [`Path`](/docs/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::from`](/docs/reference/path/Path/from): Creates a path from `s` as written.
- [`Path::as_str`](/docs/reference/path/Path/as_str): Returns the path as a string.
- [`Path::join`](/docs/reference/path/Path/join): Returns this path followed by `other`, with exactly one separator between them.
- [`Path::dirname`](/docs/reference/path/Path/dirname): Returns the path without its last component.
- [`Path::basename`](/docs/reference/path/Path/basename): Returns the last component, ignoring trailing separators (`""` for an empty path or `/`).
- [`Path::extension`](/docs/reference/path/Path/extension): Returns the text after the last `.` of the last component, or `""` when there is none.
