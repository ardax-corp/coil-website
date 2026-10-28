---
slug: "io/fs/is_symlink"
title: "is_symlink"
description: "Returns whether path itself is a symbolic link (the link is not followed)."
module: "io::fs"
kind: "fn"
name: "is_symlink"
signature: "fn is_symlink(string path) -> Result<bool, IoError>"
import: "use io::fs::{is_symlink};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/d4c48479d5e180ae21c28947bc6cd256a880ce80/compiler/src/builtin_docs/io/fs.hy#L176"
order: 6
---

Returns whether `path` itself is a symbolic link (the link is not followed).

A missing path is `Ok(false)`. Needs `--allow-read`.

## Parameters

| Name | Type |
|------|------|
| `path` | `string` |

## Returns

`Result<bool, IoError>`

## Examples

```coil
use io::fs::{create_dir, is_symlink, remove_dir, remove_file, symlink};
use tests::assert;
// A directory of our own: `/tmp` itself is a link on macOS.
let dir = "/tmp/coil_doc_fs_is_symlink_dir";
let link = "/tmp/coil_doc_fs_is_symlink";
let _ = create_dir(dir);
let _ = remove_file(link);
let _ = symlink(dir, link);
let yes = match is_symlink(link) {
    Result::Ok(b) => b,
    Result::Err(_) => false,
};
let no = match is_symlink(dir) {
    Result::Ok(b) => b,
    Result::Err(_) => true,
};
let _ = remove_file(link);
let _ = remove_dir(dir);
assert!(yes && !no);
```

## See also

- [`copy`](/docs/reference/io/fs/copy): Copies the contents of file `from` to `to`, creating or overwriting `to`.
- [`create_dir`](/docs/reference/io/fs/create_dir): Creates the directory `path`.
- [`create_dir_all`](/docs/reference/io/fs/create_dir_all): Creates the directory `path` and any missing parent directories.
- [`exists`](/docs/reference/io/fs/exists): Returns whether anything exists at `path`.
- [`is_dir`](/docs/reference/io/fs/is_dir): Returns whether `path` is a directory, following symbolic links.
- [`is_file`](/docs/reference/io/fs/is_file): Returns whether `path` is a regular file, following symbolic links.
- [`list_dir`](/docs/reference/io/fs/list_dir): Returns the names of the entries in directory `path`, sorted.
- [`metadata`](/docs/reference/io/fs/metadata): Returns facts about `path` as a record, without following a final symbolic link.
