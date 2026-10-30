---
slug: "cli/cli/index"
package: "cli"
title: "cli"
description: "Building blocks for command-line and terminal programs."
module: "cli"
kind: "module"
name: "cli"
origin: "package"
auto: false
order: 12
---

Pure Coil over the compiler's [`io::tty`](/docs/reference/io/tty): no native library and no `--allow-dload`.

Part of the [cli](/packages/cli) package ([coil-cli](https://github.com/ardax-corp/coil-cli)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/cli)).

## Modules

| Module | Description |
|--------|-------------|
| [`cli::ansi`](/packages/cli/reference/cli/ansi) | Escape-sequence builders: cursor movement, screen clearing and modes, as plain strings. |
| [`cli::args`](/packages/cli/reference/cli/args) | Declarative argument parsing: flags, options, positionals, subcommands, help and usage errors. |
| [`cli::color`](/packages/cli/reference/cli/color) | How many colours output may use, from the conventional environment variables. |
| [`cli::events`](/packages/cli/reference/cli/events) | Terminal input events: timed reads decoded into keys, mouse, paste and resize events. |
| [`cli::keys`](/packages/cli/reference/cli/keys) | Decoding raw terminal input bytes into key, mouse, paste and focus events. |
| [`cli::line`](/packages/cli/reference/cli/line) | A line editor with history, kill and yank, and read_line to run it in raw mode. |
| [`cli::progress`](/packages/cli/reference/cli/progress) | Progress bars and spinners that redraw one line on stderr. |
| [`cli::prompt`](/packages/cli/reference/cli/prompt) | Prompts: confirm, input, password, and single or multi select. |
| [`cli::screen`](/packages/cli/reference/cli/screen) | A grid of styled cells and a renderer that writes only what changed between frames. |
| [`cli::style`](/packages/cli/reference/cli/style) | Colours and text attributes as SGR escapes, downgraded to what the terminal supports. |
| [`cli::term`](/packages/cli/reference/cli/term) | The terminal itself: is a stream a terminal, its size, raw mode and timed reads. |
| [`cli::width`](/packages/cli/reference/cli/width) | Display width of text in terminal columns, and truncating or padding to a width. |
