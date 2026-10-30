---
slug: "cli/cli/screen/Buffer/in_bounds"
package: "cli"
title: "Buffer::in_bounds"
description: "Method Buffer::in_bounds."
module: "cli::screen"
kind: "method"
name: "in_bounds"
parent: "Buffer"
signature: "pub fn in_bounds(int x, int y) -> bool"
import: "use cli::screen::{Buffer};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/screen.hy#L82"
order: 0
---

*No documentation yet.*

Called on a `Buffer` value as `value.in_bounds(…)`.

## Parameters

| Name | Type |
|------|------|
| `x` | `int` |
| `y` | `int` |

## Returns

`bool`

## See also

- [`Buffer`](/packages/cli/reference/cli/screen/Buffer)
- [`Buffer::get`](/packages/cli/reference/cli/screen/Buffer/get): Cell at 0-based column `x`, row `y` (a blank outside the grid).
- [`Buffer::set`](/packages/cli/reference/cli/screen/Buffer/set): Set one cell.
- [`Buffer::clear`](/packages/cli/reference/cli/screen/Buffer/clear): Reset every cell to a blank.
- [`Buffer::put`](/packages/cli/reference/cli/screen/Buffer/put): Write `s` from (`x`, `y`) on one row, clipped at the right edge.
- [`Buffer::fill`](/packages/cli/reference/cli/screen/Buffer/fill): Fill a rectangle with `ch` (one column wide).
- [`Buffer::hline`](/packages/cli/reference/cli/screen/Buffer/hline)
- [`Buffer::vline`](/packages/cli/reference/cli/screen/Buffer/vline)
