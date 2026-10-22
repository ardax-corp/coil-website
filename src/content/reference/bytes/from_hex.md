---
slug: "bytes/from_hex"
title: "from_hex"
description: "Decode a lowercase/uppercase hex string into bytes."
module: "bytes"
kind: "fn"
name: "from_hex"
signature: "fn from_hex(string s) -> Result<Vec<byte>, string>"
import: "use bytes::{from_hex};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/bytes.hy#L63"
order: 2
---

Decode a lowercase/uppercase hex string into bytes.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Result<Vec<byte>, string>`

## See also

- [`region_eq`](/docs/reference/bytes/region_eq): True when a[ao..ao+n) equals b[bo..bo+n) (caller guarantees bounds).
- [`to_hex`](/docs/reference/bytes/to_hex): Hex-encode a byte buffer (lowercase).
- [`slice`](/docs/reference/bytes/slice): Copy src[start..end) into a new buffer (clamped to src bounds).
- [`concat`](/docs/reference/bytes/concat): Append b after a into a new buffer.
- [`eq`](/docs/reference/bytes/eq): True when a and b have equal length and equal bytes.
- [`find_from`](/docs/reference/bytes/find_from): First index of needle in hay at or after start, or -1.
