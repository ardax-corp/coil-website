---
title: "`io::fs` module"
description: "use io::fs::{exists, listdir, realpath, metadata}; — exists, metadata, listdir, realpath (canonical path when it exists), mkdir/remove/rename/copy, symlinks. Returns…"
---

# `io::fs` module

`use io::fs::{exists, list_dir, realpath, metadata};` — `exists`, `metadata`, `list_dir`, `realpath` (canonical path when it exists), mkdir/remove/rename/copy, symlinks. Returns `prelude::Result` with `IoError`. No whole-file `read`/`write` helpers; open a `Stream` via `io::open` and use `read_to_end` / `write_all`.

Inspecting the file system (`exists`, `metadata`, `list_dir`, `realpath`, …) needs `--allow-read`; creating, removing or renaming needs `--allow-write`; `copy` needs both. See [Permissions](/docs/references/permissions).

---

## Related

- [io](/docs/references/io)
- [Permissions](/docs/references/permissions)
