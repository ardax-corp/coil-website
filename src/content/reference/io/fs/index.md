---
slug: "io/fs/index"
title: "io::fs"
description: "The io::fs module."
module: "io::fs"
kind: "module"
name: "io::fs"
origin: "builtin"
auto: false
order: 4
---

Built into the compiler.

Import what you use (`use path::*` is not allowed):

```coil
use io::fs::{copy, create_dir};
```

## Functions

| Name | Description |
|------|-------------|
| [`copy`](/docs/reference/io/fs/copy) | Copies the contents of file `from` to `to`, creating or overwriting `to`. |
| [`create_dir`](/docs/reference/io/fs/create_dir) | Creates the directory [`path`](/docs/reference/path). |
| [`create_dir_all`](/docs/reference/io/fs/create_dir_all) | Creates the directory [`path`](/docs/reference/path) and any missing parent directories. |
| [`exists`](/docs/reference/io/fs/exists) | Returns whether anything exists at [`path`](/docs/reference/path). |
| [`is_dir`](/docs/reference/io/fs/is_dir) | Returns whether [`path`](/docs/reference/path) is a directory, following symbolic links. |
| [`is_file`](/docs/reference/io/fs/is_file) | Returns whether [`path`](/docs/reference/path) is a regular file, following symbolic links. |
| [`is_symlink`](/docs/reference/io/fs/is_symlink) | Returns whether [`path`](/docs/reference/path) itself is a symbolic link (the link is not followed). |
| [`list_dir`](/docs/reference/io/fs/list_dir) | Returns the names of the entries in directory [`path`](/docs/reference/path), sorted. |
| [`metadata`](/docs/reference/io/fs/metadata) | Returns facts about [`path`](/docs/reference/path) as a record, without following a final symbolic link. |
| [`read_link`](/docs/reference/io/fs/read_link) | Returns the target stored in the symbolic link at [`path`](/docs/reference/path). |
| [`realpath`](/docs/reference/io/fs/realpath) | Returns the canonical absolute form of [`path`](/docs/reference/path), with every symbolic link, `.` and `..` resolved. |
| [`remove_dir`](/docs/reference/io/fs/remove_dir) | Removes the empty directory [`path`](/docs/reference/path). |
| [`remove_dir_all`](/docs/reference/io/fs/remove_dir_all) | Removes the directory [`path`](/docs/reference/path) and everything inside it. |
| [`remove_file`](/docs/reference/io/fs/remove_file) | Removes the file (or symbolic link) at [`path`](/docs/reference/path). |
| [`rename`](/docs/reference/io/fs/rename) | Renames (moves) `from` to `to`, replacing `to` if it is a file. |
| [`symlink`](/docs/reference/io/fs/symlink) | Creates a symbolic link at `link` that points to `target`. |
