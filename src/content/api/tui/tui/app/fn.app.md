---
slug: "tui/tui/app/fn.app"
package: "tui"
title: "app"
description: "An app with root as its base layer, drawing with colour level. Call resize before the first draw."
module: "tui::app"
kind: "fn"
name: "app"
signature: "fn app(Node root, ColorLevel level) -> App"
import: "use tui::app::{app};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/app.hy#L83"
order: 1
---

An app with `root` as its base layer, drawing with colour `level`. Call `resize` before the first `draw`.

## Parameters

| Name | Type |
|------|------|
| `root` | `Node` |
| `level` | `ColorLevel` |

## Returns

`App`
