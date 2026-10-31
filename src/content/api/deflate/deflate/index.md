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
| [`DeflateError`](/packages/deflate/reference/deflate/DeflateError) | Why [`compress`](/packages/deflate/reference/deflate/compress) or [`decompress`](/packages/deflate/reference/deflate/decompress) failed. |
| [`Deflate`](/packages/deflate/reference/deflate/Deflate) | The RFC 1951 codec, as a namespace for [`Deflate::compress`](/packages/deflate/reference/deflate/Deflate/compress) and [`Deflate::decompress`](/packages/deflate/reference/deflate/Deflate/decompress). |

## Functions

| Name | Description |
|------|-------------|
| [`compress`](/packages/deflate/reference/deflate/compress) | Compresses `data` into a raw DEFLATE stream (RFC 1951, no zlib or gzip wrapper). |
| [`decompress`](/packages/deflate/reference/deflate/decompress) | Decompresses a raw DEFLATE stream (RFC 1951) back to its bytes. |
