---
slug: "stdlib/bytes/Bytes"
package: "stdlib"
title: "Bytes"
description: "A wrapper around a Vec<byte>, for APIs that want a distinct byte-buffer type."
module: "bytes"
kind: "class"
name: "Bytes"
signature: "class Bytes"
import: "use bytes::{Bytes};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/bytes.coil#L9"
order: 0
---

A wrapper around a [`Vec<byte>`](/docs/reference/prelude/Vec), for APIs that want a distinct byte-buffer type.

The functions in this module work on plain [`Vec<byte>`](/docs/reference/prelude/Vec); convert with
[`Bytes::from_vec`](/packages/stdlib/reference/bytes/Bytes/from_vec) and [`Bytes::to_vec`](/packages/stdlib/reference/bytes/Bytes/to_vec).

## Associated functions

| Name | Description |
|------|-------------|
| [`from_vec`](/packages/stdlib/reference/bytes/Bytes/from_vec) | Wraps `buf` without copying it. |
| [`to_vec`](/packages/stdlib/reference/bytes/Bytes/to_vec) | Returns the wrapped buffer. |

## See also

- [`Vec`](/docs/reference/prelude/Vec)
- [`Bytes::from_vec`](/packages/stdlib/reference/bytes/Bytes/from_vec)
- [`Bytes::to_vec`](/packages/stdlib/reference/bytes/Bytes/to_vec)
