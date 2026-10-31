---
slug: "tui/tui/widgets/status/fn.spinner"
package: "tui"
title: "spinner"
description: "A Spinner with label; keep it to stop it and mount it to show it."
module: "tui::widgets::status"
kind: "fn"
name: "spinner"
signature: "fn spinner(string label) -> Spinner"
import: "use tui::widgets::status::{spinner};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/status.hy#L197"
order: 4
---

A [`Spinner`](/packages/tui/reference/tui/widgets/status/Spinner) with `label`; keep it to `stop` it and `mount` it to show it.

## Parameters

| Name | Type |
|------|------|
| `label` | `string` |

## Returns

`Spinner`

## See also

- [`tui::widgets::status::Spinner`](/packages/tui/reference/tui/widgets/status/Spinner)
- [`gauge`](/packages/tui/reference/tui/widgets/status/fn.gauge): A `Gauge` at `value` of `max`; keep it to `set` progress and `mount` it to show it.
- [`key_hints`](/packages/tui/reference/tui/widgets/status/key_hints): An empty hint line; add hints with `add`, then `mount` it.
