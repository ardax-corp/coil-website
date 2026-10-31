---
slug: "stdlib/collections/map/HashMap/iter"
package: "stdlib"
title: "HashMap::iter"
description: "Returns an iterator over the entries, in insertion order."
module: "collections::map"
kind: "method"
name: "iter"
parent: "HashMap"
signature: "pub fn iter() -> HashMapIter<K, V>"
import: "use collections::map::{HashMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/collections/map.hy#L245"
order: 8
---

Returns an iterator over the entries, in insertion order.

`for e in m` does the same; each item is an [`Entry`](/packages/stdlib/reference/collections/map/Entry) with `key` and `value`.

Called on a `HashMap` value as `value.iter(…)`.

## Returns

`HashMapIter<K, V>`

## Examples

```coil
use collections::map::{HashMap};
use tests::assert;
let m: HashMap<string, int> = HashMap::new();
m.insert("a", 1);
let it = m.iter();
let first = match it.next() {
    Option::Some(e) => e.key,
    Option::None => "",
};
assert!(first == "a");
```

## See also

- [`collections::map::Entry`](/packages/stdlib/reference/collections/map/Entry)
- [`HashMap`](/packages/stdlib/reference/collections/map/HashMap): A hash map from keys of type `K` to values of type `V`.
- [`HashMap::with_capacity`](/packages/stdlib/reference/collections/map/HashMap/with_capacity): Creates an empty map with room for about `cap` buckets before it grows.
- [`HashMap::new`](/packages/stdlib/reference/collections/map/HashMap/new): Creates an empty map.
- [`HashMap::len`](/packages/stdlib/reference/collections/map/HashMap/len): Returns the number of entries.
- [`HashMap::is_empty`](/packages/stdlib/reference/collections/map/HashMap/is_empty): Returns `true` when the map has no entries.
- [`HashMap::capacity`](/packages/stdlib/reference/collections/map/HashMap/capacity): Returns the number of buckets.
- [`HashMap::clear`](/packages/stdlib/reference/collections/map/HashMap/clear): Removes every entry, keeping the bucket count.
