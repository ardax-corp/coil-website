---
slug: "http/http/h1/encode_chunked_body"
package: "http"
title: "encode_chunked_body"
description: "Encodes body as one chunk followed by the terminating zero-size chunk."
module: "http::h1"
kind: "fn"
name: "encode_chunked_body"
signature: "fn encode_chunked_body(Vec<byte> body) -> Result<Vec<byte>, HttpError>"
import: "use http::h1::{encode_chunked_body};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/h1.hy#L370"
order: 5
---

Encodes `body` as one chunk followed by the terminating zero-size chunk.

## Parameters

| Name | Type |
|------|------|
| `body` | `Vec<byte>` |

## Returns

`Result<Vec<byte>, HttpError>`

## See also

- [`parse_request`](/packages/http/reference/http/h1/parse_request): Parses a complete HTTP/1.1 request (head and body) into an `IncomingRequest`.
- [`encode_response`](/packages/http/reference/http/h1/encode_response): Serializes `r` for HTTP/1.1 with `Connection: close`.
- [`encode_response_keepalive`](/packages/http/reference/http/h1/encode_response_keepalive): Same as `encode_response`, with `Connection: keep-alive`.
- [`decode_chunked_body`](/packages/http/reference/http/h1/decode_chunked_body): Decodes an HTTP/1.1 chunked body (no head) into its bytes.
