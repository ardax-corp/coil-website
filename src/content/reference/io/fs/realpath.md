---
slug: "io/fs/realpath"
title: "realpath"
description: "Returns the canonical absolute form of path, with every symbolic link, . and .. resolved."
module: "io::fs"
kind: "fn"
name: "realpath"
signature: "fn realpath(string path) -> Result<string, IoError>"
import: "use io::fs::{realpath};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/cba8e48ffdc03a4068234e57b347406c4b478e0f/compiler/src/builtin_docs/io/fs.hy#L280"
order: 10
---

Returns the canonical absolute form of `path`, with every symbolic link, `.` and `..` resolved.

The path must exist; otherwise returns `Err(IoError::NotFound)`.
Needs `--allow-read`.

## Parameters

| Name | Type |
|------|------|
| `path` | `string` |

## Returns

`Result<string, IoError>`

## Examples

```coil
use io::fs::{create_dir_all, realpath, remove_dir_all};
use tests::assert;
let _ = create_dir_all("/tmp/coil_doc_fs_realpath/sub");
let p = match realpath("/tmp/coil_doc_fs_realpath/sub/..") {
    Result::Ok(p) => p,
    Result::Err(_) => "",
};
let q = match realpath("/tmp/coil_doc_fs_realpath") {
    Result::Ok(p) => p,
    Result::Err(_) => "?",
};
let _ = remove_dir_all("/tmp/coil_doc_fs_realpath");
assert!(p == q);
```

## See also

- [`copy`](/docs/reference/io/fs/copy): Copies the contents of file from to to, creating or overwriting to.
- [`create_dir`](/docs/reference/io/fs/create_dir): Creates the directory path.
- [`create_dir_all`](/docs/reference/io/fs/create_dir_all): Creates the directory path and any missing parent directories.
- [`exists`](/docs/reference/io/fs/exists): Returns whether anything exists at path.
- [`is_dir`](/docs/reference/io/fs/is_dir): Returns whether path is a directory, following symbolic links.
- [`is_file`](/docs/reference/io/fs/is_file): Returns whether path is a regular file, following symbolic links.
- [`is_symlink`](/docs/reference/io/fs/is_symlink): Returns whether path itself is a symbolic link (the link is not followed).
- [`list_dir`](/docs/reference/io/fs/list_dir): Returns the names of the entries in directory path, sorted.
