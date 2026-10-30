---
slug: "toml/toml/Store/add"
package: "toml"
title: "Store::add"
description: "Method Store::add."
module: "toml"
kind: "method"
name: "add"
parent: "Store"
signature: "pub fn add(int tag, bool flag, int n, float x, string s, string key) -> int"
import: "use toml::{Store};"
origin: "package"
source: "https://github.com/ardax-corp/coil-toml/blob/9123082b0a6374c00503b61dd222a68283b706f1/src/toml.hy#L52"
order: 1
---

*No documentation yet.*

Called on a `Store` value as `value.add(…)`.

## Parameters

| Name | Type |
|------|------|
| `tag` | `int` |
| `flag` | `bool` |
| `n` | `int` |
| `x` | `float` |
| `s` | `string` |
| `key` | `string` |

## Returns

`int`

## See also

- [`Store`](/packages/toml/reference/toml/Store)
- [`Store::new`](/packages/toml/reference/toml/Store/new)
- [`Store::attach`](/packages/toml/reference/toml/Store/attach)
- [`Store::count_children`](/packages/toml/reference/toml/Store/count_children)
- [`Store::find_child`](/packages/toml/reference/toml/Store/find_child)
- [`Store::nth_child`](/packages/toml/reference/toml/Store/nth_child)
- [`Store::last_child`](/packages/toml/reference/toml/Store/last_child)
