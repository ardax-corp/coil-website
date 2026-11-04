---
slug: "tui/tui/widgets/input/Button/new"
package: "tui"
title: "Button::new"
description: "A button labelled label calling on_press."
module: "tui::widgets::input"
kind: "static method"
name: "new"
parent: "Button"
signature: "pub static fn new(string label, fn(Ctx) -> () on_press) -> Button"
import: "use tui::widgets::input::{Button};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/611cfd9b4c061de7df4a8352a34580911bde46b9/src/tui/widgets/input.coil#L68"
order: 0
---

A button labelled `label` calling `on_press`.

## Parameters

| Name | Type |
|------|------|
| `label` | `string` |
| `on_press` | `fn(Ctx) -> ()` |

## Returns

`Button`

## See also

- [`Button`](/packages/tui/reference/tui/widgets/input/Button): A push button: Enter, Space or a click calls `on_press`.
