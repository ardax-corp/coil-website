---
slug: "bytes/find"
title: "find"
description: "Returns the offset of the first needle in hay, or None. An empty needle matches at 0."
module: "bytes"
kind: "fn"
name: "find"
signature: "fn find(Vec<byte> hay, Vec<byte> needle) -> Option<int>"
import: "use bytes::{find};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/534e3d9afcabefedc5f1aaeedc5f294cae0a64d6/src/bytes.hy#L255"
order: 8
---

Returns the offset of the first `needle` in `hay`, or `None`. An empty `needle` matches at `0`.

## Parameters

| Name | Type |
|------|------|
| `hay` | `Vec<byte>` |
| `needle` | `Vec<byte>` |

## Returns

`Option<int>`

## Examples

```coil
use bytes::{find};
use tests::assert;
assert!(find("a,b,c", ",") == Option::Some(1));
assert!(find("abc", "x").is_none());
```

## See also

- [`region_eq`](/docs/reference/bytes/region_eq): True when `a[ao..ao+n)` equals `b[bo..bo+n)` (caller guarantees bounds).
- [`to_hex`](/docs/reference/bytes/to_hex): Encodes `buf` as lowercase hexadecimal, two digits per byte.
- [`from_hex`](/docs/reference/bytes/from_hex): Decodes hexadecimal text (either case) into bytes.
- [`slice`](/docs/reference/bytes/slice): Returns a copy of `src[start..end]` (end exclusive), with both offsets clamped to the buffer.
- [`concat`](/docs/reference/bytes/concat): Returns a new buffer holding `a` followed by `b`.
- [`eq`](/docs/reference/bytes/eq): Returns `true` when `a` and `b` have the same length and the same bytes.
- [`find_from`](/docs/reference/bytes/find_from): Returns the offset of the first `needle` in `hay` at or after `start`, or `None`.
- [`rfind`](/docs/reference/bytes/rfind): Returns the offset of the last `needle` in `hay`, or `None`.
