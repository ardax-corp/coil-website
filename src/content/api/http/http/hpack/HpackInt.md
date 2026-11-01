---
slug: "http/http/hpack/HpackInt"
package: "http"
title: "HpackInt"
description: "A decoded HPACK integer (RFC 7541 §5.1) and the offset just past it."
module: "http::hpack"
kind: "class"
name: "HpackInt"
signature: "class HpackInt"
import: "use http::hpack::{HpackInt};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/hpack.coil#L14"
order: 0
---

A decoded HPACK integer (RFC 7541 §5.1) and the offset just past it.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `value` | `int` | The decoded integer. |
| `next` | `int` | Offset of the first byte after the integer. |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/http/reference/http/hpack/HpackInt/new) | A cursor from its parts. |

## See also

- [`HpackStr`](/packages/http/reference/http/hpack/HpackStr): A decoded HPACK string literal (RFC 7541 §5.2) and the offset just past it.
- [`HpackNV`](/packages/http/reference/http/hpack/HpackNV): A decoded literal header field (name and value) and the offset just past it.
- [`HpackTable`](/packages/http/reference/http/hpack/HpackTable): An HPACK dynamic table (RFC 7541 §2.3), for one direction of one connection.
