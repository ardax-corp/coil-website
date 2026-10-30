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
| [`Buffer`](/packages/cli/reference/cli/screen/Buffer) |  |
| [`Screen`](/packages/cli/reference/cli/screen/Screen) | Double-buffered presenter. |

## Functions

| Name | Description |
|------|-------------|
| [`render_diff`](/packages/cli/reference/cli/screen/render_diff) | Escapes that turn a terminal showing `prev` into `next` (same size): only changed cells are written, with cursor moves between runs and an SGR change only when the style changes. |
| [`render_full`](/packages/cli/reference/cli/screen/render_full) | The whole buffer: clear, then every row. |
