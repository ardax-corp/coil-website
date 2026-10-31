---
slug: "stdlib/bytes/Bytes/from_vec"
package: "stdlib"
title: "Bytes::from_vec"
description: "Wraps buf without copying it."
module: "bytes"
kind: "static method"
name: "from_vec"
parent: "Bytes"
signature: "pub static fn from_vec(Vec<byte> buf) -> Bytes"
import: "use bytes::{Bytes};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/bytes.hy#L15"
order: 0
---

Wraps `buf` without copying it.

## Parameters

| Name | Type |
|------|------|
| `buf` | `Vec<byte>` |

## Returns

`Bytes`

## See also

- [`Bytes`](/packages/stdlib/reference/bytes/Bytes): A wrapper around a `Vec<byte>`, for APIs that want a distinct byte-buffer type.
- [`Bytes::to_vec`](/packages/stdlib/reference/bytes/Bytes/to_vec): Returns the wrapped buffer.
