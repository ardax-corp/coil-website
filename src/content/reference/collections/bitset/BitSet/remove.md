---
slug: "collections/bitset/BitSet/remove"
title: "BitSet::remove"
description: "Clear index i; returns true when a bit was unset."
module: "collections::bitset"
kind: "method"
name: "remove"
parent: "BitSet"
signature: "pub fn remove(int i) -> bool"
import: "use collections::bitset::{BitSet};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/b5b5517a66f16a51245becefecbc896a1a674022/src/collections/bitset.hy#L143"
order: 7
---

Clear index `i`; returns `true` when a bit was unset.

Called on a `BitSet` value as `value.remove(…)`.

## Parameters

| Name | Type |
|------|------|
| `i` | `int` |

## Returns

`bool`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures !self.contains(i)
ensures !result || self.count == old(self.count) - 1
ensures result || self.count == old(self.count)
```

## See also

- [`BitSet`](/docs/reference/collections/bitset/BitSet): A set of non-negative ints stored as bits.
- [`BitSet::with_capacity`](/docs/reference/collections/bitset/BitSet/with_capacity): Empty set with storage for at least bits indices (0 → no words).
- [`BitSet::new`](/docs/reference/collections/bitset/BitSet/new): Empty set with no word storage (grows on insert).
- [`BitSet::size`](/docs/reference/collections/bitset/BitSet/size): Number of set bits (cardinality).
- [`BitSet::is_empty`](/docs/reference/collections/bitset/BitSet/is_empty): Returns true when no bit is set.
- [`BitSet::capacity`](/docs/reference/collections/bitset/BitSet/capacity): Current bit capacity (words.len() * 63); grows when inserting past it.
- [`BitSet::insert`](/docs/reference/collections/bitset/BitSet/insert): Insert index i; returns true when newly set.
- [`BitSet::contains`](/docs/reference/collections/bitset/BitSet/contains): True when index i is set.
