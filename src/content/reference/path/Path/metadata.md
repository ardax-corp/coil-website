---
slug: "path/Path/metadata"
title: "Path::metadata"
description: "Returns the file's metadata. See io::fs::metadata."
module: "path"
kind: "method"
name: "metadata"
parent: "Path"
signature: "pub fn metadata()"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/path.hy#L426"
order: 12
---

Returns the file's metadata. See [`io::fs::metadata`](/docs/reference/io/fs/metadata).

Called on a `Path` value as `value.metadata(…)`.

## See also

- [`io::fs::metadata`](/docs/reference/io/fs/metadata)
- [`Path`](/docs/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::from`](/docs/reference/path/Path/from): Creates a path from s as written.
- [`Path::as_str`](/docs/reference/path/Path/as_str): Returns the path as a string.
- [`Path::join`](/docs/reference/path/Path/join): Returns this path followed by other, with exactly one separator between them.
- [`Path::dirname`](/docs/reference/path/Path/dirname): Returns the path without its last component.
- [`Path::basename`](/docs/reference/path/Path/basename): Returns the last component, ignoring trailing separators ("" for an empty path or /).
- [`Path::extension`](/docs/reference/path/Path/extension): Returns the text after the last .
