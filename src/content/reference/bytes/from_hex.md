---
slug: "bytes/from_hex"
title: "from_hex"
description: "Decodes hexadecimal text (either case) into bytes."
module: "bytes"
kind: "fn"
name: "from_hex"
signature: "fn from_hex(string s) -> Result<Vec<byte>, string>"
import: "use bytes::{from_hex};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/47c059804a7a85f79bd400eb26bb1241e7b44441/src/bytes.hy#L91"
order: 3
---

Decodes hexadecimal text (either case) into bytes.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Result<Vec<byte>, string>`

## Errors

Returns `Err` when `s` has an odd length or a character that is not a hex digit.

## Examples

```coil
use bytes::{from_hex};
use tests::assert;
let b = from_hex("00AbfF").ok() ?? Vec::new();
assert!(b.len() == 3 && b[1] == 171 as byte);
assert!(from_hex("abc").is_err());
```

## See also

- [`region_eq`](/docs/reference/bytes/region_eq): True when `a[ao..ao+n)` equals `b[bo..bo+n)` (caller guarantees bounds).
- [`to_hex`](/docs/reference/bytes/to_hex): Encodes `buf` as lowercase hexadecimal, two digits per byte.
- [`slice`](/docs/reference/bytes/slice): Returns a copy of `src[start..end]` (end exclusive), with both offsets clamped to the buffer.
- [`concat`](/docs/reference/bytes/concat): Returns a new buffer holding `a` followed by `b`.
- [`eq`](/docs/reference/bytes/eq): Returns `true` when `a` and `b` have the same length and the same bytes.
- [`find_from`](/docs/reference/bytes/find_from): Returns the offset of the first `needle` in `hay` at or after `start`, or `None`.
- [`find`](/docs/reference/bytes/find): Returns the offset of the first `needle` in `hay`, or `None`.
- [`rfind`](/docs/reference/bytes/rfind): Returns the offset of the last `needle` in `hay`, or `None`.
