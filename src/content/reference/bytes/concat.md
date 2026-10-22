---
slug: "bytes/concat"
title: "concat"
description: "Append b after a into a new buffer."
module: "bytes"
kind: "fn"
name: "concat"
signature: "fn concat(Vec<byte> a, Vec<byte> b) -> Vec<byte> ensures result.len() == a.len() + b.len() ensures starts_with(result, a) && ends_with(result, b)"
import: "use bytes::{concat};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/bytes.hy#L109"
order: 4
---

Append `b` after `a` into a new buffer.

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
- [`to_hex`](/docs/reference/bytes/to_hex): Hex-encode a byte buffer (lowercase).
- [`from_hex`](/docs/reference/bytes/from_hex): Decode a lowercase/uppercase hex string into bytes.
- [`slice`](/docs/reference/bytes/slice): Copy src[start..end) into a new buffer (clamped to src bounds).
- [`eq`](/docs/reference/bytes/eq): True when a and b have equal length and equal bytes.
- [`find_from`](/docs/reference/bytes/find_from): First index of needle in hay at or after start, or -1.
