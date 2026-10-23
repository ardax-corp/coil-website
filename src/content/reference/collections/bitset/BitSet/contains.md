---
slug: "collections/bitset/BitSet/contains"
title: "BitSet::contains"
description: "True when index i is set."
module: "collections::bitset"
kind: "method"
name: "contains"
parent: "BitSet"
signature: "pub fn contains(int i) -> bool"
import: "use collections::bitset::{BitSet};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/59fa621e476425113f44db5753bef7abf7977a40/src/collections/bitset.hy#L130"
order: 6
---

True when index `i` is set.

Called on a `BitSet` value as `value.contains(…)`.

## Parameters

| Name | Type |
|------|------|
| `i` | `int` |

## Returns

`bool`

## See also

- [`BitSet`](/docs/reference/collections/bitset/BitSet): A set of non-negative `int`s stored as bits.
- [`BitSet::with_capacity`](/docs/reference/collections/bitset/BitSet/with_capacity): Empty set with storage for at least `bits` indices (`0` → no words).
- [`BitSet::new`](/docs/reference/collections/bitset/BitSet/new): Empty set with no word storage (grows on insert).
- [`BitSet::size`](/docs/reference/collections/bitset/BitSet/size): Number of set bits (cardinality).
- [`BitSet::is_empty`](/docs/reference/collections/bitset/BitSet/is_empty): Returns `true` when no bit is set.
- [`BitSet::capacity`](/docs/reference/collections/bitset/BitSet/capacity): Current bit capacity (`words.len() * 63`); grows when inserting past it.
- [`BitSet::insert`](/docs/reference/collections/bitset/BitSet/insert): Insert index `i`; returns `true` when newly set.
- [`BitSet::remove`](/docs/reference/collections/bitset/BitSet/remove): Clear index `i`; returns `true` when a bit was unset.
