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
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/status.hy#L211"
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
