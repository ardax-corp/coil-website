---
slug: "http/http/hpack/HpackTable"
package: "http"
title: "HpackTable"
description: "Decoder dynamic table (RFC 7541 §2.3). cap is SETTINGS_HEADER_TABLE_SIZE."
module: "http::hpack"
kind: "class"
name: "HpackTable"
signature: "class HpackTable"
import: "use http::hpack::{HpackTable};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/hpack.hy#L51"
order: 3
---

Decoder dynamic table (RFC 7541 §2.3). `cap` is SETTINGS_HEADER_TABLE_SIZE.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `names` | `Vec<string>` |  |
| `values` | `Vec<string>` |  |
| `cap` | `int` |  |
| `max_size` | `int` |  |
| `size` | `int` |  |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/http/reference/http/hpack/HpackTable/new) | Empty table; `cap` is the SETTINGS limit (RFC default 4096). |

## See also

- [`HpackInt`](/packages/http/reference/http/hpack/HpackInt): Integer decode cursor (RFC 7541 §5.1).
- [`HpackStr`](/packages/http/reference/http/hpack/HpackStr): String literal decode cursor (RFC 7541 §5.2).
- [`HpackNV`](/packages/http/reference/http/hpack/HpackNV): Literal name/value plus resume offset.
