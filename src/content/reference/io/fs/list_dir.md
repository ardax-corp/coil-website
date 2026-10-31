---
slug: "io/fs/list_dir"
title: "list_dir"
description: "Returns the names of the entries in directory path, sorted."
module: "io::fs"
kind: "fn"
name: "list_dir"
signature: "fn list_dir(string path) -> Result<Vec<string>, IoError>"
import: "use io::fs::{list_dir};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/builtin_docs/io/fs.coil#L203"
order: 7
---

Returns the names of the entries in directory `path`, sorted.

Only the entry names are returned (not full paths), without `.` and
`..`. Returns `Err(IoError::NotFound)` for a missing path and
`Err(IoError::NotADirectory)` when `path` is a file.
Needs `--allow-read`.

## Parameters

| Name | Type |
|------|------|
| `path` | `string` |

## Returns

`Result<Vec<string>, IoError>`

## Examples

```coil
use io::fs::{create_dir_all, list_dir, remove_dir_all};
use io::file::{write_text};
use tests::assert;
let dir = "/tmp/coil_doc_fs_list_dir";
let _ = create_dir_all(dir);
let _ = write_text("/tmp/coil_doc_fs_list_dir/b.txt", "");
let _ = write_text("/tmp/coil_doc_fs_list_dir/a.txt", "");
let names = match list_dir(dir) {
    Result::Ok(v) => v,
    Result::Err(_) => Vec::new(),
};
let _ = remove_dir_all(dir);
assert!(names.len() == 2);
assert!(names[0] == "a.txt" && names[1] == "b.txt");
```

## See also

- [`copy`](/docs/reference/io/fs/copy): Copies the contents of file `from` to `to`, creating or overwriting `to`.
- [`create_dir`](/docs/reference/io/fs/create_dir): Creates the directory `path`.
- [`create_dir_all`](/docs/reference/io/fs/create_dir_all): Creates the directory `path` and any missing parent directories.
- [`exists`](/docs/reference/io/fs/exists): Returns whether anything exists at `path`.
- [`is_dir`](/docs/reference/io/fs/is_dir): Returns whether `path` is a directory, following symbolic links.
- [`is_file`](/docs/reference/io/fs/is_file): Returns whether `path` is a regular file, following symbolic links.
- [`is_symlink`](/docs/reference/io/fs/is_symlink): Returns whether `path` itself is a symbolic link (the link is not followed).
- [`metadata`](/docs/reference/io/fs/metadata): Returns facts about `path` as a record, without following a final symbolic link.
