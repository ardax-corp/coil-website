---
slug: "stdlib/path/Path/is_absolute"
package: "stdlib"
title: "Path::is_absolute"
description: "Returns true when the path starts with a separator or a Windows drive letter (C:)."
module: "path"
kind: "method"
name: "is_absolute"
parent: "Path"
signature: "pub fn is_absolute() -> bool"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/path.hy#L264"
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

- [`Path`](/packages/stdlib/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::from`](/packages/stdlib/reference/path/Path/from): Creates a path from `s` as written.
- [`Path::as_str`](/packages/stdlib/reference/path/Path/as_str): Returns the path as a string.
- [`Path::join`](/packages/stdlib/reference/path/Path/join): Returns this path followed by `other`, with exactly one separator between them.
- [`Path::dirname`](/packages/stdlib/reference/path/Path/dirname): Returns the path without its last component.
- [`Path::basename`](/packages/stdlib/reference/path/Path/basename): Returns the last component, ignoring trailing separators (`""` for an empty path or `/`).
- [`Path::extension`](/packages/stdlib/reference/path/Path/extension): Returns the text after the last `.` of the last component, or `""` when there is none.
- [`Path::normalize`](/packages/stdlib/reference/path/Path/normalize): Removes `.` components, resolves `..` against the component before it, and collapses repeated separators.
