---
slug: "io/tty/is_tty"
title: "is_tty"
description: "Returns whether s is a terminal (isatty; a console on Windows)."
module: "io::tty"
kind: "fn"
name: "is_tty"
signature: "fn is_tty(Stream s) -> bool"
import: "use io::tty::{is_tty};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/d4c48479d5e180ae21c28947bc6cd256a880ce80/compiler/src/builtin_docs/io/tty.hy#L40"
order: 1
---

Returns whether `s` is a terminal (`isatty`; a console on Windows).

`stdout()` and `stderr()` are not terminals while [`io::capture_begin()`](/docs/reference/io/capture_begin)
keeps their writes. A closed stream is not a terminal.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |

## Returns

`bool`

## Examples

```coil
use io::{stdout};
use io::tty::{is_tty};
let color = is_tty(stdout());
```

## See also

- [`io::capture_begin`](/docs/reference/io/capture_begin)
- [`size`](/docs/reference/io/tty/size): Returns the size of the terminal `s` as `(columns, rows)`.
- [`enter_raw`](/docs/reference/io/tty/enter_raw): Puts the terminal `s` in raw mode: input is not echoed and arrives byte by byte, without waiting for Enter.
- [`leave_raw`](/docs/reference/io/tty/leave_raw): Restores the settings `enter_raw` saved for the terminal `s`.
- [`is_raw`](/docs/reference/io/tty/is_raw): Returns whether the terminal `s` is in raw mode (`enter_raw`).
- [`read_timeout`](/docs/reference/io/tty/read_timeout): Waits up to `timeout_ms` milliseconds for input on `s` (a negative timeout waits for ever), then reads what is there into `buf`.
- [`resized`](/docs/reference/io/tty/resized): Returns `true` once for each change of the terminal window's size since the last call (SIGWINCH; on Windows the console size is compared with the one last seen).
- [`enable_vt`](/docs/reference/io/tty/enable_vt): Makes the output console `s` interpret ANSI escape sequences.
