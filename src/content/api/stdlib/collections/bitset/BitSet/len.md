---
slug: "stdlib/collections/bitset/BitSet/len"
package: "stdlib"
title: "BitSet::len"
description: "Number of set bits (cardinality)."
module: "collections::bitset"
kind: "method"
name: "len"
parent: "BitSet"
signature: "pub fn len() -> int"
import: "use collections::bitset::{BitSet};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/collections/bitset.hy#L76"
order: 2
---

Number of set bits (cardinality).

Called on a `BitSet` value as `value.len(…)`.

## Returns

`int`

## See also

- [`BitSet`](/packages/stdlib/reference/collections/bitset/BitSet): A set of non-negative `int`s stored as bits.
- [`BitSet::with_capacity`](/packages/stdlib/reference/collections/bitset/BitSet/with_capacity): Empty set with storage for at least `bits` indices (`0` → no words).
- [`BitSet::new`](/packages/stdlib/reference/collections/bitset/BitSet/new): Empty set with no word storage (grows on insert).
- [`BitSet::is_empty`](/packages/stdlib/reference/collections/bitset/BitSet/is_empty): Returns `true` when no bit is set.
- [`BitSet::capacity`](/packages/stdlib/reference/collections/bitset/BitSet/capacity): Current bit capacity (`words.len() * 63`); grows when inserting past it.
- [`BitSet::insert`](/packages/stdlib/reference/collections/bitset/BitSet/insert): Insert index `i`; returns `true` when newly set.
- [`BitSet::contains`](/packages/stdlib/reference/collections/bitset/BitSet/contains): True when index `i` is set.
- [`BitSet::remove`](/packages/stdlib/reference/collections/bitset/BitSet/remove): Clear index `i`; returns `true` when a bit was unset.
