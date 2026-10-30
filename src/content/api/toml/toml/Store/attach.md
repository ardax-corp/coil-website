---
slug: "toml/toml/Store/attach"
package: "toml"
title: "Store::attach"
description: "Method Store::attach."
module: "toml"
kind: "method"
name: "attach"
parent: "Store"
signature: "pub fn attach(int parent, int child)"
import: "use toml::{Store};"
origin: "package"
source: "https://github.com/ardax-corp/coil-toml/blob/9123082b0a6374c00503b61dd222a68283b706f1/src/toml.hy#L66"
order: 2
---

*No documentation yet.*

Called on a `Store` value as `value.attach(…)`.

## Parameters

| Name | Type |
|------|------|
| `parent` | `int` |
| `child` | `int` |

## See also

- [`Store`](/packages/toml/reference/toml/Store)
- [`Store::new`](/packages/toml/reference/toml/Store/new)
- [`Store::add`](/packages/toml/reference/toml/Store/add)
- [`Store::count_children`](/packages/toml/reference/toml/Store/count_children)
- [`Store::find_child`](/packages/toml/reference/toml/Store/find_child)
- [`Store::nth_child`](/packages/toml/reference/toml/Store/nth_child)
- [`Store::last_child`](/packages/toml/reference/toml/Store/last_child)
