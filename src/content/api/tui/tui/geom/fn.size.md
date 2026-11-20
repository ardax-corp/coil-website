---
slug: "tui/tui/geom/fn.size"
package: "tui"
title: "size"
description: "A w by h size; negative values become 0."
module: "tui::geom"
kind: "fn"
name: "size"
signature: "fn size(int w, int h) -> Size"
import: "use tui::geom::{size};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/0912e5a7bad70e7775e26db08f3f0efa46e1553f/src/tui/geom.coil#L12"
order: 3
---

A `w` by `h` size; negative values become 0.

## Parameters

| Name | Type |
|------|------|
| `w` | `int` |
| `h` | `int` |

## Returns

`Size`

## See also

- [`imin`](/packages/tui/reference/tui/geom/imin): The smaller of `a` and `b`.
- [`imax`](/packages/tui/reference/tui/geom/imax): The larger of `a` and `b`.
- [`clamp`](/packages/tui/reference/tui/geom/clamp): Clamp `v` into `lo..=hi` (`lo` wins when `hi < lo`).
- [`rect`](/packages/tui/reference/tui/geom/fn.rect): A rect at (`x`, `y`), `w` by `h`; a negative size becomes 0.
- [`empty`](/packages/tui/reference/tui/geom/empty): The empty rect at (0, 0).
