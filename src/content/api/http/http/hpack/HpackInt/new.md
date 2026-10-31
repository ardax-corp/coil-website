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
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/hpack.hy#L23"
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
