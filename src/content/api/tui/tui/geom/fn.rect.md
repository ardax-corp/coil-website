---
slug: "tui/tui/geom/fn.rect"
package: "tui"
title: "rect"
description: "A rect at (x, y), w by h; a negative size becomes 0."
module: "tui::geom"
kind: "fn"
name: "rect"
signature: "fn rect(int x, int y, int w, int h) -> Rect"
import: "use tui::geom::{rect};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/geom.coil#L85"
order: 7
---

A rect at (`x`, `y`), `w` by `h`; a negative size becomes 0.

## Parameters

| Name | Type |
|------|------|
| `x` | `int` |
| `y` | `int` |
| `w` | `int` |
| `h` | `int` |

## Returns

`Rect`

## See also

- [`size`](/packages/tui/reference/tui/geom/fn.size): A `w` by `h` size; negative values become 0.
- [`imin`](/packages/tui/reference/tui/geom/imin): The smaller of `a` and `b`.
- [`imax`](/packages/tui/reference/tui/geom/imax): The larger of `a` and `b`.
- [`clamp`](/packages/tui/reference/tui/geom/clamp): Clamp `v` into `lo..=hi` (`lo` wins when `hi < lo`).
- [`empty`](/packages/tui/reference/tui/geom/empty): The empty rect at (0, 0).
