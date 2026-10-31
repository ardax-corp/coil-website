---
slug: "http/http/request/Request"
package: "http"
title: "Request"
description: "An outbound HTTP request: method, URL, extra header fields and body."
module: "http::request"
kind: "class"
name: "Request"
signature: "class Request"
import: "use http::request::{Request};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/request.hy#L64"
order: 0
---

An outbound HTTP request: method, URL, extra header fields and body.

Build one with [`Request::new`](/packages/http/reference/http/request/Request/new) and the setter methods, then pass it to
`Client::send` (HTTP/1.1) or `Client::h2_send` (HTTP/2). `Client::get` and
`Client::post` build one for you.

The client writes `Host`, `Content-Length` and `Connection` itself: fields with
those names added through [`header`](/packages/http/reference/http/request/Request/header) are dropped. A header name or value that
holds CR / LF makes `send` return `InvalidHeader`.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `method` | `string` | Request method, `GET` by default. |
| `url_str` | `string` | Absolute URL string, parsed when the request is sent. |
| `headers` | `Headers` | Extra header fields, sent in order after `Host`. |
| `body` | `Vec<byte>` | Request body; empty by default. |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/http/reference/http/request/Request/new) | A `GET` request with no URL, headers or body. |

## Methods

| Name | Description |
|------|-------------|
| [`method`](/packages/http/reference/http/request/Request/method) | Sets the method (`GET`, `POST`, `PUT`, ...). |
| [`url`](/packages/http/reference/http/request/Request/url) | Sets the absolute URL (`http://` or `https://`). |
| [`header`](/packages/http/reference/http/request/Request/header) | Appends a header field. |
| [`body`](/packages/http/reference/http/request/Request/body) | Sets the body. |
| [`method_val`](/packages/http/reference/http/request/Request/method_val) | The method. |
| [`url_val`](/packages/http/reference/http/request/Request/url_val) | The URL string. |
| [`headers_val`](/packages/http/reference/http/request/Request/headers_val) | The extra header fields. |
| [`body_val`](/packages/http/reference/http/request/Request/body_val) | The body. |

## Examples

```coil
use tests::assert;
use http::request::Request;
use string::to_bytes;

let req = Request::new();
req.method("PUT");
req.url("http://example.com/items/1");
req.header("Content-Type", "application/json");
req.body(to_bytes("{\"n\":1}"));
assert!(req.method_val() == "PUT");
assert!(req.headers_val().count() == 1);
assert!(req.body_val().len() == 7);
```

Sending it needs the network:

```coil
use http::client::Client;
use http::request::Request;

fn main() {
    let c = Client::new();
    let req = Request::new();
    req.method("DELETE");
    req.url("http://example.com/items/1");
    let status = match c.send(req) {
        Result::Ok(r) => r.status,
        Result::Err(e) => panic show(e),
    };
    if status != 204 {
        panic "delete failed";
    }
}
```

## See also

- [`Request::new`](/packages/http/reference/http/request/Request/new)
- [`Request::header`](/packages/http/reference/http/request/Request/header)
