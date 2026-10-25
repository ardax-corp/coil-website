---
slug: "bytes/eq"
title: "eq"
description: "Returns true when a and b have the same length and the same bytes."
module: "bytes"
kind: "fn"
name: "eq"
signature: "fn eq(Vec<byte> a, Vec<byte> b) -> bool"
import: "use bytes::{eq};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/534e3d9afcabefedc5f1aaeedc5f294cae0a64d6/src/bytes.hy#L166"
order: 6
---

Returns `true` when `a` and `b` have the same length and the same bytes.

## Parameters

| Name | Type |
|------|------|
| `a` | `Vec<byte>` |
| `b` | `Vec<byte>` |

## Returns

`bool`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures !result || a.len() == b.len()
```

## See also

- [`region_eq`](/docs/reference/bytes/region_eq): True when `a[ao..ao+n)` equals `b[bo..bo+n)` (caller guarantees bounds).
- [`to_hex`](/docs/reference/bytes/to_hex): Encodes `buf` as lowercase hexadecimal, two digits per byte.
- [`from_hex`](/docs/reference/bytes/from_hex): Decodes hexadecimal text (either case) into bytes.
- [`slice`](/docs/reference/bytes/slice): Returns a copy of `src[start..end]` (end exclusive), with both offsets clamped to the buffer.
- [`concat`](/docs/reference/bytes/concat): Returns a new buffer holding `a` followed by `b`.
- [`find_from`](/docs/reference/bytes/find_from): Returns the offset of the first `needle` in `hay` at or after `start`, or `None`.
- [`find`](/docs/reference/bytes/find): Returns the offset of the first `needle` in `hay`, or `None`.
- [`rfind`](/docs/reference/bytes/rfind): Returns the offset of the last `needle` in `hay`, or `None`.
