---
slug: "stdlib/collections/bitset/index"
package: "stdlib"
title: "collections::bitset"
description: "BitSet: a compact set of small non-negative integers."
module: "collections::bitset"
kind: "module"
name: "collections::bitset"
origin: "stdlib"
auto: false
order: 5
---

Part of [coil-stdlib](/packages/stdlib), not the compiler. spool projects declare it as their `stdlib` dependency (`spool new` adds it); with plain `coil`, pass `--root` with the `src` of a coil-stdlib checkout.

Import what you use (`use path::*` is not allowed):

```coil
use collections::bitset::{BitSet, word_mask};
```

## Types

| Name | Description |
|------|-------------|
| [`BitSet`](/packages/stdlib/reference/collections/bitset/BitSet) | A set of non-negative [`int`](/docs/reference/types/int)s stored as bits. |

## Functions

| Name | Description |
|------|-------------|
| [`word_mask`](/packages/stdlib/reference/collections/bitset/word_mask) | Mask for bit `b` in `0..WORD_BITS` (`1` doubled `b` times). |
| [`bits_per_word`](/packages/stdlib/reference/collections/bitset/bits_per_word) | Bits stored in one [`int`](/docs/reference/types/int) word (sign bit unused). |
