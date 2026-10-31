---
slug: "deflate/deflate/decompress"
package: "deflate"
title: "decompress"
description: "Decompresses a raw DEFLATE stream (RFC 1951) back to its bytes. Same as Deflate::decompress."
module: "deflate"
kind: "fn"
name: "decompress"
signature: "fn decompress(Vec<byte> data) -> Result<Vec<byte>, DeflateError>"
import: "use deflate::{decompress};"
origin: "package"
source: "https://github.com/ardax-corp/coil-deflate/blob/37456ec7936e9b8736b968aa3d0c702d47c36c56/src/deflate.hy#L825"
order: 3
---

Decompresses a raw DEFLATE stream (RFC 1951) back to its bytes. Same as [`Deflate::decompress`](/packages/deflate/reference/deflate/Deflate/decompress).

Accepts stored, fixed Huffman and dynamic Huffman blocks. The input must be
bare DEFLATE: strip a gzip or zlib header and trailer first.

## Parameters

| Name | Type |
|------|------|
| `data` | `Vec<byte>` |

## Returns

`Result<Vec<byte>, DeflateError>`

## Errors

Returns [`DeflateError::Invalid`](/packages/deflate/reference/deflate/DeflateError#variant-invalid) when the input is empty, truncated or
malformed. It never panics on bad input.

## Examples

```coil
use deflate::{compress, decompress, DeflateError};
use string::{to_bytes};
use tests::assert;
fn roundtrip(Vec<byte> data) -> Result<Vec<byte>, DeflateError> {
    return decompress(compress(data)?)?;
}

fn main() {
    let src = to_bytes("abracadabra");
    assert!((roundtrip(src).ok() ?? Vec::new()) == src);
    assert!(decompress(Vec::new()).is_err());
}
```

## See also

- [`Deflate::decompress`](/packages/deflate/reference/deflate/Deflate/decompress)
- [`deflate::DeflateError`](/packages/deflate/reference/deflate/DeflateError)
- [`compress`](/packages/deflate/reference/deflate/compress): Compresses `data` into a raw DEFLATE stream (RFC 1951, no zlib or gzip wrapper).
