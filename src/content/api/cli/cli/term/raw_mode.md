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
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/term.hy#L81"
order: 7
---

Raw mode on `input` with Ctrl-C/Ctrl-Z delivered as keys and output sent as is (write "\r\n"), as full-screen programs and line editors want. `Err(TtyError::NotATerminal)` when `input` is not a terminal.

## Parameters

| Name | Type |
|------|------|
| `input` | `Stream` |

## Returns

`Result<RawMode, TtyError>`

## See also

- [`tty`](/packages/cli/reference/cli/term/tty): Whether `s` is a terminal.
- [`size_or`](/packages/cli/reference/cli/term/size_or): `(cols, rows)` of the terminal behind `s` (or behind another standard stream when `s` is piped), else `(cols, rows)` as given.
- [`columns`](/packages/cli/reference/cli/term/columns): Terminal columns, 80 when there is no terminal.
- [`was_resized`](/packages/cli/reference/cli/term/was_resized): `true` once per window resize since the last call.
- [`enable_ansi`](/packages/cli/reference/cli/term/enable_ansi): Turn on ANSI escape handling for `s` (Windows consoles); `true` when escapes can be written.
- [`raw_mode_with`](/packages/cli/reference/cli/term/raw_mode_with): Raw mode with the signal keys and output processing chosen.
- [`read_bytes`](/packages/cli/reference/cli/term/read_bytes): Wait up to `timeout_ms` (negative: for ever) and read at most `max` bytes.
- [`tty_io`](/packages/cli/reference/cli/term/tty_io): A stream error as a terminal error.
