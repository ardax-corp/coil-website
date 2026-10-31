---
slug: "tui/tui/widgets/input/RadioGroup/new"
package: "tui"
title: "RadioGroup::new"
description: "A group of options with selected chosen and no callback."
module: "tui::widgets::input"
kind: "static method"
name: "new"
parent: "RadioGroup"
signature: "pub static fn new(Vec<string> options, int selected) -> RadioGroup"
import: "use tui::widgets::input::{RadioGroup};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/input.hy#L206"
order: 0
---

A group of `options` with `selected` chosen and no callback.

## Parameters

| Name | Type |
|------|------|
| `options` | `Vec<string>` |
| `selected` | `int` |

## Returns

`RadioGroup`

## See also

- [`RadioGroup`](/packages/tui/reference/tui/widgets/input/RadioGroup): One choice out of several, listed top to bottom.
- [`RadioGroup::on_change`](/packages/tui/reference/tui/widgets/input/RadioGroup/on_change): Call `f` with the new index on each change (builder style).
- [`RadioGroup::value`](/packages/tui/reference/tui/widgets/input/RadioGroup/value): The selected option's text, or "" when none is selected.
- [`RadioGroup::select`](/packages/tui/reference/tui/widgets/input/RadioGroup/select): Select option `i` and call `on_change`; false (and nothing happens) when `i` is out of range or already selected.
