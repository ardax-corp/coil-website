---
slug: "stdlib/bytes/Bytes/to_vec"
package: "stdlib"
title: "Bytes::to_vec"
description: "Returns the wrapped buffer."
module: "bytes"
kind: "static method"
name: "to_vec"
parent: "Bytes"
signature: "pub static fn to_vec(Bytes b) -> Vec<byte>"
import: "use bytes::{Bytes};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/bytes.coil#L20"
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

- [`Bytes`](/packages/stdlib/reference/bytes/Bytes): A wrapper around a `Vec<byte>`, for APIs that want a distinct byte-buffer type.
- [`Bytes::from_vec`](/packages/stdlib/reference/bytes/Bytes/from_vec): Wraps `buf` without copying it.
