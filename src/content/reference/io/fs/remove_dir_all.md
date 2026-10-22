---
slug: "io/fs/remove_dir_all"
title: "remove_dir_all"
description: "Removes the directory path and everything inside it."
module: "io::fs"
kind: "fn"
name: "remove_dir_all"
signature: "fn remove_dir_all(string path) -> Result<unit, IoError>"
import: "use io::fs::{remove_dir_all};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/cba8e48ffdc03a4068234e57b347406c4b478e0f/compiler/src/builtin_docs/io/fs.hy#L330"
order: 12
---

Removes the directory `path` and everything inside it.

Symbolic links inside are removed, not followed. Returns
`Err(IoError::NotFound)` when `path` does not exist.
Needs `--allow-write`.

## Parameters

| Name | Type |
|------|------|
| `path` | `string` |

## Returns

`Result<unit, IoError>`

## Examples

```coil
use io::fs::{create_dir_all, exists, remove_dir_all};
use io::file::{write_text};
use tests::assert;
let _ = create_dir_all("/tmp/coil_doc_fs_rda/x/y");
let _ = write_text("/tmp/coil_doc_fs_rda/x/y/f.txt", "z");
let removed = match remove_dir_all("/tmp/coil_doc_fs_rda") {
    Result::Ok(_) => true,
    Result::Err(_) => false,
};
let left = match exists("/tmp/coil_doc_fs_rda") {
    Result::Ok(b) => b,
    Result::Err(_) => true,
};
assert!(removed && !left);
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
