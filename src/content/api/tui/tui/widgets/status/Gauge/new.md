---
slug: "tui/tui/widgets/status/Gauge/new"
package: "tui"
title: "Gauge::new"
description: "A gauge at value of max, labelled with the percentage."
module: "tui::widgets::status"
kind: "static method"
name: "new"
parent: "Gauge"
signature: "pub static fn new(int value, int max) -> Gauge"
import: "use tui::widgets::status::{Gauge};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/status.hy#L46"
order: 0
---

A gauge at `value` of `max`, labelled with the percentage.

## Parameters

| Name | Type |
|------|------|
| `value` | `int` |
| `max` | `int` |

## Returns

`Gauge`

## See also

- [`Gauge`](/packages/tui/reference/tui/widgets/status/Gauge): A horizontal bar showing `value` out of `max`, with a label after it ("" for the percentage).
- [`Gauge::set`](/packages/tui/reference/tui/widgets/status/Gauge/set): Set the progress.
- [`Gauge::percent`](/packages/tui/reference/tui/widgets/status/Gauge/percent): Percent done, 0 to 100.
