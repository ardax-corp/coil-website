---
slug: "io/fs/rename"
title: "rename"
description: "Renames (moves) from to to, replacing to if it is a file."
module: "io::fs"
kind: "fn"
name: "rename"
signature: "fn rename(string from, string to) -> Result<unit, IoError>"
import: "use io::fs::{rename};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/2fd31a884e4b837b7e70c36633a1a9547b1407c9/compiler/src/builtin_docs/io/fs.hy#L382"
order: 14
---

Renames (moves) `from` to `to`, replacing `to` if it is a file.

Works for files and directories. Moving across file systems fails.
Needs `--allow-write`.

## Parameters

| Name | Type |
|------|------|
| `from` | `string` |
| `to` | `string` |

## Returns

`Result<unit, IoError>`

## Examples

```coil
use io::fs::{exists, remove_file, rename};
use io::file::{write_text};
use tests::assert;
let _ = write_text("/tmp/coil_doc_fs_rename_a.txt", "x");
let moved = match rename("/tmp/coil_doc_fs_rename_a.txt", "/tmp/coil_doc_fs_rename_b.txt") {
    Result::Ok(_) => true,
    Result::Err(_) => false,
};
let new_there = match exists("/tmp/coil_doc_fs_rename_b.txt") {
    Result::Ok(b) => b,
    Result::Err(_) => false,
};
let _ = remove_file("/tmp/coil_doc_fs_rename_b.txt");
assert!(moved && new_there);
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
