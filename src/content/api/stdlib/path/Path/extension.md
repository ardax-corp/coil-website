---
slug: "stdlib/path/Path/extension"
package: "stdlib"
title: "Path::extension"
description: "Returns the text after the last . of the last component, or \"\" when there is none."
module: "path"
kind: "method"
name: "extension"
parent: "Path"
signature: "pub fn extension() -> Result<string, IoError>"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/path.coil#L236"
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

- [`Path`](/packages/stdlib/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::from`](/packages/stdlib/reference/path/Path/from): Creates a path from `s` as written.
- [`Path::as_str`](/packages/stdlib/reference/path/Path/as_str): Returns the path as a string.
- [`Path::join`](/packages/stdlib/reference/path/Path/join): Returns this path followed by `other`, with exactly one separator between them.
- [`Path::dirname`](/packages/stdlib/reference/path/Path/dirname): Returns the path without its last component.
- [`Path::basename`](/packages/stdlib/reference/path/Path/basename): Returns the last component, ignoring trailing separators (`""` for an empty path or `/`).
- [`Path::is_absolute`](/packages/stdlib/reference/path/Path/is_absolute): Returns `true` when the path starts with a separator or a Windows drive letter (`C:`).
- [`Path::normalize`](/packages/stdlib/reference/path/Path/normalize): Removes `.` components, resolves `..` against the component before it, and collapses repeated separators.
