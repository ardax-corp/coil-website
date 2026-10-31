---
slug: "tui/tui/geom/Rect/size"
package: "tui"
title: "Rect::size"
description: "Width and height as a Size."
module: "tui::geom"
kind: "method"
name: "size"
parent: "Rect"
signature: "pub fn size() -> Size"
import: "use tui::geom::{Rect};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/geom.hy#L111"
order: 3
---

Width and height as a [`Size`](/packages/tui/reference/tui/geom/Size).

Called on a `Rect` value as `value.size(…)`.

## Returns

`Size`

## See also

- [`tui::geom::Size`](/packages/tui/reference/tui/geom/Size)
- [`Rect`](/packages/tui/reference/tui/geom/Rect): A rectangle of cells: top-left corner (`x`, `y`) and size.
- [`Rect::right`](/packages/tui/reference/tui/geom/Rect/right): The column just past the right edge (`x + w`).
- [`Rect::bottom`](/packages/tui/reference/tui/geom/Rect/bottom): The row just past the bottom edge (`y + h`).
- [`Rect::is_empty`](/packages/tui/reference/tui/geom/Rect/is_empty): Whether the rect has no cells (zero width or height).
- [`Rect::eq`](/packages/tui/reference/tui/geom/Rect/eq): Whether both rects have the same corner and size.
- [`Rect::contains`](/packages/tui/reference/tui/geom/Rect/contains): Whether cell (`px`, `py`) is inside.
- [`Rect::intersect`](/packages/tui/reference/tui/geom/Rect/intersect): The overlap of two rects (empty, at this rect's corner, when they do not overlap).
