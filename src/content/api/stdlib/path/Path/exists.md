---
slug: "stdlib/path/Path/exists"
package: "stdlib"
title: "Path::exists"
description: "Returns whether something exists at this path. See io::fs::exists."
module: "path"
kind: "method"
name: "exists"
parent: "Path"
signature: "pub fn exists() -> Result<bool, IoError>"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/path.hy#L419"
order: 9
---

Returns whether something exists at this path. See [`io::fs::exists`](/docs/reference/io/fs/exists).

Called on a `Path` value as `value.exists(…)`.

## Returns

`Result<bool, IoError>`

## See also

- [`io::fs::exists`](/docs/reference/io/fs/exists)
- [`Path`](/packages/stdlib/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::from`](/packages/stdlib/reference/path/Path/from): Creates a path from `s` as written.
- [`Path::as_str`](/packages/stdlib/reference/path/Path/as_str): Returns the path as a string.
- [`Path::join`](/packages/stdlib/reference/path/Path/join): Returns this path followed by `other`, with exactly one separator between them.
- [`Path::dirname`](/packages/stdlib/reference/path/Path/dirname): Returns the path without its last component.
- [`Path::basename`](/packages/stdlib/reference/path/Path/basename): Returns the last component, ignoring trailing separators (`""` for an empty path or `/`).
- [`Path::extension`](/packages/stdlib/reference/path/Path/extension): Returns the text after the last `.` of the last component, or `""` when there is none.
