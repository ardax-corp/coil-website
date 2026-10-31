---
slug: "http/http/request/Request/new"
package: "http"
title: "Request::new"
description: "A GET request with no URL, headers or body."
module: "http::request"
kind: "static method"
name: "new"
parent: "Request"
signature: "pub static fn new() -> Request"
import: "use http::request::{Request};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/request.hy#L77"
order: 0
---

A `GET` request with no URL, headers or body.

## Returns

`Request`

## See also

- [`Request`](/packages/http/reference/http/request/Request): An outbound HTTP request: method, URL, extra header fields and body.
- [`Request::method`](/packages/http/reference/http/request/Request/method): Sets the method (`GET`, `POST`, `PUT`, ...).
- [`Request::url`](/packages/http/reference/http/request/Request/url): Sets the absolute URL (`http://` or `https://`).
- [`Request::header`](/packages/http/reference/http/request/Request/header): Appends a header field.
- [`Request::body`](/packages/http/reference/http/request/Request/body): Sets the body.
- [`Request::method_val`](/packages/http/reference/http/request/Request/method_val): The method.
- [`Request::url_val`](/packages/http/reference/http/request/Request/url_val): The URL string.
- [`Request::headers_val`](/packages/http/reference/http/request/Request/headers_val): The extra header fields.
