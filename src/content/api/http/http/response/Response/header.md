---
slug: "http/http/response/Response/header"
package: "http"
title: "Response::header"
description: "Method Response::header."
module: "http::response"
kind: "method"
name: "header"
parent: "Response"
signature: "pub fn header(string name, string value)"
import: "use http::response::{Response};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/response.hy#L37"
order: 2
---

*No documentation yet.*

Called on a `Response` value as `value.header(…)`.

## Parameters

| Name | Type |
|------|------|
| `name` | `string` |
| `value` | `string` |

## See also

- [`Response`](/packages/http/reference/http/response/Response): Parsed HTTP response (status, headers, body, optional trailing fields).
- [`Response::ok`](/packages/http/reference/http/response/Response/ok): 200 OK with empty body and headers.
- [`Response::status`](/packages/http/reference/http/response/Response/status)
- [`Response::body`](/packages/http/reference/http/response/Response/body)
- [`Response::trailer`](/packages/http/reference/http/response/Response/trailer): Trailing header field, carried after the body on HTTP/2.
