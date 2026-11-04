---
slug: "tui/tui/widgets/text/fn.text"
package: "tui"
title: "text"
description: "A text node showing s, word wrapped and sized to its content."
module: "tui::widgets::text"
kind: "fn"
name: "text"
signature: "fn text(string s) -> Node"
import: "use tui::widgets::text::{text};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/611cfd9b4c061de7df4a8352a34580911bde46b9/src/tui/widgets/text.coil#L120"
order: 2
---

A text node showing `s`, word wrapped and sized to its content.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Node`

## Examples

```coil
use tui::testing::harness;
use tui::widgets::layout::column;
use tui::widgets::text::{rule, text};
use tests::assert;
let h = harness(column([text("one two three"), rule("End")]), 9, 3);
assert!(h.row(0) == "one two  ");
assert!(h.row(1) == "three    ");
assert!(h.row(2) == "─ End ───");
```

## See also

- [`styled`](/packages/tui/reference/tui/widgets/text/styled): A text node showing `s` in style `st`.
- [`text_fn`](/packages/tui/reference/tui/widgets/text/text_fn): Text recomputed on every draw: `text_fn(fn () use (m) => m.status)`.
- [`rule`](/packages/tui/reference/tui/widgets/text/fn.rule): A one-row horizontal rule with `label` at its start ("" for a plain line).
