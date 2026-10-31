---
slug: "gzip/gzip/decompress"
package: "gzip"
title: "decompress"
description: "Decompresses one gzip member (RFC 1952) and checks its CRC32 and length. Same as Gzip::decompress."
module: "gzip"
kind: "fn"
name: "decompress"
signature: "fn decompress(Vec<byte> data) -> Result<Vec<byte>, GzipError>"
import: "use gzip::{decompress};"
origin: "package"
source: "https://github.com/ardax-corp/coil-gzip/blob/28a79e639ba5ff86e3de889e4f948878d335a808/src/gzip.hy#L374"
order: 4
---

Decompresses one gzip member (RFC 1952) and checks its CRC32 and length. Same as [`Gzip::decompress`](/packages/gzip/reference/gzip/Gzip/decompress).

Reads members from other gzip writers too, including headers with a file
name, comment, extra field or header CRC. `data` must hold exactly one
member.

## Parameters

| Name | Type |
|------|------|
| `data` | `Vec<byte>` |

## Returns

`Result<Vec<byte>, GzipError>`

## Errors

Returns [`GzipError::Invalid`](/packages/gzip/reference/gzip/GzipError#variant-invalid) when the input is truncated, is not a gzip
member, has a malformed body, or fails the CRC32 or length check. It never
panics on bad input.

## Examples

```coil
use gzip::{compress, decompress, GzipError};
use string::{to_bytes};
use tests::assert;
fn roundtrip(Vec<byte> data) -> Result<Vec<byte>, GzipError> {
    return decompress(compress(data)?)?;
}

fn main() {
    let src = to_bytes("abracadabra");
    assert!((roundtrip(src).ok() ?? Vec::new()) == src);
    assert!(decompress(Vec::new()).is_err());
}
```

## See also

- [`Gzip::decompress`](/packages/gzip/reference/gzip/Gzip/decompress)
- [`gzip::GzipError`](/packages/gzip/reference/gzip/GzipError)
- [`crc32`](/packages/gzip/reference/gzip/crc32): IEEE CRC-32 of `data` (the gzip / zlib / PNG checksum, ISO 3309), as an unsigned 32-bit value in an `int`.
- [`compress`](/packages/gzip/reference/gzip/compress): Wraps `data` in a single gzip member (RFC 1952).
