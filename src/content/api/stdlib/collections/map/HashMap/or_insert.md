---
slug: "stdlib/collections/map/HashMap/or_insert"
package: "stdlib"
title: "HashMap::or_insert"
description: "Returns the value stored under k, storing v there first when k has no entry, with one lookup."
module: "collections::map"
kind: "method"
name: "or_insert"
parent: "HashMap"
signature: "pub fn or_insert(K k, V v) -> V"
import: "use collections::map::{HashMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/5fb432feb5350a70b043a82a7d58c905c8d7414d/src/collections/map.coil#L282"
order: 10
---

Returns the value stored under `k`, storing `v` there first when `k` has no entry, with one lookup.

Called on a `HashMap` value as `value.or_insert(…)`.

## Parameters

| Name | Type |
|------|------|
| `k` | `K` |
| `v` | `V` |

## Returns

`V`

## Examples

```coil
use collections::map::{HashMap};
use tests::assert;
let m: HashMap<string, int> = HashMap::new();
assert!(m.or_insert("a", 1) == 1);
assert!(m.or_insert("a", 2) == 1);
assert!(m.len() == 1);
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
