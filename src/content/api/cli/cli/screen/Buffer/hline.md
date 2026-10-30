---
slug: "cli/cli/screen/Buffer/hline"
package: "cli"
title: "Buffer::hline"
description: "Method Buffer::hline."
module: "cli::screen"
kind: "method"
name: "hline"
parent: "Buffer"
signature: "pub fn hline(int x, int y, int w, string ch, Style style)"
import: "use cli::screen::{Buffer};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/screen.hy#L157"
order: 6
---

*No documentation yet.*

Called on a `Buffer` value as `value.hline(…)`.

## Parameters

| Name | Type |
|------|------|
| `x` | `int` |
| `y` | `int` |
| `w` | `int` |
| `ch` | `string` |
| `style` | `Style` |

## See also

- [`Buffer`](/packages/cli/reference/cli/screen/Buffer)
- [`Buffer::in_bounds`](/packages/cli/reference/cli/screen/Buffer/in_bounds)
- [`Buffer::get`](/packages/cli/reference/cli/screen/Buffer/get): Cell at 0-based column `x`, row `y` (a blank outside the grid).
- [`Buffer::set`](/packages/cli/reference/cli/screen/Buffer/set): Set one cell.
- [`Buffer::clear`](/packages/cli/reference/cli/screen/Buffer/clear): Reset every cell to a blank.
- [`Buffer::put`](/packages/cli/reference/cli/screen/Buffer/put): Write `s` from (`x`, `y`) on one row, clipped at the right edge.
- [`Buffer::fill`](/packages/cli/reference/cli/screen/Buffer/fill): Fill a rectangle with `ch` (one column wide).
- [`Buffer::vline`](/packages/cli/reference/cli/screen/Buffer/vline)
