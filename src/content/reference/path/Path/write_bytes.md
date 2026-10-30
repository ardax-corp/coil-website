---
slug: "path/Path/write_bytes"
title: "Path::write_bytes"
description: "Replaces the file's contents with buf. See io::file::write_bytes."
module: "path"
kind: "method"
name: "write_bytes"
parent: "Path"
signature: "pub fn write_bytes(Vec<byte> buf) -> Result<int, IoError>"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/861c7aeb486ced606d1bcfb819f42cb6f6934441/src/path.hy#L489"
order: 22
---

Replaces the file's contents with `buf`. See [`io::file::write_bytes`](/docs/reference/io/file/write_bytes).

Called on a `Path` value as `value.write_bytes(…)`.

## Parameters

| Name | Type |
|------|------|
| `buf` | `Vec<byte>` |

## Returns

`Result<int, IoError>`

## See also

- [`io::file::write_bytes`](/docs/reference/io/file/write_bytes)
- [`Path`](/docs/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::from`](/docs/reference/path/Path/from): Creates a path from `s` as written.
- [`Path::as_str`](/docs/reference/path/Path/as_str): Returns the path as a string.
- [`Path::join`](/docs/reference/path/Path/join): Returns this path followed by `other`, with exactly one separator between them.
- [`Path::dirname`](/docs/reference/path/Path/dirname): Returns the path without its last component.
- [`Path::basename`](/docs/reference/path/Path/basename): Returns the last component, ignoring trailing separators (`""` for an empty path or `/`).
- [`Path::extension`](/docs/reference/path/Path/extension): Returns the text after the last `.` of the last component, or `""` when there is none.
