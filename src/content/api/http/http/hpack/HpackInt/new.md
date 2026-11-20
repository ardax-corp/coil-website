---
slug: "http/http/hpack/HpackInt/new"
package: "http"
title: "HpackInt::new"
description: "A cursor from its parts."
module: "http::hpack"
kind: "static method"
name: "new"
parent: "HpackInt"
signature: "pub static fn new(int value, int next) -> HpackInt"
import: "use http::hpack::{HpackInt};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5b91a79d1460e4bb06d99db02a2a90ab6b76533f/src/http/hpack.coil#L23"
order: 0
---

A cursor from its parts.

## Parameters

| Name | Type |
|------|------|
| `value` | `int` |
| `next` | `int` |

## Returns

`HpackInt`

## See also

- [`HpackInt`](/packages/http/reference/http/hpack/HpackInt): A decoded HPACK integer (RFC 7541 §5.1) and the offset just past it.
