---
slug: "collections/map/HashMap/clear"
title: "HashMap::clear"
description: "Removes every entry, keeping the bucket count."
module: "collections::map"
kind: "method"
name: "clear"
parent: "HashMap"
signature: "pub fn clear()"
import: "use collections::map::{HashMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/collections/map.hy#L155"
order: 5
---

Removes every entry, keeping the bucket count.

Called on a `HashMap` value as `value.clear(…)`.

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures self.len == 0
```

## Examples

```coil
use collections::map::{HashMap};
use tests::assert;
let m: HashMap<int, int> = HashMap::new();
m.insert(1, 10);
m.clear();
assert!(m.is_empty());
assert!(!m.contains(1));
```

## See also

- [`HashMap`](/docs/reference/collections/map/HashMap): A hash map from keys of type K to values of type V.
- [`HashMap::with_capacity`](/docs/reference/collections/map/HashMap/with_capacity): Creates an empty map with room for about cap buckets before it grows.
- [`HashMap::new`](/docs/reference/collections/map/HashMap/new): Creates an empty map.
- [`HashMap::size`](/docs/reference/collections/map/HashMap/size): Returns the number of entries.
- [`HashMap::is_empty`](/docs/reference/collections/map/HashMap/is_empty): Returns true when the map has no entries.
- [`HashMap::capacity`](/docs/reference/collections/map/HashMap/capacity): Returns the number of buckets.
- [`HashMap::keys`](/docs/reference/collections/map/HashMap/keys): Returns the keys, in insertion order.
- [`HashMap::values`](/docs/reference/collections/map/HashMap/values): Returns the values, in the insertion order of their keys.
