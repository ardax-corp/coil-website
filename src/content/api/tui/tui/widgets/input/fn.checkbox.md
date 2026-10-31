---
slug: "tui/tui/widgets/input/fn.checkbox"
package: "tui"
title: "checkbox"
description: "A checkbox node calling on_change with the new state."
module: "tui::widgets::input"
kind: "fn"
name: "checkbox"
signature: "fn checkbox(string label, bool checked, fn(bool, Ctx) -> () on_change) -> Node"
import: "use tui::widgets::input::{checkbox};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/input.hy#L189"
order: 5
---

A checkbox node calling `on_change` with the new state.

## Parameters

| Name | Type |
|------|------|
| `label` | `string` |
| `checked` | `bool` |
| `on_change` | `fn(bool, Ctx) -> ()` |

## Returns

`Node`

## Examples

```coil
use cell::Ref;
use tui::node::Ctx;
use tui::testing::harness;
use tui::widgets::input::checkbox;
use tests::assert;
let on = Ref::new(false);
let h = harness(checkbox("Dark mode", false, fn (bool b, Ctx c) use (on) => on.set(b)), 14, 1);
h.key("space");
assert!(on.get());
assert!(h.row(0) == "[x] Dark mode ");
```

## See also

- [`button`](/packages/tui/reference/tui/widgets/input/fn.button): A button node: `[ label ]`, focusable, sized to its label; Enter, Space or a click calls `on_press`.
- [`radio_group`](/packages/tui/reference/tui/widgets/input/radio_group): A radio group node calling `on_change` with the new index.
- [`text_input`](/packages/tui/reference/tui/widgets/input/text_input): A text field showing `placeholder`.
