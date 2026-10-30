---
slug: "io/fs/metadata"
title: "metadata"
description: "Returns facts about path as a record, without following a final symbolic link."
module: "io::fs"
kind: "fn"
name: "metadata"
signature: "fn metadata(string path) -> Result<Metadata, IoError>"
import: "use io::fs::{metadata};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/ea16288b0bd35fbe92e6665d44f9277d1dec7d29/compiler/src/builtin_docs/io/fs.hy#L232"
order: 8
---

Returns facts about `path` as a record, without following a final symbolic link.

Fields: `size` (bytes), [`is_file`](/docs/reference/io/fs/is_file), [`is_dir`](/docs/reference/io/fs/is_dir), [`is_symlink`](/docs/reference/io/fs/is_symlink), and
`modified_unix` (last modification time in whole seconds since the
Unix epoch, or `0` when the OS does not report it). For a symbolic
link the record describes the link itself, so [`is_symlink`](/docs/reference/io/fs/is_symlink) is `true`.
Returns `Err(IoError::NotFound)` for a missing path.
Needs `--allow-read`.

The record type has no name: `Metadata` in the signature above stands
for `{ size: int, is_file: bool, is_dir: bool, is_symlink: bool, modified_unix: int }`.

## Parameters

| Name | Type |
|------|------|
| `path` | `string` |

## Returns

`Result<Metadata, IoError>`

## Examples

```coil
use io::fs::{metadata, remove_file};
use io::file::{write_text};
use tests::assert;
let path = "/tmp/coil_doc_fs_metadata.txt";
let _ = write_text(path, "abcd");
let (size, file) = match metadata(path) {
    Result::Ok(m) => (m.size, m.is_file),
    Result::Err(_) => (0, false),
};
let _ = remove_file(path);
assert!(size == 4 && file);
```

## See also

- [`io::fs::is_file`](/docs/reference/io/fs/is_file)
- [`io::fs::is_dir`](/docs/reference/io/fs/is_dir)
- [`io::fs::is_symlink`](/docs/reference/io/fs/is_symlink)
- [`copy`](/docs/reference/io/fs/copy): Copies the contents of file `from` to `to`, creating or overwriting `to`.
- [`create_dir`](/docs/reference/io/fs/create_dir): Creates the directory `path`.
- [`create_dir_all`](/docs/reference/io/fs/create_dir_all): Creates the directory `path` and any missing parent directories.
- [`exists`](/docs/reference/io/fs/exists): Returns whether anything exists at `path`.
- [`list_dir`](/docs/reference/io/fs/list_dir): Returns the names of the entries in directory `path`, sorted.
