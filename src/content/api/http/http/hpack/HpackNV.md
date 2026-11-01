---
slug: "http/http/hpack/HpackNV"
package: "http"
title: "HpackNV"
description: "A decoded literal header field (name and value) and the offset just past it."
module: "http::hpack"
kind: "class"
name: "HpackNV"
signature: "class HpackNV"
import: "use http::hpack::{HpackNV};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/hpack.coil#L44"
order: 2
---

A decoded literal header field (name and value) and the offset just past it.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | `string` | Field name. |
| `value` | `string` | Field value. |
| `next` | `int` | Offset of the first byte after the field. |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/http/reference/http/hpack/HpackNV/new) | A cursor from its parts. |

## See also

- [`HpackInt`](/packages/http/reference/http/hpack/HpackInt): A decoded HPACK integer (RFC 7541 §5.1) and the offset just past it.
- [`HpackStr`](/packages/http/reference/http/hpack/HpackStr): A decoded HPACK string literal (RFC 7541 §5.2) and the offset just past it.
- [`HpackTable`](/packages/http/reference/http/hpack/HpackTable): An HPACK dynamic table (RFC 7541 §2.3), for one direction of one connection.
