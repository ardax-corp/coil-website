---
slug: "cli/cli/term/raw_mode"
package: "cli"
title: "raw_mode"
description: "Raw mode on input with Ctrl-C/Ctrl-Z delivered as keys and output sent as is (write \"\\r\\n\"), as full-screen programs and line editors want. Err(TtyError::NotATerminal) when input is not a terminal."
module: "cli::term"
kind: "fn"
name: "raw_mode"
signature: "fn raw_mode(Stream input) -> Result<RawMode, TtyError>"
import: "use cli::term::{raw_mode};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/term.hy#L117"
order: 10
---

Raw mode on `input` with Ctrl-C/Ctrl-Z delivered as keys and output sent as is (write "\r\n"), as full-screen programs and line editors want. `Err(TtyError::NotATerminal)` when `input` is not a terminal.

## Parameters

| Name | Type |
|------|------|
| `input` | `Stream` |

## Returns

`Result<RawMode, TtyError>`

## Examples

```coil
use cli::term::raw_mode;
use io::stdin;
use io::tty::TtyError;
fn main() -> Result<(), TtyError> {
    let raw = raw_mode(stdin())?;
    // ... read keys with cli::events ...
    raw.leave()?;
    return;
}
```

## See also

- [`tty`](/packages/cli/reference/cli/term/tty): Whether `s` is a terminal.
- [`stdin_is_tty`](/packages/cli/reference/cli/term/stdin_is_tty): Whether standard input is a terminal (`false` when it is piped or redirected).
- [`stdout_is_tty`](/packages/cli/reference/cli/term/stdout_is_tty): Whether standard output is a terminal.
- [`stderr_is_tty`](/packages/cli/reference/cli/term/stderr_is_tty): Whether standard error is a terminal.
- [`size_or`](/packages/cli/reference/cli/term/size_or): `(cols, rows)` of the terminal behind `s` (or behind another standard stream when `s` is piped), else `(cols, rows)` as given.
- [`columns`](/packages/cli/reference/cli/term/columns): Terminal columns, 80 when there is no terminal.
- [`was_resized`](/packages/cli/reference/cli/term/was_resized): `true` once per window resize since the last call.
- [`enable_ansi`](/packages/cli/reference/cli/term/enable_ansi): Turn on ANSI escape handling for `s` (Windows consoles); `true` when escapes can be written.
