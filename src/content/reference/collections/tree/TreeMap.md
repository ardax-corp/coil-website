---
slug: "collections/tree/TreeMap"
title: "TreeMap"
description: "An ordered map from keys of type K to values of type V."
module: "collections::tree"
kind: "class"
name: "TreeMap"
signature: "class TreeMap<K, V>"
import: "use collections::tree::{TreeMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/861c7aeb486ced606d1bcfb819f42cb6f6934441/src/collections/tree.hy#L34"
order: 1
---

An ordered map from keys of type `K` to values of type `V`.

Keys need [`Ord`](/docs/reference/prelude/ops/Ord) and [`Eq`](/docs/reference/prelude/ops/Eq). Iteration visits entries in ascending key order,
and [`min_key`](/docs/reference/collections/tree/TreeMap/min_key) / [`max_key`](/docs/reference/collections/tree/TreeMap/max_key) give the ends. The tree is not rebalanced: inserting
keys that are already sorted makes lookups linear, so prefer `HashMap` when you
do not need the order.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `keys` | `Vec<K>` | Node keys, including removed nodes. Prefer iteration. |
| `vals` | `Vec<V>` | Node values parallel to `keys`. |
| `left` | `Vec<int>` | Index of each node's left child, or `-1`. |
| `right` | `Vec<int>` | Index of each node's right child, or `-1`. |
| `root` | `int` | Index of the root node, or `-1` when the map is empty. |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/docs/reference/collections/tree/TreeMap/new) | Creates an empty map. |
| [`empty`](/docs/reference/collections/tree/TreeMap/empty) | Creates an empty map; the same as [`TreeMap::new`](/docs/reference/collections/tree/TreeMap/new). |

## Methods

| Name | Description |
|------|-------------|
| [`len`](/docs/reference/collections/tree/TreeMap/len) | Returns the number of entries. |
| [`is_empty`](/docs/reference/collections/tree/TreeMap/is_empty) | Returns `true` when the map has no entries. |
| [`clear`](/docs/reference/collections/tree/TreeMap/clear) | Removes every entry. |
| [`iter`](/docs/reference/collections/tree/TreeMap/iter) | Returns an iterator over the entries in ascending key order. |
| [`insert`](/docs/reference/collections/tree/TreeMap/insert) | Stores `v` under `k`, replacing any value already there. |
| [`contains`](/docs/reference/collections/tree/TreeMap/contains) | Returns `true` when the map has an entry for `k`. |
| [`get_or`](/docs/reference/collections/tree/TreeMap/get_or) | Returns the value stored under `k`, or `fallback` when there is none. |
| [`get`](/docs/reference/collections/tree/TreeMap/get) | Returns the value stored under `k`, or `None` when there is none. |
| [`remove`](/docs/reference/collections/tree/TreeMap/remove) | Removes the entry for `k`. |
| [`min_key`](/docs/reference/collections/tree/TreeMap/min_key) | Returns the smallest key, or `fallback` when the map is empty. |
| [`max_key`](/docs/reference/collections/tree/TreeMap/max_key) | Returns the largest key, or `fallback` when the map is empty. |

## Trait implementations

- [`IntoIterator`](/docs/reference/prelude/IntoIterator) for `TreeMap<K, V>`

## Invariants

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
invariant self.len >= 0 && self.len <= self.keys.len()
invariant self.vals.len() == self.keys.len()
invariant self.left.len() == self.keys.len() && self.right.len() == self.keys.len()
invariant (self.root < 0) == (self.len == 0)
```

## Examples

```coil
use collections::tree::{TreeMap};
use tests::assert;
let m: TreeMap<int, string> = TreeMap::new();
m.insert(30, "c");
m.insert(10, "a");
m.insert(20, "b");
let order = "";
for e in m {
    order = order + e.value;
}
assert!(order == "abc");
assert!(m.min_key(0) == 10);
```

## See also

- [`Ord`](/docs/reference/prelude/ops/Ord)
- [`Eq`](/docs/reference/prelude/ops/Eq)
- [`TreeMap::min_key`](/docs/reference/collections/tree/TreeMap/min_key)
- [`TreeMap::max_key`](/docs/reference/collections/tree/TreeMap/max_key)
- [`Entry`](/docs/reference/collections/tree/Entry): One key-value pair, as `TreeMap` iteration yields it.
- [`TreeMapIter`](/docs/reference/collections/tree/TreeMapIter): An in-order iterator over a `TreeMap`, from `TreeMap::iter`.
