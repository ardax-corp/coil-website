---
slug: "path/Path/exists"
title: "Path::exists"
description: "Returns whether something exists at this path. See io::fs::exists."
module: "path"
kind: "method"
name: "exists"
parent: "Path"
signature: "pub fn exists() -> Result<bool, IoError>"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/534e3d9afcabefedc5f1aaeedc5f294cae0a64d6/src/path.hy#L411"
order: 9
---

Returns whether something exists at this path. See [`io::fs::exists`](/docs/reference/io/fs/exists).

Called on a `Path` value as `value.exists(…)`.

## Returns

`Result<bool, IoError>`

## See also

- [`io::fs::exists`](/docs/reference/io/fs/exists)
- [`Path`](/docs/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::from`](/docs/reference/path/Path/from): Creates a path from `s` as written.
- [`Path::as_str`](/docs/reference/path/Path/as_str): Returns the path as a string.
- [`Path::join`](/docs/reference/path/Path/join): Returns this path followed by `other`, with exactly one separator between them.
- [`Path::dirname`](/docs/reference/path/Path/dirname): Returns the path without its last component.
- [`Path::basename`](/docs/reference/path/Path/basename): Returns the last component, ignoring trailing separators (`""` for an empty path or `/`).
- [`Path::extension`](/docs/reference/path/Path/extension): Returns the text after the last `.` of the last component, or `""` when there is none.
