---
slug: "collections/map/HashMap/insert"
title: "HashMap::insert"
description: "Stores v under k, replacing any value already there."
module: "collections::map"
kind: "method"
name: "insert"
parent: "HashMap"
signature: "pub fn insert(K k, V v) -> bool"
import: "use collections::map::{HashMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/collections/map.hy#L326"
order: 9
---

Stores `v` under `k`, replacing any value already there.

Returns `true` when `k` is new and `false` when an existing value was replaced.

Called on a `HashMap` value as `value.insert(…)`.

## Parameters

| Name | Type |
|------|------|
| `k` | `K` |
| `v` | `V` |

## Returns

`bool`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures !result || self.len == old(self.len) + 1
ensures result || self.len == old(self.len)
```

## Examples

```coil
use collections::map::{HashMap};
use tests::assert;
let m: HashMap<string, int> = HashMap::new();
assert!(m.insert("a", 1));
assert!(!m.insert("a", 2));
assert!(m.get("a", 0) == 2);
```

## See also

- [`HashMap`](/docs/reference/collections/map/HashMap): A hash map from keys of type `K` to values of type `V`.
- [`HashMap::with_capacity`](/docs/reference/collections/map/HashMap/with_capacity): Creates an empty map with room for about `cap` buckets before it grows.
- [`HashMap::new`](/docs/reference/collections/map/HashMap/new): Creates an empty map.
- [`HashMap::size`](/docs/reference/collections/map/HashMap/size): Returns the number of entries.
- [`HashMap::is_empty`](/docs/reference/collections/map/HashMap/is_empty): Returns `true` when the map has no entries.
- [`HashMap::capacity`](/docs/reference/collections/map/HashMap/capacity): Returns the number of buckets.
- [`HashMap::clear`](/docs/reference/collections/map/HashMap/clear): Removes every entry, keeping the bucket count.
- [`HashMap::keys`](/docs/reference/collections/map/HashMap/keys): Returns the keys, in insertion order.
