---
slug: "http/http/request/Request"
package: "http"
title: "Request"
description: "Outbound HTTP request (method, URL string, headers, body)."
module: "http::request"
kind: "class"
name: "Request"
signature: "class Request"
import: "use http::request::{Request};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/request.hy#L18"
order: 0
---

Outbound HTTP request (method, URL string, headers, body).

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `method` | `string` |  |
| `url_str` | `string` |  |
| `headers` | `Headers` |  |
| `body` | `Vec<byte>` |  |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/http/reference/http/request/Request/new) |  |

## Methods

| Name | Description |
|------|-------------|
| [`method`](/packages/http/reference/http/request/Request/method) |  |
| [`url`](/packages/http/reference/http/request/Request/url) |  |
| [`header`](/packages/http/reference/http/request/Request/header) |  |
| [`body`](/packages/http/reference/http/request/Request/body) |  |
| [`method_val`](/packages/http/reference/http/request/Request/method_val) |  |
| [`url_val`](/packages/http/reference/http/request/Request/url_val) |  |
| [`headers_val`](/packages/http/reference/http/request/Request/headers_val) |  |
| [`body_val`](/packages/http/reference/http/request/Request/body_val) |  |
