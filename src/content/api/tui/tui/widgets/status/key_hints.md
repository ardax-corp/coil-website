---
slug: "tui/tui/widgets/status/key_hints"
package: "tui"
title: "key_hints"
description: "An empty hint line; add hints with add, then mount it."
module: "tui::widgets::status"
kind: "fn"
name: "key_hints"
signature: "fn key_hints() -> KeyHints"
import: "use tui::widgets::status::{key_hints};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/status.hy#L259"
order: 5
---

An empty hint line; add hints with `add`, then `mount` it.

## Returns

`KeyHints`

## Examples

```coil
use tui::node::mount;
use tui::testing::harness;
use tui::widgets::status::key_hints;
use tests::assert;
let h = harness(mount(key_hints().add("q", "quit").add("?", "help")), 16, 1);
assert!(h.row(0) == "q quit  ? help  ");
```

## See also

- [`gauge`](/packages/tui/reference/tui/widgets/status/fn.gauge): A `Gauge` at `value` of `max`; keep it to `set` progress and `mount` it to show it.
- [`spinner`](/packages/tui/reference/tui/widgets/status/fn.spinner): A `Spinner` with `label`; keep it to `stop` it and `mount` it to show it.
