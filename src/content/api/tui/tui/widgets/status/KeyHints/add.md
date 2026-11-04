---
slug: "tui/tui/widgets/status/KeyHints/add"
package: "tui"
title: "KeyHints::add"
description: "Append a hint (builder style)."
module: "tui::widgets::status"
kind: "method"
name: "add"
parent: "KeyHints"
signature: "pub fn add(string key, string description) -> KeyHints"
import: "use tui::widgets::status::{KeyHints};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/611cfd9b4c061de7df4a8352a34580911bde46b9/src/tui/widgets/status.coil#L211"
order: 0
---

Append a hint (builder style).

Called on a `KeyHints` value as `value.add(…)`.

## Parameters

| Name | Type |
|------|------|
| `key` | `string` |
| `description` | `string` |

## Returns

`KeyHints`

## See also

- [`KeyHints`](/packages/tui/reference/tui/widgets/status/KeyHints): A line of key hints: `^S save q quit`.
