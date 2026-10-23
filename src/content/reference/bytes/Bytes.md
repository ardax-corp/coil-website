---
slug: "bytes/Bytes"
title: "Bytes"
description: "A wrapper around a Vec<byte>, for APIs that want a distinct byte-buffer type."
module: "bytes"
kind: "class"
name: "Bytes"
signature: "class Bytes"
import: "use bytes::{Bytes};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/59fa621e476425113f44db5753bef7abf7977a40/src/bytes.hy#L9"
order: 0
---

A wrapper around a [`Vec<byte>`](/docs/reference/prelude/Vec), for APIs that want a distinct byte-buffer type.

The functions in this module work on plain [`Vec<byte>`](/docs/reference/prelude/Vec); convert with
[`Bytes::from_vec`](/docs/reference/bytes/Bytes/from_vec) and [`Bytes::to_vec`](/docs/reference/bytes/Bytes/to_vec).

## Associated functions

| Name | Description |
|------|-------------|
| [`from_vec`](/docs/reference/bytes/Bytes/from_vec) | Wraps `buf` without copying it. |
| [`to_vec`](/docs/reference/bytes/Bytes/to_vec) | Returns the wrapped buffer. |

## See also

- [`Vec`](/docs/reference/prelude/Vec)
- [`Bytes::from_vec`](/docs/reference/bytes/Bytes/from_vec)
- [`Bytes::to_vec`](/docs/reference/bytes/Bytes/to_vec)
