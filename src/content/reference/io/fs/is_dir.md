---
slug: "io/fs/is_dir"
title: "is_dir"
description: "Returns whether path is a directory, following symbolic links."
module: "io::fs"
kind: "fn"
name: "is_dir"
signature: "fn is_dir(string path) -> Result<bool, IoError>"
import: "use io::fs::{is_dir};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/2fd31a884e4b837b7e70c36633a1a9547b1407c9/compiler/src/builtin_docs/io/fs.hy#L122"
order: 4
---

Returns whether `path` is a directory, following symbolic links.

A missing path is `Ok(false)`. Needs `--allow-read`.

## Parameters

| Name | Type |
|------|------|
| `path` | `string` |

## Returns

`Result<bool, IoError>`

## Examples

```coil
use io::fs::{is_dir};
use tests::assert;
let tmp = match is_dir("/tmp") {
    Result::Ok(b) => b,
    Result::Err(_) => false,
};
assert!(tmp);
```

## See also

- [`copy`](/docs/reference/io/fs/copy): Copies the contents of file `from` to `to`, creating or overwriting `to`.
- [`create_dir`](/docs/reference/io/fs/create_dir): Creates the directory `path`.
- [`create_dir_all`](/docs/reference/io/fs/create_dir_all): Creates the directory `path` and any missing parent directories.
- [`exists`](/docs/reference/io/fs/exists): Returns whether anything exists at `path`.
- [`is_file`](/docs/reference/io/fs/is_file): Returns whether `path` is a regular file, following symbolic links.
- [`is_symlink`](/docs/reference/io/fs/is_symlink): Returns whether `path` itself is a symbolic link (the link is not followed).
- [`list_dir`](/docs/reference/io/fs/list_dir): Returns the names of the entries in directory `path`, sorted.
- [`metadata`](/docs/reference/io/fs/metadata): Returns facts about `path` as a record, without following a final symbolic link.
