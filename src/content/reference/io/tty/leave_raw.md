---
slug: "io/tty/leave_raw"
title: "leave_raw"
description: "Restores the settings enter_raw saved for the terminal s. Does nothing when it is not in raw mode (or not a terminal)."
module: "io::tty"
kind: "fn"
name: "leave_raw"
signature: "fn leave_raw(Stream s) -> Result<(), TtyError>"
import: "use io::tty::{leave_raw};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/fc46180d7eca01b66211d0caab301eae32c93c41/compiler/src/builtin_docs/io/tty.hy#L110"
order: 4
---

Restores the settings [`enter_raw`](/docs/reference/io/tty/enter_raw) saved for the terminal `s`. Does nothing when it is not in raw mode (or not a terminal).

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |

## Returns

`Result<(), TtyError>`

## Examples

```coil
use io::{stdin};
use io::tty::{is_raw, leave_raw};
use tests::assert;
let _ = leave_raw(stdin());
assert!(!is_raw(stdin()));
```

## See also

- [`io::tty::enter_raw`](/docs/reference/io/tty/enter_raw)
- [`is_tty`](/docs/reference/io/tty/is_tty): Returns whether `s` is a terminal (`isatty`; a console on Windows).
- [`size`](/docs/reference/io/tty/size): Returns the size of the terminal `s` as `(columns, rows)`.
- [`is_raw`](/docs/reference/io/tty/is_raw): Returns whether the terminal `s` is in raw mode (`enter_raw`).
- [`read_timeout`](/docs/reference/io/tty/read_timeout): Waits up to `timeout_ms` milliseconds for input on `s` (a negative timeout waits for ever), then reads what is there into `buf`.
- [`resized`](/docs/reference/io/tty/resized): Returns `true` once for each change of the terminal window's size since the last call (SIGWINCH; on Windows the console size is compared with the one last seen).
- [`enable_vt`](/docs/reference/io/tty/enable_vt): Makes the output console `s` interpret ANSI escape sequences.
