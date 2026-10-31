---
slug: "http/http/request/Request/body_val"
package: "http"
title: "Request::body_val"
description: "The body."
module: "http::request"
kind: "method"
name: "body_val"
parent: "Request"
signature: "pub fn body_val() -> Vec<byte>"
import: "use http::request::{Request};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/request.hy#L119"
order: 8
---

The body.

Called on a `Request` value as `value.body_val(…)`.

## Returns

`Vec<byte>`

## See also

- [`Request`](/packages/http/reference/http/request/Request): An outbound HTTP request: method, URL, extra header fields and body.
- [`Request::new`](/packages/http/reference/http/request/Request/new): A `GET` request with no URL, headers or body.
- [`Request::method`](/packages/http/reference/http/request/Request/method): Sets the method (`GET`, `POST`, `PUT`, ...).
- [`Request::url`](/packages/http/reference/http/request/Request/url): Sets the absolute URL (`http://` or `https://`).
- [`Request::header`](/packages/http/reference/http/request/Request/header): Appends a header field.
- [`Request::body`](/packages/http/reference/http/request/Request/body): Sets the body.
- [`Request::method_val`](/packages/http/reference/http/request/Request/method_val): The method.
- [`Request::url_val`](/packages/http/reference/http/request/Request/url_val): The URL string.
