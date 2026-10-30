---
slug: "cli/cli/ansi/index"
package: "cli"
title: "cli::ansi"
description: "Escape-sequence builders: cursor movement, screen clearing and modes, as plain strings."
module: "cli::ansi"
kind: "module"
name: "cli::ansi"
origin: "package"
auto: false
order: 0
---

Part of the [cli](/packages/cli) package ([coil-cli](https://github.com/ardax-corp/coil-cli)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/cli)).

Import what you use (`use path::*` is not allowed):

```coil
use cli::ansi::{CursorShape, move_to};
```

## Types

| Name | Description |
|------|-------------|
| [`CursorShape`](/packages/cli/reference/cli/ansi/CursorShape) | Cursor shapes for `cursor_shape`. |

## Functions

| Name | Description |
|------|-------------|
| [`move_to`](/packages/cli/reference/cli/ansi/move_to) | Move the cursor to 1-based `row`, `col`. |
| [`column`](/packages/cli/reference/cli/ansi/column) | Move to 1-based `col` in the current row. |
| [`next_line`](/packages/cli/reference/cli/ansi/next_line) | Start of the line `n` lines down / up. |
| [`query_cursor`](/packages/cli/reference/cli/ansi/query_cursor) | Ask the terminal for the cursor position; it answers `ESC [ row ; col R` on stdin (decoded by [`cli::keys`](/packages/cli/reference/cli/keys) as `Event::CursorPos`). |
| [`clear_screen`](/packages/cli/reference/cli/ansi/clear_screen) | Clear the whole screen (cursor does not move). |
| [`clear_below`](/packages/cli/reference/cli/ansi/clear_below) | Clear from the cursor to the end of the screen. |
| [`clear_line`](/packages/cli/reference/cli/ansi/clear_line) | Clear the whole current line. |
| [`clear_to_eol`](/packages/cli/reference/cli/ansi/clear_to_eol) | Clear from the cursor to the end of the line. |
| [`scroll_up`](/packages/cli/reference/cli/ansi/scroll_up) | Scroll the region up / down by `n` lines. |
| [`scroll_region`](/packages/cli/reference/cli/ansi/scroll_region) | Limit scrolling to 1-based rows `top`..=`bottom`. |
| [`enter_alt_screen`](/packages/cli/reference/cli/ansi/enter_alt_screen) | Switch to the alternate screen (full-screen programs) and back. |
| [`enable_mouse`](/packages/cli/reference/cli/ansi/enable_mouse) | Mouse reporting: clicks, drags and wheel in SGR encoding (1006). |
| [`enable_mouse_motion`](/packages/cli/reference/cli/ansi/enable_mouse_motion) | Also report motion with no button held (1003). |
| [`enable_paste`](/packages/cli/reference/cli/ansi/enable_paste) | Bracketed paste: pasted text arrives between markers, as one event. |
| [`enable_focus`](/packages/cli/reference/cli/ansi/enable_focus) | Focus in / out reports. |
| [`enable_wrap`](/packages/cli/reference/cli/ansi/enable_wrap) | Line wrapping at the right margin (on by default). |
| [`begin_sync`](/packages/cli/reference/cli/ansi/begin_sync) | Synchronized output (2026): the terminal shows the frame at once. |
| [`set_title`](/packages/cli/reference/cli/ansi/set_title) | Window title. |
| [`hyperlink`](/packages/cli/reference/cli/ansi/hyperlink) | A clickable link (OSC 8). |
| [`bell`](/packages/cli/reference/cli/ansi/bell) | Ring the bell. |
| [`reset`](/packages/cli/reference/cli/ansi/reset) | Reset all attributes (colour, bold, …). |
