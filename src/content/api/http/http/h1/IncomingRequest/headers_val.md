---
slug: "http/http/h1/IncomingRequest/headers_val"
package: "http"
title: "IncomingRequest::headers_val"
description: "The header fields."
module: "http::h1"
kind: "method"
name: "headers_val"
parent: "IncomingRequest"
signature: "pub fn headers_val() -> Headers"
import: "use http::h1::{IncomingRequest};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/ff451cfa7e0dc940487a1ab88a8e84412cc71127/src/http/h1.coil#L64"
order: 2
---

The header fields.

Called on a `IncomingRequest` value as `value.headers_val(…)`.

## Returns

`Headers`

## See also

- [`IncomingRequest`](/packages/http/reference/http/h1/IncomingRequest): A request received by the server, as passed to `HttpHandler::handle`.
- [`IncomingRequest::method_val`](/packages/http/reference/http/h1/IncomingRequest/method_val): The method.
- [`IncomingRequest::path_val`](/packages/http/reference/http/h1/IncomingRequest/path_val): The path and query.
- [`IncomingRequest::body_val`](/packages/http/reference/http/h1/IncomingRequest/body_val): The body.
