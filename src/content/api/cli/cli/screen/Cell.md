---
slug: "cli/cli/screen/Cell"
package: "cli"
title: "Cell"
description: "One cell: the text drawn there (one character plus any zero-width marks) and its style. A wide character's second cell holds \"\"."
module: "cli::screen"
kind: "class"
name: "Cell"
signature: "class Cell"
import: "use cli::screen::{Cell};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/screen.hy#L15"
order: 0
---

One cell: the text drawn there (one character plus any zero-width marks) and its style. A wide character's second cell holds "".

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `text` | `string` | The character drawn in this cell, with any zero-width marks after it; "" for the right half of a wide character. |
| `style` | `Style` | How the cell is drawn. |

## See also

- [`BoxChars`](/packages/cli/reference/cli/screen/BoxChars): Box-drawing characters for `Buffer.draw_box`.
- [`Buffer`](/packages/cli/reference/cli/screen/Buffer): A grid of styled cells, `cols` by `rows`, addressed by 0-based column `x` and row `y`.
- [`Screen`](/packages/cli/reference/cli/screen/Screen): Double-buffered presenter.
