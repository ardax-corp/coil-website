---
slug: "http/http/hpack/HpackStr/new"
package: "http"
title: "HpackStr::new"
description: "A cursor from its parts."
module: "http::hpack"
kind: "static method"
name: "new"
parent: "HpackStr"
signature: "pub static fn new(string value, int next) -> HpackStr"
import: "use http::hpack::{HpackStr};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/hpack.hy#L38"
order: 0
---

A cursor from its parts.

## Parameters

| Name | Type |
|------|------|
| `value` | `string` |
| `next` | `int` |

## Returns

`HpackStr`

## See also

- [`HpackStr`](/packages/http/reference/http/hpack/HpackStr): A decoded HPACK string literal (RFC 7541 §5.2) and the offset just past it.
