---
slug: "stdlib/collections/tree/TreeMap/remove"
package: "stdlib"
title: "TreeMap::remove"
description: "Removes the entry for k."
module: "collections::tree"
kind: "method"
name: "remove"
parent: "TreeMap"
signature: "pub fn remove(K k) -> bool"
import: "use collections::tree::{TreeMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/collections/tree.hy#L313"
order: 10
---

Removes the entry for `k`.

Returns `true` when there was one.

Called on a `TreeMap` value as `value.remove(…)`.

## Parameters

| Name | Type |
|------|------|
| `k` | `K` |

## Returns

`bool`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures !result || self.len == old(self.len) - 1
ensures result || self.len == old(self.len)
```

## Examples

```coil
use collections::tree::{TreeMap};
use tests::assert;
let m: TreeMap<int, int> = TreeMap::new();
m.insert(5, 50);
m.insert(3, 30);
assert!(m.remove(5));
assert!(!m.contains(5));
assert!(m.min_key(-1) == 3);
```

## See also

- [`TreeMap`](/packages/stdlib/reference/collections/tree/TreeMap): An ordered map from keys of type `K` to values of type `V`.
- [`TreeMap::new`](/packages/stdlib/reference/collections/tree/TreeMap/new): Creates an empty map.
- [`TreeMap::empty`](/packages/stdlib/reference/collections/tree/TreeMap/empty): Creates an empty map; the same as `TreeMap::new`.
- [`TreeMap::len`](/packages/stdlib/reference/collections/tree/TreeMap/len): Returns the number of entries.
- [`TreeMap::is_empty`](/packages/stdlib/reference/collections/tree/TreeMap/is_empty): Returns `true` when the map has no entries.
- [`TreeMap::clear`](/packages/stdlib/reference/collections/tree/TreeMap/clear): Removes every entry.
- [`TreeMap::iter`](/packages/stdlib/reference/collections/tree/TreeMap/iter): Returns an iterator over the entries in ascending key order.
- [`TreeMap::insert`](/packages/stdlib/reference/collections/tree/TreeMap/insert): Stores `v` under `k`, replacing any value already there.
