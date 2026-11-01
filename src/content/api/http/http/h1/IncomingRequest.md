---
slug: "http/http/h1/IncomingRequest"
package: "http"
title: "IncomingRequest"
description: "A request received by the server, as passed to HttpHandler::handle."
module: "http::h1"
kind: "class"
name: "IncomingRequest"
signature: "class IncomingRequest"
import: "use http::h1::{IncomingRequest};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/h1.coil#L39"
order: 0
---

A request received by the server, as passed to `HttpHandler::handle`.

On HTTP/1.1 it comes from [`parse_request`](/packages/http/reference/http/h1/parse_request). On HTTP/2 the pseudo-headers are
mapped: `method` and [`path`](/packages/stdlib/reference/path) come from `:method` and `:path`, `:authority`
becomes a `Host` field, and `version` is `HTTP/2`.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `method` | `string` | Request method as sent (`GET`, `POST`, ...). |
| `path` | `string` | Request target: path and query, as sent. |
| `version` | `string` | Protocol version: `HTTP/1.1` (as sent) or `HTTP/2`. |
| `headers` | `Headers` | Header fields in the order received. |
| `body` | `Vec<byte>` | Body bytes, already de-chunked. |

## Methods

| Name | Description |
|------|-------------|
| [`method_val`](/packages/http/reference/http/h1/IncomingRequest/method_val) | The method. |
| [`path_val`](/packages/http/reference/http/h1/IncomingRequest/path_val) | The path and query. |
| [`headers_val`](/packages/http/reference/http/h1/IncomingRequest/headers_val) | The header fields. |
| [`body_val`](/packages/http/reference/http/h1/IncomingRequest/body_val) | The body. |

## Examples

```coil
use tests::assert;
use http::h1::parse_request;
use string::to_bytes;

let raw = to_bytes("POST /items?x=1 HTTP/1.1\r\nHost: example.com\r\nContent-Length: 3\r\n\r\nabc");
let req = match parse_request(raw) {
    Result::Ok(r) => r,
    Result::Err(e) => panic show(e),
};
assert!(req.method_val() == "POST");
assert!(req.path_val() == "/items?x=1");
assert!(req.version == "HTTP/1.1");
assert!(req.headers_val().value_at(0) == "example.com");
assert!(req.body_val().len() == 3);
```

## See also

- [`http::h1::parse_request`](/packages/http/reference/http/h1/parse_request)
- [`path`](/packages/stdlib/reference/path)
