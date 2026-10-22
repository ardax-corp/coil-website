---
slug: "bytes/find_from"
title: "find_from"
description: "Returns the offset of the first needle in hay at or after start, or -1."
module: "bytes"
kind: "fn"
name: "find_from"
signature: "fn find_from(Vec<byte> hay, Vec<byte> needle, int start) -> int"
import: "use bytes::{find_from};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/bytes.hy#L176"
order: 7
---

Returns the offset of the first `needle` in `hay` at or after `start`, or `-1`.

## Parameters

| Name | Type |
|------|------|
| `hay` | `Vec<byte>` |
| `needle` | `Vec<byte>` |
| `start` | `int` |

## Returns

`int`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures result >= -1 && result <= hay.len()
ensures result < 0 || result >= start || (start > hay.len() && result == hay.len())
ensures result < 0 || (result + needle.len() <= hay.len() && region_eq(hay, result, needle, 0, needle.len()))
```

## See also

- [`region_eq`](/docs/reference/bytes/region_eq): True when `a[ao..ao+n)` equals `b[bo..bo+n)` (caller guarantees bounds).
- [`to_hex`](/docs/reference/bytes/to_hex): Encodes `buf` as lowercase hexadecimal, two digits per byte.
- [`from_hex`](/docs/reference/bytes/from_hex): Decodes hexadecimal text (either case) into bytes.
- [`slice`](/docs/reference/bytes/slice): Returns a copy of `src[start..end]` (end exclusive), with both offsets clamped to the buffer.
- [`concat`](/docs/reference/bytes/concat): Returns a new buffer holding `a` followed by `b`.
- [`eq`](/docs/reference/bytes/eq): Returns `true` when `a` and `b` have the same length and the same bytes.
- [`find`](/docs/reference/bytes/find): Returns the offset of the first `needle` in `hay`, or `-1`.
- [`rfind`](/docs/reference/bytes/rfind): Returns the offset of the last `needle` in `hay`, or `-1`.
