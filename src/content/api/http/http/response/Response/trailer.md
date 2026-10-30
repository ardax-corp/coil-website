---
slug: "http/http/response/Response/trailer"
package: "http"
title: "Response::trailer"
description: "Trailing header field, carried after the body on HTTP/2."
module: "http::response"
kind: "method"
name: "trailer"
parent: "Response"
signature: "pub fn trailer(string name, string value)"
import: "use http::response::{Response};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/response.hy#L47"
order: 4
---

Trailing header field, carried after the body on HTTP/2.

Called on a `Response` value as `value.trailer(…)`.

## Parameters

| Name | Type |
|------|------|
| `name` | `string` |
| `value` | `string` |

## See also

- [`Response`](/packages/http/reference/http/response/Response): Parsed HTTP response (status, headers, body, optional trailing fields).
- [`Response::ok`](/packages/http/reference/http/response/Response/ok): 200 OK with empty body and headers.
- [`Response::status`](/packages/http/reference/http/response/Response/status)
- [`Response::header`](/packages/http/reference/http/response/Response/header)
- [`Response::body`](/packages/http/reference/http/response/Response/body)
