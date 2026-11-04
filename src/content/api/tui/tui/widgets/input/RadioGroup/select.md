---
slug: "tui/tui/widgets/input/RadioGroup/select"
package: "tui"
title: "RadioGroup::select"
description: "Select option i and call on_change; false (and nothing happens) when i is out of range or already selected."
module: "tui::widgets::input"
kind: "method"
name: "select"
parent: "RadioGroup"
signature: "pub fn select(int i, Ctx ctx) -> bool"
import: "use tui::widgets::input::{RadioGroup};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/611cfd9b4c061de7df4a8352a34580911bde46b9/src/tui/widgets/input.coil#L226"
order: 3
---

Select option `i` and call [`on_change`](/packages/tui/reference/tui/widgets/input/RadioGroup/on_change); false (and nothing happens) when `i` is out of range or already selected.

Called on a `RadioGroup` value as `value.select(…)`.

## Parameters

| Name | Type |
|------|------|
| `i` | `int` |
| `ctx` | `Ctx` |

## Returns

`bool`

## See also

- [`RadioGroup::on_change`](/packages/tui/reference/tui/widgets/input/RadioGroup/on_change)
- [`RadioGroup`](/packages/tui/reference/tui/widgets/input/RadioGroup): One choice out of several, listed top to bottom.
- [`RadioGroup::new`](/packages/tui/reference/tui/widgets/input/RadioGroup/new): A group of `options` with `selected` chosen and no callback.
- [`RadioGroup::value`](/packages/tui/reference/tui/widgets/input/RadioGroup/value): The selected option's text, or "" when none is selected.
