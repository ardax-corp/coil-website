---
slug: "bytes/Bytes/to_vec"
title: "Bytes::to_vec"
description: "Returns the wrapped buffer."
module: "bytes"
kind: "static method"
name: "to_vec"
parent: "Bytes"
signature: "pub static fn to_vec(Bytes b) -> Vec<byte>"
import: "use bytes::{Bytes};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/59fa621e476425113f44db5753bef7abf7977a40/src/bytes.hy#L20"
order: 1
---

Returns the wrapped buffer.

## Parameters

| Name | Type |
|------|------|
| `b` | `Bytes` |

## Returns

`Vec<byte>`

## See also

- [`Bytes`](/docs/reference/bytes/Bytes): A wrapper around a `Vec<byte>`, for APIs that want a distinct byte-buffer type.
- [`Bytes::from_vec`](/docs/reference/bytes/Bytes/from_vec): Wraps `buf` without copying it.
