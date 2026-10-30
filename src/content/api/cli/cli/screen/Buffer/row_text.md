---
slug: "cli/cli/screen/Buffer/row_text"
package: "cli"
title: "Buffer::row_text"
description: "Row y as plain text (styles dropped), for tests and snapshots."
module: "cli::screen"
kind: "method"
name: "row_text"
parent: "Buffer"
signature: "pub fn row_text(int y) -> string"
import: "use cli::screen::{Buffer};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/screen.hy#L181"
order: 9
---

Row `y` as plain text (styles dropped), for tests and snapshots.

Called on a `Buffer` value as `value.row_text(…)`.

## Parameters

| Name | Type |
|------|------|
| `y` | `int` |

## Returns

`string`

## See also

- [`Buffer`](/packages/cli/reference/cli/screen/Buffer)
- [`Buffer::in_bounds`](/packages/cli/reference/cli/screen/Buffer/in_bounds)
- [`Buffer::get`](/packages/cli/reference/cli/screen/Buffer/get): Cell at 0-based column `x`, row `y` (a blank outside the grid).
- [`Buffer::set`](/packages/cli/reference/cli/screen/Buffer/set): Set one cell.
- [`Buffer::clear`](/packages/cli/reference/cli/screen/Buffer/clear): Reset every cell to a blank.
- [`Buffer::put`](/packages/cli/reference/cli/screen/Buffer/put): Write `s` from (`x`, `y`) on one row, clipped at the right edge.
- [`Buffer::fill`](/packages/cli/reference/cli/screen/Buffer/fill): Fill a rectangle with `ch` (one column wide).
- [`Buffer::hline`](/packages/cli/reference/cli/screen/Buffer/hline)
