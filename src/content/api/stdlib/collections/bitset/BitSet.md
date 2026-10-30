---
slug: "stdlib/collections/bitset/BitSet"
package: "stdlib"
title: "BitSet"
description: "A set of non-negative ints stored as bits."
module: "collections::bitset"
kind: "class"
name: "BitSet"
signature: "class BitSet"
import: "use collections::bitset::{BitSet};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/collections/bitset.hy#L45"
order: 0
---

A set of non-negative [`int`](/docs/reference/types/int)s stored as bits.

Much smaller than a `HashSet<int>` when the values are dense, such as indices
or flags. Storage grows to fit the largest value inserted; capacities are
counted in bits. Each [`int`](/docs/reference/types/int) word holds 63 bits.

## Associated functions

| Name | Description |
|------|-------------|
| [`with_capacity`](/packages/stdlib/reference/collections/bitset/BitSet/with_capacity) | Empty set with storage for at least `bits` indices (`0` → no words). |
| [`new`](/packages/stdlib/reference/collections/bitset/BitSet/new) | Empty set with no word storage (grows on insert). |

## Methods

| Name | Description |
|------|-------------|
| [`len`](/packages/stdlib/reference/collections/bitset/BitSet/len) | Number of set bits (cardinality). |
| [`is_empty`](/packages/stdlib/reference/collections/bitset/BitSet/is_empty) | Returns `true` when no bit is set. |
| [`capacity`](/packages/stdlib/reference/collections/bitset/BitSet/capacity) | Current bit capacity (`words.len() * 63`); grows when inserting past it. |
| [`insert`](/packages/stdlib/reference/collections/bitset/BitSet/insert) | Insert index `i`; returns `true` when newly set. |
| [`contains`](/packages/stdlib/reference/collections/bitset/BitSet/contains) | True when index `i` is set. |
| [`remove`](/packages/stdlib/reference/collections/bitset/BitSet/remove) | Clear index `i`; returns `true` when a bit was unset. |
| [`clear`](/packages/stdlib/reference/collections/bitset/BitSet/clear) | Unset every bit; keeps allocated word capacity. |

## Invariants

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
invariant self.count >= 0 && self.count <= self.words.len() * WORD_BITS
```

## Examples

```coil
use collections::bitset::{BitSet};
use tests::assert;
let seen = BitSet::new();
seen.insert(3);
seen.insert(200);
assert!(seen.contains(200));
assert!(!seen.contains(4));
assert!(seen.len() == 2);
```

## See also

- [`int`](/docs/reference/types/int)
