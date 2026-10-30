---
slug: "stdlib/collections/map/HashMap/contains"
package: "stdlib"
title: "HashMap::contains"
description: "Returns true when the map has an entry for k."
module: "collections::map"
kind: "method"
name: "contains"
parent: "HashMap"
signature: "pub fn contains(K k) -> bool"
import: "use collections::map::{HashMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/collections/map.hy#L361"
order: 10
---

Returns `true` when the map has an entry for `k`.

Called on a `HashMap` value as `value.contains(…)`.

## Parameters

| Name | Type |
|------|------|
| `k` | `K` |

## Returns

`bool`

## Examples

```coil
use collections::map::{HashMap};
use tests::assert;
let m: HashMap<int, bool> = HashMap::new();
m.insert(7, false);
assert!(m.contains(7));
assert!(!m.contains(8));
```

## See also

- [`HashMap`](/packages/stdlib/reference/collections/map/HashMap): A hash map from keys of type `K` to values of type `V`.
- [`HashMap::with_capacity`](/packages/stdlib/reference/collections/map/HashMap/with_capacity): Creates an empty map with room for about `cap` buckets before it grows.
- [`HashMap::new`](/packages/stdlib/reference/collections/map/HashMap/new): Creates an empty map.
- [`HashMap::len`](/packages/stdlib/reference/collections/map/HashMap/len): Returns the number of entries.
- [`HashMap::is_empty`](/packages/stdlib/reference/collections/map/HashMap/is_empty): Returns `true` when the map has no entries.
- [`HashMap::capacity`](/packages/stdlib/reference/collections/map/HashMap/capacity): Returns the number of buckets.
- [`HashMap::clear`](/packages/stdlib/reference/collections/map/HashMap/clear): Removes every entry, keeping the bucket count.
- [`HashMap::keys`](/packages/stdlib/reference/collections/map/HashMap/keys): Returns the keys, in insertion order.
