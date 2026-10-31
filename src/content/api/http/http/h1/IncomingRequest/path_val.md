---
slug: "http/http/h1/IncomingRequest/path_val"
package: "http"
title: "IncomingRequest::path_val"
description: "The path and query."
module: "http::h1"
kind: "method"
name: "path_val"
parent: "IncomingRequest"
signature: "pub fn path_val() -> string"
import: "use http::h1::{IncomingRequest};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/h1.hy#L59"
order: 1
---

The path and query.

Called on a `IncomingRequest` value as `value.path_val(…)`.

## Returns

`string`

## See also

- [`IncomingRequest`](/packages/http/reference/http/h1/IncomingRequest): A request received by the server, as passed to `HttpHandler::handle`.
- [`IncomingRequest::method_val`](/packages/http/reference/http/h1/IncomingRequest/method_val): The method.
- [`IncomingRequest::headers_val`](/packages/http/reference/http/h1/IncomingRequest/headers_val): The header fields.
- [`IncomingRequest::body_val`](/packages/http/reference/http/h1/IncomingRequest/body_val): The body.
