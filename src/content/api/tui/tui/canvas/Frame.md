---
slug: "tui/tui/canvas/Frame"
package: "tui"
title: "Frame"
description: "One frame being drawn: the buffer plus where the focused component wants the terminal cursor (absolute cell, or none)."
module: "tui::canvas"
kind: "class"
name: "Frame"
signature: "shared class Frame"
import: "use tui::canvas::{Frame};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/canvas.coil#L17"
order: 0
---

One frame being drawn: the buffer plus where the focused component wants the terminal cursor (absolute cell, or none).

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `buf` | `Buffer` | The cells being drawn. |
| `cursor_x` | `int` | Column of the requested terminal cursor (with `has_cursor`). |
| `cursor_y` | `int` | Row of the requested terminal cursor (with `has_cursor`). |
| `has_cursor` | `bool` | Whether a component asked for the cursor this frame. |

## See also

- [`Canvas`](/packages/tui/reference/tui/canvas/Canvas): A view onto a `Frame`: local (0, 0) is `area`'s corner, and nothing is drawn outside `clip` (absolute coordinates, inside `area`).
