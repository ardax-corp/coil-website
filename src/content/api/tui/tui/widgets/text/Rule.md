---
slug: "tui/tui/widgets/text/Rule"
package: "tui"
title: "Rule"
description: "A horizontal line, with an optional label at its start."
module: "tui::widgets::text"
kind: "class"
name: "Rule"
signature: "shared class Rule"
import: "use tui::widgets::text::{Rule};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/text.hy#L138"
order: 1
---

A horizontal line, with an optional label at its start.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `label` | `string` | Text drawn near the start of the line ("" for none). |
| `ch` | `string` | The line character (`─`). |
| `style` | `Option<Style>` | `None` uses the theme's border style. |

## Trait implementations

- `Component` for `Rule`

## See also

- [`Text`](/packages/tui/reference/tui/widgets/text/Text): Text: fixed (`content`) or computed on every draw (`source`), word wrapped by default, sized to its content.
