---
slug: "http/http/h1/parse_request"
package: "http"
title: "parse_request"
description: "Parses a complete HTTP/1.1 request (head and body) into an IncomingRequest."
module: "http::h1"
kind: "fn"
name: "parse_request"
signature: "fn parse_request(Vec<byte> raw) -> Result<IncomingRequest, HttpError>"
import: "use http::h1::{parse_request};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/h1.hy#L112"
order: 1
---

Parses a complete HTTP/1.1 request (head and body) into an [`IncomingRequest`](/packages/http/reference/http/h1/IncomingRequest).

A chunked body is decoded and a `Content-Length` body is cut to that length.
Header lines without `:` are skipped. Returns `Protocol` when the head has no
blank line, the request line is not `METHOD target version`, or the body is
shorter than `Content-Length`.

## Parameters

| Name | Type |
|------|------|
| `raw` | `Vec<byte>` |

## Returns

`Result<IncomingRequest, HttpError>`

## See also

- [`http::h1::IncomingRequest`](/packages/http/reference/http/h1/IncomingRequest)
- [`encode_response`](/packages/http/reference/http/h1/encode_response): Serializes `r` for HTTP/1.1 with `Connection: close`.
- [`encode_response_keepalive`](/packages/http/reference/http/h1/encode_response_keepalive): Same as `encode_response`, with `Connection: keep-alive`.
- [`decode_chunked_body`](/packages/http/reference/http/h1/decode_chunked_body): Decodes an HTTP/1.1 chunked body (no head) into its bytes.
- [`encode_chunked_body`](/packages/http/reference/http/h1/encode_chunked_body): Encodes `body` as one chunk followed by the terminating zero-size chunk.
