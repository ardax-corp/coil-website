---
slug: "tui/tui/geom/Rect"
package: "tui"
title: "Rect"
description: "A rectangle of cells: top-left corner (x, y) and size. Width and height are never negative. The right and bottom edges are exclusive."
module: "tui::geom"
kind: "class"
name: "Rect"
signature: "class Rect"
import: "use tui::geom::{Rect};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/geom.hy#L73"
order: 2
---

A rectangle of cells: top-left corner (`x`, `y`) and size. Width and height are never negative. The right and bottom edges are exclusive.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `x` | `int` | Left column. |
| `y` | `int` | Top row. |
| `w` | `int` | Width in cells. |
| `h` | `int` | Height in cells. |

## Methods

| Name | Description |
|------|-------------|
| [`right`](/packages/tui/reference/tui/geom/Rect/right) | The column just past the right edge (`x + w`). |
| [`bottom`](/packages/tui/reference/tui/geom/Rect/bottom) | The row just past the bottom edge (`y + h`). |
| [`is_empty`](/packages/tui/reference/tui/geom/Rect/is_empty) | Whether the rect has no cells (zero width or height). |
| [`size`](/packages/tui/reference/tui/geom/Rect/size) | Width and height as a [`Size`](/packages/tui/reference/tui/geom/Size). |
| [`eq`](/packages/tui/reference/tui/geom/Rect/eq) | Whether both rects have the same corner and size. |
| [`contains`](/packages/tui/reference/tui/geom/Rect/contains) | Whether cell (`px`, `py`) is inside. |
| [`intersect`](/packages/tui/reference/tui/geom/Rect/intersect) | The overlap of two rects (empty, at this rect's corner, when they do not overlap). |
| [`offset`](/packages/tui/reference/tui/geom/Rect/offset) | Moved by (`dx`, `dy`). |
| [`inset`](/packages/tui/reference/tui/geom/Rect/inset) | Shrunk by `top`, `right`, `bottom`, `left` cells. |
| [`shrink`](/packages/tui/reference/tui/geom/Rect/shrink) | Shrunk by `n` cells on every side. |
| [`place`](/packages/tui/reference/tui/geom/Rect/place) | A `w` x `h` rect placed inside this one by `ax`, `ay` (clipped to this rect; `Stretch` takes the whole axis). |
| [`local`](/packages/tui/reference/tui/geom/Rect/local) | The same rect with (0, 0) as its corner. |

## Examples

```coil
use tui::geom::{Align, rect};
use tests::assert;
let r = rect(2, 1, 10, 4);
assert!(r.right() == 12 && r.bottom() == 5);
assert!(r.contains(11, 4) && !r.contains(12, 4));
let inner = r.shrink(1);
assert!(inner.eq(rect(3, 2, 8, 2)));
let c = r.place(4, 2, Align::Center, Align::End);
assert!(c.eq(rect(5, 3, 4, 2)));
assert!(r.intersect(rect(20, 20, 3, 3)).is_empty());
```

## See also

- [`Size`](/packages/tui/reference/tui/geom/Size): A width and height in cells.
