---
slug: "path/Path"
title: "Path"
description: "A file-system path, with helpers to take it apart and to use it."
module: "path"
kind: "class"
name: "Path"
signature: "class Path"
import: "use path::{Path};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/6386d3482335236362f6c39ca75d10e20186dfa8/src/path.hy#L40"
order: 0
---

A file-system path, with helpers to take it apart and to use it.

`Path` is plain text: building one never touches the disk. Both `/` and `\\`
separate components; [`join`](/docs/reference/path/Path/join) and [`normalize`](/docs/reference/path/Path/normalize) write `/`. The file-system methods
([`exists`](/docs/reference/path/Path/exists), [`read_text`](/docs/reference/path/Path/read_text), [`mkdir`](/docs/reference/path/Path/mkdir), …) call [`io::fs`](/docs/reference/io/fs) and [`io::file`](/docs/reference/io/file), so they need
the same `--allow-read` / `--allow-write` grants.

## Associated functions

| Name | Description |
|------|-------------|
| [`from`](/docs/reference/path/Path/from) | Creates a path from `s` as written. |

## Methods

| Name | Description |
|------|-------------|
| [`as_str`](/docs/reference/path/Path/as_str) | Returns the path as a string. |
| [`join`](/docs/reference/path/Path/join) | Returns this path followed by `other`, with exactly one separator between them. |
| [`dirname`](/docs/reference/path/Path/dirname) | Returns the path without its last component. |
| [`basename`](/docs/reference/path/Path/basename) | Returns the last component, ignoring trailing separators (`""` for an empty path or `/`). |
| [`extension`](/docs/reference/path/Path/extension) | Returns the text after the last `.` of the last component, or `""` when there is none. |
| [`is_absolute`](/docs/reference/path/Path/is_absolute) | Returns `true` when the path starts with a separator or a Windows drive letter (`C:`). |
| [`normalize`](/docs/reference/path/Path/normalize) | Removes `.` components, resolves `..` against the component before it, and collapses repeated separators. |
| [`components`](/docs/reference/path/Path/components) | Returns the components of the normalized path, without separators. |
| [`exists`](/docs/reference/path/Path/exists) | Returns whether something exists at this path. |
| [`is_file`](/docs/reference/path/Path/is_file) | Returns whether this path is a regular file. |
| [`is_dir`](/docs/reference/path/Path/is_dir) | Returns whether this path is a directory. |
| [`metadata`](/docs/reference/path/Path/metadata) | Returns the file's metadata. |
| [`list_dir`](/docs/reference/path/Path/list_dir) | Returns the names of the entries in this directory. |
| [`mkdir`](/docs/reference/path/Path/mkdir) | Creates this directory; its parent must exist. |
| [`mkdir_all`](/docs/reference/path/Path/mkdir_all) | Creates this directory and any missing parents. |
| [`remove_file`](/docs/reference/path/Path/remove_file) | Deletes the file at this path. |
| [`rename`](/docs/reference/path/Path/rename) | Moves this file or directory to `dst`. |
| [`copy_to`](/docs/reference/path/Path/copy_to) | Copies this file to `dst`, replacing it. |
| [`read_text`](/docs/reference/path/Path/read_text) | Reads the whole file as UTF-8 text. |
| [`write_text`](/docs/reference/path/Path/write_text) | Replaces the file's contents with `text` and returns the number of bytes written. |
| [`read_bytes`](/docs/reference/path/Path/read_bytes) | Reads the whole file. |
| [`write_bytes`](/docs/reference/path/Path/write_bytes) | Replaces the file's contents with `buf`. |
| [`append_text`](/docs/reference/path/Path/append_text) | Appends `text` to the file, creating it if needed. |
| [`append_bytes`](/docs/reference/path/Path/append_bytes) | Appends `buf` to the file, creating it if needed. |

## Examples

```coil
use path::{Path};
use tests::assert;
let p = Path::from("/srv/app/../data/report.csv").normalize() ?? Path::from("");
assert!(p.as_str() == "/srv/data/report.csv");
assert!((p.basename() ?? "") == "report.csv");
assert!((p.extension() ?? "") == "csv");
assert!((p.dirname() ?? p).as_str() == "/srv/data");
```

## See also

- [`Path::join`](/docs/reference/path/Path/join)
- [`Path::normalize`](/docs/reference/path/Path/normalize)
- [`Path::exists`](/docs/reference/path/Path/exists)
- [`Path::read_text`](/docs/reference/path/Path/read_text)
- [`Path::mkdir`](/docs/reference/path/Path/mkdir)
- [`io::fs`](/docs/reference/io/fs)
- [`io::file`](/docs/reference/io/file)
