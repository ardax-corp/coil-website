---
slug: "stdlib/bytes/from_string"
package: "stdlib"
title: "from_string"
description: "Returns the UTF-8 bytes of s; the same as string::to_bytes."
module: "bytes"
kind: "fn"
name: "from_string"
signature: "fn from_string(string s) -> Vec<byte>"
import: "use bytes::{from_string};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/bytes.hy#L447"
order: 19
---

Returns the UTF-8 bytes of `s`; the same as [`string::to_bytes`](/docs/reference/string/to_bytes).

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Vec<byte>`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures result.len() == s.len()
```

## See also

- [`string::to_bytes`](/docs/reference/string/to_bytes)
- [`region_eq`](/packages/stdlib/reference/bytes/region_eq): True when `a[ao..ao+n)` equals `b[bo..bo+n)` (caller guarantees bounds).
- [`to_hex`](/packages/stdlib/reference/bytes/to_hex): Encodes `buf` as lowercase hexadecimal, two digits per byte.
- [`from_hex`](/packages/stdlib/reference/bytes/from_hex): Decodes hexadecimal text (either case) into bytes.
- [`slice`](/packages/stdlib/reference/bytes/slice): Returns a copy of `src[start..end]` (end exclusive), with both offsets clamped to the buffer.
- [`concat`](/packages/stdlib/reference/bytes/concat): Returns a new buffer holding `a` followed by `b`.
- [`eq`](/packages/stdlib/reference/bytes/eq): Returns `true` when `a` and `b` have the same length and the same bytes.
- [`find_from`](/packages/stdlib/reference/bytes/find_from): Returns the offset of the first `needle` in `hay` at or after `start`, or `None`.
