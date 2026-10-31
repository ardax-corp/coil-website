---
slug: "stdlib/bytes/pad_left"
package: "stdlib"
title: "pad_left"
description: "Returns src with fill bytes added in front until it is width long; a longer src is returned unchanged."
module: "bytes"
kind: "fn"
name: "pad_left"
signature: "fn pad_left(Vec<byte> src, int width, byte fill) -> Vec<byte>"
import: "use bytes::{pad_left};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/bytes.coil#L391"
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
assert!((to_string(pad_left("42", 5, zero)).ok() ?? "") == "00042");
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
