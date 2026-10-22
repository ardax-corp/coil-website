---
slug: "path/Path/mkdir"
title: "Path::mkdir"
description: "Creates this directory; its parent must exist. See io::fs::create_dir."
module: "path"
kind: "method"
name: "mkdir"
parent: "Path"
signature: "pub fn mkdir() -> Result<int, IoError>"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/de7dc3b341ae9bbbcdd775a2dfa282870f0cbf82/src/path.hy#L436"
order: 14
---

Creates this directory; its parent must exist. See [`io::fs::create_dir`](/docs/reference/io/fs/create_dir).

Called on a `Path` value as `value.mkdir(…)`.

## Returns

`Result<int, IoError>`

## See also

- [`io::fs::create_dir`](/docs/reference/io/fs/create_dir)
- [`Path`](/docs/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::from`](/docs/reference/path/Path/from): Creates a path from s as written.
- [`Path::as_str`](/docs/reference/path/Path/as_str): Returns the path as a string.
- [`Path::join`](/docs/reference/path/Path/join): Returns this path followed by other, with exactly one separator between them.
- [`Path::dirname`](/docs/reference/path/Path/dirname): Returns the path without its last component.
- [`Path::basename`](/docs/reference/path/Path/basename): Returns the last component, ignoring trailing separators ("" for an empty path or /).
- [`Path::extension`](/docs/reference/path/Path/extension): Returns the text after the last .
