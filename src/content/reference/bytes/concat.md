---
slug: "bytes/concat"
title: "concat"
description: "Returns a new buffer holding a followed by b."
module: "bytes"
kind: "fn"
name: "concat"
signature: "fn concat(Vec<byte> a, Vec<byte> b) -> Vec<byte>"
import: "use bytes::{concat};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/b5b5517a66f16a51245becefecbc896a1a674022/src/bytes.hy#L147"
order: 5
---

Returns a new buffer holding `a` followed by `b`.

## Parameters

| Name | Type |
|------|------|
| `a` | `Vec<byte>` |
| `b` | `Vec<byte>` |

## Returns

`Vec<byte>`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures result.len() == a.len() + b.len()
ensures starts_with(result, a) && ends_with(result, b)
```

## See also

- [`region_eq`](/docs/reference/bytes/region_eq): True when a[ao..ao+n) equals b[bo..bo+n) (caller guarantees bounds).
- [`to_hex`](/docs/reference/bytes/to_hex): Encodes buf as lowercase hexadecimal, two digits per byte.
- [`from_hex`](/docs/reference/bytes/from_hex): Decodes hexadecimal text (either case) into bytes.
- [`slice`](/docs/reference/bytes/slice): Returns a copy of src[start..end] (end exclusive), with both offsets clamped to the buffer.
- [`eq`](/docs/reference/bytes/eq): Returns true when a and b have the same length and the same bytes.
- [`find_from`](/docs/reference/bytes/find_from): Returns the offset of the first needle in hay at or after start, or -1.
- [`find`](/docs/reference/bytes/find): Returns the offset of the first needle in hay, or -1.
- [`rfind`](/docs/reference/bytes/rfind): Returns the offset of the last needle in hay, or -1.
