---
slug: "tui/tui/canvas/Canvas/sub"
package: "tui"
title: "Canvas::sub"
description: "A canvas for the local rect r, clipped to this one."
module: "tui::canvas"
kind: "method"
name: "sub"
parent: "Canvas"
signature: "pub fn sub(Rect r) -> Canvas"
import: "use tui::canvas::{Canvas};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/canvas.hy#L91"
order: 3
---

A canvas for the local rect `r`, clipped to this one.

Called on a `Canvas` value as `value.sub(…)`.

## Parameters

| Name | Type |
|------|------|
| `r` | `Rect` |

## Returns

`Canvas`

## See also

- [`Canvas`](/packages/tui/reference/tui/canvas/Canvas): A view onto a `Frame`: local (0, 0) is `area`'s corner, and nothing is drawn outside `clip` (absolute coordinates, inside `area`).
- [`Canvas::w`](/packages/tui/reference/tui/canvas/Canvas/w): Width of the area in cells.
- [`Canvas::h`](/packages/tui/reference/tui/canvas/Canvas/h): Height of the area in cells.
- [`Canvas::bounds`](/packages/tui/reference/tui/canvas/Canvas/bounds): The area in local coordinates.
- [`Canvas::visible`](/packages/tui/reference/tui/canvas/Canvas/visible): Whether local (`x`, `y`) is drawable.
- [`Canvas::get`](/packages/tui/reference/tui/canvas/Canvas/get): The cell at local (`x`, `y`) (a blank outside the buffer).
- [`Canvas::set`](/packages/tui/reference/tui/canvas/Canvas/set): Set one cell (ignored outside the clip).
- [`Canvas::put`](/packages/tui/reference/tui/canvas/Canvas/put): Write `s` on row `y` from column `x`, clipped on both sides.
