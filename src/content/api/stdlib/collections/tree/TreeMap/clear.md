---
slug: "stdlib/collections/tree/TreeMap/clear"
package: "stdlib"
title: "TreeMap::clear"
description: "Removes every entry."
module: "collections::tree"
kind: "method"
name: "clear"
parent: "TreeMap"
signature: "pub fn clear()"
import: "use collections::tree::{TreeMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/collections/tree.hy#L95"
order: 4
---

Removes every entry.

Called on a `TreeMap` value as `value.clear(…)`.

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures self.len == 0
```

## See also

- [`TreeMap`](/packages/stdlib/reference/collections/tree/TreeMap): An ordered map from keys of type `K` to values of type `V`.
- [`TreeMap::new`](/packages/stdlib/reference/collections/tree/TreeMap/new): Creates an empty map.
- [`TreeMap::empty`](/packages/stdlib/reference/collections/tree/TreeMap/empty): Creates an empty map; the same as `TreeMap::new`.
- [`TreeMap::len`](/packages/stdlib/reference/collections/tree/TreeMap/len): Returns the number of entries.
- [`TreeMap::is_empty`](/packages/stdlib/reference/collections/tree/TreeMap/is_empty): Returns `true` when the map has no entries.
- [`TreeMap::iter`](/packages/stdlib/reference/collections/tree/TreeMap/iter): Returns an iterator over the entries in ascending key order.
- [`TreeMap::insert`](/packages/stdlib/reference/collections/tree/TreeMap/insert): Stores `v` under `k`, replacing any value already there.
- [`TreeMap::contains`](/packages/stdlib/reference/collections/tree/TreeMap/contains): Returns `true` when the map has an entry for `k`.
