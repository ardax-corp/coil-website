---
slug: "http/http/hpack/HpackStr"
package: "http"
title: "HpackStr"
description: "String literal decode cursor (RFC 7541 §5.2)."
module: "http::hpack"
kind: "class"
name: "HpackStr"
signature: "class HpackStr"
import: "use http::hpack::{HpackStr};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/hpack.hy#L26"
order: 1
---

String literal decode cursor (RFC 7541 §5.2).

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `value` | `string` |  |
| `next` | `int` |  |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/http/reference/http/hpack/HpackStr/new) |  |

## See also

- [`HpackInt`](/packages/http/reference/http/hpack/HpackInt): Integer decode cursor (RFC 7541 §5.1).
- [`HpackNV`](/packages/http/reference/http/hpack/HpackNV): Literal name/value plus resume offset.
- [`HpackTable`](/packages/http/reference/http/hpack/HpackTable): Decoder dynamic table (RFC 7541 §2.3).
