---
slug: "stdlib/path/Path/is_dir"
package: "stdlib"
title: "Path::is_dir"
description: "Returns whether this path is a directory. See io::fs::is_dir."
module: "path"
kind: "method"
name: "is_dir"
parent: "Path"
signature: "pub fn is_dir() -> Result<bool, IoError>"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/path.coil#L429"
order: 11
---

Returns whether this path is a directory. See [`io::fs::is_dir`](/docs/reference/io/fs/is_dir).

Called on a `Path` value as `value.is_dir(…)`.

## Returns

`Result<bool, IoError>`

## See also

- [`io::fs::is_dir`](/docs/reference/io/fs/is_dir)
- [`Path`](/packages/stdlib/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::from`](/packages/stdlib/reference/path/Path/from): Creates a path from `s` as written.
- [`Path::as_str`](/packages/stdlib/reference/path/Path/as_str): Returns the path as a string.
- [`Path::join`](/packages/stdlib/reference/path/Path/join): Returns this path followed by `other`, with exactly one separator between them.
- [`Path::dirname`](/packages/stdlib/reference/path/Path/dirname): Returns the path without its last component.
- [`Path::basename`](/packages/stdlib/reference/path/Path/basename): Returns the last component, ignoring trailing separators (`""` for an empty path or `/`).
- [`Path::extension`](/packages/stdlib/reference/path/Path/extension): Returns the text after the last `.` of the last component, or `""` when there is none.
