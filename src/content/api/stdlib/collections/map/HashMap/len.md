---
slug: "stdlib/collections/map/HashMap/len"
package: "stdlib"
title: "HashMap::len"
description: "Returns the number of entries."
module: "collections::map"
kind: "method"
name: "len"
parent: "HashMap"
signature: "pub fn len() -> int"
import: "use collections::map::{HashMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/5fb432feb5350a70b043a82a7d58c905c8d7414d/src/collections/map.coil#L133"
order: 2
---

Returns the number of entries.

Called on a `HashMap` value as `value.len(…)`.

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
assert!(m.len() == 1);
```

## See also

- [`HashMap`](/packages/stdlib/reference/collections/map/HashMap): A hash map from keys of type `K` to values of type `V`.
- [`HashMap::with_capacity`](/packages/stdlib/reference/collections/map/HashMap/with_capacity): Creates an empty map with room for `cap` entries before it grows.
- [`HashMap::new`](/packages/stdlib/reference/collections/map/HashMap/new): Creates an empty map.
- [`HashMap::is_empty`](/packages/stdlib/reference/collections/map/HashMap/is_empty): Returns `true` when the map has no entries.
- [`HashMap::capacity`](/packages/stdlib/reference/collections/map/HashMap/capacity): Returns how many entries the map holds before it grows.
- [`HashMap::clear`](/packages/stdlib/reference/collections/map/HashMap/clear): Removes every entry, keeping the capacity.
- [`HashMap::keys`](/packages/stdlib/reference/collections/map/HashMap/keys): Returns the keys, in insertion order.
- [`HashMap::values`](/packages/stdlib/reference/collections/map/HashMap/values): Returns the values, in the insertion order of their keys.
