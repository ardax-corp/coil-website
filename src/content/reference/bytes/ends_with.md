---
slug: "bytes/ends_with"
title: "ends_with"
description: "Returns true when buf ends with suffix."
module: "bytes"
kind: "fn"
name: "ends_with"
signature: "fn ends_with(Vec<byte> buf, Vec<byte> suffix) -> bool"
import: "use bytes::{ends_with};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/6386d3482335236362f6c39ca75d10e20186dfa8/src/bytes.hy#L280"
order: 12
---

Returns `true` when `buf` ends with `suffix`.

## Parameters

| Name | Type |
|------|------|
| `buf` | `Vec<byte>` |
| `suffix` | `Vec<byte>` |

## Returns

`bool`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures !result || suffix.len() <= buf.len()
```

## See also

- [`region_eq`](/docs/reference/bytes/region_eq): True when `a[ao..ao+n)` equals `b[bo..bo+n)` (caller guarantees bounds).
- [`to_hex`](/docs/reference/bytes/to_hex): Encodes `buf` as lowercase hexadecimal, two digits per byte.
- [`from_hex`](/docs/reference/bytes/from_hex): Decodes hexadecimal text (either case) into bytes.
- [`slice`](/docs/reference/bytes/slice): Returns a copy of `src[start..end]` (end exclusive), with both offsets clamped to the buffer.
- [`concat`](/docs/reference/bytes/concat): Returns a new buffer holding `a` followed by `b`.
- [`eq`](/docs/reference/bytes/eq): Returns `true` when `a` and `b` have the same length and the same bytes.
- [`find_from`](/docs/reference/bytes/find_from): Returns the offset of the first `needle` in `hay` at or after `start`, or `-1`.
- [`find`](/docs/reference/bytes/find): Returns the offset of the first `needle` in `hay`, or `-1`.
