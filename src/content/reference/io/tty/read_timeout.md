---
slug: "io/tty/read_timeout"
title: "read_timeout"
description: "Waits up to timeout_ms milliseconds for input on s (a negative timeout waits for ever), then reads what is there into buf."
module: "io::tty"
kind: "fn"
name: "read_timeout"
signature: "fn read_timeout(Stream s, Vec<byte> buf, int timeout_ms) -> Result<Option<int>, TtyError>"
import: "use io::tty::{read_timeout};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/fc46180d7eca01b66211d0caab301eae32c93c41/compiler/src/builtin_docs/io/tty.hy#L152"
order: 6
---

Waits up to `timeout_ms` milliseconds for input on `s` (a negative timeout waits for ever), then reads what is there into `buf`.

Returns `Ok(Some(n))` with the number of bytes read, `Ok(Some(0))` when
the time passed or the wait was cut short by a window resize (check
[`resized`](/docs/reference/io/tty/resized)), and `Ok(None)` at the end of the input. The wait is what
tells a lone Esc key from the start of an escape sequence. It blocks the
thread (inside a [`task::scope`](/docs/reference/task/fn.scope), other tasks wait too). Works on any
stream; files are always ready.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |
| `buf` | `Vec<byte>` |
| `timeout_ms` | `int` |

## Returns

`Result<Option<int>, TtyError>`

## Examples

```coil
use io::{stdin};
use io::tty::{read_timeout, TtyError};
use string::{to_bytes};
fn main() -> Result<(), TtyError> {
    let buf = to_bytes("        ");
    match read_timeout(stdin(), buf, 10)? {
        Option::Some(0) => {}, // nothing yet
        Option::Some(_) => {}, // bytes in `buf`
        Option::None => {}, // stdin is closed
    }
    return;
}
```

## See also

- [`io::tty::resized`](/docs/reference/io/tty/resized)
- [`task::scope`](/docs/reference/task/fn.scope)
- [`is_tty`](/docs/reference/io/tty/is_tty): Returns whether `s` is a terminal (`isatty`; a console on Windows).
- [`size`](/docs/reference/io/tty/size): Returns the size of the terminal `s` as `(columns, rows)`.
- [`enter_raw`](/docs/reference/io/tty/enter_raw): Puts the terminal `s` in raw mode: input is not echoed and arrives byte by byte, without waiting for Enter.
- [`leave_raw`](/docs/reference/io/tty/leave_raw): Restores the settings `enter_raw` saved for the terminal `s`.
- [`is_raw`](/docs/reference/io/tty/is_raw): Returns whether the terminal `s` is in raw mode (`enter_raw`).
- [`enable_vt`](/docs/reference/io/tty/enable_vt): Makes the output console `s` interpret ANSI escape sequences.
