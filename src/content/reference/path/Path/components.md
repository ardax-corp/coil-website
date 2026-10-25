---
slug: "path/Path/components"
title: "Path::components"
description: "Returns the components of the normalized path, without separators."
module: "path"
kind: "method"
name: "components"
parent: "Path"
signature: "pub fn components() -> Result<Vec<string>, IoError>"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/534e3d9afcabefedc5f1aaeedc5f294cae0a64d6/src/path.hy#L376"
order: 8
---

Returns the components of the normalized path, without separators.

Called on a `Path` value as `value.components(…)`.

## Returns

`Result<Vec<string>, IoError>`

## Examples

```coil
use path::{Path};
use tests::assert;
let parts = Path::from("/usr/local/../bin").components() ?? Vec::new();
assert!(parts.len() == 2);
assert!(parts[0] == "usr" && parts[1] == "bin");
```

## See also

- [`Path`](/docs/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::from`](/docs/reference/path/Path/from): Creates a path from `s` as written.
- [`Path::as_str`](/docs/reference/path/Path/as_str): Returns the path as a string.
- [`Path::join`](/docs/reference/path/Path/join): Returns this path followed by `other`, with exactly one separator between them.
- [`Path::dirname`](/docs/reference/path/Path/dirname): Returns the path without its last component.
- [`Path::basename`](/docs/reference/path/Path/basename): Returns the last component, ignoring trailing separators (`""` for an empty path or `/`).
- [`Path::extension`](/docs/reference/path/Path/extension): Returns the text after the last `.` of the last component, or `""` when there is none.
- [`Path::is_absolute`](/docs/reference/path/Path/is_absolute): Returns `true` when the path starts with a separator or a Windows drive letter (`C:`).
