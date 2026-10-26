---
slug: "io/fs/remove_dir"
title: "remove_dir"
description: "Removes the empty directory path."
module: "io::fs"
kind: "fn"
name: "remove_dir"
signature: "fn remove_dir(string path) -> Result<unit, IoError>"
import: "use io::fs::{remove_dir};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/fc46180d7eca01b66211d0caab301eae32c93c41/compiler/src/builtin_docs/io/fs.hy#L304"
order: 11
---

Removes the empty directory `path`.

Fails when the directory is not empty; use [`remove_dir_all`](/docs/reference/io/fs/remove_dir_all) for that.
Needs `--allow-write`.

## Parameters

| Name | Type |
|------|------|
| `path` | `string` |

## Returns

`Result<unit, IoError>`

## Examples

```coil
use io::fs::{create_dir, exists, remove_dir};
use tests::assert;
let dir = "/tmp/coil_doc_fs_remove_dir";
let _ = create_dir(dir);
let removed = match remove_dir(dir) {
    Result::Ok(_) => true,
    Result::Err(_) => false,
};
let left = match exists(dir) {
    Result::Ok(b) => b,
    Result::Err(_) => true,
};
assert!(removed && !left);
```

## See also

- [`io::fs::remove_dir_all`](/docs/reference/io/fs/remove_dir_all)
- [`copy`](/docs/reference/io/fs/copy): Copies the contents of file `from` to `to`, creating or overwriting `to`.
- [`create_dir`](/docs/reference/io/fs/create_dir): Creates the directory `path`.
- [`create_dir_all`](/docs/reference/io/fs/create_dir_all): Creates the directory `path` and any missing parent directories.
- [`exists`](/docs/reference/io/fs/exists): Returns whether anything exists at `path`.
- [`is_dir`](/docs/reference/io/fs/is_dir): Returns whether `path` is a directory, following symbolic links.
- [`is_file`](/docs/reference/io/fs/is_file): Returns whether `path` is a regular file, following symbolic links.
- [`is_symlink`](/docs/reference/io/fs/is_symlink): Returns whether `path` itself is a symbolic link (the link is not followed).
