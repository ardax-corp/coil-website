---
slug: "io/tty/size"
title: "size"
description: "Returns the size of the terminal s as (columns, rows)."
module: "io::tty"
kind: "fn"
name: "size"
signature: "fn size(Stream s) -> Result<(int, int), IoError>"
import: "use io::tty::{size};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/62e75718cb75a68f2a80f051fe8180e7a5f6cde9/compiler/src/builtin_docs/io/tty.hy#L37"
order: 1
---

Returns the size of the terminal `s` as `(columns, rows)`.

For `stdin()`, `stdout()` or `stderr()` that is not a terminal, the other
standard streams are asked too, so a program whose output is piped still
learns the size of the terminal it runs in. Returns
`Err(IoError::NotATerminal)` when none is a terminal.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |

## Returns

`Result<(int, int), IoError>`

## Examples

```coil
use io::{stdout};
use io::tty::{size};
let cols = match size(stdout()) {
    Result::Ok(sz) => {
        let (c, _) = sz;
        c
    },
    Result::Err(_) => 80,
};
```

## See also

- [`is_tty`](/docs/reference/io/tty/is_tty): Returns whether `s` is a terminal (`isatty`; a console on Windows).
- [`enter_raw`](/docs/reference/io/tty/enter_raw): Puts the terminal `s` in raw mode: input is not echoed and arrives byte by byte, without waiting for Enter.
- [`leave_raw`](/docs/reference/io/tty/leave_raw): Restores the settings `enter_raw` saved for the terminal `s`.
- [`is_raw`](/docs/reference/io/tty/is_raw): Returns whether the terminal `s` is in raw mode (`enter_raw`).
- [`read_timeout`](/docs/reference/io/tty/read_timeout): Waits up to `timeout_ms` milliseconds for input on `s` (a negative timeout waits for ever), then reads what is there into `buf`.
- [`resized`](/docs/reference/io/tty/resized): Returns `true` once for each change of the terminal window's size since the last call (SIGWINCH; on Windows the console size is compared with the one last seen).
- [`enable_vt`](/docs/reference/io/tty/enable_vt): Makes the output console `s` interpret ANSI escape sequences.
