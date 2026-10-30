---
slug: "stdlib/path/Path"
package: "stdlib"
title: "Path"
description: "A file-system path, with helpers to take it apart and to use it."
module: "path"
kind: "class"
name: "Path"
signature: "class Path"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/path.hy#L48"
order: 0
---

A file-system path, with helpers to take it apart and to use it.

`Path` is plain text: building one never touches the disk. Both `/` and `\\`
separate components; [`join`](/packages/stdlib/reference/path/Path/join) and [`normalize`](/packages/stdlib/reference/path/Path/normalize) write `/`. The file-system methods
([`exists`](/packages/stdlib/reference/path/Path/exists), [`read_text`](/packages/stdlib/reference/path/Path/read_text), [`mkdir`](/packages/stdlib/reference/path/Path/mkdir), …) call [`io::fs`](/docs/reference/io/fs) and [`io::file`](/packages/stdlib/reference/io/file), so they need
the same `--allow-read` / `--allow-write` grants.

## Associated functions

| Name | Description |
|------|-------------|
| [`from`](/packages/stdlib/reference/path/Path/from) | Creates a path from `s` as written. |

## Methods

| Name | Description |
|------|-------------|
| [`as_str`](/packages/stdlib/reference/path/Path/as_str) | Returns the path as a string. |
| [`join`](/packages/stdlib/reference/path/Path/join) | Returns this path followed by `other`, with exactly one separator between them. |
| [`dirname`](/packages/stdlib/reference/path/Path/dirname) | Returns the path without its last component. |
| [`basename`](/packages/stdlib/reference/path/Path/basename) | Returns the last component, ignoring trailing separators (`""` for an empty path or `/`). |
| [`extension`](/packages/stdlib/reference/path/Path/extension) | Returns the text after the last `.` of the last component, or `""` when there is none. |
| [`is_absolute`](/packages/stdlib/reference/path/Path/is_absolute) | Returns `true` when the path starts with a separator or a Windows drive letter (`C:`). |
| [`normalize`](/packages/stdlib/reference/path/Path/normalize) | Removes `.` components, resolves `..` against the component before it, and collapses repeated separators. |
| [`components`](/packages/stdlib/reference/path/Path/components) | Returns the components of the normalized path, without separators. |
| [`exists`](/packages/stdlib/reference/path/Path/exists) | Returns whether something exists at this path. |
| [`is_file`](/packages/stdlib/reference/path/Path/is_file) | Returns whether this path is a regular file. |
| [`is_dir`](/packages/stdlib/reference/path/Path/is_dir) | Returns whether this path is a directory. |
| [`metadata`](/packages/stdlib/reference/path/Path/metadata) | Returns the file's metadata. |
| [`list_dir`](/packages/stdlib/reference/path/Path/list_dir) | Returns the names of the entries in this directory. |
| [`mkdir`](/packages/stdlib/reference/path/Path/mkdir) | Creates this directory; its parent must exist. |
| [`mkdir_all`](/packages/stdlib/reference/path/Path/mkdir_all) | Creates this directory and any missing parents. |
| [`remove_file`](/packages/stdlib/reference/path/Path/remove_file) | Deletes the file at this path. |
| [`rename`](/packages/stdlib/reference/path/Path/rename) | Moves this file or directory to `dst`. |
| [`copy_to`](/packages/stdlib/reference/path/Path/copy_to) | Copies this file to `dst`, replacing it. |
| [`read_text`](/packages/stdlib/reference/path/Path/read_text) | Reads the whole file as UTF-8 text. |
| [`write_text`](/packages/stdlib/reference/path/Path/write_text) | Replaces the file's contents with `text` and returns the number of bytes written. |
| [`read_bytes`](/packages/stdlib/reference/path/Path/read_bytes) | Reads the whole file. |
| [`write_bytes`](/packages/stdlib/reference/path/Path/write_bytes) | Replaces the file's contents with `buf`. |
| [`append_text`](/packages/stdlib/reference/path/Path/append_text) | Appends `text` to the file, creating it if needed. |
| [`append_bytes`](/packages/stdlib/reference/path/Path/append_bytes) | Appends `buf` to the file, creating it if needed. |

## Examples

```coil
use path::{Path};
use tests::assert;
let p = Path::from("/srv/app/../data/report.csv").normalize().ok() ?? Path::from("");
assert!(p.as_str() == "/srv/data/report.csv");
assert!((p.basename().ok() ?? "") == "report.csv");
assert!((p.extension().ok() ?? "") == "csv");
assert!((p.dirname().ok() ?? p).as_str() == "/srv/data");
```

## See also

- [`Path::join`](/packages/stdlib/reference/path/Path/join)
- [`Path::normalize`](/packages/stdlib/reference/path/Path/normalize)
- [`Path::exists`](/packages/stdlib/reference/path/Path/exists)
- [`Path::read_text`](/packages/stdlib/reference/path/Path/read_text)
- [`Path::mkdir`](/packages/stdlib/reference/path/Path/mkdir)
- [`io::fs`](/docs/reference/io/fs)
- [`io::file`](/packages/stdlib/reference/io/file)
