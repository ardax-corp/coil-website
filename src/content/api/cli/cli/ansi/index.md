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
use cli::ansi::{CursorShape, ESC};
```

## Types

| Name | Description |
|------|-------------|
| [`CursorShape`](/packages/cli/reference/cli/ansi/CursorShape) | Cursor shapes for [`cursor_shape`](/packages/cli/reference/cli/ansi/cursor_shape). |

## Constants

| Name | Description |
|------|-------------|
| [`ESC`](/packages/cli/reference/cli/ansi/ESC) | The escape character that starts every sequence. |
| [`CSI`](/packages/cli/reference/cli/ansi/CSI) | Control Sequence Introducer, `ESC [`. |
| [`OSC`](/packages/cli/reference/cli/ansi/OSC) | Operating System Command introducer, `ESC ]`. |
| [`ST`](/packages/cli/reference/cli/ansi/ST) | String Terminator, `ESC \`, which ends an OSC sequence. |

## Functions

| Name | Description |
|------|-------------|
| [`move_to`](/packages/cli/reference/cli/ansi/move_to) | Move the cursor to 1-based `row`, `col`. |
| [`column`](/packages/cli/reference/cli/ansi/column) | Move to 1-based `col` in the current row. |
| [`up`](/packages/cli/reference/cli/ansi/up) | Move the cursor up `n` rows; empty when `n <= 0`. |
| [`down`](/packages/cli/reference/cli/ansi/down) | Move the cursor down `n` rows; empty when `n <= 0`. |
| [`right`](/packages/cli/reference/cli/ansi/right) | Move the cursor right `n` columns; empty when `n <= 0`. |
| [`left`](/packages/cli/reference/cli/ansi/left) | Move the cursor left `n` columns; empty when `n <= 0`. |
| [`next_line`](/packages/cli/reference/cli/ansi/next_line) | Move to the start of the line `n` lines down. |
| [`prev_line`](/packages/cli/reference/cli/ansi/prev_line) | Move to the start of the line `n` lines up. |
| [`home`](/packages/cli/reference/cli/ansi/home) | Move the cursor to the top-left corner. |
| [`save_cursor`](/packages/cli/reference/cli/ansi/save_cursor) | Save the cursor position (and attributes); [`restore_cursor`](/packages/cli/reference/cli/ansi/restore_cursor) goes back. |
| [`restore_cursor`](/packages/cli/reference/cli/ansi/restore_cursor) | Return to the position saved by [`save_cursor`](/packages/cli/reference/cli/ansi/save_cursor). |
| [`hide_cursor`](/packages/cli/reference/cli/ansi/hide_cursor) | Hide the cursor. |
| [`show_cursor`](/packages/cli/reference/cli/ansi/show_cursor) | Show the cursor again. |
| [`query_cursor`](/packages/cli/reference/cli/ansi/query_cursor) | Ask the terminal for the cursor position; it answers `ESC [ row ; col R` on stdin (decoded by [`cli::keys`](/packages/cli/reference/cli/keys) as `Event::CursorPos`). |
| [`cursor_shape`](/packages/cli/reference/cli/ansi/cursor_shape) | Set the cursor shape (DECSCUSR). |
| [`clear_screen`](/packages/cli/reference/cli/ansi/clear_screen) | Clear the whole screen (cursor does not move). |
| [`clear_below`](/packages/cli/reference/cli/ansi/clear_below) | Clear from the cursor to the end of the screen. |
| [`clear_above`](/packages/cli/reference/cli/ansi/clear_above) | Clear from the start of the screen to the cursor. |
| [`clear_line`](/packages/cli/reference/cli/ansi/clear_line) | Clear the whole current line. |
| [`clear_to_eol`](/packages/cli/reference/cli/ansi/clear_to_eol) | Clear from the cursor to the end of the line. |
| [`clear_to_bol`](/packages/cli/reference/cli/ansi/clear_to_bol) | Clear from the start of the line to the cursor. |
| [`scroll_up`](/packages/cli/reference/cli/ansi/scroll_up) | Scroll the region up by `n` lines (new blank lines at the bottom). |
| [`scroll_down`](/packages/cli/reference/cli/ansi/scroll_down) | Scroll the region down by `n` lines (new blank lines at the top). |
| [`scroll_region`](/packages/cli/reference/cli/ansi/scroll_region) | Limit scrolling to 1-based rows `top`..=`bottom`. |
| [`reset_scroll_region`](/packages/cli/reference/cli/ansi/reset_scroll_region) | Scroll the whole screen again (undo [`scroll_region`](/packages/cli/reference/cli/ansi/scroll_region)). |
| [`enter_alt_screen`](/packages/cli/reference/cli/ansi/enter_alt_screen) | Switch to the alternate screen, as full-screen programs do; the normal screen and its scrollback come back with [`leave_alt_screen`](/packages/cli/reference/cli/ansi/leave_alt_screen). |
| [`leave_alt_screen`](/packages/cli/reference/cli/ansi/leave_alt_screen) | Switch back from the alternate screen. |
| [`enable_mouse`](/packages/cli/reference/cli/ansi/enable_mouse) | Mouse reporting: clicks, drags and wheel in SGR encoding (1006). |
| [`enable_mouse_motion`](/packages/cli/reference/cli/ansi/enable_mouse_motion) | Also report motion with no button held (1003). |
| [`disable_mouse`](/packages/cli/reference/cli/ansi/disable_mouse) | Turn off every mouse reporting mode turned on above. |
| [`enable_paste`](/packages/cli/reference/cli/ansi/enable_paste) | Bracketed paste: pasted text arrives between markers, as one event. |
| [`disable_paste`](/packages/cli/reference/cli/ansi/disable_paste) | Turn bracketed paste off. |
| [`enable_focus`](/packages/cli/reference/cli/ansi/enable_focus) | Report focus in / out (`Event::Focus`). |
| [`disable_focus`](/packages/cli/reference/cli/ansi/disable_focus) | Stop focus reports. |
| [`enable_wrap`](/packages/cli/reference/cli/ansi/enable_wrap) | Line wrapping at the right margin (on by default). |
| [`disable_wrap`](/packages/cli/reference/cli/ansi/disable_wrap) | Turn line wrapping off: text past the right margin overwrites the last column. |
| [`begin_sync`](/packages/cli/reference/cli/ansi/begin_sync) | Begin synchronized output (mode 2026): the terminal holds the screen until [`end_sync`](/packages/cli/reference/cli/ansi/end_sync), then shows the frame at once. |
| [`end_sync`](/packages/cli/reference/cli/ansi/end_sync) | End synchronized output and show the frame. |
| [`set_title`](/packages/cli/reference/cli/ansi/set_title) | Window title. |
| [`hyperlink`](/packages/cli/reference/cli/ansi/hyperlink) | A clickable link (OSC 8). |
| [`bell`](/packages/cli/reference/cli/ansi/bell) | Ring the bell. |
| [`reset`](/packages/cli/reference/cli/ansi/reset) | Reset all attributes (colour, bold, …). |
