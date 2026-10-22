---
slug: "bytes/starts_with"
title: "starts_with"
description: "Returns true when buf begins with prefix."
module: "bytes"
kind: "fn"
name: "starts_with"
signature: "fn starts_with(Vec<byte> buf, Vec<byte> prefix) -> bool"
import: "use bytes::{starts_with};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/de7dc3b341ae9bbbcdd775a2dfa282870f0cbf82/src/bytes.hy#L269"
order: 11
---

Returns `true` when `buf` begins with `prefix`.

## Parameters

| Name | Type |
|------|------|
| `buf` | `Vec<byte>` |
| `prefix` | `Vec<byte>` |

## Returns

`bool`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures !result || prefix.len() <= buf.len()
```

## Examples

```coil
use bytes::{starts_with};
use tests::assert;
assert!(starts_with("GET /", "GET"));
assert!(!starts_with("GE", "GET"));
```

## See also

- [`region_eq`](/docs/reference/bytes/region_eq): True when a[ao..ao+n) equals b[bo..bo+n) (caller guarantees bounds).
- [`to_hex`](/docs/reference/bytes/to_hex): Encodes buf as lowercase hexadecimal, two digits per byte.
- [`from_hex`](/docs/reference/bytes/from_hex): Decodes hexadecimal text (either case) into bytes.
- [`slice`](/docs/reference/bytes/slice): Returns a copy of src[start..end] (end exclusive), with both offsets clamped to the buffer.
- [`concat`](/docs/reference/bytes/concat): Returns a new buffer holding a followed by b.
- [`eq`](/docs/reference/bytes/eq): Returns true when a and b have the same length and the same bytes.
- [`find_from`](/docs/reference/bytes/find_from): Returns the offset of the first needle in hay at or after start, or -1.
- [`find`](/docs/reference/bytes/find): Returns the offset of the first needle in hay, or -1.
