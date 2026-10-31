---
slug: "cli/cli/term/stdout_is_tty"
package: "cli"
title: "stdout_is_tty"
description: "Whether standard output is a terminal."
module: "cli::term"
kind: "fn"
name: "stdout_is_tty"
signature: "fn stdout_is_tty() -> bool"
import: "use cli::term::{stdout_is_tty};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/term.hy#L41"
order: 3
---

Whether standard output is a terminal.

## Returns

`bool`

## See also

- [`tty`](/packages/cli/reference/cli/term/tty): Whether `s` is a terminal.
- [`stdin_is_tty`](/packages/cli/reference/cli/term/stdin_is_tty): Whether standard input is a terminal (`false` when it is piped or redirected).
- [`stderr_is_tty`](/packages/cli/reference/cli/term/stderr_is_tty): Whether standard error is a terminal.
- [`size_or`](/packages/cli/reference/cli/term/size_or): `(cols, rows)` of the terminal behind `s` (or behind another standard stream when `s` is piped), else `(cols, rows)` as given.
- [`columns`](/packages/cli/reference/cli/term/columns): Terminal columns, 80 when there is no terminal.
- [`was_resized`](/packages/cli/reference/cli/term/was_resized): `true` once per window resize since the last call.
- [`enable_ansi`](/packages/cli/reference/cli/term/enable_ansi): Turn on ANSI escape handling for `s` (Windows consoles); `true` when escapes can be written.
- [`raw_mode_with`](/packages/cli/reference/cli/term/raw_mode_with): Raw mode with the signal keys and output processing chosen.
