---
slug: "tui/tui/widgets/text/text_fn"
package: "tui"
title: "text_fn"
description: "Text recomputed on every draw: text_fn(fn () use (m) => m.status)."
module: "tui::widgets::text"
kind: "fn"
name: "text_fn"
signature: "fn text_fn(fn() -> string f) -> Node"
import: "use tui::widgets::text::{text_fn};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/text.coil#L130"
order: 4
---

Text recomputed on every draw: `text_fn(fn () use (m) => m.status)`.

## Parameters

| Name | Type |
|------|------|
| `f` | `fn() -> string` |

## Returns

`Node`

## See also

- [`text`](/packages/tui/reference/tui/widgets/text/fn.text): A text node showing `s`, word wrapped and sized to its content.
- [`styled`](/packages/tui/reference/tui/widgets/text/styled): A text node showing `s` in style `st`.
- [`rule`](/packages/tui/reference/tui/widgets/text/fn.rule): A one-row horizontal rule with `label` at its start ("" for a plain line).
