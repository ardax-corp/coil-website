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
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/canvas.coil#L69"
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
