---
slug: "stdlib/collections/map/HashMap/get_or"
package: "stdlib"
title: "HashMap::get_or"
description: "Returns the value stored under k, or fallback when there is none."
module: "collections::map"
kind: "method"
name: "get_or"
parent: "HashMap"
signature: "pub fn get_or(K k, V fallback) -> V"
import: "use collections::map::{HashMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/5fb432feb5350a70b043a82a7d58c905c8d7414d/src/collections/map.coil#L411"
order: 16
---

Returns the value stored under `k`, or `fallback` when there is none.

Called on a `HashMap` value as `value.get_or(…)`.

## Parameters

| Name | Type |
|------|------|
| `k` | `K` |
| `fallback` | `V` |

## Returns

`V`

## Examples

```coil
use collections::map::{HashMap};
use tests::assert;
let m: HashMap<string, int> = HashMap::new();
m.insert("a", 1);
assert!(m.get_or("a", 0) == 1);
assert!(m.get_or("b", 0) == 0);
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
