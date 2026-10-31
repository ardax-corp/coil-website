---
slug: "io/tty/is_raw"
title: "is_raw"
description: "Returns whether the terminal s is in raw mode (enter_raw)."
module: "io::tty"
kind: "fn"
name: "is_raw"
signature: "fn is_raw(Stream s) -> bool"
import: "use io::tty::{is_raw};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/builtin_docs/io/tty.hy#L124"
order: 5
---

Returns whether the terminal `s` is in raw mode ([`enter_raw`](/docs/reference/io/tty/enter_raw)).

Raw mode belongs to the terminal, not the stream: two streams on the
same terminal agree.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |

## Returns

`bool`

## Examples

```coil
use io::{stdin};
use io::tty::{is_raw};
let raw = is_raw(stdin());
```

## See also

- [`io::tty::enter_raw`](/docs/reference/io/tty/enter_raw)
- [`is_tty`](/docs/reference/io/tty/is_tty): Returns whether `s` is a terminal (`isatty`; a console on Windows).
- [`size`](/docs/reference/io/tty/size): Returns the size of the terminal `s` as `(columns, rows)`.
- [`leave_raw`](/docs/reference/io/tty/leave_raw): Restores the settings `enter_raw` saved for the terminal `s`.
- [`read_timeout`](/docs/reference/io/tty/read_timeout): Waits up to `timeout_ms` milliseconds for input on `s` (a negative timeout waits for ever), then reads what is there into `buf`.
- [`resized`](/docs/reference/io/tty/resized): Returns `true` once for each change of the terminal window's size since the last call (SIGWINCH; on Windows the console size is compared with the one last seen).
- [`enable_vt`](/docs/reference/io/tty/enable_vt): Makes the output console `s` interpret ANSI escape sequences.
