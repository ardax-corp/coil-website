---
slug: "http/http/response/Response/status"
package: "http"
title: "Response::status"
description: "Sets the status code."
module: "http::response"
kind: "method"
name: "status"
parent: "Response"
signature: "pub fn status(int code)"
import: "use http::response::{Response};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/response.hy#L84"
order: 1
---

Sets the status code.

The HTTP/1.1 encoder writes a reason phrase for a few common codes and `OK`
for the rest; clients go by the code.

Called on a `Response` value as `value.status(…)`.

## Parameters

| Name | Type |
|------|------|
| `code` | `int` |

## See also

- [`Response`](/packages/http/reference/http/response/Response): An HTTP response: status, header fields, body and HTTP/2 trailing fields.
- [`Response::ok`](/packages/http/reference/http/response/Response/ok): A `200` response with no header fields and an empty body.
- [`Response::header`](/packages/http/reference/http/response/Response/header): Appends a header field.
- [`Response::body`](/packages/http/reference/http/response/Response/body): Sets the body.
- [`Response::trailer`](/packages/http/reference/http/response/Response/trailer): Appends a trailing field, sent after the body on HTTP/2.
