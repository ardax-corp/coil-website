---
slug: "cli/cli/term/read_bytes"
package: "cli"
title: "read_bytes"
description: "Wait up to timeout_ms (negative: for ever) and read at most max bytes. Some([]) when the time passed or a resize cut the wait short, None at end of input. Works on any stream, not only a terminal."
module: "cli::term"
kind: "fn"
name: "read_bytes"
signature: "fn read_bytes(Stream s, int max, int timeout_ms) -> Result<Option<Vec<byte>>, TtyError>"
import: "use cli::term::{read_bytes};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/term.hy#L140"
order: 11
---

Wait up to `timeout_ms` (negative: for ever) and read at most `max` bytes. `Some([])` when the time passed or a resize cut the wait short, `None` at end of input. Works on any stream, not only a terminal.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |
| `max` | `int` |
| `timeout_ms` | `int` |

## Returns

`Result<Option<Vec<byte>>, TtyError>`

## See also

- [`tty`](/packages/cli/reference/cli/term/tty): Whether `s` is a terminal.
- [`stdin_is_tty`](/packages/cli/reference/cli/term/stdin_is_tty): Whether standard input is a terminal (`false` when it is piped or redirected).
- [`stdout_is_tty`](/packages/cli/reference/cli/term/stdout_is_tty): Whether standard output is a terminal.
- [`stderr_is_tty`](/packages/cli/reference/cli/term/stderr_is_tty): Whether standard error is a terminal.
- [`size_or`](/packages/cli/reference/cli/term/size_or): `(cols, rows)` of the terminal behind `s` (or behind another standard stream when `s` is piped), else `(cols, rows)` as given.
- [`columns`](/packages/cli/reference/cli/term/columns): Terminal columns, 80 when there is no terminal.
- [`was_resized`](/packages/cli/reference/cli/term/was_resized): `true` once per window resize since the last call.
- [`enable_ansi`](/packages/cli/reference/cli/term/enable_ansi): Turn on ANSI escape handling for `s` (Windows consoles); `true` when escapes can be written.
