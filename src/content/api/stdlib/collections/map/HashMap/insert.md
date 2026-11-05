---
slug: "stdlib/collections/map/HashMap/insert"
package: "stdlib"
title: "HashMap::insert"
description: "Stores v under k, replacing any value already there."
module: "collections::map"
kind: "method"
name: "insert"
parent: "HashMap"
signature: "pub fn insert(K k, V v) -> bool"
import: "use collections::map::{HashMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/5fb432feb5350a70b043a82a7d58c905c8d7414d/src/collections/map.coil#L257"
order: 9
---

Stores `v` under `k`, replacing any value already there.

Returns `true` when `k` is new and `false` when an existing value was replaced.

Called on a `HashMap` value as `value.insert(…)`.

## Parameters

| Name | Type |
|------|------|
| `k` | `K` |
| `v` | `V` |

## Returns

`bool`

## Examples

```coil
use collections::map::{HashMap};
use tests::assert;
let m: HashMap<string, int> = HashMap::new();
assert!(m.insert("a", 1));
assert!(!m.insert("a", 2));
assert!(m.get_or("a", 0) == 2);
```

## See also

- [`HashMap`](/packages/stdlib/reference/collections/map/HashMap): A hash map from keys of type `K` to values of type `V`.
- [`HashMap::with_capacity`](/packages/stdlib/reference/collections/map/HashMap/with_capacity): Creates an empty map with room for `cap` entries before it grows.
- [`HashMap::new`](/packages/stdlib/reference/collections/map/HashMap/new): Creates an empty map.
- [`HashMap::len`](/packages/stdlib/reference/collections/map/HashMap/len): Returns the number of entries.
- [`HashMap::is_empty`](/packages/stdlib/reference/collections/map/HashMap/is_empty): Returns `true` when the map has no entries.
- [`HashMap::capacity`](/packages/stdlib/reference/collections/map/HashMap/capacity): Returns how many entries the map holds before it grows.
- [`HashMap::clear`](/packages/stdlib/reference/collections/map/HashMap/clear): Removes every entry, keeping the capacity.
- [`HashMap::keys`](/packages/stdlib/reference/collections/map/HashMap/keys): Returns the keys, in insertion order.
