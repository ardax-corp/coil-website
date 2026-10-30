---
slug: "path/Path/as_str"
title: "Path::as_str"
description: "Returns the path as a string."
module: "path"
kind: "method"
name: "as_str"
parent: "Path"
signature: "pub fn as_str() -> string"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/861c7aeb486ced606d1bcfb819f42cb6f6934441/src/path.hy#L71"
order: 1
---

Returns the path as a string.

Called on a `Path` value as `value.as_str(…)`.

## Returns

`string`

## See also

- [`Path`](/docs/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::from`](/docs/reference/path/Path/from): Creates a path from `s` as written.
- [`Path::join`](/docs/reference/path/Path/join): Returns this path followed by `other`, with exactly one separator between them.
- [`Path::dirname`](/docs/reference/path/Path/dirname): Returns the path without its last component.
- [`Path::basename`](/docs/reference/path/Path/basename): Returns the last component, ignoring trailing separators (`""` for an empty path or `/`).
- [`Path::extension`](/docs/reference/path/Path/extension): Returns the text after the last `.` of the last component, or `""` when there is none.
- [`Path::is_absolute`](/docs/reference/path/Path/is_absolute): Returns `true` when the path starts with a separator or a Windows drive letter (`C:`).
- [`Path::normalize`](/docs/reference/path/Path/normalize): Removes `.` components, resolves `..` against the component before it, and collapses repeated separators.
