---
slug: "io/fs/remove_file"
title: "remove_file"
description: "Removes the file (or symbolic link) at path."
module: "io::fs"
kind: "fn"
name: "remove_file"
signature: "fn remove_file(string path) -> Result<unit, IoError>"
import: "use io::fs::{remove_file};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/77fade5c3d914df2d977d52981e180deb6bea0e4/compiler/src/builtin_docs/io/fs.hy#L357"
order: 13
---

Removes the file (or symbolic link) at `path`.

A symbolic link is removed itself, not its target. Returns
`Err(IoError::NotFound)` when nothing is there.
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
use io::fs::{remove_file};
use io::file::{write_text};
use tests::assert;
let path = "/tmp/coil_doc_fs_remove_file.txt";
let _ = write_text(path, "x");
let removed = match remove_file(path) {
    Result::Ok(_) => true,
    Result::Err(_) => false,
};
let again = match remove_file(path) {
    Result::Err(IoError::NotFound) => true,
    default => false,
};
assert!(removed && again);
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
