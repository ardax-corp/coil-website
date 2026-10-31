---
slug: "stdlib/collections/bitset/BitSet/remove"
package: "stdlib"
title: "BitSet::remove"
description: "Clear index i; returns true when a bit was unset."
module: "collections::bitset"
kind: "method"
name: "remove"
parent: "BitSet"
signature: "pub fn remove(int i) -> bool"
import: "use collections::bitset::{BitSet};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/collections/bitset.hy#L143"
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

- [`BitSet`](/packages/stdlib/reference/collections/bitset/BitSet): A set of non-negative `int`s stored as bits.
- [`BitSet::with_capacity`](/packages/stdlib/reference/collections/bitset/BitSet/with_capacity): Empty set with storage for at least `bits` indices (`0` → no words).
- [`BitSet::new`](/packages/stdlib/reference/collections/bitset/BitSet/new): Empty set with no word storage (grows on insert).
- [`BitSet::len`](/packages/stdlib/reference/collections/bitset/BitSet/len): Number of set bits (cardinality).
- [`BitSet::is_empty`](/packages/stdlib/reference/collections/bitset/BitSet/is_empty): Returns `true` when no bit is set.
- [`BitSet::capacity`](/packages/stdlib/reference/collections/bitset/BitSet/capacity): Current bit capacity (`words.len() * 63`); grows when inserting past it.
- [`BitSet::insert`](/packages/stdlib/reference/collections/bitset/BitSet/insert): Insert index `i`; returns `true` when newly set.
- [`BitSet::contains`](/packages/stdlib/reference/collections/bitset/BitSet/contains): True when index `i` is set.
