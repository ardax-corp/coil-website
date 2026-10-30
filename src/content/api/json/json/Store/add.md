---
slug: "json/json/Store/add"
package: "json"
title: "Store::add"
description: "Method Store::add."
module: "json"
kind: "method"
name: "add"
parent: "Store"
signature: "pub fn add(int tag, bool flag, int n, float x, string s, string key) -> int"
import: "use json::{Store};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/6ccd5778fa8274febae9671020f18968540571de/src/json.hy#L40"
order: 2
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

- [`Store`](/packages/json/reference/json/Store)
- [`Store::with_capacity`](/packages/json/reference/json/Store/with_capacity)
- [`Store::new`](/packages/json/reference/json/Store/new)
- [`Store::attach`](/packages/json/reference/json/Store/attach)
- [`Store::count_children`](/packages/json/reference/json/Store/count_children)
