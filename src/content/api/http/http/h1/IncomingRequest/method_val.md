---
slug: "http/http/h1/IncomingRequest/method_val"
package: "http"
title: "IncomingRequest::method_val"
description: "The method."
module: "http::h1"
kind: "method"
name: "method_val"
parent: "IncomingRequest"
signature: "pub fn method_val() -> string"
import: "use http::h1::{IncomingRequest};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/h1.hy#L54"
order: 0
---

The method.

Called on a `IncomingRequest` value as `value.method_val(…)`.

## Returns

`string`

## See also

- [`IncomingRequest`](/packages/http/reference/http/h1/IncomingRequest): A request received by the server, as passed to `HttpHandler::handle`.
- [`IncomingRequest::path_val`](/packages/http/reference/http/h1/IncomingRequest/path_val): The path and query.
- [`IncomingRequest::headers_val`](/packages/http/reference/http/h1/IncomingRequest/headers_val): The header fields.
- [`IncomingRequest::body_val`](/packages/http/reference/http/h1/IncomingRequest/body_val): The body.
