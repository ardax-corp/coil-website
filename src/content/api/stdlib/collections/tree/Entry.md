---
slug: "stdlib/collections/tree/Entry"
package: "stdlib"
title: "Entry"
description: "One key-value pair, as TreeMap iteration yields it."
module: "collections::tree"
kind: "class"
name: "Entry"
signature: "class Entry<K, V>"
import: "use collections::tree::{Entry};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/collections/tree.hy#L4"
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
