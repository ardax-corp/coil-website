---
slug: "stdlib/collections/map/HashMap"
package: "stdlib"
title: "HashMap"
description: "A hash map from keys of type K to values of type V."
module: "collections::map"
kind: "class"
name: "HashMap"
signature: "class HashMap<K, V>"
import: "use collections::map::{HashMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/72363df1f418f029700c2e574fbc0479390432f0/src/collections/map.coil#L48"
order: 1
---

A hash map from keys of type `K` to values of type `V`.

Keys need [`Eq`](/docs/reference/prelude/ops/Eq) and `Hash` (the primitive types have both; `#[derive(Eq, Hash)]`
adds them to your own types). Inserting an existing key replaces its value.
Iteration (`for e in m`, `m.keys()`, `m.values()`) visits entries in
insertion order, skipping removed ones.

[`get`](/packages/stdlib/reference/collections/map/HashMap/get) takes a fallback instead of returning an [`Option`](/docs/reference/prelude/Option); use [`contains`](/packages/stdlib/reference/collections/map/HashMap/contains) first
when the fallback could be a real value.

To read or change one key's value with one lookup, use `entry(k)`, a view
whose [`or_insert`](/packages/stdlib/reference/collections/map/HashMap/or_insert) and [`and_modify`](/packages/stdlib/reference/collections/map/HashMap/and_modify) write the map
(`m.entry(w).and_modify(fn (int n) => n + 1).or_insert(1)`), or the
one-call forms [`or_insert`](/packages/stdlib/reference/collections/map/HashMap/or_insert), [`or_insert_with`](/packages/stdlib/reference/collections/map/HashMap/or_insert_with), [`and_update`](/packages/stdlib/reference/collections/map/HashMap/and_update) and
[`and_modify`](/packages/stdlib/reference/collections/map/HashMap/and_modify).

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `idx` | `KeyIndex<K>` | Keys to slots, in insertion order. Prefer the map's methods. |
| `vals` | `Vec<V>` | Each slot's value, removed slots included until the index compacts. Prefer [`values()`](/packages/stdlib/reference/collections/map/HashMap/values). |

## Associated functions

| Name | Description |
|------|-------------|
| [`with_capacity`](/packages/stdlib/reference/collections/map/HashMap/with_capacity) | Creates an empty map with room for `cap` entries before it grows. |
| [`new`](/packages/stdlib/reference/collections/map/HashMap/new) | Creates an empty map. |

## Methods

| Name | Description |
|------|-------------|
| [`len`](/packages/stdlib/reference/collections/map/HashMap/len) | Returns the number of entries. |
| [`is_empty`](/packages/stdlib/reference/collections/map/HashMap/is_empty) | Returns `true` when the map has no entries. |
| [`capacity`](/packages/stdlib/reference/collections/map/HashMap/capacity) | Returns how many entries the map holds before it grows. |
| [`clear`](/packages/stdlib/reference/collections/map/HashMap/clear) | Removes every entry, keeping the capacity. |
| [`keys`](/packages/stdlib/reference/collections/map/HashMap/keys) | Returns the keys, in insertion order. |
| [`values`](/packages/stdlib/reference/collections/map/HashMap/values) | Returns the values, in the insertion order of their keys. |
| [`iter`](/packages/stdlib/reference/collections/map/HashMap/iter) | Returns an iterator over the entries, in insertion order. |
| [`insert`](/packages/stdlib/reference/collections/map/HashMap/insert) | Stores `v` under `k`, replacing any value already there. |
| [`or_insert`](/packages/stdlib/reference/collections/map/HashMap/or_insert) | Returns the value stored under `k`, storing `v` there first when `k` has no entry, with one lookup. |
| [`or_insert_with`](/packages/stdlib/reference/collections/map/HashMap/or_insert_with) | Returns the value stored under `k`, storing `make()` there first when `k` has no entry. |
| [`and_update`](/packages/stdlib/reference/collections/map/HashMap/and_update) | Replaces the value stored under `k` with `v` when `k` has an entry; a missing key stays missing. |
| [`and_modify`](/packages/stdlib/reference/collections/map/HashMap/and_modify) | Replaces the value `old` stored under `k` with `f(old)` when `k` has an entry; a missing key stays missing. |
| [`entry`](/packages/stdlib/reference/collections/map/HashMap/entry) | The place of `k` in the map, looked up once: [`or_insert`](/packages/stdlib/reference/collections/map/HashMap/or_insert), [`and_update`](/packages/stdlib/reference/collections/map/HashMap/and_update) and the other `Entry` methods work on it. |
| [`contains`](/packages/stdlib/reference/collections/map/HashMap/contains) | Returns `true` when the map has an entry for `k`. |
| [`get_or`](/packages/stdlib/reference/collections/map/HashMap/get_or) | Returns the value stored under `k`, or `fallback` when there is none. |
| [`get`](/packages/stdlib/reference/collections/map/HashMap/get) | Returns the value stored under `k`, or `None` when there is none. |
| [`remove`](/packages/stdlib/reference/collections/map/HashMap/remove) | Removes the entry for `k`. |

## Trait implementations

- [`IntoIterator`](/docs/reference/prelude/IntoIterator) for `HashMap<K, V>`

## Examples

```coil
use collections::map::{HashMap};
use tests::assert;
let ages: HashMap<string, int> = HashMap::new();
ages.insert("ada", 36);
ages.insert("alan", 41);
ages.insert("ada", 37);
assert!(ages.len() == 2);
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
- [`HashMap::get`](/packages/stdlib/reference/collections/map/HashMap/get)
- [`Option`](/docs/reference/prelude/Option)
- [`HashMap::contains`](/packages/stdlib/reference/collections/map/HashMap/contains)
- [`HashMap::or_insert`](/packages/stdlib/reference/collections/map/HashMap/or_insert)
- [`HashMap::and_modify`](/packages/stdlib/reference/collections/map/HashMap/and_modify)
- [`HashMap::or_insert_with`](/packages/stdlib/reference/collections/map/HashMap/or_insert_with)
- [`HashMap::and_update`](/packages/stdlib/reference/collections/map/HashMap/and_update)
- [`HashMap::values`](/packages/stdlib/reference/collections/map/HashMap/values)
