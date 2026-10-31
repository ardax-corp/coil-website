---
slug: "tui/tui/widgets/status/Gauge/set"
package: "tui"
title: "Gauge::set"
description: "Set the progress. It shows in the next frame the app draws, which follows any handled event or timer."
module: "tui::widgets::status"
kind: "method"
name: "set"
parent: "Gauge"
signature: "pub fn set(int value)"
import: "use tui::widgets::status::{Gauge};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/status.hy#L52"
order: 1
---

Set the progress. It shows in the next frame the app draws, which follows any handled event or timer.

Called on a `Gauge` value as `value.set(…)`.

## Parameters

| Name | Type |
|------|------|
| `value` | `int` |

## See also

- [`Gauge`](/packages/tui/reference/tui/widgets/status/Gauge): A horizontal bar showing `value` out of `max`, with a label after it ("" for the percentage).
- [`Gauge::new`](/packages/tui/reference/tui/widgets/status/Gauge/new): A gauge at `value` of `max`, labelled with the percentage.
- [`Gauge::percent`](/packages/tui/reference/tui/widgets/status/Gauge/percent): Percent done, 0 to 100.
