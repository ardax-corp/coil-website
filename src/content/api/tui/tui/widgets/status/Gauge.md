---
slug: "tui/tui/widgets/status/Gauge"
package: "tui"
title: "Gauge"
description: "A horizontal bar showing value out of max, with a label after it (\"\" for the percentage)."
module: "tui::widgets::status"
kind: "class"
name: "Gauge"
signature: "shared class Gauge"
import: "use tui::widgets::status::{Gauge};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/status.hy#L33"
order: 0
---

A horizontal bar showing `value` out of `max`, with a label after it ("" for the percentage).

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `value` | `int` | Progress so far. |
| `max` | `int` | The value of a full bar. |
| `label` | `string` | Text after the bar ("" for the percentage). |
| `style` | `Option<Style>` | Bar style; `None` uses the theme's accent. |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/tui/reference/tui/widgets/status/Gauge/new) | A gauge at `value` of `max`, labelled with the percentage. |

## Methods

| Name | Description |
|------|-------------|
| [`set`](/packages/tui/reference/tui/widgets/status/Gauge/set) | Set the progress. |
| [`percent`](/packages/tui/reference/tui/widgets/status/Gauge/percent) | Percent done, 0 to 100. |

## Trait implementations

- `Component` for `Gauge`

## See also

- [`Spinner`](/packages/tui/reference/tui/widgets/status/Spinner): An animated spinner and a label.
- [`KeyHints`](/packages/tui/reference/tui/widgets/status/KeyHints): A line of key hints: `^S save q quit`.
