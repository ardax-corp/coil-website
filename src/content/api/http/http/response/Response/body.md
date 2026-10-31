---
slug: "http/http/response/Response/body"
package: "http"
title: "Response::body"
description: "Sets the body."
module: "http::response"
kind: "method"
name: "body"
parent: "Response"
signature: "pub fn body(Vec<byte> b)"
import: "use http::response::{Response};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/response.hy#L99"
order: 3
---

Sets the body.

Called on a `Response` value as `value.body(…)`.

## Parameters

| Name | Type |
|------|------|
| `b` | `Vec<byte>` |

## See also

- [`Response`](/packages/http/reference/http/response/Response): An HTTP response: status, header fields, body and HTTP/2 trailing fields.
- [`Response::ok`](/packages/http/reference/http/response/Response/ok): A `200` response with no header fields and an empty body.
- [`Response::status`](/packages/http/reference/http/response/Response/status): Sets the status code.
- [`Response::header`](/packages/http/reference/http/response/Response/header): Appends a header field.
- [`Response::trailer`](/packages/http/reference/http/response/Response/trailer): Appends a trailing field, sent after the body on HTTP/2.
