---
slug: "stdlib/collections/bitset/BitSet/new"
package: "stdlib"
title: "BitSet::new"
description: "Empty set with no word storage (grows on insert)."
module: "collections::bitset"
kind: "static method"
name: "new"
parent: "BitSet"
signature: "pub static fn new() -> BitSet"
import: "use collections::bitset::{BitSet};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/collections/bitset.coil#L71"
order: 1
---

Empty set with no word storage (grows on insert).

## Returns

`BitSet`

## See also

- [`BitSet`](/packages/stdlib/reference/collections/bitset/BitSet): A set of non-negative `int`s stored as bits.
- [`BitSet::with_capacity`](/packages/stdlib/reference/collections/bitset/BitSet/with_capacity): Empty set with storage for at least `bits` indices (`0` → no words).
- [`BitSet::len`](/packages/stdlib/reference/collections/bitset/BitSet/len): Number of set bits (cardinality).
- [`BitSet::is_empty`](/packages/stdlib/reference/collections/bitset/BitSet/is_empty): Returns `true` when no bit is set.
- [`BitSet::capacity`](/packages/stdlib/reference/collections/bitset/BitSet/capacity): Current bit capacity (`words.len() * 63`); grows when inserting past it.
- [`BitSet::insert`](/packages/stdlib/reference/collections/bitset/BitSet/insert): Insert index `i`; returns `true` when newly set.
- [`BitSet::contains`](/packages/stdlib/reference/collections/bitset/BitSet/contains): True when index `i` is set.
- [`BitSet::remove`](/packages/stdlib/reference/collections/bitset/BitSet/remove): Clear index `i`; returns `true` when a bit was unset.
