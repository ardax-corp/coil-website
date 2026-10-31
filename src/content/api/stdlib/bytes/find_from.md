---
slug: "stdlib/bytes/find_from"
package: "stdlib"
title: "find_from"
description: "Returns the offset of the first needle in hay at or after start, or None."
module: "bytes"
kind: "fn"
name: "find_from"
signature: "fn find_from(Vec<byte> hay, Vec<byte> needle, int start) -> Option<int>"
import: "use bytes::{find_from};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/bytes.hy#L238"
order: 7
---

Returns the offset of the first `needle` in `hay` at or after `start`, or `None`.

`start` is clamped to `0 ..= hay.len()`; an empty `needle` matches there.

## Parameters

| Name | Type |
|------|------|
| `hay` | `Vec<byte>` |
| `needle` | `Vec<byte>` |
| `start` | `int` |

## Returns

`Option<int>`

## See also

- [`region_eq`](/packages/stdlib/reference/bytes/region_eq): True when `a[ao..ao+n)` equals `b[bo..bo+n)` (caller guarantees bounds).
- [`to_hex`](/packages/stdlib/reference/bytes/to_hex): Encodes `buf` as lowercase hexadecimal, two digits per byte.
- [`from_hex`](/packages/stdlib/reference/bytes/from_hex): Decodes hexadecimal text (either case) into bytes.
- [`slice`](/packages/stdlib/reference/bytes/slice): Returns a copy of `src[start..end]` (end exclusive), with both offsets clamped to the buffer.
- [`concat`](/packages/stdlib/reference/bytes/concat): Returns a new buffer holding `a` followed by `b`.
- [`eq`](/packages/stdlib/reference/bytes/eq): Returns `true` when `a` and `b` have the same length and the same bytes.
- [`find`](/packages/stdlib/reference/bytes/find): Returns the offset of the first `needle` in `hay`, or `None`.
- [`rfind`](/packages/stdlib/reference/bytes/rfind): Returns the offset of the last `needle` in `hay`, or `None`.
