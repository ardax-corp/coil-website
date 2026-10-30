---
slug: "deflate/deflate/Deflate/compress"
package: "deflate"
title: "Deflate::compress"
description: "LZ77 + fixed Huffman. Not stored-only."
module: "deflate"
kind: "static method"
name: "compress"
parent: "Deflate"
signature: "pub static fn compress(Vec<byte> data) -> Result<Vec<byte>, DeflateError>"
import: "use deflate::{Deflate};"
origin: "package"
source: "https://github.com/ardax-corp/coil-deflate/blob/553f55df4e433cd6f0cde585b01ebc764668cdfd/src/deflate.hy#L609"
order: 0
---

LZ77 + fixed Huffman. Not stored-only.

## Parameters

| Name | Type |
|------|------|
| `data` | `Vec<byte>` |

## Returns

`Result<Vec<byte>, DeflateError>`

## See also

- [`Deflate`](/packages/deflate/reference/deflate/Deflate): RFC 1951 codec.
- [`Deflate::decompress`](/packages/deflate/reference/deflate/Deflate/decompress): Inflate a raw DEFLATE bitstream (stored, fixed Huffman, dynamic Huffman).
