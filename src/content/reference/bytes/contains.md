---
slug: "bytes/contains"
title: "contains"
description: "Returns true when needle occurs in hay."
module: "bytes"
kind: "fn"
name: "contains"
signature: "fn contains(Vec<byte> hay, Vec<byte> needle) -> bool"
import: "use bytes::{contains};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/69c79b1dd8c070fe7ca03a71c7a372ea4cc06f82/src/bytes.hy#L273"
order: 10
---

Returns `true` when `needle` occurs in `hay`.

## Parameters

| Name | Type |
|------|------|
| `hay` | `Vec<byte>` |
| `needle` | `Vec<byte>` |

## Returns

`bool`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures !result || needle.len() <= hay.len()
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
