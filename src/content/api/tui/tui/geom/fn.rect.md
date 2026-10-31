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
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/geom.hy#L85"
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
