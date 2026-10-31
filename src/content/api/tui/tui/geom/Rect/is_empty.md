---
slug: "tui/tui/geom/Rect/is_empty"
package: "tui"
title: "Rect::is_empty"
description: "Whether the rect has no cells (zero width or height)."
module: "tui::geom"
kind: "method"
name: "is_empty"
parent: "Rect"
signature: "pub fn is_empty() -> bool"
import: "use tui::geom::{Rect};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/geom.hy#L106"
order: 2
---

Whether the rect has no cells (zero width or height).

Called on a `Rect` value as `value.is_empty(…)`.

## Returns

`bool`

## See also

- [`Rect`](/packages/tui/reference/tui/geom/Rect): A rectangle of cells: top-left corner (`x`, `y`) and size.
- [`Rect::right`](/packages/tui/reference/tui/geom/Rect/right): The column just past the right edge (`x + w`).
- [`Rect::bottom`](/packages/tui/reference/tui/geom/Rect/bottom): The row just past the bottom edge (`y + h`).
- [`Rect::size`](/packages/tui/reference/tui/geom/Rect/size): Width and height as a `Size`.
- [`Rect::eq`](/packages/tui/reference/tui/geom/Rect/eq): Whether both rects have the same corner and size.
- [`Rect::contains`](/packages/tui/reference/tui/geom/Rect/contains): Whether cell (`px`, `py`) is inside.
- [`Rect::intersect`](/packages/tui/reference/tui/geom/Rect/intersect): The overlap of two rects (empty, at this rect's corner, when they do not overlap).
- [`Rect::offset`](/packages/tui/reference/tui/geom/Rect/offset): Moved by (`dx`, `dy`).
