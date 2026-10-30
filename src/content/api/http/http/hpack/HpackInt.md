---
slug: "http/http/hpack/HpackInt"
package: "http"
title: "HpackInt"
description: "Integer decode cursor (RFC 7541 §5.1)."
module: "http::hpack"
kind: "class"
name: "HpackInt"
signature: "class HpackInt"
import: "use http::hpack::{HpackInt};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/hpack.hy#L14"
order: 0
---

Integer decode cursor (RFC 7541 §5.1).

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `value` | `int` |  |
| `next` | `int` |  |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/http/reference/http/hpack/HpackInt/new) |  |

## See also

- [`HpackStr`](/packages/http/reference/http/hpack/HpackStr): String literal decode cursor (RFC 7541 §5.2).
- [`HpackNV`](/packages/http/reference/http/hpack/HpackNV): Literal name/value plus resume offset.
- [`HpackTable`](/packages/http/reference/http/hpack/HpackTable): Decoder dynamic table (RFC 7541 §2.3).
