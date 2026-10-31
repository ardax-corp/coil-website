---
slug: "http/http/request/Request/url"
package: "http"
title: "Request::url"
description: "Sets the absolute URL (http:// or https://)."
module: "http::request"
kind: "method"
name: "url"
parent: "Request"
signature: "pub fn url(string u)"
import: "use http::request::{Request};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/request.hy#L89"
order: 2
---

Sets the absolute URL (`http://` or `https://`).

Called on a `Request` value as `value.url(…)`.

## Parameters

| Name | Type |
|------|------|
| `u` | `string` |

## See also

- [`Request`](/packages/http/reference/http/request/Request): An outbound HTTP request: method, URL, extra header fields and body.
- [`Request::new`](/packages/http/reference/http/request/Request/new): A `GET` request with no URL, headers or body.
- [`Request::method`](/packages/http/reference/http/request/Request/method): Sets the method (`GET`, `POST`, `PUT`, ...).
- [`Request::header`](/packages/http/reference/http/request/Request/header): Appends a header field.
- [`Request::body`](/packages/http/reference/http/request/Request/body): Sets the body.
- [`Request::method_val`](/packages/http/reference/http/request/Request/method_val): The method.
- [`Request::url_val`](/packages/http/reference/http/request/Request/url_val): The URL string.
- [`Request::headers_val`](/packages/http/reference/http/request/Request/headers_val): The extra header fields.
