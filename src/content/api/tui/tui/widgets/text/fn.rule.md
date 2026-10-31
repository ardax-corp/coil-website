---
slug: "tui/tui/widgets/text/fn.rule"
package: "tui"
title: "rule"
description: "A one-row horizontal rule with label at its start (\"\" for a plain line)."
module: "tui::widgets::text"
kind: "fn"
name: "rule"
signature: "fn rule(string label) -> Node"
import: "use tui::widgets::text::{rule};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/text.hy#L167"
order: 5
---

A one-row horizontal rule with `label` at its start ("" for a plain line).

## Parameters

| Name | Type |
|------|------|
| `label` | `string` |

## Returns

`Node`

## See also

- [`text`](/packages/tui/reference/tui/widgets/text/fn.text): A text node showing `s`, word wrapped and sized to its content.
- [`styled`](/packages/tui/reference/tui/widgets/text/styled): A text node showing `s` in style `st`.
- [`text_fn`](/packages/tui/reference/tui/widgets/text/text_fn): Text recomputed on every draw: `text_fn(fn () use (m) => m.status)`.
