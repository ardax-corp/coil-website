---
slug: "http/http/response/Response/ok"
package: "http"
title: "Response::ok"
description: "A 200 response with no header fields and an empty body."
module: "http::response"
kind: "static method"
name: "ok"
parent: "Response"
signature: "pub static fn ok() -> Response"
import: "use http::response::{Response};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/response.hy#L71"
order: 0
---

A `200` response with no header fields and an empty body.

## Returns

`Response`

## See also

- [`Response`](/packages/http/reference/http/response/Response): An HTTP response: status, header fields, body and HTTP/2 trailing fields.
- [`Response::status`](/packages/http/reference/http/response/Response/status): Sets the status code.
- [`Response::header`](/packages/http/reference/http/response/Response/header): Appends a header field.
- [`Response::body`](/packages/http/reference/http/response/Response/body): Sets the body.
- [`Response::trailer`](/packages/http/reference/http/response/Response/trailer): Appends a trailing field, sent after the body on HTTP/2.
