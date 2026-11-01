---
slug: "http/http/request/build_request_head"
package: "http"
title: "build_request_head"
description: "Serializes an HTTP/1.1 request head with Connection: close."
module: "http::request"
kind: "fn"
name: "build_request_head"
signature: "fn build_request_head(string method, Url u, Headers headers, int body_len) -> Result<Vec<byte>, HttpError>"
import: "use http::request::{build_request_head};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/request.coil#L457"
order: 1
---

Serializes an HTTP/1.1 request head with `Connection: close`.

Writes the request line, `Host` (with the port unless it is the scheme's
default), `Content-Length: body_len` and `Connection: close`, ending with the
blank line. `headers` is not written; `Client::send` adds extra fields itself.

## Parameters

| Name | Type |
|------|------|
| `method` | `string` |
| `u` | `Url` |
| `headers` | `Headers` |
| `body_len` | `int` |

## Returns

`Result<Vec<byte>, HttpError>`

## Examples

```coil
use tests::assert;
use http::request::build_request_head;
use http::url::{Headers, parse_url};
use string::from_bytes;

let u = match parse_url("http://example.com:8080/x") {
    Result::Ok(u) => u,
    Result::Err(e) => panic show(e),
};
let head = match build_request_head("GET", u, Headers::new(), 0) {
    Result::Ok(b) => b,
    Result::Err(e) => panic show(e),
};
let text = match from_bytes(head) {
    Result::Ok(s) => s,
    Result::Err(_) => panic "not UTF-8",
};
assert!(text == "GET /x HTTP/1.1\r\nHost: example.com:8080\r\nContent-Length: 0\r\nConnection: close\r\n\r\n");
```

## See also

- [`build_request_head_keepalive`](/packages/http/reference/http/request/build_request_head_keepalive): Same as `build_request_head`, with `Connection: keep-alive`.
