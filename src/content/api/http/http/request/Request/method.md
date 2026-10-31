---
slug: "http/http/request/Request/method"
package: "http"
title: "Request::method"
description: "Sets the method (GET, POST, PUT, ...). It is sent as written."
module: "http::request"
kind: "method"
name: "method"
parent: "Request"
signature: "pub fn method(string m)"
import: "use http::request::{Request};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/request.hy#L84"
order: 1
---

Sets the method (`GET`, `POST`, `PUT`, ...). It is sent as written.

Called on a `Request` value as `value.method(…)`.

## Parameters

| Name | Type |
|------|------|
| `m` | `string` |

## See also

- [`Request`](/packages/http/reference/http/request/Request): An outbound HTTP request: method, URL, extra header fields and body.
- [`Request::new`](/packages/http/reference/http/request/Request/new): A `GET` request with no URL, headers or body.
- [`Request::url`](/packages/http/reference/http/request/Request/url): Sets the absolute URL (`http://` or `https://`).
- [`Request::header`](/packages/http/reference/http/request/Request/header): Appends a header field.
- [`Request::body`](/packages/http/reference/http/request/Request/body): Sets the body.
- [`Request::method_val`](/packages/http/reference/http/request/Request/method_val): The method.
- [`Request::url_val`](/packages/http/reference/http/request/Request/url_val): The URL string.
- [`Request::headers_val`](/packages/http/reference/http/request/Request/headers_val): The extra header fields.
