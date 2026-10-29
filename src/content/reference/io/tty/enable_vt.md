---
slug: "io/tty/enable_vt"
title: "enable_vt"
description: "Makes the output console s interpret ANSI escape sequences. Needed on Windows consoles, where it returns false when s is not a console; elsewhere terminals already do and it returns true."
module: "io::tty"
kind: "fn"
name: "enable_vt"
signature: "fn enable_vt(Stream s) -> bool"
import: "use io::tty::{enable_vt};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/e553eda99b575bb4f78c04622508caa036a1a01b/compiler/src/builtin_docs/io/tty.hy#L179"
order: 8
---

Makes the output console `s` interpret ANSI escape sequences. Needed on Windows consoles, where it returns `false` when `s` is not a console; elsewhere terminals already do and it returns `true`.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |

## Returns

`bool`

## Examples

```coil
use io::{stdout};
use io::tty::{enable_vt, is_tty};
let ansi = is_tty(stdout()) && enable_vt(stdout());
```

## See also

- [`is_tty`](/docs/reference/io/tty/is_tty): Returns whether `s` is a terminal (`isatty`; a console on Windows).
- [`size`](/docs/reference/io/tty/size): Returns the size of the terminal `s` as `(columns, rows)`.
- [`enter_raw`](/docs/reference/io/tty/enter_raw): Puts the terminal `s` in raw mode: input is not echoed and arrives byte by byte, without waiting for Enter.
- [`leave_raw`](/docs/reference/io/tty/leave_raw): Restores the settings `enter_raw` saved for the terminal `s`.
- [`is_raw`](/docs/reference/io/tty/is_raw): Returns whether the terminal `s` is in raw mode (`enter_raw`).
- [`read_timeout`](/docs/reference/io/tty/read_timeout): Waits up to `timeout_ms` milliseconds for input on `s` (a negative timeout waits for ever), then reads what is there into `buf`.
- [`resized`](/docs/reference/io/tty/resized): Returns `true` once for each change of the terminal window's size since the last call (SIGWINCH; on Windows the console size is compared with the one last seen).
