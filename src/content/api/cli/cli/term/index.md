---
slug: "cli/cli/term/index"
package: "cli"
title: "cli::term"
description: "The terminal itself: is a stream a terminal, its size, raw mode and timed reads."
module: "cli::term"
kind: "module"
name: "cli::term"
origin: "package"
auto: false
order: 10
---

Part of the [cli](/packages/cli) package ([coil-cli](https://github.com/ardax-corp/coil-cli)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/cli)).

Import what you use (`use path::*` is not allowed):

```coil
use cli::term::{RawMode, tty};
```

## Types

| Name | Description |
|------|-------------|
| [`RawMode`](/packages/cli/reference/cli/term/RawMode) | Raw mode on a terminal. |

## Functions

| Name | Description |
|------|-------------|
| [`tty`](/packages/cli/reference/cli/term/tty) | Whether `s` is a terminal. |
| [`stdin_is_tty`](/packages/cli/reference/cli/term/stdin_is_tty) | Whether standard input is a terminal (`false` when it is piped or redirected). |
| [`stdout_is_tty`](/packages/cli/reference/cli/term/stdout_is_tty) | Whether standard output is a terminal. |
| [`stderr_is_tty`](/packages/cli/reference/cli/term/stderr_is_tty) | Whether standard error is a terminal. |
| [`size_or`](/packages/cli/reference/cli/term/size_or) | `(cols, rows)` of the terminal behind `s` (or behind another standard stream when `s` is piped), else `(cols, rows)` as given. |
| [`columns`](/packages/cli/reference/cli/term/columns) | Terminal columns, 80 when there is no terminal. |
| [`was_resized`](/packages/cli/reference/cli/term/was_resized) | `true` once per window resize since the last call. |
| [`enable_ansi`](/packages/cli/reference/cli/term/enable_ansi) | Turn on ANSI escape handling for `s` (Windows consoles); `true` when escapes can be written. |
| [`raw_mode_with`](/packages/cli/reference/cli/term/raw_mode_with) | Raw mode with the signal keys and output processing chosen. |
| [`raw_mode`](/packages/cli/reference/cli/term/raw_mode) | Raw mode on `input` with Ctrl-C/Ctrl-Z delivered as keys and output sent as is (write "\r\n"), as full-screen programs and line editors want. |
| [`read_bytes`](/packages/cli/reference/cli/term/read_bytes) | Wait up to `timeout_ms` (negative: for ever) and read at most `max` bytes. |
| [`tty_io`](/packages/cli/reference/cli/term/tty_io) | A stream error as a terminal error. |
| [`put`](/packages/cli/reference/cli/term/put) | Write `text` to `out`. |
