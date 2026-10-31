---
slug: "gzip/gzip/Gzip/decompress"
package: "gzip"
title: "Gzip::decompress"
description: "Decompresses one gzip member (RFC 1952) and checks its trailer."
module: "gzip"
kind: "static method"
name: "decompress"
parent: "Gzip"
signature: "pub static fn decompress(Vec<byte> data) -> Result<Vec<byte>, GzipError>"
import: "use gzip::{Gzip};"
origin: "package"
source: "https://github.com/ardax-corp/coil-gzip/blob/28a79e639ba5ff86e3de889e4f948878d335a808/src/gzip.hy#L301"
order: 1
---

Decompresses one gzip member (RFC 1952) and checks its trailer.

The header may carry the optional extra field, file name, comment and
header CRC; they are skipped, not returned. The last 8 bytes of `data`
are taken as the CRC32 and ISIZE trailer, so `data` must hold exactly
one member: concatenated members are not supported.

## Parameters

| Name | Type |
|------|------|
| `data` | `Vec<byte>` |

## Returns

`Result<Vec<byte>, GzipError>`

## Errors

Returns [`GzipError::Invalid`](/packages/gzip/reference/gzip/GzipError#variant-invalid) for a short or truncated input, wrong magic
bytes, a method other than DEFLATE, reserved flag bits, a malformed
DEFLATE body, or a CRC32 or length that does not match the output.

## Examples

```coil
use gzip::{Gzip};
use string::{to_bytes};
use tests::assert;
let gz = Gzip::compress(to_bytes("hello")).ok() ?? Vec::new();
assert!((Gzip::decompress(gz).ok() ?? Vec::new()) == to_bytes("hello"));
// Flip a body byte: the CRC check (or the inflater) rejects it.
gz[12] = (gz[12] as int ^ 1) as byte;
assert!(Gzip::decompress(gz).is_err());
```

## See also

- [`gzip::GzipError`](/packages/gzip/reference/gzip/GzipError)
- [`Gzip`](/packages/gzip/reference/gzip/Gzip): The RFC 1952 codec, as a namespace for `Gzip::compress` and `Gzip::decompress`.
- [`Gzip::compress`](/packages/gzip/reference/gzip/Gzip/compress): Wraps `data` in a single gzip member (RFC 1952).
