---
slug: "stdlib/bytes/to_hex"
package: "stdlib"
title: "to_hex"
description: "Encodes buf as lowercase hexadecimal, two digits per byte."
module: "bytes"
kind: "fn"
name: "to_hex"
signature: "fn to_hex(Vec<byte> buf) -> string"
import: "use bytes::{to_hex};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/bytes.hy#L59"
order: 2
---

Encodes `buf` as lowercase hexadecimal, two digits per byte.

## Parameters

| Name | Type |
|------|------|
| `buf` | `Vec<byte>` |

## Returns

`string`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures result.len() == 2 * buf.len()
```

## Examples

```coil
use bytes::{to_hex};
use tests::assert;
assert!(to_hex(Vec::from([0 as byte, 171 as byte, 255 as byte])) == "00abff");
```

## See also

- [`region_eq`](/packages/stdlib/reference/bytes/region_eq): True when `a[ao..ao+n)` equals `b[bo..bo+n)` (caller guarantees bounds).
- [`from_hex`](/packages/stdlib/reference/bytes/from_hex): Decodes hexadecimal text (either case) into bytes.
- [`slice`](/packages/stdlib/reference/bytes/slice): Returns a copy of `src[start..end]` (end exclusive), with both offsets clamped to the buffer.
- [`concat`](/packages/stdlib/reference/bytes/concat): Returns a new buffer holding `a` followed by `b`.
- [`eq`](/packages/stdlib/reference/bytes/eq): Returns `true` when `a` and `b` have the same length and the same bytes.
- [`find_from`](/packages/stdlib/reference/bytes/find_from): Returns the offset of the first `needle` in `hay` at or after `start`, or `None`.
- [`find`](/packages/stdlib/reference/bytes/find): Returns the offset of the first `needle` in `hay`, or `None`.
- [`rfind`](/packages/stdlib/reference/bytes/rfind): Returns the offset of the last `needle` in `hay`, or `None`.
