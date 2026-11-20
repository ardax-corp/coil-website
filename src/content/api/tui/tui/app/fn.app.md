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
source: "https://github.com/ardax-corp/coil-tui/blob/0912e5a7bad70e7775e26db08f3f0efa46e1553f/src/tui/app.coil#L83"
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
