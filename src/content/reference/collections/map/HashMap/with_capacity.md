---
slug: "collections/map/HashMap/with_capacity"
title: "HashMap::with_capacity"
description: "Creates an empty map with room for about cap buckets before it grows."
module: "collections::map"
kind: "static method"
name: "with_capacity"
parent: "HashMap"
signature: "pub static fn with_capacity(int cap) -> HashMap<K, V>"
import: "use collections::map::{HashMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/collections/map.hy#L78"
order: 0
---

Creates an empty map with room for about `cap` buckets before it grows.

The bucket count is rounded up to a power of two, at least 8.

## Parameters

| Name | Type |
|------|------|
| `cap` | `int` |

## Returns

`HashMap<K, V>`

## Examples

```coil
use collections::map::{HashMap};
use tests::assert;
let m: HashMap<int, string> = HashMap::with_capacity(100);
assert!(m.is_empty());
assert!(m.capacity() >= 100);
```

## See also

- [`HashMap`](/docs/reference/collections/map/HashMap): A hash map from keys of type `K` to values of type `V`.
- [`HashMap::new`](/docs/reference/collections/map/HashMap/new): Creates an empty map.
- [`HashMap::size`](/docs/reference/collections/map/HashMap/size): Returns the number of entries.
- [`HashMap::is_empty`](/docs/reference/collections/map/HashMap/is_empty): Returns `true` when the map has no entries.
- [`HashMap::capacity`](/docs/reference/collections/map/HashMap/capacity): Returns the number of buckets.
- [`HashMap::clear`](/docs/reference/collections/map/HashMap/clear): Removes every entry, keeping the bucket count.
- [`HashMap::keys`](/docs/reference/collections/map/HashMap/keys): Returns the keys, in insertion order.
- [`HashMap::values`](/docs/reference/collections/map/HashMap/values): Returns the values, in the insertion order of their keys.
