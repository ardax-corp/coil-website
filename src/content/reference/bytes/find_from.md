---
slug: "bytes/find_from"
title: "find_from"
description: "First index of needle in hay at or after start, or -1."
module: "bytes"
kind: "fn"
name: "find_from"
signature: "fn find_from(Vec<byte> hay, Vec<byte> needle, int start) -> int ensures result >= -1 && result <= hay.len() ensures result < 0 || result >= start || (start > hay.len() && result == hay.len()) ensures result < 0 || (result + needle.len() <= hay.len() && region_eq(hay, result, needle, 0, needle.len()))"
import: "use bytes::{find_from};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/bytes.hy#L138"
order: 6
---

First index of `needle` in `hay` at or after `start`, or `-1`.

## Parameters

| Name | Type |
|------|------|
| `hay` | `Vec<byte>` |
| `needle` | `Vec<byte>` |
| `start` | `int` |

## Returns

`int`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures result >= -1 && result <= hay.len()
ensures result < 0 || result >= start || (start > hay.len() && result == hay.len())
ensures result < 0 || (result + needle.len() <= hay.len() && region_eq(hay, result, needle, 0, needle.len()))
```

## See also

- [`region_eq`](/docs/reference/bytes/region_eq): True when a[ao..ao+n) equals b[bo..bo+n) (caller guarantees bounds).
- [`to_hex`](/docs/reference/bytes/to_hex): Hex-encode a byte buffer (lowercase).
- [`from_hex`](/docs/reference/bytes/from_hex): Decode a lowercase/uppercase hex string into bytes.
- [`slice`](/docs/reference/bytes/slice): Copy src[start..end) into a new buffer (clamped to src bounds).
- [`concat`](/docs/reference/bytes/concat): Append b after a into a new buffer.
- [`eq`](/docs/reference/bytes/eq): True when a and b have equal length and equal bytes.
