---
slug: "stdlib/path/Path/metadata"
package: "stdlib"
title: "Path::metadata"
description: "Returns the file's metadata. See io::fs::metadata."
module: "path"
kind: "method"
name: "metadata"
parent: "Path"
signature: "pub fn metadata()"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/path.coil#L434"
order: 12
---

Returns the file's metadata. See [`io::fs::metadata`](/docs/reference/io/fs/metadata).

Called on a `Path` value as `value.metadata(…)`.

## See also

- [`io::fs::metadata`](/docs/reference/io/fs/metadata)
- [`Path`](/packages/stdlib/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::from`](/packages/stdlib/reference/path/Path/from): Creates a path from `s` as written.
- [`Path::as_str`](/packages/stdlib/reference/path/Path/as_str): Returns the path as a string.
- [`Path::join`](/packages/stdlib/reference/path/Path/join): Returns this path followed by `other`, with exactly one separator between them.
- [`Path::dirname`](/packages/stdlib/reference/path/Path/dirname): Returns the path without its last component.
- [`Path::basename`](/packages/stdlib/reference/path/Path/basename): Returns the last component, ignoring trailing separators (`""` for an empty path or `/`).
- [`Path::extension`](/packages/stdlib/reference/path/Path/extension): Returns the text after the last `.` of the last component, or `""` when there is none.
