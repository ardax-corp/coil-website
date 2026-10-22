---
slug: "bytes/to_hex"
title: "to_hex"
description: "Hex-encode a byte buffer (lowercase)."
module: "bytes"
kind: "fn"
name: "to_hex"
signature: "fn to_hex(Vec<byte> buf) -> string ensures result.len() == 2 * buf.len()"
import: "use bytes::{to_hex};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/bytes.hy#L48"
order: 1
---

Hex-encode a byte buffer (lowercase).

## Parameters

| Name | Type |
|------|------|
| `buf` | `Vec<byte>` |

## Returns

`string`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures result.len() == 2 * buf.len()
```

## See also

- [`region_eq`](/docs/reference/bytes/region_eq): True when a[ao..ao+n) equals b[bo..bo+n) (caller guarantees bounds).
- [`from_hex`](/docs/reference/bytes/from_hex): Decode a lowercase/uppercase hex string into bytes.
- [`slice`](/docs/reference/bytes/slice): Copy src[start..end) into a new buffer (clamped to src bounds).
- [`concat`](/docs/reference/bytes/concat): Append b after a into a new buffer.
- [`eq`](/docs/reference/bytes/eq): True when a and b have equal length and equal bytes.
- [`find_from`](/docs/reference/bytes/find_from): First index of needle in hay at or after start, or -1.
