---
slug: "stdlib/collections/map/HashMap/entry"
package: "stdlib"
title: "HashMap::entry"
description: "The place of k in the map, looked up once: or_insert, and_update and the other Entry methods work on it."
module: "collections::map"
kind: "method"
name: "entry"
parent: "HashMap"
signature: "pub fn entry(K k) -> Entry<K, V>"
import: "use collections::map::{HashMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/5fb432feb5350a70b043a82a7d58c905c8d7414d/src/collections/map.coil#L379"
order: 14
---

The place of `k` in the map, looked up once: [`or_insert`](/packages/stdlib/reference/collections/map/HashMap/or_insert), [`and_update`](/packages/stdlib/reference/collections/map/HashMap/and_update) and the other `Entry` methods work on it.

Called on a `HashMap` value as `value.entry(…)`.

## Parameters

| Name | Type |
|------|------|
| `k` | `K` |

## Returns

`Entry<K, V>`

## Examples

```coil
use collections::map::{HashMap};
use tests::assert;
let m: HashMap<string, int> = HashMap::new();
assert!(m.entry("a").or_insert(1) == 1);
assert!(m.entry("a").or_insert(2) == 1);
assert!(m.entry("a").exists() && !m.entry("b").exists());
```

## See also

- [`HashMap::or_insert`](/packages/stdlib/reference/collections/map/HashMap/or_insert)
- [`HashMap::and_update`](/packages/stdlib/reference/collections/map/HashMap/and_update)
- [`HashMap`](/packages/stdlib/reference/collections/map/HashMap): A hash map from keys of type `K` to values of type `V`.
- [`HashMap::with_capacity`](/packages/stdlib/reference/collections/map/HashMap/with_capacity): Creates an empty map with room for `cap` entries before it grows.
- [`HashMap::new`](/packages/stdlib/reference/collections/map/HashMap/new): Creates an empty map.
- [`HashMap::len`](/packages/stdlib/reference/collections/map/HashMap/len): Returns the number of entries.
- [`HashMap::is_empty`](/packages/stdlib/reference/collections/map/HashMap/is_empty): Returns `true` when the map has no entries.
- [`HashMap::capacity`](/packages/stdlib/reference/collections/map/HashMap/capacity): Returns how many entries the map holds before it grows.
