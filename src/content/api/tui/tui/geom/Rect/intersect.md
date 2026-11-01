---
slug: "tui/tui/geom/Rect/intersect"
package: "tui"
title: "Rect::intersect"
description: "The overlap of two rects (empty, at this rect's corner, when they do not overlap)."
module: "tui::geom"
kind: "method"
name: "intersect"
parent: "Rect"
signature: "pub fn intersect(Rect o) -> Rect"
import: "use tui::geom::{Rect};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/geom.coil#L127"
order: 6
---

The overlap of two rects (empty, at this rect's corner, when they do not overlap).

Called on a `Rect` value as `value.intersect(…)`.

## Parameters

| Name | Type |
|------|------|
| `o` | `Rect` |

## Returns

`Rect`

## See also

- [`Rect`](/packages/tui/reference/tui/geom/Rect): A rectangle of cells: top-left corner (`x`, `y`) and size.
- [`Rect::right`](/packages/tui/reference/tui/geom/Rect/right): The column just past the right edge (`x + w`).
- [`Rect::bottom`](/packages/tui/reference/tui/geom/Rect/bottom): The row just past the bottom edge (`y + h`).
- [`Rect::is_empty`](/packages/tui/reference/tui/geom/Rect/is_empty): Whether the rect has no cells (zero width or height).
- [`Rect::size`](/packages/tui/reference/tui/geom/Rect/size): Width and height as a `Size`.
- [`Rect::eq`](/packages/tui/reference/tui/geom/Rect/eq): Whether both rects have the same corner and size.
- [`Rect::contains`](/packages/tui/reference/tui/geom/Rect/contains): Whether cell (`px`, `py`) is inside.
- [`Rect::offset`](/packages/tui/reference/tui/geom/Rect/offset): Moved by (`dx`, `dy`).
