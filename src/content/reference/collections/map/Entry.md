---
slug: "collections/map/Entry"
title: "Entry"
description: "One key-value pair, as HashMap iteration yields it."
module: "collections::map"
kind: "class"
name: "Entry"
signature: "class Entry<K, V>"
import: "use collections::map::{Entry};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/59fa621e476425113f44db5753bef7abf7977a40/src/collections/map.hy#L4"
order: 0
---

One key-value pair, as [`HashMap`](/docs/reference/collections/map/HashMap) iteration yields it.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `key` | `K` | The key. |
| `value` | `V` | The value stored under `key`. |

## See also

- [`collections::map::HashMap`](/docs/reference/collections/map/HashMap)
- [`HashMapIter`](/docs/reference/collections/map/HashMapIter): An iterator over the entries of a `HashMap`, from `HashMap::iter`.
