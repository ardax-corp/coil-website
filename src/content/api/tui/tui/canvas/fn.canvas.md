---
slug: "tui/tui/canvas/fn.canvas"
package: "tui"
title: "canvas"
description: "A canvas over the whole of f's buffer."
module: "tui::canvas"
kind: "fn"
name: "canvas"
signature: "fn canvas(Frame f) -> Canvas"
import: "use tui::canvas::{canvas};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/canvas.hy#L69"
order: 3
---

A canvas over the whole of `f`'s buffer.

## Parameters

| Name | Type |
|------|------|
| `f` | `Frame` |

## Returns

`Canvas`

## See also

- [`frame`](/packages/tui/reference/tui/canvas/fn.frame): A frame drawing into `buf`, with no cursor requested.
