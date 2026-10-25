---
slug: "io/fs/is_file"
title: "is_file"
description: "Returns whether path is a regular file, following symbolic links."
module: "io::fs"
kind: "fn"
name: "is_file"
signature: "fn is_file(string path) -> Result<bool, IoError>"
import: "use io::fs::{is_file};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/8d0a3c16e6cbbb1b1f3fe264f1cb8be4f8bb9019/compiler/src/builtin_docs/io/fs.hy#L147"
order: 5
---

Returns whether `path` is a regular file, following symbolic links.

A missing path is `Ok(false)`. Needs `--allow-read`.

## Parameters

| Name | Type |
|------|------|
| `path` | `string` |

## Returns

`Result<bool, IoError>`

## Examples

```coil
use io::fs::{is_file, remove_file};
use io::file::{write_text};
use tests::assert;
let path = "/tmp/coil_doc_fs_is_file.txt";
let _ = write_text(path, "x");
let file = match is_file(path) {
    Result::Ok(b) => b,
    Result::Err(_) => false,
};
let dir = match is_file("/tmp") {
    Result::Ok(b) => b,
    Result::Err(_) => true,
};
let _ = remove_file(path);
assert!(file && !dir);
```

## See also

- [`copy`](/docs/reference/io/fs/copy): Copies the contents of file `from` to `to`, creating or overwriting `to`.
- [`create_dir`](/docs/reference/io/fs/create_dir): Creates the directory `path`.
- [`create_dir_all`](/docs/reference/io/fs/create_dir_all): Creates the directory `path` and any missing parent directories.
- [`exists`](/docs/reference/io/fs/exists): Returns whether anything exists at `path`.
- [`is_dir`](/docs/reference/io/fs/is_dir): Returns whether `path` is a directory, following symbolic links.
- [`is_symlink`](/docs/reference/io/fs/is_symlink): Returns whether `path` itself is a symbolic link (the link is not followed).
- [`list_dir`](/docs/reference/io/fs/list_dir): Returns the names of the entries in directory `path`, sorted.
- [`metadata`](/docs/reference/io/fs/metadata): Returns facts about `path` as a record, without following a final symbolic link.
