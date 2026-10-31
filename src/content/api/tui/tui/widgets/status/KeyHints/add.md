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
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/status.hy#L211"
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
