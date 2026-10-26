---
slug: "collections/bitset/word_mask"
title: "word_mask"
description: "Mask for bit b in 0..WORD_BITS (1 doubled b times)."
module: "collections::bitset"
kind: "fn"
name: "word_mask"
signature: "fn word_mask(int b) -> int"
import: "use collections::bitset::{word_mask};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/a5615b7cd941dfa56fc0e1f42de4832c354630a3/src/collections/bitset.hy#L12"
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

- [`bits_per_word`](/docs/reference/collections/bitset/bits_per_word): Bits stored in one `int` word (sign bit unused).
