---
slug: "bytes/slice"
title: "slice"
description: "Copy src[start..end) into a new buffer (clamped to src bounds)."
module: "bytes"
kind: "fn"
name: "slice"
signature: "fn slice(Vec<byte> src, int start, int end) -> Vec<byte> ensures result.len() <= src.len() ensures start < end || result.len() == 0"
import: "use bytes::{slice};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/bytes.hy#L90"
order: 3
---

Copy `src[start..end)` into a new buffer (clamped to `src` bounds).

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

## See also

- [`region_eq`](/docs/reference/bytes/region_eq): True when a[ao..ao+n) equals b[bo..bo+n) (caller guarantees bounds).
- [`to_hex`](/docs/reference/bytes/to_hex): Hex-encode a byte buffer (lowercase).
- [`from_hex`](/docs/reference/bytes/from_hex): Decode a lowercase/uppercase hex string into bytes.
- [`concat`](/docs/reference/bytes/concat): Append b after a into a new buffer.
- [`eq`](/docs/reference/bytes/eq): True when a and b have equal length and equal bytes.
- [`find_from`](/docs/reference/bytes/find_from): First index of needle in hay at or after start, or -1.
