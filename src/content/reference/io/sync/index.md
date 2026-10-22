---
slug: "io/sync/index"
title: "io::sync"
description: "The io::sync module."
module: "io::sync"
kind: "module"
name: "io::sync"
origin: "stdlib"
auto: false
order: 24
---

Part of [coil-stdlib](/packages/stdlib): add it with `spool add coil-stdlib` or pass `--root path/to/coil-stdlib/src`.

Import what you use (`use path::*` is not allowed):

```coil
use io::sync::{write_all, read_exact};
```

## Functions

| Name | Description |
|------|-------------|
| [`write_all`](/docs/reference/io/sync/write_all) | Write every byte of `buf` to `s`, parking on `WouldBlock` until done. |
| [`read_exact`](/docs/reference/io/sync/read_exact) | Fill `buf` from `s`, parking on `WouldBlock`; `None` on EOF before fill. |
| [`read_to_end`](/docs/reference/io/sync/read_to_end) | Read from `s` until EOF into a new [`Vec<byte>`](/docs/reference/prelude/Vec), parking on `WouldBlock`. |
| [`accept_wait`](/docs/reference/io/sync/accept_wait) | Blocking `accept` on `listener`, parking on `WouldBlock`. |
| [`recv_from_wait`](/docs/reference/io/sync/recv_from_wait) | Blocking UDP `recv_from`, parking on `WouldBlock`; returns `(n, host, port)`. |
| [`send_to_wait`](/docs/reference/io/sync/send_to_wait) | Blocking UDP `send_to`, parking on `WouldBlock`. |
| [`copy`](/docs/reference/io/sync/copy) | Copy file contents from `src` to `dst` via virtual [`io::fs::copy`](/docs/reference/io/fs/copy). |
| [`print`](/docs/reference/io/sync/print) | Write UTF-8 bytes of `s` to stdout (no trailing newline). |
| [`println`](/docs/reference/io/sync/println) | Write `s` plus a trailing LF to stdout. |
| [`eprintln`](/docs/reference/io/sync/eprintln) | Write `s` plus a trailing LF to stderr. |
| [`read_line`](/docs/reference/io/sync/read_line) | Read until LF (10) or EOF. |
