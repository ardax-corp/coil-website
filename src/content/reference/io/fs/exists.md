---
slug: "io/fs/exists"
title: "exists"
description: "Returns whether anything exists at path."
module: "io::fs"
kind: "fn"
name: "exists"
signature: "fn exists(string path) -> Result<bool, IoError>"
import: "use io::fs::{exists};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/12901b3580d5c7df098353b1e92eedcb7e41f91d/compiler/src/builtin_docs/io/fs.hy#L105"
order: 3
---

Returns whether anything exists at `path`.

Follows symbolic links, so a link whose target is missing gives
`Ok(false)`. A missing path is `Ok(false)`, not an error; other OS
errors (such as `PermissionDenied`) are returned as `Err`.
Needs `--allow-read`.

## Parameters

| Name | Type |
|------|------|
| `path` | `string` |

## Returns

`Result<bool, IoError>`

## Examples

```coil
use io::fs::{exists};
use tests::assert;
let tmp = match exists("/tmp") {
    Result::Ok(b) => b,
    Result::Err(_) => false,
};
let missing = match exists("/tmp/coil_doc_fs_no_such_file") {
    Result::Ok(b) => b,
    Result::Err(_) => true,
};
assert!(tmp && !missing);
```

## See also

- [`copy`](/docs/reference/io/fs/copy): Copies the contents of file `from` to `to`, creating or overwriting `to`.
- [`create_dir`](/docs/reference/io/fs/create_dir): Creates the directory `path`.
- [`create_dir_all`](/docs/reference/io/fs/create_dir_all): Creates the directory `path` and any missing parent directories.
- [`is_dir`](/docs/reference/io/fs/is_dir): Returns whether `path` is a directory, following symbolic links.
- [`is_file`](/docs/reference/io/fs/is_file): Returns whether `path` is a regular file, following symbolic links.
- [`is_symlink`](/docs/reference/io/fs/is_symlink): Returns whether `path` itself is a symbolic link (the link is not followed).
- [`list_dir`](/docs/reference/io/fs/list_dir): Returns the names of the entries in directory `path`, sorted.
- [`metadata`](/docs/reference/io/fs/metadata): Returns facts about `path` as a record, without following a final symbolic link.
