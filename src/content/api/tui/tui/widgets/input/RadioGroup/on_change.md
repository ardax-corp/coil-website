---
slug: "tui/tui/widgets/input/RadioGroup/on_change"
package: "tui"
title: "RadioGroup::on_change"
description: "Call f with the new index on each change (builder style)."
module: "tui::widgets::input"
kind: "method"
name: "on_change"
parent: "RadioGroup"
signature: "pub fn on_change(fn(int, Ctx) -> () f) -> RadioGroup"
import: "use tui::widgets::input::{RadioGroup};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/input.coil#L211"
order: 1
---

Call `f` with the new index on each change (builder style).

Called on a `RadioGroup` value as `value.on_change(…)`.

## Parameters

| Name | Type |
|------|------|
| `f` | `fn(int, Ctx) -> ()` |

## Returns

`RadioGroup`

## See also

- [`RadioGroup`](/packages/tui/reference/tui/widgets/input/RadioGroup): One choice out of several, listed top to bottom.
- [`RadioGroup::new`](/packages/tui/reference/tui/widgets/input/RadioGroup/new): A group of `options` with `selected` chosen and no callback.
- [`RadioGroup::value`](/packages/tui/reference/tui/widgets/input/RadioGroup/value): The selected option's text, or "" when none is selected.
- [`RadioGroup::select`](/packages/tui/reference/tui/widgets/input/RadioGroup/select): Select option `i` and call `on_change`; false (and nothing happens) when `i` is out of range or already selected.
