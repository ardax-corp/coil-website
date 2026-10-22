---
slug: "collections/map/HashMap/get"
title: "HashMap::get"
description: "Returns the value stored under k, or fallback when there is none."
module: "collections::map"
kind: "method"
name: "get"
parent: "HashMap"
signature: "pub fn get(K k, V fallback) -> V"
import: "use collections::map::{HashMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/de7dc3b341ae9bbbcdd775a2dfa282870f0cbf82/src/collections/map.hy#L377"
order: 11
---

Returns the value stored under `k`, or `fallback` when there is none.

Called on a `HashMap` value as `value.get(…)`.

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
assert!(m.get("a", 0) == 1);
assert!(m.get("b", 0) == 0);
```

## See also

- [`HashMap`](/docs/reference/collections/map/HashMap): A hash map from keys of type K to values of type V.
- [`HashMap::with_capacity`](/docs/reference/collections/map/HashMap/with_capacity): Creates an empty map with room for about cap buckets before it grows.
- [`HashMap::new`](/docs/reference/collections/map/HashMap/new): Creates an empty map.
- [`HashMap::size`](/docs/reference/collections/map/HashMap/size): Returns the number of entries.
- [`HashMap::is_empty`](/docs/reference/collections/map/HashMap/is_empty): Returns true when the map has no entries.
- [`HashMap::capacity`](/docs/reference/collections/map/HashMap/capacity): Returns the number of buckets.
- [`HashMap::clear`](/docs/reference/collections/map/HashMap/clear): Removes every entry, keeping the bucket count.
- [`HashMap::keys`](/docs/reference/collections/map/HashMap/keys): Returns the keys, in insertion order.
