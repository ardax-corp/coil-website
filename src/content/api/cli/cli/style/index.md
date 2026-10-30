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
use cli::style::{Style, Painter};
```

## Types

| Name | Description |
|------|-------------|
| [`Style`](/packages/cli/reference/cli/style/Style) | Foreground, background and attributes. |
| [`Painter`](/packages/cli/reference/cli/style/Painter) | Paints at a fixed colour level. |
| [`Color`](/packages/cli/reference/cli/style/Color) |  |

## Functions

| Name | Description |
|------|-------------|
| [`hex`](/packages/cli/reference/cli/style/hex) | `#rrggbb`, `rrggbb`, `#rgb` or `rgb`. |
| [`indexed_rgb`](/packages/cli/reference/cli/style/indexed_rgb) | RGB of a 256-palette index. |
| [`rgb_to_indexed`](/packages/cli/reference/cli/style/rgb_to_indexed) | Nearest 256-palette index (6x6x6 cube or grey ramp). |
| [`rgb_to_ansi`](/packages/cli/reference/cli/style/rgb_to_ansi) | Nearest of the 16 standard colours. |
| [`downgrade`](/packages/cli/reference/cli/style/downgrade) | `c` reduced to what `level` can show. |
| [`sgr`](/packages/cli/reference/cli/style/sgr) | SGR escape that switches to `s` from the default attributes, at `level`. |
| [`paint_at`](/packages/cli/reference/cli/style/paint_at) | `text` in style `s`, followed by a reset. |
| [`strip`](/packages/cli/reference/cli/style/strip) | `text` without escape sequences (CSI, OSC, and two-byte ESC forms). |
