---
slug: "http/http/response/parse_response"
package: "http"
title: "parse_response"
description: "Parses a complete HTTP/1.1 response (head and body) into a Response."
module: "http::response"
kind: "fn"
name: "parse_response"
signature: "fn parse_response(Vec<byte> raw) -> Result<Response, HttpError>"
import: "use http::response::{parse_response};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/response.coil#L577"
order: 6
---

Parses a complete HTTP/1.1 response (head and body) into a [`Response`](/packages/http/reference/http/response/Response).

A chunked body is decoded; a `Content-Length` body is cut to that length, and
without either the rest of `raw` is the body. Returns `Protocol` when there is
no blank line after the head, a header line has no `:`, the status code is
missing, or the body is shorter than `Content-Length`.

## Parameters

| Name | Type |
|------|------|
| `raw` | `Vec<byte>` |

## Returns

`Result<Response, HttpError>`

## Examples

```coil
use tests::assert;
use http::response::parse_response;
use string::to_bytes;

let raw = to_bytes("HTTP/1.1 200 OK\r\nTransfer-Encoding: chunked\r\n\r\n2\r\nhi\r\n0\r\n\r\n");
let r = match parse_response(raw) {
    Result::Ok(r) => r,
    Result::Err(e) => panic show(e),
};
assert!(r.status == 200);
assert!(r.body.len() == 2);
```

## See also

- [`http::response::Response`](/packages/http/reference/http/response/Response)
- [`header_get`](/packages/http/reference/http/response/header_get): The value of the first header field of `r` named exactly `name`, or `""`.
- [`trailer_get`](/packages/http/reference/http/response/trailer_get): The value of the first trailing field of `r` named exactly `name`, or `""`.
- [`decode_chunked_body`](/packages/http/reference/http/response/decode_chunked_body): Decodes an HTTP/1.1 chunked body (no head) into its bytes.
- [`encode_chunked_body`](/packages/http/reference/http/response/encode_chunked_body): Encodes `body` as one chunk followed by the terminating zero-size chunk.
- [`http_framed_end`](/packages/http/reference/http/response/http_framed_end): The end offset (exclusive) of the first complete HTTP/1.1 message in `raw`.
