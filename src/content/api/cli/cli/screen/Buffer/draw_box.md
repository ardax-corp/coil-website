---
slug: "cli/cli/screen/Buffer/draw_box"
package: "cli"
title: "Buffer::draw_box"
description: "A box outline; w, h include the border."
module: "cli::screen"
kind: "method"
name: "draw_box"
parent: "Buffer"
signature: "pub fn draw_box(int x, int y, int w, int h, BoxChars bc, Style style)"
import: "use cli::screen::{Buffer};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/screen.hy#L166"
order: 8
---

A box outline; `w`, `h` include the border.

Called on a `Buffer` value as `value.draw_box(…)`.

## Parameters

| Name | Type |
|------|------|
| `x` | `int` |
| `y` | `int` |
| `w` | `int` |
| `h` | `int` |
| `bc` | `BoxChars` |
| `style` | `Style` |

## See also

- [`Buffer`](/packages/cli/reference/cli/screen/Buffer)
- [`Buffer::in_bounds`](/packages/cli/reference/cli/screen/Buffer/in_bounds)
- [`Buffer::get`](/packages/cli/reference/cli/screen/Buffer/get): Cell at 0-based column `x`, row `y` (a blank outside the grid).
- [`Buffer::set`](/packages/cli/reference/cli/screen/Buffer/set): Set one cell.
- [`Buffer::clear`](/packages/cli/reference/cli/screen/Buffer/clear): Reset every cell to a blank.
- [`Buffer::put`](/packages/cli/reference/cli/screen/Buffer/put): Write `s` from (`x`, `y`) on one row, clipped at the right edge.
- [`Buffer::fill`](/packages/cli/reference/cli/screen/Buffer/fill): Fill a rectangle with `ch` (one column wide).
- [`Buffer::hline`](/packages/cli/reference/cli/screen/Buffer/hline)
