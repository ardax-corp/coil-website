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
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/text.coil#L167"
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
