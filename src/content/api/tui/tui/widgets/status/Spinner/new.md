---
slug: "tui/tui/widgets/status/Spinner/new"
package: "tui"
title: "Spinner::new"
description: "A spinner with label, braille frames every 80ms."
module: "tui::widgets::status"
kind: "static method"
name: "new"
parent: "Spinner"
signature: "pub static fn new(string label) -> Spinner"
import: "use tui::widgets::status::{Spinner};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/status.hy#L143"
order: 0
---

A spinner with `label`, braille frames every 80ms.

## Parameters

| Name | Type |
|------|------|
| `label` | `string` |

## Returns

`Spinner`

## See also

- [`Spinner`](/packages/tui/reference/tui/widgets/status/Spinner): An animated spinner and a label.
- [`Spinner::stop`](/packages/tui/reference/tui/widgets/status/Spinner/stop): Stop the animation and redraw with the label alone.
- [`Spinner::start`](/packages/tui/reference/tui/widgets/status/Spinner/start): Start the frame timer (done by the first draw; nothing once started or stopped).
