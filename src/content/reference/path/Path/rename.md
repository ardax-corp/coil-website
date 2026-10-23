---
slug: "path/Path/rename"
title: "Path::rename"
description: "Moves this file or directory to dst. See io::fs::rename."
module: "path"
kind: "method"
name: "rename"
parent: "Path"
signature: "pub fn rename(Path dst) -> Result<int, IoError>"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/6386d3482335236362f6c39ca75d10e20186dfa8/src/path.hy#L454"
order: 17
---

Moves this file or directory to `dst`. See [`io::fs::rename`](/docs/reference/io/fs/rename).

Called on a `Path` value as `value.rename(…)`.

## Parameters

| Name | Type |
|------|------|
| `dst` | `Path` |

## Returns

`Result<int, IoError>`

## See also

- [`io::fs::rename`](/docs/reference/io/fs/rename)
- [`Path`](/docs/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::from`](/docs/reference/path/Path/from): Creates a path from `s` as written.
- [`Path::as_str`](/docs/reference/path/Path/as_str): Returns the path as a string.
- [`Path::join`](/docs/reference/path/Path/join): Returns this path followed by `other`, with exactly one separator between them.
- [`Path::dirname`](/docs/reference/path/Path/dirname): Returns the path without its last component.
- [`Path::basename`](/docs/reference/path/Path/basename): Returns the last component, ignoring trailing separators (`""` for an empty path or `/`).
- [`Path::extension`](/docs/reference/path/Path/extension): Returns the text after the last `.` of the last component, or `""` when there is none.
