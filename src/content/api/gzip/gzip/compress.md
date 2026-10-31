---
slug: "gzip/gzip/compress"
package: "gzip"
title: "compress"
description: "Wraps data in a single gzip member (RFC 1952). Same as Gzip::compress."
module: "gzip"
kind: "fn"
name: "compress"
signature: "fn compress(Vec<byte> data) -> Result<Vec<byte>, GzipError>"
import: "use gzip::{compress};"
origin: "package"
source: "https://github.com/ardax-corp/coil-gzip/blob/e76ad55603f9a41e6372eec358c524eaa141ef46/src/gzip.hy#L341"
order: 3
---

Wraps `data` in a single gzip member (RFC 1952). Same as [`Gzip::compress`](/packages/gzip/reference/gzip/Gzip/compress).

The body is raw DEFLATE from the [`deflate`](/packages/deflate/reference/deflate) package; the trailer is the
CRC32 and length of `data`.

## Parameters

| Name | Type |
|------|------|
| `data` | `Vec<byte>` |

## Returns

`Result<Vec<byte>, GzipError>`

## Errors

Returns [`GzipError::Invalid`](/packages/gzip/reference/gzip/GzipError#variant-invalid) only if the DEFLATE encoder fails, which it
does not today.

## Examples

```coil
use gzip::{compress, decompress};
use string::{to_bytes, from_bytes};
use tests::assert;
let gz = compress(to_bytes("hello hello hello hello")).ok() ?? Vec::new();
let back = decompress(gz).ok() ?? Vec::new();
assert!((from_bytes(back).ok() ?? "") == "hello hello hello hello");
```

## See also

- [`Gzip::compress`](/packages/gzip/reference/gzip/Gzip/compress)
- [`deflate`](/packages/deflate/reference/deflate)
- [`gzip::GzipError`](/packages/gzip/reference/gzip/GzipError)
- [`crc32`](/packages/gzip/reference/gzip/crc32): IEEE CRC-32 of `data` (the gzip / zlib / PNG checksum, ISO 3309), as an unsigned 32-bit value in an `int`.
- [`decompress`](/packages/gzip/reference/gzip/decompress): Decompresses one gzip member (RFC 1952) and checks its CRC32 and length.
