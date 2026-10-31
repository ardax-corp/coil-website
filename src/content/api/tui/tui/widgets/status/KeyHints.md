---
slug: "tui/tui/widgets/status/KeyHints"
package: "tui"
title: "KeyHints"
description: "A line of key hints: ^S save q quit."
module: "tui::widgets::status"
kind: "class"
name: "KeyHints"
signature: "shared class KeyHints"
import: "use tui::widgets::status::{KeyHints};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/status.hy#L202"
order: 2
---

A line of key hints: `^S save  q quit`.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `keys` | `Vec<string>` | Key names, drawn in the accent style. |
| `descriptions` | `Vec<string>` | What each key does, drawn muted. |

## Methods

| Name | Description |
|------|-------------|
| [`add`](/packages/tui/reference/tui/widgets/status/KeyHints/add) | Append a hint (builder style). |

## Trait implementations

- `Component` for `KeyHints`

## See also

- [`Gauge`](/packages/tui/reference/tui/widgets/status/Gauge): A horizontal bar showing `value` out of `max`, with a label after it ("" for the percentage).
- [`Spinner`](/packages/tui/reference/tui/widgets/status/Spinner): An animated spinner and a label.
