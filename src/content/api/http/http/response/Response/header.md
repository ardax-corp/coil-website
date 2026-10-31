---
slug: "http/http/response/Response/header"
package: "http"
title: "Response::header"
description: "Appends a header field."
module: "http::response"
kind: "method"
name: "header"
parent: "Response"
signature: "pub fn header(string name, string value)"
import: "use http::response::{Response};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/response.hy#L93"
order: 2
---

Appends a header field.

The server writes `Content-Length` and `Connection` itself, so do not add
those. Add
`Transfer-Encoding: chunked` to send the body chunked on HTTP/1.1.

Called on a `Response` value as `value.header(…)`.

## Parameters

| Name | Type |
|------|------|
| `name` | `string` |
| `value` | `string` |

## See also

- [`Response`](/packages/http/reference/http/response/Response): An HTTP response: status, header fields, body and HTTP/2 trailing fields.
- [`Response::ok`](/packages/http/reference/http/response/Response/ok): A `200` response with no header fields and an empty body.
- [`Response::status`](/packages/http/reference/http/response/Response/status): Sets the status code.
- [`Response::body`](/packages/http/reference/http/response/Response/body): Sets the body.
- [`Response::trailer`](/packages/http/reference/http/response/Response/trailer): Appends a trailing field, sent after the body on HTTP/2.
