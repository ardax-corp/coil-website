---
slug: "http/http/request/Request/body"
package: "http"
title: "Request::body"
description: "Sets the body. Content-Length is computed from it."
module: "http::request"
kind: "method"
name: "body"
parent: "Request"
signature: "pub fn body(Vec<byte> b)"
import: "use http::request::{Request};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/request.coil#L99"
order: 4
---

Sets the body. `Content-Length` is computed from it.

Called on a `Request` value as `value.body(…)`.

## Parameters

| Name | Type |
|------|------|
| `b` | `Vec<byte>` |

## See also

- [`Request`](/packages/http/reference/http/request/Request): An outbound HTTP request: method, URL, extra header fields and body.
- [`Request::new`](/packages/http/reference/http/request/Request/new): A `GET` request with no URL, headers or body.
- [`Request::method`](/packages/http/reference/http/request/Request/method): Sets the method (`GET`, `POST`, `PUT`, ...).
- [`Request::url`](/packages/http/reference/http/request/Request/url): Sets the absolute URL (`http://` or `https://`).
- [`Request::header`](/packages/http/reference/http/request/Request/header): Appends a header field.
- [`Request::method_val`](/packages/http/reference/http/request/Request/method_val): The method.
- [`Request::url_val`](/packages/http/reference/http/request/Request/url_val): The URL string.
- [`Request::headers_val`](/packages/http/reference/http/request/Request/headers_val): The extra header fields.
