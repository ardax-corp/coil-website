---
slug: "tui/tui/widgets/status/Spinner/start"
package: "tui"
title: "Spinner::start"
description: "Start the frame timer (done by the first draw; nothing once started or stopped)."
module: "tui::widgets::status"
kind: "method"
name: "start"
parent: "Spinner"
signature: "pub fn start(Ctx ctx)"
import: "use tui::widgets::status::{Spinner};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/status.coil#L162"
order: 2
---

Start the frame timer (done by the first draw; nothing once started or stopped).

Called on a `Spinner` value as `value.start(…)`.

## Parameters

| Name | Type |
|------|------|
| `ctx` | `Ctx` |

## See also

- [`Spinner`](/packages/tui/reference/tui/widgets/status/Spinner): An animated spinner and a label.
- [`Spinner::new`](/packages/tui/reference/tui/widgets/status/Spinner/new): A spinner with `label`, braille frames every 80ms.
- [`Spinner::stop`](/packages/tui/reference/tui/widgets/status/Spinner/stop): Stop the animation and redraw with the label alone.
