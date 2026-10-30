---
slug: "deflate/deflate/index"
package: "deflate"
title: "deflate"
description: "RFC 1951 raw DEFLATE compress and decompress (no zlib or gzip wrapper)."
module: "deflate"
kind: "module"
name: "deflate"
origin: "package"
auto: false
order: 0
---

Part of the [deflate](/packages/deflate) package ([coil-deflate](https://github.com/ardax-corp/coil-deflate)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/deflate)).

Import what you use (`use path::*` is not allowed):

```coil
use deflate::{DeflateError, Deflate};
```

## Types

| Name | Description |
|------|-------------|
| [`DeflateError`](/packages/deflate/reference/deflate/DeflateError) | Inflate/deflate failure. |
| [`Deflate`](/packages/deflate/reference/deflate/Deflate) | RFC 1951 codec. |

## Functions

| Name | Description |
|------|-------------|
| [`compress`](/packages/deflate/reference/deflate/compress) | LZ77 + fixed Huffman compress (raw DEFLATE, no zlib wrapper). |
| [`decompress`](/packages/deflate/reference/deflate/decompress) | Inflate raw DEFLATE (RFC 1951 blocks). |
