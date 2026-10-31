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
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/hpack.coil#L23"
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
