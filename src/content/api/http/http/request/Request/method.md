---
slug: "http/http/request/Request/method"
package: "http"
title: "Request::method"
description: "Method Request::method."
module: "http::request"
kind: "method"
name: "method"
parent: "Request"
signature: "pub fn method(string m)"
import: "use http::request::{Request};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/request.hy#L32"
order: 1
---

*No documentation yet.*

Called on a `Request` value as `value.method(…)`.

## Parameters

| Name | Type |
|------|------|
| `m` | `string` |

## See also

- [`Request`](/packages/http/reference/http/request/Request): Outbound HTTP request (method, URL string, headers, body).
- [`Request::new`](/packages/http/reference/http/request/Request/new)
- [`Request::url`](/packages/http/reference/http/request/Request/url)
- [`Request::header`](/packages/http/reference/http/request/Request/header)
- [`Request::body`](/packages/http/reference/http/request/Request/body)
- [`Request::method_val`](/packages/http/reference/http/request/Request/method_val)
- [`Request::url_val`](/packages/http/reference/http/request/Request/url_val)
- [`Request::headers_val`](/packages/http/reference/http/request/Request/headers_val)
