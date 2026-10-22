---
description: "Paths and the file system: metadata, directories, rename, copy, symlinks."
---
Functions that inspect the file system (`exists`, `metadata`, `list_dir`,
`realpath`, …) need `--allow-read`; those that create, remove or rename need
`--allow-write`, and `copy` needs both. See
[Permissions](/docs/language/permissions).

There is no whole-file read or write here: use
[`io::file`](/docs/reference/io/file) (`read_text`, `write_bytes`, …) or open a
stream with [`io::open`](/docs/reference/io/open). The stdlib
[`path`](/docs/reference/path) module wraps these functions in a `Path` value.
