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
source: "https://github.com/ardax-corp/coil-tui/blob/611cfd9b4c061de7df4a8352a34580911bde46b9/src/tui/widgets/status.coil#L202"
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
