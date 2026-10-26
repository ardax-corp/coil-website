---
slug: "collections/bitset/BitSet/capacity"
title: "BitSet::capacity"
description: "Current bit capacity (words.len() * 63); grows when inserting past it."
module: "collections::bitset"
kind: "method"
name: "capacity"
parent: "BitSet"
signature: "pub fn capacity() -> int"
import: "use collections::bitset::{BitSet};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/a5615b7cd941dfa56fc0e1f42de4832c354630a3/src/collections/bitset.hy#L86"
order: 4
---

Current bit capacity (`words.len() * 63`); grows when inserting past it.

Called on a `BitSet` value as `value.capacity(…)`.

## Returns

`int`

## See also

- [`BitSet`](/docs/reference/collections/bitset/BitSet): A set of non-negative `int`s stored as bits.
- [`BitSet::with_capacity`](/docs/reference/collections/bitset/BitSet/with_capacity): Empty set with storage for at least `bits` indices (`0` → no words).
- [`BitSet::new`](/docs/reference/collections/bitset/BitSet/new): Empty set with no word storage (grows on insert).
- [`BitSet::len`](/docs/reference/collections/bitset/BitSet/len): Number of set bits (cardinality).
- [`BitSet::is_empty`](/docs/reference/collections/bitset/BitSet/is_empty): Returns `true` when no bit is set.
- [`BitSet::insert`](/docs/reference/collections/bitset/BitSet/insert): Insert index `i`; returns `true` when newly set.
- [`BitSet::contains`](/docs/reference/collections/bitset/BitSet/contains): True when index `i` is set.
- [`BitSet::remove`](/docs/reference/collections/bitset/BitSet/remove): Clear index `i`; returns `true` when a bit was unset.
