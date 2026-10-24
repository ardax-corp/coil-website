---
slug: "io/tty/index"
title: "io::tty"
description: "Terminals: is a stream a terminal, its size, raw mode, a key read with a timeout, resize notices."
module: "io::tty"
kind: "module"
name: "io::tty"
origin: "builtin"
auto: false
order: 5
---

These work on any `Stream` and need no permission flag, like printing and
reading `stdin`. On a file, pipe or socket they report "not a terminal":
[`is_tty`](/docs/reference/io/tty/is_tty) is `false` and [`size`](/docs/reference/io/tty/size) / [`enter_raw`](/docs/reference/io/tty/enter_raw) return
`Err(IoError::NotATerminal)`.

Raw mode belongs to the terminal, and the program puts it back: whatever is
still raw is restored when the program ends normally, through [`env::exit`](/docs/reference/env/exit),
on an uncaught panic, and on Ctrl-C / SIGTERM / SIGHUP. On Windows the same
calls use the console API; [`enable_vt`](/docs/reference/io/tty/enable_vt) turns on ANSI escapes there.

Under `coil test` the standard streams are usually not terminals, and
stdout / stderr inside [`io::capture_begin()`](/docs/reference/io/capture_begin) never are.

Built into the compiler.

Import what you use (`use path::*` is not allowed):

```coil
use io::tty::{is_tty, size};
```

## Functions

| Name | Description |
|------|-------------|
| [`is_tty`](/docs/reference/io/tty/is_tty) | Returns whether `s` is a terminal (`isatty`; a console on Windows). |
| [`size`](/docs/reference/io/tty/size) | Returns the size of the terminal `s` as `(columns, rows)`. |
| [`enter_raw`](/docs/reference/io/tty/enter_raw) | Puts the terminal `s` in raw mode: input is not echoed and arrives byte by byte, without waiting for Enter. |
| [`leave_raw`](/docs/reference/io/tty/leave_raw) | Restores the settings [`enter_raw`](/docs/reference/io/tty/enter_raw) saved for the terminal `s`. |
| [`is_raw`](/docs/reference/io/tty/is_raw) | Returns whether the terminal `s` is in raw mode ([`enter_raw`](/docs/reference/io/tty/enter_raw)). |
| [`read_timeout`](/docs/reference/io/tty/read_timeout) | Waits up to `timeout_ms` milliseconds for input on `s` (a negative timeout waits for ever), then reads what is there into `buf`. |
| [`resized`](/docs/reference/io/tty/resized) | Returns `true` once for each change of the terminal window's size since the last call (SIGWINCH; on Windows the console size is compared with the one last seen). |
| [`enable_vt`](/docs/reference/io/tty/enable_vt) | Makes the output console `s` interpret ANSI escape sequences. |
