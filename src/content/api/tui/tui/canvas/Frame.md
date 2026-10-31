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
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/canvas.hy#L17"
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
