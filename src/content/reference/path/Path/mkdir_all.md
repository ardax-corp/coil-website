---
slug: "path/Path/mkdir_all"
title: "Path::mkdir_all"
description: "Creates this directory and any missing parents. See io::fs::create_dir_all."
module: "path"
kind: "method"
name: "mkdir_all"
parent: "Path"
signature: "pub fn mkdir_all() -> Result<int, IoError>"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/47c059804a7a85f79bd400eb26bb1241e7b44441/src/path.hy#L450"
order: 15
---

Creates this directory and any missing parents. See [`io::fs::create_dir_all`](/docs/reference/io/fs/create_dir_all).

Called on a `Path` value as `value.mkdir_all(…)`.

## Returns

`Result<int, IoError>`

## See also

- [`io::fs::create_dir_all`](/docs/reference/io/fs/create_dir_all)
- [`Path`](/docs/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::from`](/docs/reference/path/Path/from): Creates a path from `s` as written.
- [`Path::as_str`](/docs/reference/path/Path/as_str): Returns the path as a string.
- [`Path::join`](/docs/reference/path/Path/join): Returns this path followed by `other`, with exactly one separator between them.
- [`Path::dirname`](/docs/reference/path/Path/dirname): Returns the path without its last component.
- [`Path::basename`](/docs/reference/path/Path/basename): Returns the last component, ignoring trailing separators (`""` for an empty path or `/`).
- [`Path::extension`](/docs/reference/path/Path/extension): Returns the text after the last `.` of the last component, or `""` when there is none.
