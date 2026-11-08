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
source: "https://github.com/ardax-corp/coil-http/blob/d2b81eaeb6f5b4e7d794874f593cb4e9406afd27/src/http/request.coil#L430"
order: 1
---

Serializes an HTTP/1.1 request head with `Connection: close`.

Writes the request line, `Host` (with the port unless it is the scheme's
default), the `headers` fields in order, `Content-Length: body_len` and
`Connection: close`, ending with the blank line. Fields named `Host`,
`Content-Length` or `Connection` (in any case) are dropped, as for
[`Request::header`](/packages/http/reference/http/request/Request/header). Returns `InvalidHeader` when a header name or value holds
CR / LF.

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
    Result::Err(e) => panic e.show(),
};
let head = match build_request_head("GET", u, Headers::new(), 0) {
    Result::Ok(b) => b,
    Result::Err(e) => panic e.show(),
};
let text = match from_bytes(head) {
    Result::Ok(s) => s,
    Result::Err(_) => panic "not UTF-8",
};
assert!(text == "GET /x HTTP/1.1\r\nHost: example.com:8080\r\nContent-Length: 0\r\nConnection: close\r\n\r\n");
```

## See also

- [`Request::header`](/packages/http/reference/http/request/Request/header)
- [`build_request_head_keepalive`](/packages/http/reference/http/request/build_request_head_keepalive): Same as `build_request_head`, with `Connection: keep-alive`.
