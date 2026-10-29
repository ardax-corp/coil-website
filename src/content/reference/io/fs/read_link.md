---
slug: "io/fs/read_link"
title: "read_link"
description: "Returns the target stored in the symbolic link at path."
module: "io::fs"
kind: "fn"
name: "read_link"
signature: "fn read_link(string path) -> Result<string, IoError>"
import: "use io::fs::{read_link};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/de4bf4dc9af36e25e72142d3d0ccd454fb0021a4/compiler/src/builtin_docs/io/fs.hy#L256"
order: 9
---

Returns the target stored in the symbolic link at `path`.

The target is returned as written when the link was made (it may be
relative and need not exist). Returns `Err(IoError::InvalidInput)` (or
another error, depending on the OS) when `path` is not a link.
Needs `--allow-read`.

## Parameters

| Name | Type |
|------|------|
| `path` | `string` |

## Returns

`Result<string, IoError>`

## Examples

```coil
use io::fs::{read_link, remove_file, symlink};
use tests::assert;
let link = "/tmp/coil_doc_fs_read_link";
let _ = remove_file(link);
let _ = symlink("some/target.txt", link);
let target = match read_link(link) {
    Result::Ok(t) => t,
    Result::Err(_) => "",
};
let _ = remove_file(link);
assert!(target == "some/target.txt");
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
