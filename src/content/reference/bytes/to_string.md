---
slug: "bytes/to_string"
title: "to_string"
description: "Decodes b as UTF-8."
module: "bytes"
kind: "fn"
name: "to_string"
signature: "fn to_string(Vec<byte> b) -> Result<string, string>"
import: "use bytes::{to_string};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/861c7aeb486ced606d1bcfb819f42cb6f6934441/src/bytes.hy#L439"
order: 18
---

Decodes `b` as UTF-8.

## Parameters

| Name | Type |
|------|------|
| `b` | `Vec<byte>` |

## Returns

`Result<string, string>`

## Errors

Returns `Err("utf8")` when `b` is not valid UTF-8. [`string::from_bytes`](/docs/reference/string/from_bytes) does
the same with a `StringError`.

## See also

- [`string::from_bytes`](/docs/reference/string/from_bytes)
- [`region_eq`](/docs/reference/bytes/region_eq): True when `a[ao..ao+n)` equals `b[bo..bo+n)` (caller guarantees bounds).
- [`to_hex`](/docs/reference/bytes/to_hex): Encodes `buf` as lowercase hexadecimal, two digits per byte.
- [`from_hex`](/docs/reference/bytes/from_hex): Decodes hexadecimal text (either case) into bytes.
- [`slice`](/docs/reference/bytes/slice): Returns a copy of `src[start..end]` (end exclusive), with both offsets clamped to the buffer.
- [`concat`](/docs/reference/bytes/concat): Returns a new buffer holding `a` followed by `b`.
- [`eq`](/docs/reference/bytes/eq): Returns `true` when `a` and `b` have the same length and the same bytes.
- [`find_from`](/docs/reference/bytes/find_from): Returns the offset of the first `needle` in `hay` at or after `start`, or `None`.
