---
slug: "tui/tui/geom/Rect/place"
package: "tui"
title: "Rect::place"
description: "A w x h rect placed inside this one by ax, ay (clipped to this rect; Stretch takes the whole axis)."
module: "tui::geom"
kind: "method"
name: "place"
parent: "Rect"
signature: "pub fn place(int w, int h, Align ax, Align ay) -> Rect"
import: "use tui::geom::{Rect};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/geom.hy#L155"
order: 10
---

A `w` x `h` rect placed inside this one by `ax`, `ay` (clipped to this rect; `Stretch` takes the whole axis).

Called on a `Rect` value as `value.place(…)`.

## Parameters

| Name | Type |
|------|------|
| `w` | `int` |
| `h` | `int` |
| `ax` | `Align` |
| `ay` | `Align` |

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
- [`Rect::intersect`](/packages/tui/reference/tui/geom/Rect/intersect): The overlap of two rects (empty, at this rect's corner, when they do not overlap).
