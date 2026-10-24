---
slug: "path/Path/is_absolute"
title: "Path::is_absolute"
description: "Returns true when the path starts with a separator or a Windows drive letter (C:)."
module: "path"
kind: "method"
name: "is_absolute"
parent: "Path"
signature: "pub fn is_absolute() -> bool"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/bbab8785eee1ff5cde1ade831f952993476bad73/src/path.hy#L256"
order: 6
---

Returns `true` when the path starts with a separator or a Windows drive letter (`C:`).

Called on a `Path` value as `value.is_absolute(…)`.

## Returns

`bool`

## Examples

```coil
use path::{Path};
use tests::assert;
assert!(Path::from("/etc").is_absolute());
assert!(Path::from("C:\\data").is_absolute());
assert!(!Path::from("src/main.hy").is_absolute());
```

## See also

- [`Path`](/docs/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::from`](/docs/reference/path/Path/from): Creates a path from `s` as written.
- [`Path::as_str`](/docs/reference/path/Path/as_str): Returns the path as a string.
- [`Path::join`](/docs/reference/path/Path/join): Returns this path followed by `other`, with exactly one separator between them.
- [`Path::dirname`](/docs/reference/path/Path/dirname): Returns the path without its last component.
- [`Path::basename`](/docs/reference/path/Path/basename): Returns the last component, ignoring trailing separators (`""` for an empty path or `/`).
- [`Path::extension`](/docs/reference/path/Path/extension): Returns the text after the last `.` of the last component, or `""` when there is none.
- [`Path::normalize`](/docs/reference/path/Path/normalize): Removes `.` components, resolves `..` against the component before it, and collapses repeated separators.
