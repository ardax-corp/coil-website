---
slug: "cli/cli/screen/Buffer/fill"
package: "cli"
title: "Buffer::fill"
description: "Fill a rectangle with ch (one column wide)."
module: "cli::screen"
kind: "method"
name: "fill"
parent: "Buffer"
signature: "pub fn fill(int x, int y, int w, int h, string ch, Style style)"
import: "use cli::screen::{Buffer};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/screen.hy#L181"
order: 5
---

Fill a rectangle with `ch` (one column wide).

Called on a `Buffer` value as `value.fill(…)`.

## Parameters

| Name | Type |
|------|------|
| `x` | `int` |
| `y` | `int` |
| `w` | `int` |
| `h` | `int` |
| `ch` | `string` |
| `style` | `Style` |

## See also

- [`Buffer`](/packages/cli/reference/cli/screen/Buffer): A grid of styled cells, `cols` by `rows`, addressed by 0-based column `x` and row `y`.
- [`Buffer::in_bounds`](/packages/cli/reference/cli/screen/Buffer/in_bounds): Whether (`x`, `y`) is inside the grid.
- [`Buffer::get`](/packages/cli/reference/cli/screen/Buffer/get): Cell at 0-based column `x`, row `y` (a blank outside the grid).
- [`Buffer::set`](/packages/cli/reference/cli/screen/Buffer/set): Set one cell.
- [`Buffer::clear`](/packages/cli/reference/cli/screen/Buffer/clear): Reset every cell to a blank.
- [`Buffer::put`](/packages/cli/reference/cli/screen/Buffer/put): Write `s` from (`x`, `y`) on one row, clipped at the right edge.
- [`Buffer::hline`](/packages/cli/reference/cli/screen/Buffer/hline): A horizontal line of `w` cells of `ch` starting at (`x`, `y`).
- [`Buffer::vline`](/packages/cli/reference/cli/screen/Buffer/vline): A vertical line of `h` cells of `ch` starting at (`x`, `y`).
