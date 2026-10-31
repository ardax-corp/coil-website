---
slug: "deflate/deflate/Deflate/decompress"
package: "deflate"
title: "Deflate::decompress"
description: "Decompresses a raw DEFLATE stream (RFC 1951) back to its bytes."
module: "deflate"
kind: "static method"
name: "decompress"
parent: "Deflate"
signature: "pub static fn decompress(Vec<byte> data) -> Result<Vec<byte>, DeflateError>"
import: "use deflate::{Deflate};"
origin: "package"
source: "https://github.com/ardax-corp/coil-deflate/blob/e562e799729a95ee0116632f1b9a2061e9da51f2/src/deflate.hy#L741"
order: 1
---

Decompresses a raw DEFLATE stream (RFC 1951) back to its bytes.

Reads stored, fixed Huffman and dynamic Huffman blocks until the block
marked final, so streams from other encoders (zlib, gzip bodies) work.
Bytes after the final block are ignored.

## Parameters

| Name | Type |
|------|------|
| `data` | `Vec<byte>` |

## Returns

`Result<Vec<byte>, DeflateError>`

## Errors

Returns [`DeflateError::Invalid`](/packages/deflate/reference/deflate/DeflateError#variant-invalid) for empty input, a truncated stream, the
reserved block type, a bad stored-block length, malformed Huffman
tables or codes, or a back-reference past the start of the output.

## Examples

```coil
use deflate::{Deflate};
use tests::assert;
// A fixed-Huffman block holding just the end-of-block code.
let empty: Vec<byte> = Vec::new();
empty.push(3 as byte);
empty.push(0 as byte);
let out = Deflate::decompress(empty).ok() ?? Vec::new();
assert!(out.len() == 0);
assert!(Deflate::decompress(Vec::new()).is_err());
```

## See also

- [`deflate::DeflateError`](/packages/deflate/reference/deflate/DeflateError)
- [`Deflate`](/packages/deflate/reference/deflate/Deflate): The RFC 1951 codec, as a namespace for `Deflate::compress` and `Deflate::decompress`.
- [`Deflate::compress`](/packages/deflate/reference/deflate/Deflate/compress): Compresses `data` into a raw DEFLATE stream (RFC 1951, no zlib or gzip wrapper).
