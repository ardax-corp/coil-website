---
slug: "collections/bitset/index"
title: "collections::bitset"
description: "BitSet: a compact set of small non-negative integers."
module: "collections::bitset"
kind: "module"
name: "collections::bitset"
origin: "stdlib"
auto: false
order: 20
---

Part of [coil-stdlib](/packages/stdlib): add it with `spool add coil-stdlib` or pass `--root path/to/coil-stdlib/src`.

Import what you use (`use path::*` is not allowed):

```coil
use collections::bitset::{BitSet, word_mask};
```

## Types

| Name | Description |
|------|-------------|
| [`BitSet`](/docs/reference/collections/bitset/BitSet) | A set of non-negative [`int`](/docs/reference/types/int)s stored as bits. |

## Functions

| Name | Description |
|------|-------------|
| [`word_mask`](/docs/reference/collections/bitset/word_mask) | Mask for bit `b` in `0..WORD_BITS` (`1` doubled `b` times). |
| [`bits_per_word`](/docs/reference/collections/bitset/bits_per_word) | Bits stored in one [`int`](/docs/reference/types/int) word (sign bit unused). |
