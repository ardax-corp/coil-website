---
slug: "stdlib/path/Path/dirname"
package: "stdlib"
title: "Path::dirname"
description: "Returns the path without its last component."
module: "path"
kind: "method"
name: "dirname"
parent: "Path"
signature: "pub fn dirname() -> Result<Path, IoError>"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/path.hy#L142"
order: 3
---

Returns the path without its last component.

Trailing separators are ignored. A path with no separator gives `.`; a
path directly under the root gives `/`.

Called on a `Path` value as `value.dirname(…)`.

## Returns

`Result<Path, IoError>`

## Examples

```coil
use path::{Path};
use tests::assert;
assert!((Path::from("a/b/c.txt").dirname().ok() ?? Path::from("")).as_str() == "a/b");
assert!((Path::from("/top").dirname().ok() ?? Path::from("")).as_str() == "/");
assert!((Path::from("file").dirname().ok() ?? Path::from("")).as_str() == ".");
```

## See also

- [`Path`](/packages/stdlib/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::from`](/packages/stdlib/reference/path/Path/from): Creates a path from `s` as written.
- [`Path::as_str`](/packages/stdlib/reference/path/Path/as_str): Returns the path as a string.
- [`Path::join`](/packages/stdlib/reference/path/Path/join): Returns this path followed by `other`, with exactly one separator between them.
- [`Path::basename`](/packages/stdlib/reference/path/Path/basename): Returns the last component, ignoring trailing separators (`""` for an empty path or `/`).
- [`Path::extension`](/packages/stdlib/reference/path/Path/extension): Returns the text after the last `.` of the last component, or `""` when there is none.
- [`Path::is_absolute`](/packages/stdlib/reference/path/Path/is_absolute): Returns `true` when the path starts with a separator or a Windows drive letter (`C:`).
- [`Path::normalize`](/packages/stdlib/reference/path/Path/normalize): Removes `.` components, resolves `..` against the component before it, and collapses repeated separators.
