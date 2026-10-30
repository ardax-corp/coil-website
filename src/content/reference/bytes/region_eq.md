---
slug: "bytes/region_eq"
title: "region_eq"
description: "True when a[ao..ao+n) equals b[bo..bo+n) (caller guarantees bounds)."
module: "bytes"
kind: "fn"
name: "region_eq"
signature: "fn region_eq(Vec<byte> a, int ao, Vec<byte> b, int bo, int n) -> bool"
import: "use bytes::{region_eq};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/861c7aeb486ced606d1bcfb819f42cb6f6934441/src/bytes.hy#L26"
order: 1
---

True when `a[ao..ao+n)` equals `b[bo..bo+n)` (caller guarantees bounds).

## Parameters

| Name | Type |
|------|------|
| `a` | `Vec<byte>` |
| `ao` | `int` |
| `b` | `Vec<byte>` |
| `bo` | `int` |
| `n` | `int` |

## Returns

`bool`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
requires ao >= 0 && bo >= 0 && n >= 0
requires ao + n <= a.len() && bo + n <= b.len()
```

## See also

- [`to_hex`](/docs/reference/bytes/to_hex): Encodes `buf` as lowercase hexadecimal, two digits per byte.
- [`from_hex`](/docs/reference/bytes/from_hex): Decodes hexadecimal text (either case) into bytes.
- [`slice`](/docs/reference/bytes/slice): Returns a copy of `src[start..end]` (end exclusive), with both offsets clamped to the buffer.
- [`concat`](/docs/reference/bytes/concat): Returns a new buffer holding `a` followed by `b`.
- [`eq`](/docs/reference/bytes/eq): Returns `true` when `a` and `b` have the same length and the same bytes.
- [`find_from`](/docs/reference/bytes/find_from): Returns the offset of the first `needle` in `hay` at or after `start`, or `None`.
- [`find`](/docs/reference/bytes/find): Returns the offset of the first `needle` in `hay`, or `None`.
- [`rfind`](/docs/reference/bytes/rfind): Returns the offset of the last `needle` in `hay`, or `None`.
