---
slug: "bytes/rfind"
title: "rfind"
description: "Returns the offset of the last needle in hay, or None. An empty needle matches at hay.len()."
module: "bytes"
kind: "fn"
name: "rfind"
signature: "fn rfind(Vec<byte> hay, Vec<byte> needle) -> Option<int>"
import: "use bytes::{rfind};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/69c79b1dd8c070fe7ca03a71c7a372ea4cc06f82/src/bytes.hy#L268"
order: 9
---

Returns the offset of the last `needle` in `hay`, or `None`. An empty `needle` matches at `hay.len()`.

## Parameters

| Name | Type |
|------|------|
| `hay` | `Vec<byte>` |
| `needle` | `Vec<byte>` |

## Returns

`Option<int>`

## Examples

```coil
use bytes::{rfind};
use tests::assert;
assert!(rfind("a,b,c", ",") == Option::Some(3));
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
