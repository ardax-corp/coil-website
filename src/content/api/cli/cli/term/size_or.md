---
slug: "cli/cli/term/size_or"
package: "cli"
title: "size_or"
description: "(cols, rows) of the terminal behind s (or behind another standard stream when s is piped), else (cols, rows) as given."
module: "cli::term"
kind: "fn"
name: "size_or"
signature: "fn size_or(Stream s, int cols, int rows) -> (int, int)"
import: "use cli::term::{size_or};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/term.coil#L60"
order: 5
---

`(cols, rows)` of the terminal behind `s` (or behind another standard stream when `s` is piped), else `(cols, rows)` as given.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |
| `cols` | `int` |
| `rows` | `int` |

## Returns

`(int, int)`

## Examples

```coil
use cli::term::size_or;
use io::stdout;
let (cols, rows) = size_or(stdout(), 80, 24);
```

## See also

- [`tty`](/packages/cli/reference/cli/term/tty): Whether `s` is a terminal.
- [`stdin_is_tty`](/packages/cli/reference/cli/term/stdin_is_tty): Whether standard input is a terminal (`false` when it is piped or redirected).
- [`stdout_is_tty`](/packages/cli/reference/cli/term/stdout_is_tty): Whether standard output is a terminal.
- [`stderr_is_tty`](/packages/cli/reference/cli/term/stderr_is_tty): Whether standard error is a terminal.
- [`columns`](/packages/cli/reference/cli/term/columns): Terminal columns, 80 when there is no terminal.
- [`was_resized`](/packages/cli/reference/cli/term/was_resized): `true` once per window resize since the last call.
- [`enable_ansi`](/packages/cli/reference/cli/term/enable_ansi): Turn on ANSI escape handling for `s` (Windows consoles); `true` when escapes can be written.
- [`raw_mode_with`](/packages/cli/reference/cli/term/raw_mode_with): Raw mode with the signal keys and output processing chosen.
