---
slug: "deflate/deflate/Deflate/decompress"
package: "deflate"
title: "Deflate::decompress"
description: "Inflate a raw DEFLATE bitstream (stored, fixed Huffman, dynamic Huffman)."
module: "deflate"
kind: "static method"
name: "decompress"
parent: "Deflate"
signature: "pub static fn decompress(Vec<byte> data) -> Result<Vec<byte>, DeflateError>"
import: "use deflate::{Deflate};"
origin: "package"
source: "https://github.com/ardax-corp/coil-deflate/blob/553f55df4e433cd6f0cde585b01ebc764668cdfd/src/deflate.hy#L650"
order: 1
---

Inflate a raw DEFLATE bitstream (stored, fixed Huffman, dynamic Huffman).

## Parameters

| Name | Type |
|------|------|
| `data` | `Vec<byte>` |

## Returns

`Result<Vec<byte>, DeflateError>`

## See also

- [`Deflate`](/packages/deflate/reference/deflate/Deflate): RFC 1951 codec.
- [`Deflate::compress`](/packages/deflate/reference/deflate/Deflate/compress): LZ77 + fixed Huffman.
