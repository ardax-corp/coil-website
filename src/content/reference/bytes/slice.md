---
slug: "bytes/slice"
title: "slice"
description: "Returns a copy of src[start..end] (end exclusive), with both offsets clamped to the buffer."
module: "bytes"
kind: "fn"
name: "slice"
signature: "fn slice(Vec<byte> src, int start, int end) -> Vec<byte>"
import: "use bytes::{slice};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/a5615b7cd941dfa56fc0e1f42de4832c354630a3/src/bytes.hy#L128"
order: 4
---

Returns a copy of `src[start..end]` (end exclusive), with both offsets clamped to the buffer.

## Parameters

| Name | Type |
|------|------|
| `src` | `Vec<byte>` |
| `start` | `int` |
| `end` | `int` |

## Returns

`Vec<byte>`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures result.len() <= src.len()
ensures start < end || result.len() == 0
```

## Examples

```coil
use bytes::{slice};
use tests::assert;
let b: Vec<byte> = "hello";
assert!(slice(b, 1, 3).len() == 2);
assert!(slice(b, 3, 99).len() == 2);
```

## See also

- [`region_eq`](/docs/reference/bytes/region_eq): True when `a[ao..ao+n)` equals `b[bo..bo+n)` (caller guarantees bounds).
- [`to_hex`](/docs/reference/bytes/to_hex): Encodes `buf` as lowercase hexadecimal, two digits per byte.
- [`from_hex`](/docs/reference/bytes/from_hex): Decodes hexadecimal text (either case) into bytes.
- [`concat`](/docs/reference/bytes/concat): Returns a new buffer holding `a` followed by `b`.
- [`eq`](/docs/reference/bytes/eq): Returns `true` when `a` and `b` have the same length and the same bytes.
- [`find_from`](/docs/reference/bytes/find_from): Returns the offset of the first `needle` in `hay` at or after `start`, or `None`.
- [`find`](/docs/reference/bytes/find): Returns the offset of the first `needle` in `hay`, or `None`.
- [`rfind`](/docs/reference/bytes/rfind): Returns the offset of the last `needle` in `hay`, or `None`.
