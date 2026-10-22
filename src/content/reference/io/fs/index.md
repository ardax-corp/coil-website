---
slug: "io/fs/index"
title: "io::fs"
description: "Paths and the file system: metadata, directories, rename, copy, symlinks."
module: "io::fs"
kind: "module"
name: "io::fs"
origin: "builtin"
auto: false
order: 4
---

Functions that inspect the file system ([`exists`](/docs/reference/io/fs/exists), [`metadata`](/docs/reference/io/fs/metadata), [`list_dir`](/docs/reference/io/fs/list_dir),
[`realpath`](/docs/reference/io/fs/realpath), …) need `--allow-read`; those that create, remove or rename need
`--allow-write`, and [`copy`](/docs/reference/io/fs/copy) needs both. See
[Permissions](/docs/language/permissions).

There is no whole-file read or write here: use
[`io::file`](/docs/reference/io/file) (`read_text`, `write_bytes`, …) or open a
stream with [`io::open`](/docs/reference/io/open). The stdlib
[`path`](/docs/reference/path) module wraps these functions in a `Path` value.

Built into the compiler.

Import what you use (`use path::*` is not allowed):

```coil
use io::fs::{copy, create_dir};
```

## Functions

| Name | Description |
|------|-------------|
| [`copy`](/docs/reference/io/fs/copy) | Copies the contents of file `from` to `to`, creating or overwriting `to`. |
| [`create_dir`](/docs/reference/io/fs/create_dir) | Creates the directory `path`. |
| [`create_dir_all`](/docs/reference/io/fs/create_dir_all) | Creates the directory `path` and any missing parent directories. |
| [`exists`](/docs/reference/io/fs/exists) | Returns whether anything exists at `path`. |
| [`is_dir`](/docs/reference/io/fs/is_dir) | Returns whether `path` is a directory, following symbolic links. |
| [`is_file`](/docs/reference/io/fs/is_file) | Returns whether `path` is a regular file, following symbolic links. |
| [`is_symlink`](/docs/reference/io/fs/is_symlink) | Returns whether `path` itself is a symbolic link (the link is not followed). |
| [`list_dir`](/docs/reference/io/fs/list_dir) | Returns the names of the entries in directory `path`, sorted. |
| [`metadata`](/docs/reference/io/fs/metadata) | Returns facts about `path` as a record, without following a final symbolic link. |
| [`read_link`](/docs/reference/io/fs/read_link) | Returns the target stored in the symbolic link at `path`. |
| [`realpath`](/docs/reference/io/fs/realpath) | Returns the canonical absolute form of `path`, with every symbolic link, `.` and `..` resolved. |
| [`remove_dir`](/docs/reference/io/fs/remove_dir) | Removes the empty directory `path`. |
| [`remove_dir_all`](/docs/reference/io/fs/remove_dir_all) | Removes the directory `path` and everything inside it. |
| [`remove_file`](/docs/reference/io/fs/remove_file) | Removes the file (or symbolic link) at `path`. |
| [`rename`](/docs/reference/io/fs/rename) | Renames (moves) `from` to `to`, replacing `to` if it is a file. |
| [`symlink`](/docs/reference/io/fs/symlink) | Creates a symbolic link at `link` that points to `target`. |
