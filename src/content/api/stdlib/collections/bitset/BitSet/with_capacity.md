---
slug: "stdlib/collections/bitset/BitSet/with_capacity"
package: "stdlib"
title: "BitSet::with_capacity"
description: "Empty set with storage for at least bits indices (0 → no words)."
module: "collections::bitset"
kind: "static method"
name: "with_capacity"
parent: "BitSet"
signature: "pub static fn with_capacity(int bits) -> BitSet"
import: "use collections::bitset::{BitSet};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/collections/bitset.hy#L54"
order: 0
---

Empty set with storage for at least `bits` indices (`0` → no words).

## Parameters

| Name | Type |
|------|------|
| `bits` | `int` |

## Returns

`BitSet`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures result.len() == 0
ensures result.capacity() >= bits
```

## See also

- [`BitSet`](/packages/stdlib/reference/collections/bitset/BitSet): A set of non-negative `int`s stored as bits.
- [`BitSet::new`](/packages/stdlib/reference/collections/bitset/BitSet/new): Empty set with no word storage (grows on insert).
- [`BitSet::len`](/packages/stdlib/reference/collections/bitset/BitSet/len): Number of set bits (cardinality).
- [`BitSet::is_empty`](/packages/stdlib/reference/collections/bitset/BitSet/is_empty): Returns `true` when no bit is set.
- [`BitSet::capacity`](/packages/stdlib/reference/collections/bitset/BitSet/capacity): Current bit capacity (`words.len() * 63`); grows when inserting past it.
- [`BitSet::insert`](/packages/stdlib/reference/collections/bitset/BitSet/insert): Insert index `i`; returns `true` when newly set.
- [`BitSet::contains`](/packages/stdlib/reference/collections/bitset/BitSet/contains): True when index `i` is set.
- [`BitSet::remove`](/packages/stdlib/reference/collections/bitset/BitSet/remove): Clear index `i`; returns `true` when a bit was unset.
