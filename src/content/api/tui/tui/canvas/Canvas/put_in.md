---
slug: "tui/tui/canvas/Canvas/put_in"
package: "tui"
title: "Canvas::put_in"
description: "s on row y within columns x..x+w, aligned by a, cut with \"…\" when it does not fit."
module: "tui::canvas"
kind: "method"
name: "put_in"
parent: "Canvas"
signature: "pub fn put_in(int x, int y, int w, string s, Style style, Align a) -> int"
import: "use tui::canvas::{Canvas};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/canvas.hy#L157"
order: 8
---

`s` on row `y` within columns `x..x+w`, aligned by `a`, cut with "…" when it does not fit.

Called on a `Canvas` value as `value.put_in(…)`.

## Parameters

| Name | Type |
|------|------|
| `x` | `int` |
| `y` | `int` |
| `w` | `int` |
| `s` | `string` |
| `style` | `Style` |
| `a` | `Align` |

## Returns

`int`

## See also

- [`Canvas`](/packages/tui/reference/tui/canvas/Canvas): A view onto a `Frame`: local (0, 0) is `area`'s corner, and nothing is drawn outside `clip` (absolute coordinates, inside `area`).
- [`Canvas::w`](/packages/tui/reference/tui/canvas/Canvas/w): Width of the area in cells.
- [`Canvas::h`](/packages/tui/reference/tui/canvas/Canvas/h): Height of the area in cells.
- [`Canvas::bounds`](/packages/tui/reference/tui/canvas/Canvas/bounds): The area in local coordinates.
- [`Canvas::sub`](/packages/tui/reference/tui/canvas/Canvas/sub): A canvas for the local rect `r`, clipped to this one.
- [`Canvas::visible`](/packages/tui/reference/tui/canvas/Canvas/visible): Whether local (`x`, `y`) is drawable.
- [`Canvas::get`](/packages/tui/reference/tui/canvas/Canvas/get): The cell at local (`x`, `y`) (a blank outside the buffer).
- [`Canvas::set`](/packages/tui/reference/tui/canvas/Canvas/set): Set one cell (ignored outside the clip).
