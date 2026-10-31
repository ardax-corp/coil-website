---
slug: "tui/tui/geom/clamp"
package: "tui"
title: "clamp"
description: "Clamp v into lo..=hi (lo wins when hi < lo)."
module: "tui::geom"
kind: "fn"
name: "clamp"
signature: "fn clamp(int v, int lo, int hi) -> int"
import: "use tui::geom::{clamp};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/geom.hy#L40"
order: 6
---

Clamp `v` into `lo..=hi` (`lo` wins when `hi < lo`).

## Parameters

| Name | Type |
|------|------|
| `v` | `int` |
| `lo` | `int` |
| `hi` | `int` |

## Returns

`int`

## See also

- [`size`](/packages/tui/reference/tui/geom/fn.size): A `w` by `h` size; negative values become 0.
- [`imin`](/packages/tui/reference/tui/geom/imin): The smaller of `a` and `b`.
- [`imax`](/packages/tui/reference/tui/geom/imax): The larger of `a` and `b`.
- [`rect`](/packages/tui/reference/tui/geom/fn.rect): A rect at (`x`, `y`), `w` by `h`; a negative size becomes 0.
- [`empty`](/packages/tui/reference/tui/geom/empty): The empty rect at (0, 0).
