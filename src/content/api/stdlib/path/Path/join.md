---
slug: "stdlib/path/Path/join"
package: "stdlib"
title: "Path::join"
description: "Returns this path followed by other, with exactly one separator between them."
module: "path"
kind: "method"
name: "join"
parent: "Path"
signature: "pub fn join(Path other) -> Result<Path, IoError>"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/path.hy#L89"
order: 2
---

Returns this path followed by `other`, with exactly one separator between them.

An empty side returns the other one unchanged. `other` is appended even when
it is absolute.

Called on a `Path` value as `value.join(…)`.

## Parameters

| Name | Type |
|------|------|
| `other` | `Path` |

## Returns

`Result<Path, IoError>`

## Examples

```coil
use path::{Path};
use tests::assert;
let p = Path::from("logs/").join(Path::from("/today.txt")).ok() ?? Path::from("");
assert!(p.as_str() == "logs/today.txt");
assert!((Path::from("a").join(Path::from("b")).ok() ?? Path::from("")).as_str() == "a/b");
```

## See also

- [`Path`](/packages/stdlib/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::from`](/packages/stdlib/reference/path/Path/from): Creates a path from `s` as written.
- [`Path::as_str`](/packages/stdlib/reference/path/Path/as_str): Returns the path as a string.
- [`Path::dirname`](/packages/stdlib/reference/path/Path/dirname): Returns the path without its last component.
- [`Path::basename`](/packages/stdlib/reference/path/Path/basename): Returns the last component, ignoring trailing separators (`""` for an empty path or `/`).
- [`Path::extension`](/packages/stdlib/reference/path/Path/extension): Returns the text after the last `.` of the last component, or `""` when there is none.
- [`Path::is_absolute`](/packages/stdlib/reference/path/Path/is_absolute): Returns `true` when the path starts with a separator or a Windows drive letter (`C:`).
- [`Path::normalize`](/packages/stdlib/reference/path/Path/normalize): Removes `.` components, resolves `..` against the component before it, and collapses repeated separators.
