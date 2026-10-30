---
slug: "cli/cli/screen/Buffer/get"
package: "cli"
title: "Buffer::get"
description: "Cell at 0-based column x, row y (a blank outside the grid)."
module: "cli::screen"
kind: "method"
name: "get"
parent: "Buffer"
signature: "pub fn get(int x, int y) -> Cell"
import: "use cli::screen::{Buffer};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/screen.hy#L87"
order: 1
---

Cell at 0-based column `x`, row `y` (a blank outside the grid).

Called on a `Buffer` value as `value.get(…)`.

## Parameters

| Name | Type |
|------|------|
| `x` | `int` |
| `y` | `int` |

## Returns

`Cell`

## See also

- [`Buffer`](/packages/cli/reference/cli/screen/Buffer)
- [`Buffer::in_bounds`](/packages/cli/reference/cli/screen/Buffer/in_bounds)
- [`Buffer::set`](/packages/cli/reference/cli/screen/Buffer/set): Set one cell.
- [`Buffer::clear`](/packages/cli/reference/cli/screen/Buffer/clear): Reset every cell to a blank.
- [`Buffer::put`](/packages/cli/reference/cli/screen/Buffer/put): Write `s` from (`x`, `y`) on one row, clipped at the right edge.
- [`Buffer::fill`](/packages/cli/reference/cli/screen/Buffer/fill): Fill a rectangle with `ch` (one column wide).
- [`Buffer::hline`](/packages/cli/reference/cli/screen/Buffer/hline)
- [`Buffer::vline`](/packages/cli/reference/cli/screen/Buffer/vline)
