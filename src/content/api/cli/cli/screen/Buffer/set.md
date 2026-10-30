---
slug: "cli/cli/screen/Buffer/set"
package: "cli"
title: "Buffer::set"
description: "Set one cell. Outside the grid it is ignored."
module: "cli::screen"
kind: "method"
name: "set"
parent: "Buffer"
signature: "pub fn set(int x, int y, string text, Style style)"
import: "use cli::screen::{Buffer};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/screen.hy#L95"
order: 2
---

Set one cell. Outside the grid it is ignored.

Called on a `Buffer` value as `value.set(…)`.

## Parameters

| Name | Type |
|------|------|
| `x` | `int` |
| `y` | `int` |
| `text` | `string` |
| `style` | `Style` |

## See also

- [`Buffer`](/packages/cli/reference/cli/screen/Buffer)
- [`Buffer::in_bounds`](/packages/cli/reference/cli/screen/Buffer/in_bounds)
- [`Buffer::get`](/packages/cli/reference/cli/screen/Buffer/get): Cell at 0-based column `x`, row `y` (a blank outside the grid).
- [`Buffer::clear`](/packages/cli/reference/cli/screen/Buffer/clear): Reset every cell to a blank.
- [`Buffer::put`](/packages/cli/reference/cli/screen/Buffer/put): Write `s` from (`x`, `y`) on one row, clipped at the right edge.
- [`Buffer::fill`](/packages/cli/reference/cli/screen/Buffer/fill): Fill a rectangle with `ch` (one column wide).
- [`Buffer::hline`](/packages/cli/reference/cli/screen/Buffer/hline)
- [`Buffer::vline`](/packages/cli/reference/cli/screen/Buffer/vline)
