---
slug: "cli/cli/screen/index"
package: "cli"
title: "cli::screen"
description: "A grid of styled cells and a renderer that writes only what changed between frames."
module: "cli::screen"
kind: "module"
name: "cli::screen"
origin: "package"
auto: false
order: 8
---

Part of the [cli](/packages/cli) package ([coil-cli](https://github.com/ardax-corp/coil-cli)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/cli)).

Import what you use (`use path::*` is not allowed):

```coil
use cli::screen::{Cell, BoxChars};
```

## Types

| Name | Description |
|------|-------------|
| [`Cell`](/packages/cli/reference/cli/screen/Cell) | One cell: the text drawn there (one character plus any zero-width marks) and its style. |
| [`BoxChars`](/packages/cli/reference/cli/screen/BoxChars) | Box-drawing characters for [`Buffer.draw_box`](/packages/cli/reference/cli/screen/Buffer/draw_box). |
| [`Buffer`](/packages/cli/reference/cli/screen/Buffer) | A grid of styled cells, `cols` by `rows`, addressed by 0-based column `x` and row `y`. |
| [`Screen`](/packages/cli/reference/cli/screen/Screen) | Double-buffered presenter. |

## Functions

| Name | Description |
|------|-------------|
| [`light_box`](/packages/cli/reference/cli/screen/light_box) | Thin lines with square corners: `┌─┐`. |
| [`rounded_box`](/packages/cli/reference/cli/screen/rounded_box) | Thin lines with rounded corners: `╭─╮`. |
| [`heavy_box`](/packages/cli/reference/cli/screen/heavy_box) | Thick lines: `┏━┓`. |
| [`double_box`](/packages/cli/reference/cli/screen/double_box) | Double lines: `╔═╗`. |
| [`ascii_box`](/packages/cli/reference/cli/screen/ascii_box) | Plain ASCII for terminals without box drawing: `+-+`. |
| [`buffer`](/packages/cli/reference/cli/screen/fn.buffer) | A `cols` by `rows` buffer of blank cells. |
| [`render_diff`](/packages/cli/reference/cli/screen/render_diff) | Escapes that turn a terminal showing `prev` into `next` (same size): only changed cells are written, with cursor moves between runs and an SGR change only when the style changes. |
| [`render_full`](/packages/cli/reference/cli/screen/render_full) | The whole buffer: clear, then every row. |
| [`screen`](/packages/cli/reference/cli/screen/fn.screen) | A `cols` by `rows` screen rendering at `level`; the first `present` redraws everything. |
