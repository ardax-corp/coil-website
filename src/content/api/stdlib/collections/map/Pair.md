---
slug: "stdlib/collections/map/Pair"
package: "stdlib"
title: "Pair"
description: "One key-value pair, as HashMap iteration yields it."
module: "collections::map"
kind: "class"
name: "Pair"
signature: "class Pair<K, V>"
import: "use collections::map::{Pair};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/72363df1f418f029700c2e574fbc0479390432f0/src/collections/map.coil#L6"
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
