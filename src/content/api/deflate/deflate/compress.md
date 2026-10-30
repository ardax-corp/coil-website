---
slug: "deflate/deflate/compress"
package: "deflate"
title: "compress"
description: "LZ77 + fixed Huffman compress (raw DEFLATE, no zlib wrapper)."
module: "deflate"
kind: "fn"
name: "compress"
signature: "fn compress(Vec<byte> data) -> Result<Vec<byte>, DeflateError>"
import: "use deflate::{compress};"
origin: "package"
source: "https://github.com/ardax-corp/coil-deflate/blob/553f55df4e433cd6f0cde585b01ebc764668cdfd/src/deflate.hy#L683"
order: 2
---

LZ77 + fixed Huffman compress (raw DEFLATE, no zlib wrapper).

## Parameters

| Name | Type |
|------|------|
| `data` | `Vec<byte>` |

## Returns

`Result<Vec<byte>, DeflateError>`

## See also

- [`decompress`](/packages/deflate/reference/deflate/decompress): Inflate raw DEFLATE (RFC 1951 blocks).
