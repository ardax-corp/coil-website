---
slug: "http/http/hpack/HpackNV/new"
package: "http"
title: "HpackNV::new"
description: "A cursor from its parts."
module: "http::hpack"
kind: "static method"
name: "new"
parent: "HpackNV"
signature: "pub static fn new(string name, string value, int next) -> HpackNV"
import: "use http::hpack::{HpackNV};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/hpack.coil#L55"
order: 0
---

A cursor from its parts.

## Parameters

| Name | Type |
|------|------|
| `name` | `string` |
| `value` | `string` |
| `next` | `int` |

## Returns

`HpackNV`

## See also

- [`HpackNV`](/packages/http/reference/http/hpack/HpackNV): A decoded literal header field (name and value) and the offset just past it.
