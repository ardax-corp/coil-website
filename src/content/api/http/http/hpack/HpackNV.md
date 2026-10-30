---
slug: "http/http/hpack/HpackNV"
package: "http"
title: "HpackNV"
description: "Literal name/value plus resume offset."
module: "http::hpack"
kind: "class"
name: "HpackNV"
signature: "class HpackNV"
import: "use http::hpack::{HpackNV};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/hpack.hy#L38"
order: 2
---

Literal name/value plus resume offset.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | `string` |  |
| `value` | `string` |  |
| `next` | `int` |  |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/http/reference/http/hpack/HpackNV/new) |  |

## See also

- [`HpackInt`](/packages/http/reference/http/hpack/HpackInt): Integer decode cursor (RFC 7541 §5.1).
- [`HpackStr`](/packages/http/reference/http/hpack/HpackStr): String literal decode cursor (RFC 7541 §5.2).
- [`HpackTable`](/packages/http/reference/http/hpack/HpackTable): Decoder dynamic table (RFC 7541 §2.3).
