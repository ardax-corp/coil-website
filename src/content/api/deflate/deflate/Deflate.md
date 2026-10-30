---
slug: "deflate/deflate/Deflate"
package: "deflate"
title: "Deflate"
description: "RFC 1951 codec. compress emits LZ77 + fixed Huffman; decompress inflates stored/fixed/dynamic."
module: "deflate"
kind: "class"
name: "Deflate"
signature: "class Deflate"
import: "use deflate::{Deflate};"
origin: "package"
source: "https://github.com/ardax-corp/coil-deflate/blob/553f55df4e433cd6f0cde585b01ebc764668cdfd/src/deflate.hy#L603"
order: 1
---

RFC 1951 codec. [`compress`](/packages/deflate/reference/deflate/Deflate/compress) emits LZ77 + fixed Huffman; [`decompress`](/packages/deflate/reference/deflate/Deflate/decompress) inflates stored/fixed/dynamic.

## Associated functions

| Name | Description |
|------|-------------|
| [`compress`](/packages/deflate/reference/deflate/Deflate/compress) | LZ77 + fixed Huffman. |
| [`decompress`](/packages/deflate/reference/deflate/Deflate/decompress) | Inflate a raw DEFLATE bitstream (stored, fixed Huffman, dynamic Huffman). |

## See also

- [`Deflate::compress`](/packages/deflate/reference/deflate/Deflate/compress)
- [`Deflate::decompress`](/packages/deflate/reference/deflate/Deflate/decompress)
