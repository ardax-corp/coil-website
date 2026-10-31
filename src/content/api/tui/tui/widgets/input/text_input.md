---
slug: "tui/tui/widgets/input/text_input"
package: "tui"
title: "text_input"
description: "A text field showing placeholder. Keep the TextInput to read value(), and mount it to put it in the tree."
module: "tui::widgets::input"
kind: "fn"
name: "text_input"
signature: "fn text_input(string placeholder) -> TextInput"
import: "use tui::widgets::input::{text_input};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/input.hy#L469"
order: 7
---

A text field showing `placeholder`. Keep the [`TextInput`](/packages/tui/reference/tui/widgets/input/TextInput) to read `value()`, and `mount` it to put it in the tree.

## Parameters

| Name | Type |
|------|------|
| `placeholder` | `string` |

## Returns

`TextInput`

## Examples

```coil
use cell::Ref;
use tui::node::{Ctx, mount};
use tui::testing::harness;
use tui::widgets::input::text_input;
use tests::assert;
let got = Ref::new("");
let field = text_input("Search").on_submit(fn (string s, Ctx c) use (got) => got.set(s));
let h = harness(mount(field), 20, 1);
h.type_text("cats");
h.key("enter");
assert!(field.value() == "cats" && got.get() == "cats");
```

## See also

- [`tui::widgets::input::TextInput`](/packages/tui/reference/tui/widgets/input/TextInput)
- [`button`](/packages/tui/reference/tui/widgets/input/fn.button): A button node: `[ label ]`, focusable, sized to its label; Enter, Space or a click calls `on_press`.
- [`checkbox`](/packages/tui/reference/tui/widgets/input/fn.checkbox): A checkbox node calling `on_change` with the new state.
- [`radio_group`](/packages/tui/reference/tui/widgets/input/radio_group): A radio group node calling `on_change` with the new index.
