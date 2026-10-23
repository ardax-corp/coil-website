---
slug: "path/Path/normalize"
title: "Path::normalize"
description: "Removes . components, resolves .. against the component before it, and collapses repeated separators."
module: "path"
kind: "method"
name: "normalize"
parent: "Path"
signature: "pub fn normalize() -> Result<Path, IoError>"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/59fa621e476425113f44db5753bef7abf7977a40/src/path.hy#L297"
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
assert!((Path::from("a/./b//../c").normalize() ?? Path::from("")).as_str() == "a/c");
assert!((Path::from("/../x").normalize() ?? Path::from("")).as_str() == "/x");
```

## See also

- [`io::fs::realpath`](/docs/reference/io/fs/realpath)
- [`Path`](/docs/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::from`](/docs/reference/path/Path/from): Creates a path from `s` as written.
- [`Path::as_str`](/docs/reference/path/Path/as_str): Returns the path as a string.
- [`Path::join`](/docs/reference/path/Path/join): Returns this path followed by `other`, with exactly one separator between them.
- [`Path::dirname`](/docs/reference/path/Path/dirname): Returns the path without its last component.
- [`Path::basename`](/docs/reference/path/Path/basename): Returns the last component, ignoring trailing separators (`""` for an empty path or `/`).
- [`Path::extension`](/docs/reference/path/Path/extension): Returns the text after the last `.` of the last component, or `""` when there is none.
