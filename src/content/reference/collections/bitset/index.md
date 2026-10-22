---
slug: "collections/bitset/index"
title: "collections::bitset"
description: "The collections::bitset module."
module: "collections::bitset"
kind: "module"
name: "collections::bitset"
origin: "stdlib"
auto: false
order: 18
---

Part of [coil-stdlib](/packages/stdlib): add it with `spool add coil-stdlib` or pass `--root path/to/coil-stdlib/src`.

Import what you use (`use path::*` is not allowed):

```coil
use collections::bitset::{word_mask, bits_per_word};
```

## Functions

| Name | Description |
|------|-------------|
| [`word_mask`](/docs/reference/collections/bitset/word_mask) | Mask for bit `b` in `0..WORD_BITS` (`1` doubled `b` times). |
| [`bits_per_word`](/docs/reference/collections/bitset/bits_per_word) | Bits stored in one [`int`](/docs/reference/types/int) word (sign bit unused). |
