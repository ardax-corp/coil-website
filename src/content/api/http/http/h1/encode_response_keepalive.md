---
slug: "http/http/h1/encode_response_keepalive"
package: "http"
title: "encode_response_keepalive"
description: "Same as encode_response, with Connection: keep-alive."
module: "http::h1"
kind: "fn"
name: "encode_response_keepalive"
signature: "fn encode_response_keepalive(Response r) -> Vec<byte>"
import: "use http::h1::{encode_response_keepalive};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/h1.coil#L330"
order: 3
---

Same as [`encode_response`](/packages/http/reference/http/h1/encode_response), with `Connection: keep-alive`.

## Parameters

| Name | Type |
|------|------|
| `r` | `Response` |

## Returns

`Vec<byte>`

## See also

- [`http::h1::encode_response`](/packages/http/reference/http/h1/encode_response)
- [`parse_request`](/packages/http/reference/http/h1/parse_request): Parses a complete HTTP/1.1 request (head and body) into an `IncomingRequest`.
- [`decode_chunked_body`](/packages/http/reference/http/h1/decode_chunked_body): Decodes an HTTP/1.1 chunked body (no head) into its bytes.
- [`encode_chunked_body`](/packages/http/reference/http/h1/encode_chunked_body): Encodes `body` as one chunk followed by the terminating zero-size chunk.
