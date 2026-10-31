---
slug: "tui/tui/canvas/Canvas/paint"
package: "tui"
title: "Canvas::paint"
description: "Restyle a rect, keeping its text: style is merged over each cell's own style."
module: "tui::canvas"
kind: "method"
name: "paint"
parent: "Canvas"
signature: "pub fn paint(int x, int y, int w, int h, Style style)"
import: "use tui::canvas::{Canvas};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/canvas.hy#L191"
order: 11
---

Restyle a rect, keeping its text: `style` is merged over each cell's own style.

Called on a `Canvas` value as `value.paint(…)`.

## Parameters

| Name | Type |
|------|------|
| `x` | `int` |
| `y` | `int` |
| `w` | `int` |
| `h` | `int` |
| `style` | `Style` |

## See also

- [`Canvas`](/packages/tui/reference/tui/canvas/Canvas): A view onto a `Frame`: local (0, 0) is `area`'s corner, and nothing is drawn outside `clip` (absolute coordinates, inside `area`).
- [`Canvas::w`](/packages/tui/reference/tui/canvas/Canvas/w): Width of the area in cells.
- [`Canvas::h`](/packages/tui/reference/tui/canvas/Canvas/h): Height of the area in cells.
- [`Canvas::bounds`](/packages/tui/reference/tui/canvas/Canvas/bounds): The area in local coordinates.
- [`Canvas::sub`](/packages/tui/reference/tui/canvas/Canvas/sub): A canvas for the local rect `r`, clipped to this one.
- [`Canvas::visible`](/packages/tui/reference/tui/canvas/Canvas/visible): Whether local (`x`, `y`) is drawable.
- [`Canvas::get`](/packages/tui/reference/tui/canvas/Canvas/get): The cell at local (`x`, `y`) (a blank outside the buffer).
- [`Canvas::set`](/packages/tui/reference/tui/canvas/Canvas/set): Set one cell (ignored outside the clip).
