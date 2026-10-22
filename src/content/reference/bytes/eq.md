---
slug: "bytes/eq"
title: "eq"
description: "True when a and b have equal length and equal bytes."
module: "bytes"
kind: "fn"
name: "eq"
signature: "fn eq(Vec<byte> a, Vec<byte> b) -> bool ensures !result || a.len() == b.len()"
import: "use bytes::{eq};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/bytes.hy#L128"
order: 5
---

True when `a` and `b` have equal length and equal bytes.

## Parameters

| Name | Type |
|------|------|
| `a` | `Vec<byte>` |
| `b` | `Vec<byte>` |

## Returns

`bool`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures !result || a.len() == b.len()
```

## See also

- [`region_eq`](/docs/reference/bytes/region_eq): True when a[ao..ao+n) equals b[bo..bo+n) (caller guarantees bounds).
- [`to_hex`](/docs/reference/bytes/to_hex): Hex-encode a byte buffer (lowercase).
- [`from_hex`](/docs/reference/bytes/from_hex): Decode a lowercase/uppercase hex string into bytes.
- [`slice`](/docs/reference/bytes/slice): Copy src[start..end) into a new buffer (clamped to src bounds).
- [`concat`](/docs/reference/bytes/concat): Append b after a into a new buffer.
- [`find_from`](/docs/reference/bytes/find_from): First index of needle in hay at or after start, or -1.
