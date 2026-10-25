---
slug: "collections/bitset/BitSet/with_capacity"
title: "BitSet::with_capacity"
description: "Empty set with storage for at least bits indices (0 → no words)."
module: "collections::bitset"
kind: "static method"
name: "with_capacity"
parent: "BitSet"
signature: "pub static fn with_capacity(int bits) -> BitSet"
import: "use collections::bitset::{BitSet};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/534e3d9afcabefedc5f1aaeedc5f294cae0a64d6/src/collections/bitset.hy#L54"
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

- [`BitSet`](/docs/reference/collections/bitset/BitSet): A set of non-negative `int`s stored as bits.
- [`BitSet::new`](/docs/reference/collections/bitset/BitSet/new): Empty set with no word storage (grows on insert).
- [`BitSet::len`](/docs/reference/collections/bitset/BitSet/len): Number of set bits (cardinality).
- [`BitSet::is_empty`](/docs/reference/collections/bitset/BitSet/is_empty): Returns `true` when no bit is set.
- [`BitSet::capacity`](/docs/reference/collections/bitset/BitSet/capacity): Current bit capacity (`words.len() * 63`); grows when inserting past it.
- [`BitSet::insert`](/docs/reference/collections/bitset/BitSet/insert): Insert index `i`; returns `true` when newly set.
- [`BitSet::contains`](/docs/reference/collections/bitset/BitSet/contains): True when index `i` is set.
- [`BitSet::remove`](/docs/reference/collections/bitset/BitSet/remove): Clear index `i`; returns `true` when a bit was unset.
