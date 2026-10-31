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
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/status.coil#L197"
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
