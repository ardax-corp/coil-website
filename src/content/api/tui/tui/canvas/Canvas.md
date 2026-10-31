---
slug: "tui/tui/canvas/Canvas"
package: "tui"
title: "Canvas"
description: "A view onto a Frame: local (0, 0) is area's corner, and nothing is drawn outside clip (absolute coordinates, inside area). A component's render gets one sized to its node."
module: "tui::canvas"
kind: "class"
name: "Canvas"
signature: "class Canvas"
import: "use tui::canvas::{Canvas};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/canvas.hy#L59"
order: 1
---

A view onto a [`Frame`](/packages/tui/reference/tui/canvas/Frame): local (0, 0) is `area`'s corner, and nothing is drawn outside `clip` (absolute coordinates, inside `area`). A component's `render` gets one sized to its node.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `frame` | `Frame` | The frame drawn into. |
| `area` | `Rect` | The component's area, in absolute cells. |
| `clip` | `Rect` | Where drawing lands, in absolute cells (inside `area`). |

## Methods

| Name | Description |
|------|-------------|
| [`w`](/packages/tui/reference/tui/canvas/Canvas/w) | Width of the area in cells. |
| [`h`](/packages/tui/reference/tui/canvas/Canvas/h) | Height of the area in cells. |
| [`bounds`](/packages/tui/reference/tui/canvas/Canvas/bounds) | The area in local coordinates. |
| [`sub`](/packages/tui/reference/tui/canvas/Canvas/sub) | A canvas for the local rect `r`, clipped to this one. |
| [`visible`](/packages/tui/reference/tui/canvas/Canvas/visible) | Whether local (`x`, `y`) is drawable. |
| [`get`](/packages/tui/reference/tui/canvas/Canvas/get) | The cell at local (`x`, `y`) (a blank outside the buffer). |
| [`set`](/packages/tui/reference/tui/canvas/Canvas/set) | Set one cell (ignored outside the clip). |
| [`put`](/packages/tui/reference/tui/canvas/Canvas/put) | Write `s` on row `y` from column `x`, clipped on both sides. |
| [`put_in`](/packages/tui/reference/tui/canvas/Canvas/put_in) | `s` on row `y` within columns `x..x+w`, aligned by `a`, cut with "…" when it does not fit. |
| [`fill`](/packages/tui/reference/tui/canvas/Canvas/fill) | Fill a rect with `ch` (one column wide). |
| [`clear`](/packages/tui/reference/tui/canvas/Canvas/clear) | Fill the whole area with blanks in `style` (a background). |
| [`paint`](/packages/tui/reference/tui/canvas/Canvas/paint) | Restyle a rect, keeping its text: `style` is merged over each cell's own style. |
| [`hline`](/packages/tui/reference/tui/canvas/Canvas/hline) | A horizontal line of `w` cells of `ch` from local (`x`, `y`). |
| [`vline`](/packages/tui/reference/tui/canvas/Canvas/vline) | A vertical line of `h` cells of `ch` from local (`x`, `y`). |
| [`draw_box`](/packages/tui/reference/tui/canvas/Canvas/draw_box) | A box outline; `w`, `h` include the border. |
| [`cursor`](/packages/tui/reference/tui/canvas/Canvas/cursor) | Ask for the terminal cursor at local (`x`, `y`), when it is visible. |

## Examples

```coil
use tui::canvas::{canvas, frame};
use tui::geom::{Align, rect};
use cli::screen::buffer;
use cli::style::plain;
use tests::assert;
let f = frame(buffer(12, 2));
let c = canvas(f).sub(rect(2, 0, 6, 2));
c.put(0, 0, "clipped text", plain());
c.put_in(0, 1, 6, "ok", plain(), Align::End);
assert!(f.buf.row_text(0) == "  clippe    ");
assert!(f.buf.row_text(1) == "      ok    ");
```

## See also

- [`tui::canvas::Frame`](/packages/tui/reference/tui/canvas/Frame)
