---
slug: "stdlib/path/Path/basename"
package: "stdlib"
title: "Path::basename"
description: "Returns the last component, ignoring trailing separators (\"\" for an empty path or /)."
module: "path"
kind: "method"
name: "basename"
parent: "Path"
signature: "pub fn basename() -> Result<string, IoError>"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/path.hy#L192"
order: 4
---

Returns the last component, ignoring trailing separators (`""` for an empty path or `/`).

Called on a `Path` value as `value.basename(…)`.

## Returns

`Result<string, IoError>`

## Examples

```coil
use path::{Path};
use tests::assert;
assert!((Path::from("a/b/c.txt").basename().ok() ?? "") == "c.txt");
assert!((Path::from("a/b/").basename().ok() ?? "") == "b");
```

## See also

- [`Path`](/packages/stdlib/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::from`](/packages/stdlib/reference/path/Path/from): Creates a path from `s` as written.
- [`Path::as_str`](/packages/stdlib/reference/path/Path/as_str): Returns the path as a string.
- [`Path::join`](/packages/stdlib/reference/path/Path/join): Returns this path followed by `other`, with exactly one separator between them.
- [`Path::dirname`](/packages/stdlib/reference/path/Path/dirname): Returns the path without its last component.
- [`Path::extension`](/packages/stdlib/reference/path/Path/extension): Returns the text after the last `.` of the last component, or `""` when there is none.
- [`Path::is_absolute`](/packages/stdlib/reference/path/Path/is_absolute): Returns `true` when the path starts with a separator or a Windows drive letter (`C:`).
- [`Path::normalize`](/packages/stdlib/reference/path/Path/normalize): Removes `.` components, resolves `..` against the component before it, and collapses repeated separators.
