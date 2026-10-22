---
slug: "collections/map/HashMap/capacity"
title: "HashMap::capacity"
description: "Returns the number of buckets."
module: "collections::map"
kind: "method"
name: "capacity"
parent: "HashMap"
signature: "pub fn capacity() -> int"
import: "use collections::map::{HashMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/collections/map.hy#L138"
order: 4
---

Returns the number of buckets.

The map doubles it when it is half full.

Called on a `HashMap` value as `value.capacity(…)`.

## Returns

`int`

## See also

- [`HashMap`](/docs/reference/collections/map/HashMap): A hash map from keys of type K to values of type V.
- [`HashMap::with_capacity`](/docs/reference/collections/map/HashMap/with_capacity): Creates an empty map with room for about cap buckets before it grows.
- [`HashMap::new`](/docs/reference/collections/map/HashMap/new): Creates an empty map.
- [`HashMap::size`](/docs/reference/collections/map/HashMap/size): Returns the number of entries.
- [`HashMap::is_empty`](/docs/reference/collections/map/HashMap/is_empty): Returns true when the map has no entries.
- [`HashMap::clear`](/docs/reference/collections/map/HashMap/clear): Removes every entry, keeping the bucket count.
- [`HashMap::keys`](/docs/reference/collections/map/HashMap/keys): Returns the keys, in insertion order.
- [`HashMap::values`](/docs/reference/collections/map/HashMap/values): Returns the values, in the insertion order of their keys.
