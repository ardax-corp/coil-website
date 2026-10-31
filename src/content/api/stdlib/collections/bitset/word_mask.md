---
slug: "stdlib/collections/bitset/word_mask"
package: "stdlib"
title: "word_mask"
description: "Mask for bit b in 0..WORD_BITS (1 doubled b times)."
module: "collections::bitset"
kind: "fn"
name: "word_mask"
signature: "fn word_mask(int b) -> int"
import: "use collections::bitset::{word_mask};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/collections/bitset.coil#L12"
order: 1
---

Mask for bit `b` in `0..WORD_BITS` (`1` doubled `b` times).

## Parameters

| Name | Type |
|------|------|
| `b` | `int` |

## Returns

`int`

## See also

- [`bits_per_word`](/packages/stdlib/reference/collections/bitset/bits_per_word): Bits stored in one `int` word (sign bit unused).
