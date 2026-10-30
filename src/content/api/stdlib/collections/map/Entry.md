---
slug: "stdlib/collections/map/Entry"
package: "stdlib"
title: "Entry"
description: "One key-value pair, as HashMap iteration yields it."
module: "collections::map"
kind: "class"
name: "Entry"
signature: "class Entry<K, V>"
import: "use collections::map::{Entry};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/collections/map.hy#L4"
order: 0
---

One key-value pair, as [`HashMap`](/packages/stdlib/reference/collections/map/HashMap) iteration yields it.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `key` | `K` | The key. |
| `value` | `V` | The value stored under `key`. |

## See also

- [`collections::map::HashMap`](/packages/stdlib/reference/collections/map/HashMap)
- [`HashMapIter`](/packages/stdlib/reference/collections/map/HashMapIter): An iterator over the entries of a `HashMap`, from `HashMap::iter`.
