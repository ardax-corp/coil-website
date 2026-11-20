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
source: "https://github.com/ardax-corp/coil-tui/blob/0912e5a7bad70e7775e26db08f3f0efa46e1553f/src/tui/widgets/status.coil#L143"
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
