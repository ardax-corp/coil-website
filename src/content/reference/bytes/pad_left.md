---
slug: "bytes/pad_left"
title: "pad_left"
description: "Returns src with fill bytes added in front until it is width long; a longer src is returned unchanged."
module: "bytes"
kind: "fn"
name: "pad_left"
signature: "fn pad_left(Vec<byte> src, int width, byte fill) -> Vec<byte>"
import: "use bytes::{pad_left};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/6386d3482335236362f6c39ca75d10e20186dfa8/src/bytes.hy#L374"
order: 16
---

Returns `src` with `fill` bytes added in front until it is `width` long; a longer `src` is returned unchanged.

## Parameters

| Name | Type |
|------|------|
| `src` | `Vec<byte>` |
| `width` | `int` |
| `fill` | `byte` |

## Returns

`Vec<byte>`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures result.len() >= src.len() && result.len() >= width
ensures result.len() == src.len() || result.len() == width
ensures ends_with(result, src)
```

## Examples

```coil
use bytes::{pad_left, to_string};
use tests::assert;
let zero: byte = "0";
assert!((to_string(pad_left("42", 5, zero)) ?? "") == "00042");
```

## See also

- [`region_eq`](/docs/reference/bytes/region_eq): True when `a[ao..ao+n)` equals `b[bo..bo+n)` (caller guarantees bounds).
- [`to_hex`](/docs/reference/bytes/to_hex): Encodes `buf` as lowercase hexadecimal, two digits per byte.
- [`from_hex`](/docs/reference/bytes/from_hex): Decodes hexadecimal text (either case) into bytes.
- [`slice`](/docs/reference/bytes/slice): Returns a copy of `src[start..end]` (end exclusive), with both offsets clamped to the buffer.
- [`concat`](/docs/reference/bytes/concat): Returns a new buffer holding `a` followed by `b`.
- [`eq`](/docs/reference/bytes/eq): Returns `true` when `a` and `b` have the same length and the same bytes.
- [`find_from`](/docs/reference/bytes/find_from): Returns the offset of the first `needle` in `hay` at or after `start`, or `-1`.
- [`find`](/docs/reference/bytes/find): Returns the offset of the first `needle` in `hay`, or `-1`.
