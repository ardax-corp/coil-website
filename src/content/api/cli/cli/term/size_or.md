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
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/term.hy#L40"
order: 2
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

## See also

- [`tty`](/packages/cli/reference/cli/term/tty): Whether `s` is a terminal.
- [`columns`](/packages/cli/reference/cli/term/columns): Terminal columns, 80 when there is no terminal.
- [`was_resized`](/packages/cli/reference/cli/term/was_resized): `true` once per window resize since the last call.
- [`enable_ansi`](/packages/cli/reference/cli/term/enable_ansi): Turn on ANSI escape handling for `s` (Windows consoles); `true` when escapes can be written.
- [`raw_mode_with`](/packages/cli/reference/cli/term/raw_mode_with): Raw mode with the signal keys and output processing chosen.
- [`raw_mode`](/packages/cli/reference/cli/term/raw_mode): Raw mode on `input` with Ctrl-C/Ctrl-Z delivered as keys and output sent as is (write "\r\n"), as full-screen programs and line editors want.
- [`read_bytes`](/packages/cli/reference/cli/term/read_bytes): Wait up to `timeout_ms` (negative: for ever) and read at most `max` bytes.
- [`tty_io`](/packages/cli/reference/cli/term/tty_io): A stream error as a terminal error.
