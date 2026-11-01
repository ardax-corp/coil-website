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
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/status.coil#L46"
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
