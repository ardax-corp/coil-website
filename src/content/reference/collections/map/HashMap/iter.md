---
slug: "collections/map/HashMap/iter"
title: "HashMap::iter"
description: "Returns an iterator over the entries, in insertion order."
module: "collections::map"
kind: "method"
name: "iter"
parent: "HashMap"
signature: "pub fn iter() -> HashMapIter<K, V>"
import: "use collections::map::{HashMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/collections/map.hy#L245"
order: 8
---

Returns an iterator over the entries, in insertion order.

`for e in m` does the same; each item is an [`Entry`](/docs/reference/collections/map/Entry) with `key` and `value`.

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

- [`collections::map::Entry`](/docs/reference/collections/map/Entry)
- [`HashMap`](/docs/reference/collections/map/HashMap): A hash map from keys of type K to values of type V.
- [`HashMap::with_capacity`](/docs/reference/collections/map/HashMap/with_capacity): Creates an empty map with room for about cap buckets before it grows.
- [`HashMap::new`](/docs/reference/collections/map/HashMap/new): Creates an empty map.
- [`HashMap::size`](/docs/reference/collections/map/HashMap/size): Returns the number of entries.
- [`HashMap::is_empty`](/docs/reference/collections/map/HashMap/is_empty): Returns true when the map has no entries.
- [`HashMap::capacity`](/docs/reference/collections/map/HashMap/capacity): Returns the number of buckets.
- [`HashMap::clear`](/docs/reference/collections/map/HashMap/clear): Removes every entry, keeping the bucket count.
