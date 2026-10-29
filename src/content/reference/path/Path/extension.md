---
slug: "path/Path/extension"
title: "Path::extension"
description: "Returns the text after the last . of the last component, or \"\" when there is none."
module: "path"
kind: "method"
name: "extension"
parent: "Path"
signature: "pub fn extension() -> Result<string, IoError>"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/47c059804a7a85f79bd400eb26bb1241e7b44441/src/path.hy#L236"
order: 5
---

Returns the text after the last `.` of the last component, or `""` when there is none.

Called on a `Path` value as `value.extension(…)`.

## Returns

`Result<string, IoError>`

## Examples

```coil
use path::{Path};
use tests::assert;
assert!((Path::from("archive.tar.gz").extension().ok() ?? "") == "gz");
assert!((Path::from("Makefile").extension().ok() ?? "") == "");
```

## See also

- [`Path`](/docs/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::from`](/docs/reference/path/Path/from): Creates a path from `s` as written.
- [`Path::as_str`](/docs/reference/path/Path/as_str): Returns the path as a string.
- [`Path::join`](/docs/reference/path/Path/join): Returns this path followed by `other`, with exactly one separator between them.
- [`Path::dirname`](/docs/reference/path/Path/dirname): Returns the path without its last component.
- [`Path::basename`](/docs/reference/path/Path/basename): Returns the last component, ignoring trailing separators (`""` for an empty path or `/`).
- [`Path::is_absolute`](/docs/reference/path/Path/is_absolute): Returns `true` when the path starts with a separator or a Windows drive letter (`C:`).
- [`Path::normalize`](/docs/reference/path/Path/normalize): Removes `.` components, resolves `..` against the component before it, and collapses repeated separators.
