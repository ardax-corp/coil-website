---
slug: "bytes/region_eq"
title: "region_eq"
description: "True when a[ao..ao+n) equals b[bo..bo+n) (caller guarantees bounds)."
module: "bytes"
kind: "fn"
name: "region_eq"
signature: "fn region_eq(Vec<byte> a, int ao, Vec<byte> b, int bo, int n) -> bool requires ao >= 0 && bo >= 0 && n >= 0 requires ao + n <= a.len() && bo + n <= b.len()"
import: "use bytes::{region_eq};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/bytes.hy#L20"
order: 0
---

True when `a[ao..ao+n)` equals `b[bo..bo+n)` (caller guarantees bounds).

## Parameters

| Name | Type |
|------|------|
| `a` | `Vec<byte>` |
| `ao` | `int` |
| `b` | `Vec<byte>` |
| `bo` | `int` |
| `n` | `int` |

## Returns

`bool`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
requires ao >= 0 && bo >= 0 && n >= 0
requires ao + n <= a.len() && bo + n <= b.len()
```

## See also

- [`to_hex`](/docs/reference/bytes/to_hex): Hex-encode a byte buffer (lowercase).
- [`from_hex`](/docs/reference/bytes/from_hex): Decode a lowercase/uppercase hex string into bytes.
- [`slice`](/docs/reference/bytes/slice): Copy src[start..end) into a new buffer (clamped to src bounds).
- [`concat`](/docs/reference/bytes/concat): Append b after a into a new buffer.
- [`eq`](/docs/reference/bytes/eq): True when a and b have equal length and equal bytes.
- [`find_from`](/docs/reference/bytes/find_from): First index of needle in hay at or after start, or -1.
