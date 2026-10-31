---
slug: "tui/tui/canvas/Canvas/bounds"
package: "tui"
title: "Canvas::bounds"
description: "The area in local coordinates."
module: "tui::canvas"
kind: "method"
name: "bounds"
parent: "Canvas"
signature: "pub fn bounds() -> Rect"
import: "use tui::canvas::{Canvas};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/canvas.hy#L86"
order: 2
---

The area in local coordinates.

Called on a `Canvas` value as `value.bounds(…)`.

## Returns

`Rect`

## See also

- [`Canvas`](/packages/tui/reference/tui/canvas/Canvas): A view onto a `Frame`: local (0, 0) is `area`'s corner, and nothing is drawn outside `clip` (absolute coordinates, inside `area`).
- [`Canvas::w`](/packages/tui/reference/tui/canvas/Canvas/w): Width of the area in cells.
- [`Canvas::h`](/packages/tui/reference/tui/canvas/Canvas/h): Height of the area in cells.
- [`Canvas::sub`](/packages/tui/reference/tui/canvas/Canvas/sub): A canvas for the local rect `r`, clipped to this one.
- [`Canvas::visible`](/packages/tui/reference/tui/canvas/Canvas/visible): Whether local (`x`, `y`) is drawable.
- [`Canvas::get`](/packages/tui/reference/tui/canvas/Canvas/get): The cell at local (`x`, `y`) (a blank outside the buffer).
- [`Canvas::set`](/packages/tui/reference/tui/canvas/Canvas/set): Set one cell (ignored outside the clip).
- [`Canvas::put`](/packages/tui/reference/tui/canvas/Canvas/put): Write `s` on row `y` from column `x`, clipped on both sides.
