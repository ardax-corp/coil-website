---
slug: "http/http/response/Response/trailer"
package: "http"
title: "Response::trailer"
description: "Appends a trailing field, sent after the body on HTTP/2. HTTP/1.1 does not send trailers."
module: "http::response"
kind: "method"
name: "trailer"
parent: "Response"
signature: "pub fn trailer(string name, string value)"
import: "use http::response::{Response};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/response.hy#L104"
order: 4
---

Appends a trailing field, sent after the body on HTTP/2. HTTP/1.1 does not send trailers.

Called on a `Response` value as `value.trailer(…)`.

## Parameters

| Name | Type |
|------|------|
| `name` | `string` |
| `value` | `string` |

## See also

- [`Response`](/packages/http/reference/http/response/Response): An HTTP response: status, header fields, body and HTTP/2 trailing fields.
- [`Response::ok`](/packages/http/reference/http/response/Response/ok): A `200` response with no header fields and an empty body.
- [`Response::status`](/packages/http/reference/http/response/Response/status): Sets the status code.
- [`Response::header`](/packages/http/reference/http/response/Response/header): Appends a header field.
- [`Response::body`](/packages/http/reference/http/response/Response/body): Sets the body.
