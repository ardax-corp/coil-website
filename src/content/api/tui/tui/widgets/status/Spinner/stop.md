---
slug: "tui/tui/widgets/status/Spinner/stop"
package: "tui"
title: "Spinner::stop"
description: "Stop the animation and redraw with the label alone."
module: "tui::widgets::status"
kind: "method"
name: "stop"
parent: "Spinner"
signature: "pub fn stop(Ctx ctx)"
import: "use tui::widgets::status::{Spinner};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/status.hy#L151"
order: 1
---

Stop the animation and redraw with the label alone.

Called on a `Spinner` value as `value.stop(…)`.

## Parameters

| Name | Type |
|------|------|
| `ctx` | `Ctx` |

## See also

- [`Spinner`](/packages/tui/reference/tui/widgets/status/Spinner): An animated spinner and a label.
- [`Spinner::new`](/packages/tui/reference/tui/widgets/status/Spinner/new): A spinner with `label`, braille frames every 80ms.
- [`Spinner::start`](/packages/tui/reference/tui/widgets/status/Spinner/start): Start the frame timer (done by the first draw; nothing once started or stopped).
