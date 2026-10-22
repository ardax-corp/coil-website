---
slug: "io/fs/create_dir_all"
title: "create_dir_all"
description: "Creates the directory path and any missing parent directories."
module: "io::fs"
kind: "fn"
name: "create_dir_all"
signature: "fn create_dir_all(string path) -> Result<unit, IoError>"
import: "use io::fs::{create_dir_all};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/398a75756bed65b1ece7801a7a0f96154af4c6fb/compiler/src/builtin_docs/io/fs.hy#L81"
order: 2
---

Creates the directory `path` and any missing parent directories.

Succeeds when `path` already exists as a directory.
Needs `--allow-write`.

## Parameters

| Name | Type |
|------|------|
| `path` | `string` |

## Returns

`Result<unit, IoError>`

## Examples

```coil
use io::fs::{create_dir_all, is_dir, remove_dir_all};
use tests::assert;
let made = match create_dir_all("/tmp/coil_doc_fs_cda/a/b/c") {
    Result::Ok(_) => true,
    Result::Err(_) => false,
};
let dir_now = match is_dir("/tmp/coil_doc_fs_cda/a/b/c") {
    Result::Ok(b) => b,
    Result::Err(_) => false,
};
let _ = remove_dir_all("/tmp/coil_doc_fs_cda");
assert!(made && dir_now);
```

## See also

- [`copy`](/docs/reference/io/fs/copy): Copies the contents of file from to to, creating or overwriting to.
- [`create_dir`](/docs/reference/io/fs/create_dir): Creates the directory path.
- [`exists`](/docs/reference/io/fs/exists): Returns whether anything exists at path.
- [`is_dir`](/docs/reference/io/fs/is_dir): Returns whether path is a directory, following symbolic links.
- [`is_file`](/docs/reference/io/fs/is_file): Returns whether path is a regular file, following symbolic links.
- [`is_symlink`](/docs/reference/io/fs/is_symlink): Returns whether path itself is a symbolic link (the link is not followed).
- [`list_dir`](/docs/reference/io/fs/list_dir): Returns the names of the entries in directory path, sorted.
- [`metadata`](/docs/reference/io/fs/metadata): Returns facts about path as a record, without following a final symbolic link.
