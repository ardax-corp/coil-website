---
slug: "tui/tui/canvas/fn.frame"
package: "tui"
title: "frame"
description: "A frame drawing into buf, with no cursor requested."
module: "tui::canvas"
kind: "fn"
name: "frame"
signature: "fn frame(Buffer buf) -> Frame"
import: "use tui::canvas::{frame};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/canvas.hy#L29"
order: 2
---

A frame drawing into `buf`, with no cursor requested.

## Parameters

| Name | Type |
|------|------|
| `buf` | `Buffer` |

## Returns

`Frame`

## See also

- [`canvas`](/packages/tui/reference/tui/canvas/fn.canvas): A canvas over the whole of `f`'s buffer.
