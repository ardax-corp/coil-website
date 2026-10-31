---
slug: "tui/tui/widgets/status/Gauge/percent"
package: "tui"
title: "Gauge::percent"
description: "Percent done, 0 to 100."
module: "tui::widgets::status"
kind: "method"
name: "percent"
parent: "Gauge"
signature: "pub fn percent() -> int"
import: "use tui::widgets::status::{Gauge};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/status.hy#L57"
order: 2
---

Percent done, 0 to 100.

Called on a `Gauge` value as `value.percent(…)`.

## Returns

`int`

## See also

- [`Gauge`](/packages/tui/reference/tui/widgets/status/Gauge): A horizontal bar showing `value` out of `max`, with a label after it ("" for the percentage).
- [`Gauge::new`](/packages/tui/reference/tui/widgets/status/Gauge/new): A gauge at `value` of `max`, labelled with the percentage.
- [`Gauge::set`](/packages/tui/reference/tui/widgets/status/Gauge/set): Set the progress.
