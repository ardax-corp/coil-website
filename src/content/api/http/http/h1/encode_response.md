---
slug: "http/http/h1/encode_response"
package: "http"
title: "encode_response"
description: "Serializes r for HTTP/1.1 with Connection: close."
module: "http::h1"
kind: "fn"
name: "encode_response"
signature: "fn encode_response(Response r) -> Vec<byte>"
import: "use http::h1::{encode_response};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/h1.hy#L316"
order: 2
---

Serializes `r` for HTTP/1.1 with `Connection: close`.

Writes the status line, `Content-Length`, `r`'s header fields and the body.
When `r` has `Transfer-Encoding: chunked`, the body is sent as one chunk
instead and no `Content-Length` is written.

## Parameters

| Name | Type |
|------|------|
| `r` | `Response` |

## Returns

`Vec<byte>`

## Examples

```coil
use tests::assert;
use http::h1::encode_response;
use http::response::Response;
use string::{from_bytes, to_bytes};

let r = Response::ok();
r.header("Content-Type", "text/plain");
r.body(to_bytes("hi"));
let text = match from_bytes(encode_response(r)) {
    Result::Ok(s) => s,
    Result::Err(_) => panic "not UTF-8",
};
assert!(text == "HTTP/1.1 200 OK\r\nContent-Length: 2\r\nContent-Type: text/plain\r\nConnection: close\r\n\r\nhi");
```

## See also

- [`parse_request`](/packages/http/reference/http/h1/parse_request): Parses a complete HTTP/1.1 request (head and body) into an `IncomingRequest`.
- [`encode_response_keepalive`](/packages/http/reference/http/h1/encode_response_keepalive): Same as `encode_response`, with `Connection: keep-alive`.
- [`decode_chunked_body`](/packages/http/reference/http/h1/decode_chunked_body): Decodes an HTTP/1.1 chunked body (no head) into its bytes.
- [`encode_chunked_body`](/packages/http/reference/http/h1/encode_chunked_body): Encodes `body` as one chunk followed by the terminating zero-size chunk.
