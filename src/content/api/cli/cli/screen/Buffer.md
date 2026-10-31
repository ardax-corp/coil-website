---
slug: "cli/cli/screen/Buffer"
package: "cli"
title: "Buffer"
description: "A grid of styled cells, cols by rows, addressed by 0-based column x and row y. Drawing outside the grid is clipped, so callers can draw without bounds checks. Render it with render_full / render_diff, or let a Screen keep two of them."
module: "cli::screen"
kind: "class"
name: "Buffer"
signature: "shared class Buffer"
import: "use cli::screen::{Buffer};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/screen.hy#L97"
order: 2
---

A grid of styled cells, `cols` by `rows`, addressed by 0-based column `x` and row `y`. Drawing outside the grid is clipped, so callers can draw without bounds checks. Render it with [`render_full`](/packages/cli/reference/cli/screen/render_full) / [`render_diff`](/packages/cli/reference/cli/screen/render_diff), or let a [`Screen`](/packages/cli/reference/cli/screen/Screen) keep two of them.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `cols` | `int` | Width in cells. |
| `rows` | `int` | Height in cells. |

## Methods

| Name | Description |
|------|-------------|
| [`in_bounds`](/packages/cli/reference/cli/screen/Buffer/in_bounds) | Whether (`x`, `y`) is inside the grid. |
| [`get`](/packages/cli/reference/cli/screen/Buffer/get) | Cell at 0-based column `x`, row `y` (a blank outside the grid). |
| [`set`](/packages/cli/reference/cli/screen/Buffer/set) | Set one cell. |
| [`clear`](/packages/cli/reference/cli/screen/Buffer/clear) | Reset every cell to a blank. |
| [`put`](/packages/cli/reference/cli/screen/Buffer/put) | Write `s` from (`x`, `y`) on one row, clipped at the right edge. |
| [`fill`](/packages/cli/reference/cli/screen/Buffer/fill) | Fill a rectangle with `ch` (one column wide). |
| [`hline`](/packages/cli/reference/cli/screen/Buffer/hline) | A horizontal line of `w` cells of `ch` starting at (`x`, `y`). |
| [`vline`](/packages/cli/reference/cli/screen/Buffer/vline) | A vertical line of `h` cells of `ch` starting at (`x`, `y`). |
| [`draw_box`](/packages/cli/reference/cli/screen/Buffer/draw_box) | A box outline; `w`, `h` include the border. |
| [`row_text`](/packages/cli/reference/cli/screen/Buffer/row_text) | Row `y` as plain text (styles dropped), for tests and snapshots. |
| [`text`](/packages/cli/reference/cli/screen/Buffer/text) | Every row's text joined with "\n". |

## Examples

```coil
use cli::screen::{buffer, light_box};
use cli::style::plain;
use tests::assert;
let b = buffer(8, 3);
b.draw_box(0, 0, 8, 3, light_box(), plain());
b.put(2, 1, "hi", plain());
assert!(b.row_text(0) == "┌──────┐");
assert!(b.row_text(1) == "│ hi   │");
assert!(b.text().split("\n").len() == 3);
```

## See also

- [`cli::screen::render_full`](/packages/cli/reference/cli/screen/render_full)
- [`cli::screen::render_diff`](/packages/cli/reference/cli/screen/render_diff)
- [`cli::screen::Screen`](/packages/cli/reference/cli/screen/Screen)
- [`Cell`](/packages/cli/reference/cli/screen/Cell): One cell: the text drawn there (one character plus any zero-width marks) and its style.
- [`BoxChars`](/packages/cli/reference/cli/screen/BoxChars): Box-drawing characters for `Buffer.draw_box`.
