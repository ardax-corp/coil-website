---
slug: "stdlib/path/Path/from"
package: "stdlib"
title: "Path::from"
description: "Creates a path from s as written."
module: "path"
kind: "static method"
name: "from"
parent: "Path"
signature: "pub static fn from(string s) -> Path"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/path.hy#L66"
order: 0
---

Creates a path from `s` as written.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Path`

## See also

- [`Path`](/packages/stdlib/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::as_str`](/packages/stdlib/reference/path/Path/as_str): Returns the path as a string.
- [`Path::join`](/packages/stdlib/reference/path/Path/join): Returns this path followed by `other`, with exactly one separator between them.
- [`Path::dirname`](/packages/stdlib/reference/path/Path/dirname): Returns the path without its last component.
- [`Path::basename`](/packages/stdlib/reference/path/Path/basename): Returns the last component, ignoring trailing separators (`""` for an empty path or `/`).
- [`Path::extension`](/packages/stdlib/reference/path/Path/extension): Returns the text after the last `.` of the last component, or `""` when there is none.
- [`Path::is_absolute`](/packages/stdlib/reference/path/Path/is_absolute): Returns `true` when the path starts with a separator or a Windows drive letter (`C:`).
- [`Path::normalize`](/packages/stdlib/reference/path/Path/normalize): Removes `.` components, resolves `..` against the component before it, and collapses repeated separators.
