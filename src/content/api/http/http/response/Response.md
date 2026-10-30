---
slug: "http/http/response/Response"
package: "http"
title: "Response"
description: "Parsed HTTP response (status, headers, body, optional trailing fields)."
module: "http::response"
kind: "class"
name: "Response"
signature: "class Response"
import: "use http::response::{Response};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/response.hy#L13"
order: 0
---

Parsed HTTP response (status, headers, body, optional trailing fields).

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `status` | `int` |  |
| `header_names` | `Vec<string>` |  |
| `header_values` | `Vec<string>` |  |
| `body` | `Vec<byte>` |  |
| `trailer_names` | `Vec<string>` |  |
| `trailer_values` | `Vec<string>` |  |

## Associated functions

| Name | Description |
|------|-------------|
| [`ok`](/packages/http/reference/http/response/Response/ok) | 200 OK with empty body and headers. |

## Methods

| Name | Description |
|------|-------------|
| [`status`](/packages/http/reference/http/response/Response/status) |  |
| [`header`](/packages/http/reference/http/response/Response/header) |  |
| [`body`](/packages/http/reference/http/response/Response/body) |  |
| [`trailer`](/packages/http/reference/http/response/Response/trailer) | Trailing header field, carried after the body on HTTP/2. |
