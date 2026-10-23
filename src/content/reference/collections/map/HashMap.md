---
slug: "collections/map/HashMap"
title: "HashMap"
description: "A hash map from keys of type K to values of type V."
module: "collections::map"
kind: "class"
name: "HashMap"
signature: "class HashMap<K, V>"
import: "use collections::map::{HashMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/6386d3482335236362f6c39ca75d10e20186dfa8/src/collections/map.hy#L40"
order: 1
---

A hash map from keys of type `K` to values of type `V`.

Keys need [`Eq`](/docs/reference/prelude/ops/Eq) and `Hash` (the primitive types have both; `#[derive(Eq, Hash)]`
adds them to your own types). Inserting an existing key replaces its value.
Iteration (`for e in m`, `m.keys()`, `m.values()`) visits entries in
insertion order, skipping removed ones.

[`get`](/docs/reference/collections/map/HashMap/get) takes a fallback instead of returning an [`Option`](/docs/reference/prelude/Option); use [`contains`](/docs/reference/collections/map/HashMap/contains) first
when the fallback could be a real value.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `keys` | `Vec<K>` | Key slots, including removed ones (see `live`). Prefer [`keys()`](/docs/reference/collections/map/HashMap/keys). |
| `vals` | `Vec<V>` | Value slots parallel to [`keys`](/docs/reference/collections/map/HashMap/keys). Prefer [`values()`](/docs/reference/collections/map/HashMap/values). |
| `live` | `Vec<int>` | `1` where the slot holds an entry, `0` where it was removed. |

## Associated functions

| Name | Description |
|------|-------------|
| [`with_capacity`](/docs/reference/collections/map/HashMap/with_capacity) | Creates an empty map with room for about `cap` buckets before it grows. |
| [`new`](/docs/reference/collections/map/HashMap/new) | Creates an empty map. |

## Methods

| Name | Description |
|------|-------------|
| [`size`](/docs/reference/collections/map/HashMap/size) | Returns the number of entries. |
| [`is_empty`](/docs/reference/collections/map/HashMap/is_empty) | Returns `true` when the map has no entries. |
| [`capacity`](/docs/reference/collections/map/HashMap/capacity) | Returns the number of buckets. |
| [`clear`](/docs/reference/collections/map/HashMap/clear) | Removes every entry, keeping the bucket count. |
| [`keys`](/docs/reference/collections/map/HashMap/keys) | Returns the keys, in insertion order. |
| [`values`](/docs/reference/collections/map/HashMap/values) | Returns the values, in the insertion order of their keys. |
| [`iter`](/docs/reference/collections/map/HashMap/iter) | Returns an iterator over the entries, in insertion order. |
| [`insert`](/docs/reference/collections/map/HashMap/insert) | Stores `v` under `k`, replacing any value already there. |
| [`contains`](/docs/reference/collections/map/HashMap/contains) | Returns `true` when the map has an entry for `k`. |
| [`get_or`](/docs/reference/collections/map/HashMap/get_or) | Returns the value stored under `k`, or `fallback` when there is none. |
| [`get`](/docs/reference/collections/map/HashMap/get) | Returns the value stored under `k`, or `None` when there is none. |
| [`remove`](/docs/reference/collections/map/HashMap/remove) | Removes the entry for `k`. |

## Trait implementations

- [`IntoIterator`](/docs/reference/prelude/IntoIterator) for `HashMap<K, V>`

## Invariants

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
invariant self.len >= 0 && self.len <= self.keys.len()
invariant self.cap >= 8 && self.heads.len() == self.cap
invariant self.vals.len() == self.keys.len() && self.next.len() == self.keys.len()
invariant self.live.len() == self.keys.len()
```

## Examples

```coil
use collections::map::{HashMap};
use tests::assert;
let ages: HashMap<string, int> = HashMap::new();
ages.insert("ada", 36);
ages.insert("alan", 41);
ages.insert("ada", 37);
assert!(ages.size() == 2);
assert!(ages.get_or("ada", 0) == 37);
assert!(ages.get_or("grace", -1) == -1);

let total = 0;
for e in ages {
    total = total + e.value;
}
assert!(total == 78);
```

## See also

- [`Eq`](/docs/reference/prelude/ops/Eq)
- [`HashMap::get`](/docs/reference/collections/map/HashMap/get)
- [`Option`](/docs/reference/prelude/Option)
- [`HashMap::contains`](/docs/reference/collections/map/HashMap/contains)
- [`HashMap::keys`](/docs/reference/collections/map/HashMap/keys)
- [`HashMap::values`](/docs/reference/collections/map/HashMap/values)
- [`Entry`](/docs/reference/collections/map/Entry): One key-value pair, as `HashMap` iteration yields it.
- [`HashMapIter`](/docs/reference/collections/map/HashMapIter): An iterator over the entries of a `HashMap`, from `HashMap::iter`.
