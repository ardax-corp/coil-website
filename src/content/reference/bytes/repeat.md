---
slug: "bytes/repeat"
title: "repeat"
description: "Returns src repeated n times (empty when n <= 0)."
module: "bytes"
kind: "fn"
name: "repeat"
signature: "fn repeat(Vec<byte> src, int n) -> Vec<byte>"
import: "use bytes::{repeat};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/861c7aeb486ced606d1bcfb819f42cb6f6934441/src/bytes.hy#L364"
order: 15
---

Returns `src` repeated `n` times (empty when `n <= 0`).

## Parameters

| Name | Type |
|------|------|
| `src` | `Vec<byte>` |
| `n` | `int` |

## Returns

`Vec<byte>`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures n > 0 || result.len() == 0
ensures n <= 0 || result.len() == src.len() * n
```

## See also

- [`region_eq`](/docs/reference/bytes/region_eq): True when `a[ao..ao+n)` equals `b[bo..bo+n)` (caller guarantees bounds).
- [`to_hex`](/docs/reference/bytes/to_hex): Encodes `buf` as lowercase hexadecimal, two digits per byte.
- [`from_hex`](/docs/reference/bytes/from_hex): Decodes hexadecimal text (either case) into bytes.
- [`slice`](/docs/reference/bytes/slice): Returns a copy of `src[start..end]` (end exclusive), with both offsets clamped to the buffer.
- [`concat`](/docs/reference/bytes/concat): Returns a new buffer holding `a` followed by `b`.
- [`eq`](/docs/reference/bytes/eq): Returns `true` when `a` and `b` have the same length and the same bytes.
- [`find_from`](/docs/reference/bytes/find_from): Returns the offset of the first `needle` in `hay` at or after `start`, or `None`.
- [`find`](/docs/reference/bytes/find): Returns the offset of the first `needle` in `hay`, or `None`.
