---
slug: "bytes/copy"
title: "copy"
description: "Returns a new buffer with the same bytes as src."
module: "bytes"
kind: "fn"
name: "copy"
signature: "fn copy(Vec<byte> src) -> Vec<byte>"
import: "use bytes::{copy};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/69c79b1dd8c070fe7ca03a71c7a372ea4cc06f82/src/bytes.hy#L312"
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

- [`region_eq`](/docs/reference/bytes/region_eq): True when `a[ao..ao+n)` equals `b[bo..bo+n)` (caller guarantees bounds).
- [`to_hex`](/docs/reference/bytes/to_hex): Encodes `buf` as lowercase hexadecimal, two digits per byte.
- [`from_hex`](/docs/reference/bytes/from_hex): Decodes hexadecimal text (either case) into bytes.
- [`slice`](/docs/reference/bytes/slice): Returns a copy of `src[start..end]` (end exclusive), with both offsets clamped to the buffer.
- [`concat`](/docs/reference/bytes/concat): Returns a new buffer holding `a` followed by `b`.
- [`eq`](/docs/reference/bytes/eq): Returns `true` when `a` and `b` have the same length and the same bytes.
- [`find_from`](/docs/reference/bytes/find_from): Returns the offset of the first `needle` in `hay` at or after `start`, or `None`.
- [`find`](/docs/reference/bytes/find): Returns the offset of the first `needle` in `hay`, or `None`.
