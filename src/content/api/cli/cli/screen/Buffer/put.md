---
slug: "cli/cli/screen/Buffer/put"
package: "cli"
title: "Buffer::put"
description: "Write s from (x, y) on one row, clipped at the right edge. Wide characters take two cells; zero-width marks join the cell before them. Returns the column after the text."
module: "cli::screen"
kind: "method"
name: "put"
parent: "Buffer"
signature: "pub fn put(int x, int y, string s, Style style) -> int"
import: "use cli::screen::{Buffer};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/screen.hy#L113"
order: 4
---

Write `s` from (`x`, `y`) on one row, clipped at the right edge. Wide characters take two cells; zero-width marks join the cell before them. Returns the column after the text.

Called on a `Buffer` value as `value.put(…)`.

## Parameters

| Name | Type |
|------|------|
| `x` | `int` |
| `y` | `int` |
| `s` | `string` |
| `style` | `Style` |

## Returns

`int`

## See also

- [`Buffer`](/packages/cli/reference/cli/screen/Buffer)
- [`Buffer::in_bounds`](/packages/cli/reference/cli/screen/Buffer/in_bounds)
- [`Buffer::get`](/packages/cli/reference/cli/screen/Buffer/get): Cell at 0-based column `x`, row `y` (a blank outside the grid).
- [`Buffer::set`](/packages/cli/reference/cli/screen/Buffer/set): Set one cell.
- [`Buffer::clear`](/packages/cli/reference/cli/screen/Buffer/clear): Reset every cell to a blank.
- [`Buffer::fill`](/packages/cli/reference/cli/screen/Buffer/fill): Fill a rectangle with `ch` (one column wide).
- [`Buffer::hline`](/packages/cli/reference/cli/screen/Buffer/hline)
- [`Buffer::vline`](/packages/cli/reference/cli/screen/Buffer/vline)
