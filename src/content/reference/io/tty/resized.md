---
slug: "io/tty/resized"
title: "resized"
description: "Returns true once for each change of the terminal window's size since the last call (SIGWINCH; on Windows the console size is compared with the one last seen). The first call only starts watching."
module: "io::tty"
kind: "fn"
name: "resized"
signature: "fn resized() -> bool"
import: "use io::tty::{resized};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/ea16288b0bd35fbe92e6665d44f9277d1dec7d29/compiler/src/builtin_docs/io/tty.hy#L166"
order: 7
---

Returns `true` once for each change of the terminal window's size since the last call (SIGWINCH; on Windows the console size is compared with the one last seen). The first call only starts watching.

## Returns

`bool`

## Examples

```coil
use io::tty::{resized};
if resized() {
    // redraw at the new size
}
```

## See also

- [`is_tty`](/docs/reference/io/tty/is_tty): Returns whether `s` is a terminal (`isatty`; a console on Windows).
- [`size`](/docs/reference/io/tty/size): Returns the size of the terminal `s` as `(columns, rows)`.
- [`enter_raw`](/docs/reference/io/tty/enter_raw): Puts the terminal `s` in raw mode: input is not echoed and arrives byte by byte, without waiting for Enter.
- [`leave_raw`](/docs/reference/io/tty/leave_raw): Restores the settings `enter_raw` saved for the terminal `s`.
- [`is_raw`](/docs/reference/io/tty/is_raw): Returns whether the terminal `s` is in raw mode (`enter_raw`).
- [`read_timeout`](/docs/reference/io/tty/read_timeout): Waits up to `timeout_ms` milliseconds for input on `s` (a negative timeout waits for ever), then reads what is there into `buf`.
- [`enable_vt`](/docs/reference/io/tty/enable_vt): Makes the output console `s` interpret ANSI escape sequences.
