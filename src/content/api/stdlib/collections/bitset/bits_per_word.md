---
slug: "stdlib/collections/bitset/bits_per_word"
package: "stdlib"
title: "bits_per_word"
description: "Bits stored in one int word (sign bit unused)."
module: "collections::bitset"
kind: "fn"
name: "bits_per_word"
signature: "fn bits_per_word() -> int"
import: "use collections::bitset::{bits_per_word};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/collections/bitset.hy#L23"
order: 2
---

Bits stored in one [`int`](/docs/reference/types/int) word (sign bit unused).

## Returns

`int`

## See also

- [`int`](/docs/reference/types/int)
- [`word_mask`](/packages/stdlib/reference/collections/bitset/word_mask): Mask for bit `b` in `0..WORD_BITS` (`1` doubled `b` times).
