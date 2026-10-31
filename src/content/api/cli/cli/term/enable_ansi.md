---
slug: "cli/cli/term/enable_ansi"
package: "cli"
title: "enable_ansi"
description: "Turn on ANSI escape handling for s (Windows consoles); true when escapes can be written."
module: "cli::term"
kind: "fn"
name: "enable_ansi"
signature: "fn enable_ansi(Stream s) -> bool"
import: "use cli::term::{enable_ansi};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/term.hy#L80"
order: 8
---

Turn on ANSI escape handling for `s` (Windows consoles); `true` when escapes can be written.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |

## Returns

`bool`

## See also

- [`tty`](/packages/cli/reference/cli/term/tty): Whether `s` is a terminal.
- [`stdin_is_tty`](/packages/cli/reference/cli/term/stdin_is_tty): Whether standard input is a terminal (`false` when it is piped or redirected).
- [`stdout_is_tty`](/packages/cli/reference/cli/term/stdout_is_tty): Whether standard output is a terminal.
- [`stderr_is_tty`](/packages/cli/reference/cli/term/stderr_is_tty): Whether standard error is a terminal.
- [`size_or`](/packages/cli/reference/cli/term/size_or): `(cols, rows)` of the terminal behind `s` (or behind another standard stream when `s` is piped), else `(cols, rows)` as given.
- [`columns`](/packages/cli/reference/cli/term/columns): Terminal columns, 80 when there is no terminal.
- [`was_resized`](/packages/cli/reference/cli/term/was_resized): `true` once per window resize since the last call.
- [`raw_mode_with`](/packages/cli/reference/cli/term/raw_mode_with): Raw mode with the signal keys and output processing chosen.
