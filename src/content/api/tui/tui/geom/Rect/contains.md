---
slug: "tui/tui/geom/Rect/contains"
package: "tui"
title: "Rect::contains"
description: "Whether cell (px, py) is inside."
module: "tui::geom"
kind: "method"
name: "contains"
parent: "Rect"
signature: "pub fn contains(int px, int py) -> bool"
import: "use tui::geom::{Rect};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/geom.coil#L121"
order: 5
---

Whether cell (`px`, `py`) is inside.

Called on a `Rect` value as `value.contains(…)`.

## Parameters

| Name | Type |
|------|------|
| `px` | `int` |
| `py` | `int` |

## Returns

`bool`

## See also

- [`Rect`](/packages/tui/reference/tui/geom/Rect): A rectangle of cells: top-left corner (`x`, `y`) and size.
- [`Rect::right`](/packages/tui/reference/tui/geom/Rect/right): The column just past the right edge (`x + w`).
- [`Rect::bottom`](/packages/tui/reference/tui/geom/Rect/bottom): The row just past the bottom edge (`y + h`).
- [`Rect::is_empty`](/packages/tui/reference/tui/geom/Rect/is_empty): Whether the rect has no cells (zero width or height).
- [`Rect::size`](/packages/tui/reference/tui/geom/Rect/size): Width and height as a `Size`.
- [`Rect::eq`](/packages/tui/reference/tui/geom/Rect/eq): Whether both rects have the same corner and size.
- [`Rect::intersect`](/packages/tui/reference/tui/geom/Rect/intersect): The overlap of two rects (empty, at this rect's corner, when they do not overlap).
- [`Rect::offset`](/packages/tui/reference/tui/geom/Rect/offset): Moved by (`dx`, `dy`).
