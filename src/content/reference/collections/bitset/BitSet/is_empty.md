---
slug: "collections/bitset/BitSet/is_empty"
title: "BitSet::is_empty"
description: "Returns true when no bit is set."
module: "collections::bitset"
kind: "method"
name: "is_empty"
parent: "BitSet"
signature: "pub fn is_empty() -> bool"
import: "use collections::bitset::{BitSet};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/69c79b1dd8c070fe7ca03a71c7a372ea4cc06f82/src/collections/bitset.hy#L81"
order: 3
---

Returns `true` when no bit is set.

Called on a `BitSet` value as `value.is_empty(…)`.

## Returns

`bool`

## See also

- [`BitSet`](/docs/reference/collections/bitset/BitSet): A set of non-negative `int`s stored as bits.
- [`BitSet::with_capacity`](/docs/reference/collections/bitset/BitSet/with_capacity): Empty set with storage for at least `bits` indices (`0` → no words).
- [`BitSet::new`](/docs/reference/collections/bitset/BitSet/new): Empty set with no word storage (grows on insert).
- [`BitSet::len`](/docs/reference/collections/bitset/BitSet/len): Number of set bits (cardinality).
- [`BitSet::capacity`](/docs/reference/collections/bitset/BitSet/capacity): Current bit capacity (`words.len() * 63`); grows when inserting past it.
- [`BitSet::insert`](/docs/reference/collections/bitset/BitSet/insert): Insert index `i`; returns `true` when newly set.
- [`BitSet::contains`](/docs/reference/collections/bitset/BitSet/contains): True when index `i` is set.
- [`BitSet::remove`](/docs/reference/collections/bitset/BitSet/remove): Clear index `i`; returns `true` when a bit was unset.
