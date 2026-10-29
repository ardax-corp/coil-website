---
slug: "io/fs/create_dir"
title: "create_dir"
description: "Creates the directory path."
module: "io::fs"
kind: "fn"
name: "create_dir"
signature: "fn create_dir(string path) -> Result<unit, IoError>"
import: "use io::fs::{create_dir};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/e553eda99b575bb4f78c04622508caa036a1a01b/compiler/src/builtin_docs/io/fs.hy#L58"
order: 1
---

Creates the directory `path`.

The parent must already exist (else `Err(IoError::NotFound)`), and
`path` must not (else `Err(IoError::AlreadyExists)`). Use
[`create_dir_all`](/docs/reference/io/fs/create_dir_all) to create missing parents too.
Needs `--allow-write`.

## Parameters

| Name | Type |
|------|------|
| `path` | `string` |

## Returns

`Result<unit, IoError>`

## Examples

```coil
use io::{IoError};
use io::fs::{create_dir, is_dir, remove_dir};
use tests::assert;
let dir = "/tmp/coil_doc_fs_create_dir";
let made = match create_dir(dir) {
    Result::Ok(_) => true,
    Result::Err(_) => false,
};
let again = match create_dir(dir) {
    Result::Err(IoError::AlreadyExists) => true,
    default => false,
};
let dir_now = match is_dir(dir) {
    Result::Ok(b) => b,
    Result::Err(_) => false,
};
let _ = remove_dir(dir);
assert!(made && again && dir_now);
```

## See also

- [`io::fs::create_dir_all`](/docs/reference/io/fs/create_dir_all)
- [`copy`](/docs/reference/io/fs/copy): Copies the contents of file `from` to `to`, creating or overwriting `to`.
- [`exists`](/docs/reference/io/fs/exists): Returns whether anything exists at `path`.
- [`is_dir`](/docs/reference/io/fs/is_dir): Returns whether `path` is a directory, following symbolic links.
- [`is_file`](/docs/reference/io/fs/is_file): Returns whether `path` is a regular file, following symbolic links.
- [`is_symlink`](/docs/reference/io/fs/is_symlink): Returns whether `path` itself is a symbolic link (the link is not followed).
- [`list_dir`](/docs/reference/io/fs/list_dir): Returns the names of the entries in directory `path`, sorted.
- [`metadata`](/docs/reference/io/fs/metadata): Returns facts about `path` as a record, without following a final symbolic link.
