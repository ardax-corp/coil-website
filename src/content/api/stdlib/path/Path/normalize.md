---
slug: "stdlib/path/Path/normalize"
package: "stdlib"
title: "Path::normalize"
description: "Removes . components, resolves .. against the component before it, and collapses repeated separators."
module: "path"
kind: "method"
name: "normalize"
parent: "Path"
signature: "pub fn normalize() -> Result<Path, IoError>"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/path.coil#L305"
order: 7
---

Removes `.` components, resolves `..` against the component before it, and collapses repeated separators.

Purely textual: symlinks are not followed (use [`io::fs::realpath`](/docs/reference/io/fs/realpath) for that),
and a `..` with nothing before it is dropped. An empty result is `.`.

Called on a `Path` value as `value.normalize(…)`.

## Returns

`Result<Path, IoError>`

## Examples

```coil
use path::{Path};
use tests::assert;
assert!((Path::from("a/./b//../c").normalize().ok() ?? Path::from("")).as_str() == "a/c");
assert!((Path::from("/../x").normalize().ok() ?? Path::from("")).as_str() == "/x");
```

## See also

- [`io::fs::realpath`](/docs/reference/io/fs/realpath)
- [`Path`](/packages/stdlib/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::from`](/packages/stdlib/reference/path/Path/from): Creates a path from `s` as written.
- [`Path::as_str`](/packages/stdlib/reference/path/Path/as_str): Returns the path as a string.
- [`Path::join`](/packages/stdlib/reference/path/Path/join): Returns this path followed by `other`, with exactly one separator between them.
- [`Path::dirname`](/packages/stdlib/reference/path/Path/dirname): Returns the path without its last component.
- [`Path::basename`](/packages/stdlib/reference/path/Path/basename): Returns the last component, ignoring trailing separators (`""` for an empty path or `/`).
- [`Path::extension`](/packages/stdlib/reference/path/Path/extension): Returns the text after the last `.` of the last component, or `""` when there is none.
