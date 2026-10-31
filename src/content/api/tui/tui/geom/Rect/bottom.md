---
slug: "tui/tui/geom/Rect/bottom"
package: "tui"
title: "Rect::bottom"
description: "The row just past the bottom edge (y + h)."
module: "tui::geom"
kind: "method"
name: "bottom"
parent: "Rect"
signature: "pub fn bottom() -> int"
import: "use tui::geom::{Rect};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/geom.hy#L101"
order: 1
---

The row just past the bottom edge (`y + h`).

Called on a `Rect` value as `value.bottom(…)`.

## Returns

`int`

## See also

- [`Rect`](/packages/tui/reference/tui/geom/Rect): A rectangle of cells: top-left corner (`x`, `y`) and size.
- [`Rect::right`](/packages/tui/reference/tui/geom/Rect/right): The column just past the right edge (`x + w`).
- [`Rect::is_empty`](/packages/tui/reference/tui/geom/Rect/is_empty): Whether the rect has no cells (zero width or height).
- [`Rect::size`](/packages/tui/reference/tui/geom/Rect/size): Width and height as a `Size`.
- [`Rect::eq`](/packages/tui/reference/tui/geom/Rect/eq): Whether both rects have the same corner and size.
- [`Rect::contains`](/packages/tui/reference/tui/geom/Rect/contains): Whether cell (`px`, `py`) is inside.
- [`Rect::intersect`](/packages/tui/reference/tui/geom/Rect/intersect): The overlap of two rects (empty, at this rect's corner, when they do not overlap).
- [`Rect::offset`](/packages/tui/reference/tui/geom/Rect/offset): Moved by (`dx`, `dy`).
