---
slug: "stdlib/bytes/copy"
package: "stdlib"
title: "copy"
description: "Returns a new buffer with the same bytes as src."
module: "bytes"
kind: "fn"
name: "copy"
signature: "fn copy(Vec<byte> src) -> Vec<byte>"
import: "use bytes::{copy};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/bytes.hy#L309"
order: 13
---

Returns a new buffer with the same bytes as `src`.

## Parameters

| Name | Type |
|------|------|
| `src` | `Vec<byte>` |

## Returns

`Vec<byte>`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures eq(result, src)
```

## See also

- [`region_eq`](/packages/stdlib/reference/bytes/region_eq): True when `a[ao..ao+n)` equals `b[bo..bo+n)` (caller guarantees bounds).
- [`to_hex`](/packages/stdlib/reference/bytes/to_hex): Encodes `buf` as lowercase hexadecimal, two digits per byte.
- [`from_hex`](/packages/stdlib/reference/bytes/from_hex): Decodes hexadecimal text (either case) into bytes.
- [`slice`](/packages/stdlib/reference/bytes/slice): Returns a copy of `src[start..end]` (end exclusive), with both offsets clamped to the buffer.
- [`concat`](/packages/stdlib/reference/bytes/concat): Returns a new buffer holding `a` followed by `b`.
- [`eq`](/packages/stdlib/reference/bytes/eq): Returns `true` when `a` and `b` have the same length and the same bytes.
- [`find_from`](/packages/stdlib/reference/bytes/find_from): Returns the offset of the first `needle` in `hay` at or after `start`, or `None`.
- [`find`](/packages/stdlib/reference/bytes/find): Returns the offset of the first `needle` in `hay`, or `None`.
