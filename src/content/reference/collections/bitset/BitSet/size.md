---
slug: "collections/bitset/BitSet/size"
title: "BitSet::size"
description: "Number of set bits (cardinality)."
module: "collections::bitset"
kind: "method"
name: "size"
parent: "BitSet"
signature: "pub fn size() -> int"
import: "use collections::bitset::{BitSet};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/b5b5517a66f16a51245becefecbc896a1a674022/src/collections/bitset.hy#L76"
order: 2
---

Number of set bits (cardinality).

Called on a `BitSet` value as `value.size(…)`.

## Returns

`int`

## See also

- [`BitSet`](/docs/reference/collections/bitset/BitSet): A set of non-negative ints stored as bits.
- [`BitSet::with_capacity`](/docs/reference/collections/bitset/BitSet/with_capacity): Empty set with storage for at least bits indices (0 → no words).
- [`BitSet::new`](/docs/reference/collections/bitset/BitSet/new): Empty set with no word storage (grows on insert).
- [`BitSet::is_empty`](/docs/reference/collections/bitset/BitSet/is_empty): Returns true when no bit is set.
- [`BitSet::capacity`](/docs/reference/collections/bitset/BitSet/capacity): Current bit capacity (words.len() * 63); grows when inserting past it.
- [`BitSet::insert`](/docs/reference/collections/bitset/BitSet/insert): Insert index i; returns true when newly set.
- [`BitSet::contains`](/docs/reference/collections/bitset/BitSet/contains): True when index i is set.
- [`BitSet::remove`](/docs/reference/collections/bitset/BitSet/remove): Clear index i; returns true when a bit was unset.
