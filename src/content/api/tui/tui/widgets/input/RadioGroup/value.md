---
slug: "tui/tui/widgets/input/RadioGroup/value"
package: "tui"
title: "RadioGroup::value"
description: "The selected option's text, or \"\" when none is selected."
module: "tui::widgets::input"
kind: "method"
name: "value"
parent: "RadioGroup"
signature: "pub fn value() -> string"
import: "use tui::widgets::input::{RadioGroup};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/input.hy#L217"
order: 2
---

The selected option's text, or "" when none is selected.

Called on a `RadioGroup` value as `value.value(…)`.

## Returns

`string`

## See also

- [`RadioGroup`](/packages/tui/reference/tui/widgets/input/RadioGroup): One choice out of several, listed top to bottom.
- [`RadioGroup::new`](/packages/tui/reference/tui/widgets/input/RadioGroup/new): A group of `options` with `selected` chosen and no callback.
- [`RadioGroup::on_change`](/packages/tui/reference/tui/widgets/input/RadioGroup/on_change): Call `f` with the new index on each change (builder style).
- [`RadioGroup::select`](/packages/tui/reference/tui/widgets/input/RadioGroup/select): Select option `i` and call `on_change`; false (and nothing happens) when `i` is out of range or already selected.
