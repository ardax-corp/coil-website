---
slug: "http/http/response/Response/status"
package: "http"
title: "Response::status"
description: "Method Response::status."
module: "http::response"
kind: "method"
name: "status"
parent: "Response"
signature: "pub fn status(int code)"
import: "use http::response::{Response};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/response.hy#L33"
order: 1
---

*No documentation yet.*

Called on a `Response` value as `value.status(…)`.

## Parameters

| Name | Type |
|------|------|
| `code` | `int` |

## See also

- [`Response`](/packages/http/reference/http/response/Response): Parsed HTTP response (status, headers, body, optional trailing fields).
- [`Response::ok`](/packages/http/reference/http/response/Response/ok): 200 OK with empty body and headers.
- [`Response::header`](/packages/http/reference/http/response/Response/header)
- [`Response::body`](/packages/http/reference/http/response/Response/body)
- [`Response::trailer`](/packages/http/reference/http/response/Response/trailer): Trailing header field, carried after the body on HTTP/2.
