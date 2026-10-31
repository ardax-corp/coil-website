---
slug: "http/http/h1/IncomingRequest/body_val"
package: "http"
title: "IncomingRequest::body_val"
description: "The body."
module: "http::h1"
kind: "method"
name: "body_val"
parent: "IncomingRequest"
signature: "pub fn body_val() -> Vec<byte>"
import: "use http::h1::{IncomingRequest};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/h1.hy#L69"
order: 3
---

The body.

Called on a `IncomingRequest` value as `value.body_val(…)`.

## Returns

`Vec<byte>`

## See also

- [`IncomingRequest`](/packages/http/reference/http/h1/IncomingRequest): A request received by the server, as passed to `HttpHandler::handle`.
- [`IncomingRequest::method_val`](/packages/http/reference/http/h1/IncomingRequest/method_val): The method.
- [`IncomingRequest::path_val`](/packages/http/reference/http/h1/IncomingRequest/path_val): The path and query.
- [`IncomingRequest::headers_val`](/packages/http/reference/http/h1/IncomingRequest/headers_val): The header fields.
