---
slug: "io/fs/symlink"
title: "symlink"
description: "Creates a symbolic link at link that points to target."
module: "io::fs"
kind: "fn"
name: "symlink"
signature: "fn symlink(string target, string link) -> Result<unit, IoError>"
import: "use io::fs::{symlink};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/e553eda99b575bb4f78c04622508caa036a1a01b/compiler/src/builtin_docs/io/fs.hy#L409"
order: 15
---

Creates a symbolic link at `link` that points to `target`.

`target` is stored as given and need not exist. Returns
`Err(IoError::AlreadyExists)` when `link` exists. On Windows the target
must exist so the right kind of link (file or directory) can be made.
Needs `--allow-write`.

## Parameters

| Name | Type |
|------|------|
| `target` | `string` |
| `link` | `string` |

## Returns

`Result<unit, IoError>`

## Examples

```coil
use io::fs::{is_dir, remove_file, symlink};
use tests::assert;
let link = "/tmp/coil_doc_fs_symlink";
let _ = remove_file(link);
let made = match symlink("/tmp", link) {
    Result::Ok(_) => true,
    Result::Err(_) => false,
};
let points_to_dir = match is_dir(link) {
    Result::Ok(b) => b,
    Result::Err(_) => false,
};
let _ = remove_file(link);
assert!(made && points_to_dir);
```

## See also

- [`copy`](/docs/reference/io/fs/copy): Copies the contents of file `from` to `to`, creating or overwriting `to`.
- [`create_dir`](/docs/reference/io/fs/create_dir): Creates the directory `path`.
- [`create_dir_all`](/docs/reference/io/fs/create_dir_all): Creates the directory `path` and any missing parent directories.
- [`exists`](/docs/reference/io/fs/exists): Returns whether anything exists at `path`.
- [`is_dir`](/docs/reference/io/fs/is_dir): Returns whether `path` is a directory, following symbolic links.
- [`is_file`](/docs/reference/io/fs/is_file): Returns whether `path` is a regular file, following symbolic links.
- [`is_symlink`](/docs/reference/io/fs/is_symlink): Returns whether `path` itself is a symbolic link (the link is not followed).
- [`list_dir`](/docs/reference/io/fs/list_dir): Returns the names of the entries in directory `path`, sorted.
