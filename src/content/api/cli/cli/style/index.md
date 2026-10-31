---
slug: "cli/cli/style/index"
package: "cli"
title: "cli::style"
description: "Colours and text attributes as SGR escapes, downgraded to what the terminal supports."
module: "cli::style"
kind: "module"
name: "cli::style"
origin: "package"
auto: false
order: 9
---

Part of the [cli](/packages/cli) package ([coil-cli](https://github.com/ardax-corp/coil-cli)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/cli)).

Import what you use (`use path::*` is not allowed):

```coil
use cli::style::{Color, Style};
```

## Types

| Name | Description |
|------|-------------|
| [`Color`](/packages/cli/reference/cli/style/Color) | A terminal colour, in one of the forms an SGR escape can name. |
| [`Style`](/packages/cli/reference/cli/style/Style) | Foreground, background and attributes. |
| [`Painter`](/packages/cli/reference/cli/style/Painter) | Paints text at a fixed colour level. |

## Constants

| Name | Description |
|------|-------------|
| [`BOLD`](/packages/cli/reference/cli/style/BOLD) | Bold (SGR 1). |
| [`DIM`](/packages/cli/reference/cli/style/DIM) | Dim / faint (SGR 2). |
| [`ITALIC`](/packages/cli/reference/cli/style/ITALIC) | Italic (SGR 3). |
| [`UNDERLINE`](/packages/cli/reference/cli/style/UNDERLINE) | Underline (SGR 4). |
| [`BLINK`](/packages/cli/reference/cli/style/BLINK) | Blink (SGR 5). |
| [`REVERSE`](/packages/cli/reference/cli/style/REVERSE) | Reverse video: swap foreground and background (SGR 7). |
| [`HIDDEN`](/packages/cli/reference/cli/style/HIDDEN) | Hidden text (SGR 8). |
| [`STRIKE`](/packages/cli/reference/cli/style/STRIKE) | Strikethrough (SGR 9). |

## Functions

| Name | Description |
|------|-------------|
| [`black`](/packages/cli/reference/cli/style/black) | Standard black (`Color::Ansi(0)`). |
| [`red`](/packages/cli/reference/cli/style/red) | Standard red (`Color::Ansi(1)`). |
| [`green`](/packages/cli/reference/cli/style/green) | Standard green (`Color::Ansi(2)`). |
| [`yellow`](/packages/cli/reference/cli/style/yellow) | Standard yellow (`Color::Ansi(3)`). |
| [`blue`](/packages/cli/reference/cli/style/blue) | Standard blue (`Color::Ansi(4)`). |
| [`magenta`](/packages/cli/reference/cli/style/magenta) | Standard magenta (`Color::Ansi(5)`). |
| [`cyan`](/packages/cli/reference/cli/style/cyan) | Standard cyan (`Color::Ansi(6)`). |
| [`white`](/packages/cli/reference/cli/style/white) | Standard white (`Color::Ansi(7)`). |
| [`bright_black`](/packages/cli/reference/cli/style/bright_black) | Bright black (`Color::Ansi(8)`). |
| [`bright_red`](/packages/cli/reference/cli/style/bright_red) | Bright red (`Color::Ansi(9)`). |
| [`bright_green`](/packages/cli/reference/cli/style/bright_green) | Bright green (`Color::Ansi(10)`). |
| [`bright_yellow`](/packages/cli/reference/cli/style/bright_yellow) | Bright yellow (`Color::Ansi(11)`). |
| [`bright_blue`](/packages/cli/reference/cli/style/bright_blue) | Bright blue (`Color::Ansi(12)`). |
| [`bright_magenta`](/packages/cli/reference/cli/style/bright_magenta) | Bright magenta (`Color::Ansi(13)`). |
| [`bright_cyan`](/packages/cli/reference/cli/style/bright_cyan) | Bright cyan (`Color::Ansi(14)`). |
| [`bright_white`](/packages/cli/reference/cli/style/bright_white) | Bright white (`Color::Ansi(15)`). |
| [`rgb`](/packages/cli/reference/cli/style/rgb) | 24-bit colour; each channel is clamped to 0-255. |
| [`hex`](/packages/cli/reference/cli/style/hex) | An RGB colour from `#rrggbb`, `rrggbb`, `#rgb` or [`rgb`](/packages/cli/reference/cli/style/rgb) (either case). |
| [`plain`](/packages/cli/reference/cli/style/plain) | No colours and no attributes: the terminal's default look. |
| [`fg`](/packages/cli/reference/cli/style/fg) | A style with foreground `c` and nothing else set. |
| [`bg`](/packages/cli/reference/cli/style/bg) | A style with background `c` and nothing else set. |
| [`color_eq`](/packages/cli/reference/cli/style/color_eq) | Whether `a` and `b` are the same colour in the same form (`Ansi(1)` and its RGB value are different). |
| [`indexed_rgb`](/packages/cli/reference/cli/style/indexed_rgb) | RGB of a 256-palette index, using the xterm defaults for 0-15. |
| [`rgb_to_indexed`](/packages/cli/reference/cli/style/rgb_to_indexed) | Nearest 256-palette index (6x6x6 cube or grey ramp). |
| [`rgb_to_ansi`](/packages/cli/reference/cli/style/rgb_to_ansi) | Nearest of the 16 standard colours. |
| [`downgrade`](/packages/cli/reference/cli/style/downgrade) | `c` reduced to what `level` can show: RGB becomes the nearest palette or standard colour, palette entries above 15 the nearest standard one. |
| [`sgr`](/packages/cli/reference/cli/style/sgr) | SGR escape that switches to `s` from the default attributes, at `level`. |
| [`paint_at`](/packages/cli/reference/cli/style/paint_at) | `text` in style `s` at `level`, followed by a reset. |
| [`strip`](/packages/cli/reference/cli/style/strip) | `text` without escape sequences (CSI, OSC, DCS, APC and two-byte ESC forms), for measuring or logging styled output. |
