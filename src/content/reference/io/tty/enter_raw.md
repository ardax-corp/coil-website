---
slug: "io/tty/enter_raw"
title: "enter_raw"
description: "Puts the terminal s in raw mode: input is not echoed and arrives byte by byte, without waiting for Enter."
module: "io::tty"
kind: "fn"
name: "enter_raw"
signature: "fn enter_raw(Stream s, bool keep_signals, bool keep_output) -> Result<(), TtyError>"
import: "use io::tty::{enter_raw};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/ea16288b0bd35fbe92e6665d44f9277d1dec7d29/compiler/src/builtin_docs/io/tty.hy#L96"
order: 3
---

Puts the terminal `s` in raw mode: input is not echoed and arrives byte by byte, without waiting for Enter.

With `keep_signals`, Ctrl-C and Ctrl-Z still send their signals;
without it they arrive as the bytes `3` and `26`. With `keep_output`,
`"\n"` still moves to the start of the next line; without it output is
sent as is (write `"\r\n"`).

The terminal's settings are saved the first time and restored by
[`leave_raw`](/docs/reference/io/tty/leave_raw), and also when the program ends while still raw: normally,
through [`env::exit`](/docs/reference/env/exit), on an uncaught panic, and on SIGINT / SIGTERM /
SIGHUP / SIGQUIT (Ctrl-C or closing the window on Windows). Calling it
again changes the flags; [`leave_raw`](/docs/reference/io/tty/leave_raw) still restores the first settings.
Returns `Err(TtyError::NotATerminal)` when `s` is not a terminal.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |
| `keep_signals` | `bool` |
| `keep_output` | `bool` |

## Returns

`Result<(), TtyError>`

## Examples

```coil
use io::{stdin};
use io::tty::{enter_raw, leave_raw, TtyError};
fn main() -> Result<(), TtyError> {
    match enter_raw(stdin(), true, true) {
        Result::Ok(_) => {
            // ... read keys ...
            leave_raw(stdin())?;
        },
        Result::Err(TtyError::NotATerminal) => {},
        Result::Err(e) => raise e,
    }
    return;
}
```

## See also

- [`io::tty::leave_raw`](/docs/reference/io/tty/leave_raw)
- [`env::exit`](/docs/reference/env/exit)
- [`is_tty`](/docs/reference/io/tty/is_tty): Returns whether `s` is a terminal (`isatty`; a console on Windows).
- [`size`](/docs/reference/io/tty/size): Returns the size of the terminal `s` as `(columns, rows)`.
- [`is_raw`](/docs/reference/io/tty/is_raw): Returns whether the terminal `s` is in raw mode (`enter_raw`).
- [`read_timeout`](/docs/reference/io/tty/read_timeout): Waits up to `timeout_ms` milliseconds for input on `s` (a negative timeout waits for ever), then reads what is there into `buf`.
- [`resized`](/docs/reference/io/tty/resized): Returns `true` once for each change of the terminal window's size since the last call (SIGWINCH; on Windows the console size is compared with the one last seen).
- [`enable_vt`](/docs/reference/io/tty/enable_vt): Makes the output console `s` interpret ANSI escape sequences.
