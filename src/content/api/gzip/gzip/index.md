---
slug: "gzip/gzip/index"
package: "gzip"
title: "gzip"
description: "Read and write gzip data (RFC 1952): a header and CRC32 around a DEFLATE body."
module: "gzip"
kind: "module"
name: "gzip"
origin: "package"
auto: false
order: 0
---

Part of the [gzip](/packages/gzip) package ([coil-gzip](https://github.com/ardax-corp/coil-gzip)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/gzip)).

Import what you use (`use path::*` is not allowed):

```coil
use gzip::{GzipError, Gzip};
```

## Types

| Name | Description |
|------|-------------|
| [`GzipError`](/packages/gzip/reference/gzip/GzipError) | Why [`compress`](/packages/gzip/reference/gzip/compress) or [`decompress`](/packages/gzip/reference/gzip/decompress) failed. |
| [`Gzip`](/packages/gzip/reference/gzip/Gzip) | The RFC 1952 codec, as a namespace for [`Gzip::compress`](/packages/gzip/reference/gzip/Gzip/compress) and [`Gzip::decompress`](/packages/gzip/reference/gzip/Gzip/decompress). |

## Functions

| Name | Description |
|------|-------------|
| [`crc32`](/packages/gzip/reference/gzip/crc32) | IEEE CRC-32 of `data` (the gzip / zlib / PNG checksum, ISO 3309), as an unsigned 32-bit value in an [`int`](/docs/reference/types/int). |
| [`compress`](/packages/gzip/reference/gzip/compress) | Wraps `data` in a single gzip member (RFC 1952). |
| [`decompress`](/packages/gzip/reference/gzip/decompress) | Decompresses one gzip member (RFC 1952) and checks its CRC32 and length. |
