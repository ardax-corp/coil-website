---
slug: "stdlib/collections/map/HashMap/keys"
package: "stdlib"
title: "HashMap::keys"
description: "Returns the keys, in insertion order."
module: "collections::map"
kind: "method"
name: "keys"
parent: "HashMap"
signature: "pub fn keys() -> Vec<K>"
import: "use collections::map::{HashMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/5fb432feb5350a70b043a82a7d58c905c8d7414d/src/collections/map.coil#L181"
order: 6
---

Returns the keys, in insertion order.

Called on a `HashMap` value as `value.keys(…)`.

## Returns

`Vec<K>`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures result.len() == self.len()
```

## Examples

```coil
use collections::map::{HashMap};
use tests::assert;
let m: HashMap<string, int> = HashMap::new();
m.insert("x", 1);
m.insert("y", 2);
let ks = m.keys();
assert!(ks.len() == 2);
assert!(ks[0] == "x");
```

## See also

- [`HashMap`](/packages/stdlib/reference/collections/map/HashMap): A hash map from keys of type `K` to values of type `V`.
- [`HashMap::with_capacity`](/packages/stdlib/reference/collections/map/HashMap/with_capacity): Creates an empty map with room for `cap` entries before it grows.
- [`HashMap::new`](/packages/stdlib/reference/collections/map/HashMap/new): Creates an empty map.
- [`HashMap::len`](/packages/stdlib/reference/collections/map/HashMap/len): Returns the number of entries.
- [`HashMap::is_empty`](/packages/stdlib/reference/collections/map/HashMap/is_empty): Returns `true` when the map has no entries.
- [`HashMap::capacity`](/packages/stdlib/reference/collections/map/HashMap/capacity): Returns how many entries the map holds before it grows.
- [`HashMap::clear`](/packages/stdlib/reference/collections/map/HashMap/clear): Removes every entry, keeping the capacity.
- [`HashMap::values`](/packages/stdlib/reference/collections/map/HashMap/values): Returns the values, in the insertion order of their keys.
