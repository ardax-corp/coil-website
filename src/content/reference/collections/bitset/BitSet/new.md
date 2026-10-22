---
slug: "collections/bitset/BitSet/new"
title: "BitSet::new"
description: "Empty set with no word storage (grows on insert)."
module: "collections::bitset"
kind: "static method"
name: "new"
parent: "BitSet"
signature: "pub static fn new() -> BitSet"
import: "use collections::bitset::{BitSet};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/b5b5517a66f16a51245becefecbc896a1a674022/src/collections/bitset.hy#L71"
order: 1
---

Empty set with no word storage (grows on insert).

## Returns

`BitSet`

## See also

- [`BitSet`](/docs/reference/collections/bitset/BitSet): A set of non-negative ints stored as bits.
- [`BitSet::with_capacity`](/docs/reference/collections/bitset/BitSet/with_capacity): Empty set with storage for at least bits indices (0 → no words).
- [`BitSet::size`](/docs/reference/collections/bitset/BitSet/size): Number of set bits (cardinality).
- [`BitSet::is_empty`](/docs/reference/collections/bitset/BitSet/is_empty): Returns true when no bit is set.
- [`BitSet::capacity`](/docs/reference/collections/bitset/BitSet/capacity): Current bit capacity (words.len() * 63); grows when inserting past it.
- [`BitSet::insert`](/docs/reference/collections/bitset/BitSet/insert): Insert index i; returns true when newly set.
- [`BitSet::contains`](/docs/reference/collections/bitset/BitSet/contains): True when index i is set.
- [`BitSet::remove`](/docs/reference/collections/bitset/BitSet/remove): Clear index i; returns true when a bit was unset.
