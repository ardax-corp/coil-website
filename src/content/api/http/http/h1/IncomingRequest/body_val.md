---
slug: "http/http/h1/IncomingRequest/body_val"
package: "http"
title: "IncomingRequest::body_val"
description: "Method IncomingRequest::body_val."
module: "http::h1"
kind: "method"
name: "body_val"
parent: "IncomingRequest"
signature: "pub fn body_val() -> Vec<byte>"
import: "use http::h1::{IncomingRequest};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/h1.hy#L37"
order: 3
---

*No documentation yet.*

Called on a `IncomingRequest` value as `value.body_val(…)`.

## Returns

`Vec<byte>`

## See also

- [`IncomingRequest`](/packages/http/reference/http/h1/IncomingRequest): Parsed inbound HTTP/1.1 request (server side).
- [`IncomingRequest::method_val`](/packages/http/reference/http/h1/IncomingRequest/method_val)
- [`IncomingRequest::path_val`](/packages/http/reference/http/h1/IncomingRequest/path_val)
- [`IncomingRequest::headers_val`](/packages/http/reference/http/h1/IncomingRequest/headers_val)
