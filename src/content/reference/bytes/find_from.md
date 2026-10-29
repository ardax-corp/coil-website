---
slug: "bytes/find_from"
title: "find_from"
description: "Returns the offset of the first needle in hay at or after start, or None."
module: "bytes"
kind: "fn"
name: "find_from"
signature: "fn find_from(Vec<byte> hay, Vec<byte> needle, int start) -> Option<int>"
import: "use bytes::{find_from};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/47c059804a7a85f79bd400eb26bb1241e7b44441/src/bytes.hy#L241"
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

- [`region_eq`](/docs/reference/bytes/region_eq): True when `a[ao..ao+n)` equals `b[bo..bo+n)` (caller guarantees bounds).
- [`to_hex`](/docs/reference/bytes/to_hex): Encodes `buf` as lowercase hexadecimal, two digits per byte.
- [`from_hex`](/docs/reference/bytes/from_hex): Decodes hexadecimal text (either case) into bytes.
- [`slice`](/docs/reference/bytes/slice): Returns a copy of `src[start..end]` (end exclusive), with both offsets clamped to the buffer.
- [`concat`](/docs/reference/bytes/concat): Returns a new buffer holding `a` followed by `b`.
- [`eq`](/docs/reference/bytes/eq): Returns `true` when `a` and `b` have the same length and the same bytes.
- [`find`](/docs/reference/bytes/find): Returns the offset of the first `needle` in `hay`, or `None`.
- [`rfind`](/docs/reference/bytes/rfind): Returns the offset of the last `needle` in `hay`, or `None`.
