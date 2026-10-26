---
slug: "io/fs/copy"
title: "copy"
description: "Copies the contents of file from to to, creating or overwriting to."
module: "io::fs"
kind: "fn"
name: "copy"
signature: "fn copy(string from, string to) -> Result<unit, IoError>"
import: "use io::fs::{copy};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/fc46180d7eca01b66211d0caab301eae32c93c41/compiler/src/builtin_docs/io/fs.hy#L27"
order: 0
---

Copies the contents of file `from` to `to`, creating or overwriting `to`.

Copies file contents and permissions; it does not copy directories.
Returns `Err(IoError::NotFound)` when `from` does not exist.
A program that reaches `copy` compiles only with both `--allow-read`
and `--allow-write`.

## Parameters

| Name | Type |
|------|------|
| `from` | `string` |
| `to` | `string` |

## Returns

`Result<unit, IoError>`

## Examples

```coil
use io::fs::{copy, create_dir_all, remove_dir_all};
use io::file::{read_text, write_text};
use tests::assert;
let dir = "/tmp/coil_doc_fs_copy";
let _ = create_dir_all(dir);
let _ = write_text("/tmp/coil_doc_fs_copy/a.txt", "data");
let _ = copy("/tmp/coil_doc_fs_copy/a.txt", "/tmp/coil_doc_fs_copy/b.txt");
let text = match read_text("/tmp/coil_doc_fs_copy/b.txt") {
    Result::Ok(t) => t,
    Result::Err(_) => "",
};
let _ = remove_dir_all(dir);
assert!(text == "data");
```

## See also

- [`create_dir`](/docs/reference/io/fs/create_dir): Creates the directory `path`.
- [`create_dir_all`](/docs/reference/io/fs/create_dir_all): Creates the directory `path` and any missing parent directories.
- [`exists`](/docs/reference/io/fs/exists): Returns whether anything exists at `path`.
- [`is_dir`](/docs/reference/io/fs/is_dir): Returns whether `path` is a directory, following symbolic links.
- [`is_file`](/docs/reference/io/fs/is_file): Returns whether `path` is a regular file, following symbolic links.
- [`is_symlink`](/docs/reference/io/fs/is_symlink): Returns whether `path` itself is a symbolic link (the link is not followed).
- [`list_dir`](/docs/reference/io/fs/list_dir): Returns the names of the entries in directory `path`, sorted.
- [`metadata`](/docs/reference/io/fs/metadata): Returns facts about `path` as a record, without following a final symbolic link.
