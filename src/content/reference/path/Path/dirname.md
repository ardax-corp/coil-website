---
slug: "path/Path/dirname"
title: "Path::dirname"
description: "Returns the path without its last component."
module: "path"
kind: "method"
name: "dirname"
parent: "Path"
signature: "pub fn dirname() -> Result<Path, IoError>"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/path.hy#L134"
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
assert!((Path::from("a/b/c.txt").dirname() ?? Path::from("")).as_str() == "a/b");
assert!((Path::from("/top").dirname() ?? Path::from("")).as_str() == "/");
assert!((Path::from("file").dirname() ?? Path::from("")).as_str() == ".");
```

## See also

- [`Path`](/docs/reference/path/Path): A file-system path, with helpers to take it apart and to use it.
- [`Path::from`](/docs/reference/path/Path/from): Creates a path from `s` as written.
- [`Path::as_str`](/docs/reference/path/Path/as_str): Returns the path as a string.
- [`Path::join`](/docs/reference/path/Path/join): Returns this path followed by `other`, with exactly one separator between them.
- [`Path::basename`](/docs/reference/path/Path/basename): Returns the last component, ignoring trailing separators (`""` for an empty path or `/`).
- [`Path::extension`](/docs/reference/path/Path/extension): Returns the text after the last `.` of the last component, or `""` when there is none.
- [`Path::is_absolute`](/docs/reference/path/Path/is_absolute): Returns `true` when the path starts with a separator or a Windows drive letter (`C:`).
- [`Path::normalize`](/docs/reference/path/Path/normalize): Removes `.` components, resolves `..` against the component before it, and collapses repeated separators.
