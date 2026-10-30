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
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/term.hy#L60"
order: 5
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
- [`size_or`](/packages/cli/reference/cli/term/size_or): `(cols, rows)` of the terminal behind `s` (or behind another standard stream when `s` is piped), else `(cols, rows)` as given.
- [`columns`](/packages/cli/reference/cli/term/columns): Terminal columns, 80 when there is no terminal.
- [`was_resized`](/packages/cli/reference/cli/term/was_resized): `true` once per window resize since the last call.
- [`raw_mode_with`](/packages/cli/reference/cli/term/raw_mode_with): Raw mode with the signal keys and output processing chosen.
- [`raw_mode`](/packages/cli/reference/cli/term/raw_mode): Raw mode on `input` with Ctrl-C/Ctrl-Z delivered as keys and output sent as is (write "\r\n"), as full-screen programs and line editors want.
- [`read_bytes`](/packages/cli/reference/cli/term/read_bytes): Wait up to `timeout_ms` (negative: for ever) and read at most `max` bytes.
- [`tty_io`](/packages/cli/reference/cli/term/tty_io): A stream error as a terminal error.
