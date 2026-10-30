---
slug: "deflate/deflate/decompress"
package: "deflate"
title: "decompress"
description: "Inflate raw DEFLATE (RFC 1951 blocks)."
module: "deflate"
kind: "fn"
name: "decompress"
signature: "fn decompress(Vec<byte> data) -> Result<Vec<byte>, DeflateError>"
import: "use deflate::{decompress};"
origin: "package"
source: "https://github.com/ardax-corp/coil-deflate/blob/553f55df4e433cd6f0cde585b01ebc764668cdfd/src/deflate.hy#L688"
order: 3
---

Inflate raw DEFLATE (RFC 1951 blocks).

## Parameters

| Name | Type |
|------|------|
| `data` | `Vec<byte>` |

## Returns

`Result<Vec<byte>, DeflateError>`

## See also

- [`compress`](/packages/deflate/reference/deflate/compress): LZ77 + fixed Huffman compress (raw DEFLATE, no zlib wrapper).
