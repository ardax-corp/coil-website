---
slug: "cli/cli/screen/Buffer/clear"
package: "cli"
title: "Buffer::clear"
description: "Reset every cell to a blank."
module: "cli::screen"
kind: "method"
name: "clear"
parent: "Buffer"
signature: "pub fn clear()"
import: "use cli::screen::{Buffer};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/screen.hy#L102"
order: 3
---

Reset every cell to a blank.

Called on a `Buffer` value as `value.clear(…)`.

## See also

- [`Buffer`](/packages/cli/reference/cli/screen/Buffer)
- [`Buffer::in_bounds`](/packages/cli/reference/cli/screen/Buffer/in_bounds)
- [`Buffer::get`](/packages/cli/reference/cli/screen/Buffer/get): Cell at 0-based column `x`, row `y` (a blank outside the grid).
- [`Buffer::set`](/packages/cli/reference/cli/screen/Buffer/set): Set one cell.
- [`Buffer::put`](/packages/cli/reference/cli/screen/Buffer/put): Write `s` from (`x`, `y`) on one row, clipped at the right edge.
- [`Buffer::fill`](/packages/cli/reference/cli/screen/Buffer/fill): Fill a rectangle with `ch` (one column wide).
- [`Buffer::hline`](/packages/cli/reference/cli/screen/Buffer/hline)
- [`Buffer::vline`](/packages/cli/reference/cli/screen/Buffer/vline)
