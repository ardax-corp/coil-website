---
slug: "stdlib/collections/map/HashMap/or_insert_with"
package: "stdlib"
title: "HashMap::or_insert_with"
description: "Returns the value stored under k, storing make() there first when k has no entry. make runs only for a new key."
module: "collections::map"
kind: "method"
name: "or_insert_with"
parent: "HashMap"
signature: "pub fn or_insert_with(K k, () -> V make) -> V"
import: "use collections::map::{HashMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/72363df1f418f029700c2e574fbc0479390432f0/src/collections/map.coil#L306"
order: 11
---

Returns the value stored under `k`, storing `make()` there first when `k` has no entry. `make` runs only for a new key.

Called on a `HashMap` value as `value.or_insert_with(…)`.

## Parameters

| Name | Type |
|------|------|
| `k` | `K` |
| `make` | `() -> V` |

## Returns

`V`

## Examples

```coil
use collections::map::{HashMap};
use tests::assert;
let m: HashMap<int, Vec<int>> = HashMap::new();
let v = m.or_insert_with(1, fn () => Vec::new());
assert!(v.len() == 0);
assert!(m.contains(1));
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
