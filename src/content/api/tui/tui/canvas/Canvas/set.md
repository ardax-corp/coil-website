---
slug: "tui/tui/canvas/Canvas/set"
package: "tui"
title: "Canvas::set"
description: "Set one cell (ignored outside the clip)."
module: "tui::canvas"
kind: "method"
name: "set"
parent: "Canvas"
signature: "pub fn set(int x, int y, string text, Style style)"
import: "use tui::canvas::{Canvas};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/611cfd9b4c061de7df4a8352a34580911bde46b9/src/tui/canvas.coil#L107"
order: 6
---

Set one cell (ignored outside the clip).

Called on a `Canvas` value as `value.set(…)`.

## Parameters

| Name | Type |
|------|------|
| `x` | `int` |
| `y` | `int` |
| `text` | `string` |
| `style` | `Style` |

## See also

- [`Canvas`](/packages/tui/reference/tui/canvas/Canvas): A view onto a `Frame`: local (0, 0) is `area`'s corner, and nothing is drawn outside `clip` (absolute coordinates, inside `area`).
- [`Canvas::w`](/packages/tui/reference/tui/canvas/Canvas/w): Width of the area in cells.
- [`Canvas::h`](/packages/tui/reference/tui/canvas/Canvas/h): Height of the area in cells.
- [`Canvas::bounds`](/packages/tui/reference/tui/canvas/Canvas/bounds): The area in local coordinates.
- [`Canvas::sub`](/packages/tui/reference/tui/canvas/Canvas/sub): A canvas for the local rect `r`, clipped to this one.
- [`Canvas::visible`](/packages/tui/reference/tui/canvas/Canvas/visible): Whether local (`x`, `y`) is drawable.
- [`Canvas::get`](/packages/tui/reference/tui/canvas/Canvas/get): The cell at local (`x`, `y`) (a blank outside the buffer).
- [`Canvas::put`](/packages/tui/reference/tui/canvas/Canvas/put): Write `s` on row `y` from column `x`, clipped on both sides.
