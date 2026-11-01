---
slug: "cli/cli/screen/BoxChars"
package: "cli"
title: "BoxChars"
description: "Box-drawing characters for Buffer.draw_box."
module: "cli::screen"
kind: "class"
name: "BoxChars"
signature: "class BoxChars"
import: "use cli::screen::{BoxChars};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/screen.coil#L32"
order: 1
---

Box-drawing characters for [`Buffer.draw_box`](/packages/cli/reference/cli/screen/Buffer/draw_box).

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `tl` | `string` | Top-left corner. |
| `tr` | `string` | Top-right corner. |
| `bl` | `string` | Bottom-left corner. |
| `br` | `string` | Bottom-right corner. |
| `h` | `string` | Horizontal edge. |
| `v` | `string` | Vertical edge. |

## See also

- [`Buffer::draw_box`](/packages/cli/reference/cli/screen/Buffer/draw_box)
- [`Cell`](/packages/cli/reference/cli/screen/Cell): One cell: the text drawn there (one character plus any zero-width marks) and its style.
- [`Buffer`](/packages/cli/reference/cli/screen/Buffer): A grid of styled cells, `cols` by `rows`, addressed by 0-based column `x` and row `y`.
- [`Screen`](/packages/cli/reference/cli/screen/Screen): Double-buffered presenter.
