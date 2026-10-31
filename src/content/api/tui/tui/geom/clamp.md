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
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/geom.coil#L40"
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
