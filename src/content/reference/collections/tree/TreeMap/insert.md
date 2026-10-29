---
slug: "collections/tree/TreeMap/insert"
title: "TreeMap::insert"
description: "Stores v under k, replacing any value already there."
module: "collections::tree"
kind: "method"
name: "insert"
parent: "TreeMap"
signature: "pub fn insert(K k, V v) -> bool"
import: "use collections::tree::{TreeMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/47c059804a7a85f79bd400eb26bb1241e7b44441/src/collections/tree.hy#L131"
order: 6
---

Stores `v` under `k`, replacing any value already there.

Returns `true` when `k` is new and `false` when an existing value was replaced.

Called on a `TreeMap` value as `value.insert(…)`.

## Parameters

| Name | Type |
|------|------|
| `k` | `K` |
| `v` | `V` |

## Returns

`bool`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures !result || self.len == old(self.len) + 1
ensures result || self.len == old(self.len)
```

## Examples

```coil
use collections::tree::{TreeMap};
use tests::assert;
let m: TreeMap<string, int> = TreeMap::new();
assert!(m.insert("a", 1));
assert!(!m.insert("a", 2));
assert!(m.get_or("a", 0) == 2);
assert!(m.len() == 1);
```

## See also

- [`TreeMap`](/docs/reference/collections/tree/TreeMap): An ordered map from keys of type `K` to values of type `V`.
- [`TreeMap::new`](/docs/reference/collections/tree/TreeMap/new): Creates an empty map.
- [`TreeMap::empty`](/docs/reference/collections/tree/TreeMap/empty): Creates an empty map; the same as `TreeMap::new`.
- [`TreeMap::len`](/docs/reference/collections/tree/TreeMap/len): Returns the number of entries.
- [`TreeMap::is_empty`](/docs/reference/collections/tree/TreeMap/is_empty): Returns `true` when the map has no entries.
- [`TreeMap::clear`](/docs/reference/collections/tree/TreeMap/clear): Removes every entry.
- [`TreeMap::iter`](/docs/reference/collections/tree/TreeMap/iter): Returns an iterator over the entries in ascending key order.
- [`TreeMap::contains`](/docs/reference/collections/tree/TreeMap/contains): Returns `true` when the map has an entry for `k`.
