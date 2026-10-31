---
slug: "deflate/deflate/compress"
package: "deflate"
title: "compress"
description: "Compresses data into a raw DEFLATE stream (RFC 1951, no zlib or gzip wrapper). Same as Deflate::compress."
module: "deflate"
kind: "fn"
name: "compress"
signature: "fn compress(Vec<byte> data) -> Result<Vec<byte>, DeflateError>"
import: "use deflate::{compress};"
origin: "package"
source: "https://github.com/ardax-corp/coil-deflate/blob/37456ec7936e9b8736b968aa3d0c702d47c36c56/src/deflate.hy#L794"
order: 2
---

Compresses `data` into a raw DEFLATE stream (RFC 1951, no zlib or gzip wrapper). Same as [`Deflate::compress`](/packages/deflate/reference/deflate/Deflate/compress).

Uses LZ77 matching with the fixed Huffman tables. Input with no repeats
can come out slightly larger than it went in.

## Parameters

| Name | Type |
|------|------|
| `data` | `Vec<byte>` |

## Returns

`Result<Vec<byte>, DeflateError>`

## Errors

The encoder does not fail today; the [`Result`](/docs/reference/prelude/Result) keeps the signature in step
with [`decompress`](/packages/deflate/reference/deflate/decompress).

## Examples

```coil
use deflate::{compress, decompress};
use string::{to_bytes, from_bytes};
use tests::assert;
let packed = compress(to_bytes("hello hello hello hello")).ok() ?? Vec::new();
let back = decompress(packed).ok() ?? Vec::new();
assert!((from_bytes(back).ok() ?? "") == "hello hello hello hello");
```

## See also

- [`Deflate::compress`](/packages/deflate/reference/deflate/Deflate/compress)
- [`Result`](/docs/reference/prelude/Result)
- [`deflate::decompress`](/packages/deflate/reference/deflate/decompress)
