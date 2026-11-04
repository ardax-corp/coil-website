---
slug: "tui/tui/widgets/text/styled"
package: "tui"
title: "styled"
description: "A text node showing s in style st."
module: "tui::widgets::text"
kind: "fn"
name: "styled"
signature: "fn styled(string s, Style st) -> Node"
import: "use tui::widgets::text::{styled};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/611cfd9b4c061de7df4a8352a34580911bde46b9/src/tui/widgets/text.coil#L125"
order: 3
---

A text node showing `s` in style `st`.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |
| `st` | `Style` |

## Returns

`Node`

## See also

- [`text`](/packages/tui/reference/tui/widgets/text/fn.text): A text node showing `s`, word wrapped and sized to its content.
- [`text_fn`](/packages/tui/reference/tui/widgets/text/text_fn): Text recomputed on every draw: `text_fn(fn () use (m) => m.status)`.
- [`rule`](/packages/tui/reference/tui/widgets/text/fn.rule): A one-row horizontal rule with `label` at its start ("" for a plain line).
