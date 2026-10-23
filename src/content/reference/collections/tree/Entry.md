---
slug: "collections/tree/Entry"
title: "Entry"
description: "One key-value pair, as TreeMap iteration yields it."
module: "collections::tree"
kind: "class"
name: "Entry"
signature: "class Entry<K, V>"
import: "use collections::tree::{Entry};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/59fa621e476425113f44db5753bef7abf7977a40/src/collections/tree.hy#L4"
order: 0
---

One key-value pair, as [`TreeMap`](/docs/reference/collections/tree/TreeMap) iteration yields it.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `key` | `K` | The key. |
| `value` | `V` | The value stored under `key`. |

## See also

- [`collections::tree::TreeMap`](/docs/reference/collections/tree/TreeMap)
- [`TreeMapIter`](/docs/reference/collections/tree/TreeMapIter): An in-order iterator over a `TreeMap`, from `TreeMap::iter`.
