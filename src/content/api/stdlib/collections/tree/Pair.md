---
slug: "stdlib/collections/tree/Pair"
package: "stdlib"
title: "Pair"
description: "One key-value pair, as TreeMap iteration yields it."
module: "collections::tree"
kind: "class"
name: "Pair"
signature: "class Pair<K, V>"
import: "use collections::tree::{Pair};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/72363df1f418f029700c2e574fbc0479390432f0/src/collections/tree.coil#L4"
order: 0
---

One key-value pair, as [`TreeMap`](/packages/stdlib/reference/collections/tree/TreeMap) iteration yields it.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `key` | `K` | The key. |
| `value` | `V` | The value stored under `key`. |

## See also

- [`collections::tree::TreeMap`](/packages/stdlib/reference/collections/tree/TreeMap)
- [`TreeMapIter`](/packages/stdlib/reference/collections/tree/TreeMapIter): An in-order iterator over a `TreeMap`, from `TreeMap::iter`.
