---
slug: "path/Path/from"
title: "Path::from"
description: "Creates a path from s as written."
module: "path"
kind: "static method"
name: "from"
parent: "Path"
signature: "pub static fn from(string s) -> Path"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/path.hy#L58"
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

- [`Path`](/docs/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::as_str`](/docs/reference/path/Path/as_str): Returns the path as a string.
- [`Path::join`](/docs/reference/path/Path/join): Returns this path followed by other, with exactly one separator between them.
- [`Path::dirname`](/docs/reference/path/Path/dirname): Returns the path without its last component.
- [`Path::basename`](/docs/reference/path/Path/basename): Returns the last component, ignoring trailing separators ("" for an empty path or /).
- [`Path::extension`](/docs/reference/path/Path/extension): Returns the text after the last .
- [`Path::is_absolute`](/docs/reference/path/Path/is_absolute): Returns true when the path starts with a separator or a Windows drive letter (C:).
- [`Path::normalize`](/docs/reference/path/Path/normalize): Removes .
