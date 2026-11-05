---
slug: "http/http/request/Request/method_val"
package: "http"
title: "Request::method_val"
description: "The method."
module: "http::request"
kind: "method"
name: "method_val"
parent: "Request"
signature: "pub fn method_val() -> string"
import: "use http::request::{Request};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/d2b81eaeb6f5b4e7d794874f593cb4e9406afd27/src/http/request.coil#L107"
order: 5
---

The method.

Called on a `Request` value as `value.method_val(…)`.

## Returns

`string`

## See also

- [`Request`](/packages/http/reference/http/request/Request): An outbound HTTP request: method, URL, extra header fields and body.
- [`Request::new`](/packages/http/reference/http/request/Request/new): A `GET` request with no URL, headers or body.
- [`Request::method`](/packages/http/reference/http/request/Request/method): Sets the method (`GET`, `POST`, `PUT`, ...).
- [`Request::url`](/packages/http/reference/http/request/Request/url): Sets the absolute URL (`http://` or `https://`).
- [`Request::header`](/packages/http/reference/http/request/Request/header): Appends a header field.
- [`Request::body`](/packages/http/reference/http/request/Request/body): Sets the body.
- [`Request::url_val`](/packages/http/reference/http/request/Request/url_val): The URL string.
- [`Request::headers_val`](/packages/http/reference/http/request/Request/headers_val): The extra header fields.
