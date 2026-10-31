---
slug: "http/http/hpack/HpackStr"
package: "http"
title: "HpackStr"
description: "A decoded HPACK string literal (RFC 7541 §5.2) and the offset just past it."
module: "http::hpack"
kind: "class"
name: "HpackStr"
signature: "class HpackStr"
import: "use http::hpack::{HpackStr};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/hpack.hy#L29"
order: 1
---

A decoded HPACK string literal (RFC 7541 §5.2) and the offset just past it.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `value` | `string` | The decoded string. |
| `next` | `int` | Offset of the first byte after the string. |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/http/reference/http/hpack/HpackStr/new) | A cursor from its parts. |

## See also

- [`HpackInt`](/packages/http/reference/http/hpack/HpackInt): A decoded HPACK integer (RFC 7541 §5.1) and the offset just past it.
- [`HpackNV`](/packages/http/reference/http/hpack/HpackNV): A decoded literal header field (name and value) and the offset just past it.
- [`HpackTable`](/packages/http/reference/http/hpack/HpackTable): An HPACK dynamic table (RFC 7541 §2.3), for one direction of one connection.
