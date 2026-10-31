---
slug: "gzip/gzip/Gzip/compress"
package: "gzip"
title: "Gzip::compress"
description: "Wraps data in a single gzip member (RFC 1952)."
module: "gzip"
kind: "static method"
name: "compress"
parent: "Gzip"
signature: "pub static fn compress(Vec<byte> data) -> Result<Vec<byte>, GzipError>"
import: "use gzip::{Gzip};"
origin: "package"
source: "https://github.com/ardax-corp/coil-gzip/blob/e76ad55603f9a41e6372eec358c524eaa141ef46/src/gzip.coil#L247"
order: 0
---

Wraps `data` in a single gzip member (RFC 1952).

The member is a 10-byte header with no flags, no file name and a zero
modification time (OS byte 255, unknown), the `Deflate::compress`
body, then the CRC32 and the input length mod 2^32, both little-endian.
The output reads with `gunzip` and other gzip tools.

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
use gzip::{Gzip};
use string::{to_bytes};
use tests::assert;
let gz = Gzip::compress(to_bytes("hello")).ok() ?? Vec::new();
// Magic bytes 1f 8b, then method 8 (DEFLATE).
assert!(gz[0] == 31 as byte && gz[1] == 139 as byte && gz[2] == 8 as byte);
```

## See also

- [`gzip::GzipError`](/packages/gzip/reference/gzip/GzipError)
- [`Gzip`](/packages/gzip/reference/gzip/Gzip): The RFC 1952 codec, as a namespace for `Gzip::compress` and `Gzip::decompress`.
- [`Gzip::decompress`](/packages/gzip/reference/gzip/Gzip/decompress): Decompresses one gzip member (RFC 1952) and checks its trailer.
