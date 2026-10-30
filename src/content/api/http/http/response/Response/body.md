---
slug: "http/http/response/Response/body"
package: "http"
title: "Response::body"
description: "Method Response::body."
module: "http::response"
kind: "method"
name: "body"
parent: "Response"
signature: "pub fn body(Vec<byte> b)"
import: "use http::response::{Response};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/response.hy#L42"
order: 3
---

*No documentation yet.*

Called on a `Response` value as `value.body(…)`.

## Parameters

| Name | Type |
|------|------|
| `b` | `Vec<byte>` |

## See also

- [`Response`](/packages/http/reference/http/response/Response): Parsed HTTP response (status, headers, body, optional trailing fields).
- [`Response::ok`](/packages/http/reference/http/response/Response/ok): 200 OK with empty body and headers.
- [`Response::status`](/packages/http/reference/http/response/Response/status)
- [`Response::header`](/packages/http/reference/http/response/Response/header)
- [`Response::trailer`](/packages/http/reference/http/response/Response/trailer): Trailing header field, carried after the body on HTTP/2.
