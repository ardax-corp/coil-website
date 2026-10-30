---
slug: "http/http/response/Response/ok"
package: "http"
title: "Response::ok"
description: "200 OK with empty body and headers."
module: "http::response"
kind: "static method"
name: "ok"
parent: "Response"
signature: "pub static fn ok() -> Response"
import: "use http::response::{Response};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/response.hy#L24"
order: 0
---

200 OK with empty body and headers.

## Returns

`Response`

## See also

- [`Response`](/packages/http/reference/http/response/Response): Parsed HTTP response (status, headers, body, optional trailing fields).
- [`Response::status`](/packages/http/reference/http/response/Response/status)
- [`Response::header`](/packages/http/reference/http/response/Response/header)
- [`Response::body`](/packages/http/reference/http/response/Response/body)
- [`Response::trailer`](/packages/http/reference/http/response/Response/trailer): Trailing header field, carried after the body on HTTP/2.
