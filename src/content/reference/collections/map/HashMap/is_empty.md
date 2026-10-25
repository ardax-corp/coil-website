---
slug: "collections/map/HashMap/is_empty"
title: "HashMap::is_empty"
description: "Returns true when the map has no entries."
module: "collections::map"
kind: "method"
name: "is_empty"
parent: "HashMap"
signature: "pub fn is_empty() -> bool"
import: "use collections::map::{HashMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/534e3d9afcabefedc5f1aaeedc5f294cae0a64d6/src/collections/map.hy#L131"
order: 3
---

Returns `true` when the map has no entries.

Called on a `HashMap` value as `value.is_empty(…)`.

## Returns

`bool`

## See also

- [`HashMap`](/docs/reference/collections/map/HashMap): A hash map from keys of type `K` to values of type `V`.
- [`HashMap::with_capacity`](/docs/reference/collections/map/HashMap/with_capacity): Creates an empty map with room for about `cap` buckets before it grows.
- [`HashMap::new`](/docs/reference/collections/map/HashMap/new): Creates an empty map.
- [`HashMap::len`](/docs/reference/collections/map/HashMap/len): Returns the number of entries.
- [`HashMap::capacity`](/docs/reference/collections/map/HashMap/capacity): Returns the number of buckets.
- [`HashMap::clear`](/docs/reference/collections/map/HashMap/clear): Removes every entry, keeping the bucket count.
- [`HashMap::keys`](/docs/reference/collections/map/HashMap/keys): Returns the keys, in insertion order.
- [`HashMap::values`](/docs/reference/collections/map/HashMap/values): Returns the values, in the insertion order of their keys.
