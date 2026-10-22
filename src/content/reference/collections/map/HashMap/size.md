---
slug: "collections/map/HashMap/size"
title: "HashMap::size"
description: "Returns the number of entries."
module: "collections::map"
kind: "method"
name: "size"
parent: "HashMap"
signature: "pub fn size() -> int"
import: "use collections::map::{HashMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/de7dc3b341ae9bbbcdd775a2dfa282870f0cbf82/src/collections/map.hy#L126"
order: 2
---

Returns the number of entries.

Called on a `HashMap` value as `value.size(…)`.

## Returns

`int`

## Examples

```coil
use collections::map::{HashMap};
use tests::assert;
let m: HashMap<string, int> = HashMap::new();
m.insert("a", 1);
m.insert("b", 2);
m.remove("a");
assert!(m.size() == 1);
```

## See also

- [`HashMap`](/docs/reference/collections/map/HashMap): A hash map from keys of type K to values of type V.
- [`HashMap::with_capacity`](/docs/reference/collections/map/HashMap/with_capacity): Creates an empty map with room for about cap buckets before it grows.
- [`HashMap::new`](/docs/reference/collections/map/HashMap/new): Creates an empty map.
- [`HashMap::is_empty`](/docs/reference/collections/map/HashMap/is_empty): Returns true when the map has no entries.
- [`HashMap::capacity`](/docs/reference/collections/map/HashMap/capacity): Returns the number of buckets.
- [`HashMap::clear`](/docs/reference/collections/map/HashMap/clear): Removes every entry, keeping the bucket count.
- [`HashMap::keys`](/docs/reference/collections/map/HashMap/keys): Returns the keys, in insertion order.
- [`HashMap::values`](/docs/reference/collections/map/HashMap/values): Returns the values, in the insertion order of their keys.
