---
slug: "tui/tui/geom/imax"
package: "tui"
title: "imax"
description: "The larger of a and b."
module: "tui::geom"
kind: "fn"
name: "imax"
signature: "fn imax(int a, int b) -> int"
import: "use tui::geom::{imax};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/geom.hy#L32"
order: 5
---

The larger of `a` and `b`.

## Parameters

| Name | Type |
|------|------|
| `a` | `int` |
| `b` | `int` |

## Returns

`int`

## See also

- [`size`](/packages/tui/reference/tui/geom/fn.size): A `w` by `h` size; negative values become 0.
- [`imin`](/packages/tui/reference/tui/geom/imin): The smaller of `a` and `b`.
- [`clamp`](/packages/tui/reference/tui/geom/clamp): Clamp `v` into `lo..=hi` (`lo` wins when `hi < lo`).
- [`rect`](/packages/tui/reference/tui/geom/fn.rect): A rect at (`x`, `y`), `w` by `h`; a negative size becomes 0.
- [`empty`](/packages/tui/reference/tui/geom/empty): The empty rect at (0, 0).
