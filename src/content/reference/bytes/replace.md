---
slug: "bytes/replace"
title: "replace"
description: "Returns a copy of hay with every non-overlapping old replaced by new, left to right."
module: "bytes"
kind: "fn"
name: "replace"
signature: "fn replace(Vec<byte> hay, Vec<byte> old, Vec<byte> new) -> Vec<byte>"
import: "use bytes::{replace};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/861c7aeb486ced606d1bcfb819f42cb6f6934441/src/bytes.hy#L333"
order: 14
---

Returns a copy of `hay` with every non-overlapping `old` replaced by `new`, left to right.

An empty `old` replaces nothing.

## Parameters

| Name | Type |
|------|------|
| `hay` | `Vec<byte>` |
| `old` | `Vec<byte>` |
| `new` | `Vec<byte>` |

## Returns

`Vec<byte>`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures old.len() > 0 || eq(result, hay)
ensures old.len() == 0 || contains(hay, old) || eq(result, hay)
```

## Examples

```coil
use bytes::{replace, to_string};
use tests::assert;
let out = replace("a-b-c", "-", "+");
assert!((to_string(out).ok() ?? "") == "a+b+c");
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
