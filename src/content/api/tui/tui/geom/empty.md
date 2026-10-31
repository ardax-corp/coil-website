---
slug: "tui/tui/geom/empty"
package: "tui"
title: "empty"
description: "The empty rect at (0, 0)."
module: "tui::geom"
kind: "fn"
name: "empty"
signature: "fn empty() -> Rect"
import: "use tui::geom::{empty};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/geom.coil#L90"
order: 8
---

The empty rect at (0, 0).

## Returns

`Rect`

## See also

- [`size`](/packages/tui/reference/tui/geom/fn.size): A `w` by `h` size; negative values become 0.
- [`imin`](/packages/tui/reference/tui/geom/imin): The smaller of `a` and `b`.
- [`imax`](/packages/tui/reference/tui/geom/imax): The larger of `a` and `b`.
- [`clamp`](/packages/tui/reference/tui/geom/clamp): Clamp `v` into `lo..=hi` (`lo` wins when `hi < lo`).
- [`rect`](/packages/tui/reference/tui/geom/fn.rect): A rect at (`x`, `y`), `w` by `h`; a negative size becomes 0.
