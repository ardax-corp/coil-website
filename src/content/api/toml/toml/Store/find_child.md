---
slug: "toml/toml/Store/find_child"
package: "toml"
title: "Store::find_child"
description: "Method Store::find_child."
module: "toml"
kind: "method"
name: "find_child"
parent: "Store"
signature: "pub fn find_child(int parent, string key) -> int"
import: "use toml::{Store};"
origin: "package"
source: "https://github.com/ardax-corp/coil-toml/blob/9123082b0a6374c00503b61dd222a68283b706f1/src/toml.hy#L86"
order: 4
---

*No documentation yet.*

Called on a `Store` value as `value.find_child(…)`.

## Parameters

| Name | Type |
|------|------|
| `parent` | `int` |
| `key` | `string` |

## Returns

`int`

## See also

- [`Store`](/packages/toml/reference/toml/Store)
- [`Store::new`](/packages/toml/reference/toml/Store/new)
- [`Store::add`](/packages/toml/reference/toml/Store/add)
- [`Store::attach`](/packages/toml/reference/toml/Store/attach)
- [`Store::count_children`](/packages/toml/reference/toml/Store/count_children)
- [`Store::nth_child`](/packages/toml/reference/toml/Store/nth_child)
- [`Store::last_child`](/packages/toml/reference/toml/Store/last_child)
