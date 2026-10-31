---
slug: "tui/tui/canvas/Canvas/put"
package: "tui"
title: "Canvas::put"
description: "Write s on row y from column x, clipped on both sides. Wide characters take two cells; one cut by the clip edge shows as a space. Zero-width marks join the cell before them. Returns the column after the text."
module: "tui::canvas"
kind: "method"
name: "put"
parent: "Canvas"
signature: "pub fn put(int x, int y, string s, Style style) -> int"
import: "use tui::canvas::{Canvas};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/canvas.coil#L117"
order: 7
---

Write `s` on row `y` from column `x`, clipped on both sides. Wide characters take two cells; one cut by the clip edge shows as a space. Zero-width marks join the cell before them. Returns the column after the text.

Called on a `Canvas` value as `value.put(…)`.

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

- [`Canvas`](/packages/tui/reference/tui/canvas/Canvas): A view onto a `Frame`: local (0, 0) is `area`'s corner, and nothing is drawn outside `clip` (absolute coordinates, inside `area`).
- [`Canvas::w`](/packages/tui/reference/tui/canvas/Canvas/w): Width of the area in cells.
- [`Canvas::h`](/packages/tui/reference/tui/canvas/Canvas/h): Height of the area in cells.
- [`Canvas::bounds`](/packages/tui/reference/tui/canvas/Canvas/bounds): The area in local coordinates.
- [`Canvas::sub`](/packages/tui/reference/tui/canvas/Canvas/sub): A canvas for the local rect `r`, clipped to this one.
- [`Canvas::visible`](/packages/tui/reference/tui/canvas/Canvas/visible): Whether local (`x`, `y`) is drawable.
- [`Canvas::get`](/packages/tui/reference/tui/canvas/Canvas/get): The cell at local (`x`, `y`) (a blank outside the buffer).
- [`Canvas::set`](/packages/tui/reference/tui/canvas/Canvas/set): Set one cell (ignored outside the clip).
