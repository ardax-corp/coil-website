---
slug: "gzip/gzip/crc32"
package: "gzip"
title: "crc32"
description: "IEEE CRC-32 of data (the gzip / zlib / PNG checksum, ISO 3309), as an unsigned 32-bit value in an int."
module: "gzip"
kind: "fn"
name: "crc32"
signature: "fn crc32(Vec<byte> data) -> int"
import: "use gzip::{crc32};"
origin: "package"
source: "https://github.com/ardax-corp/coil-gzip/blob/e76ad55603f9a41e6372eec358c524eaa141ef46/src/gzip.hy#L74"
order: 2
---

IEEE CRC-32 of `data` (the gzip / zlib / PNG checksum, ISO 3309), as an unsigned 32-bit value in an [`int`](/docs/reference/types/int).

Uses the reflected polynomial 0xEDB88320 with the usual all-ones initial
value and final XOR. The checksum of empty input is 0.

## Parameters

| Name | Type |
|------|------|
| `data` | `Vec<byte>` |

## Returns

`int`

## Examples

```coil
use gzip::{crc32};
use string::{to_bytes};
use tests::assert;
// The standard check value, 0xCBF43926.
assert!(crc32(to_bytes("123456789")) == 3421780262);
assert!(crc32(Vec::new()) == 0);
```

## See also

- [`int`](/docs/reference/types/int)
- [`compress`](/packages/gzip/reference/gzip/compress): Wraps `data` in a single gzip member (RFC 1952).
- [`decompress`](/packages/gzip/reference/gzip/decompress): Decompresses one gzip member (RFC 1952) and checks its CRC32 and length.
