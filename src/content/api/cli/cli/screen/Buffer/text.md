---
slug: "cli/cli/screen/Buffer/text"
package: "cli"
title: "Buffer::text"
description: "Every row's text joined with \"\\n\"."
module: "cli::screen"
kind: "method"
name: "text"
parent: "Buffer"
signature: "pub fn text() -> string"
import: "use cli::screen::{Buffer};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/screen.hy#L230"
order: 10
---

Every row's text joined with "\n".

Called on a `Buffer` value as `value.text(…)`.

## Returns

`string`

## See also

- [`Buffer`](/packages/cli/reference/cli/screen/Buffer): A grid of styled cells, `cols` by `rows`, addressed by 0-based column `x` and row `y`.
- [`Buffer::in_bounds`](/packages/cli/reference/cli/screen/Buffer/in_bounds): Whether (`x`, `y`) is inside the grid.
- [`Buffer::get`](/packages/cli/reference/cli/screen/Buffer/get): Cell at 0-based column `x`, row `y` (a blank outside the grid).
- [`Buffer::set`](/packages/cli/reference/cli/screen/Buffer/set): Set one cell.
- [`Buffer::clear`](/packages/cli/reference/cli/screen/Buffer/clear): Reset every cell to a blank.
- [`Buffer::put`](/packages/cli/reference/cli/screen/Buffer/put): Write `s` from (`x`, `y`) on one row, clipped at the right edge.
- [`Buffer::fill`](/packages/cli/reference/cli/screen/Buffer/fill): Fill a rectangle with `ch` (one column wide).
- [`Buffer::hline`](/packages/cli/reference/cli/screen/Buffer/hline): A horizontal line of `w` cells of `ch` starting at (`x`, `y`).
