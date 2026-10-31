---
slug: "http/http/server/HttpHandler"
package: "http"
title: "HttpHandler"
description: "Answers server requests: implement handle and pass the value to serve (or another serve function)."
module: "http::server"
kind: "trait"
name: "HttpHandler"
signature: "trait HttpHandler<H>"
import: "use http::server::{HttpHandler};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/server.hy#L66"
order: 0
---

Answers server requests: implement [`handle`](/packages/http/reference/http/server/HttpHandler/handle) and pass the value to [`serve`](/packages/http/reference/http/server/serve) (or another serve function).

[`handle`](/packages/http/reference/http/server/HttpHandler/handle) runs once per request, on HTTP/1.1 and HTTP/2 alike, and cannot fail:
turn errors into a status code. [`serve`](/packages/http/reference/http/server/serve) runs each connection in its own task,
so one handler value may be called from several tasks at once.

## Required methods

| Name | Description |
|------|-------------|
| [`handle`](/packages/http/reference/http/server/HttpHandler/handle) | Builds the response to `req`. |

## Examples

```coil
use tests::assert;
use http::server::HttpHandler;
use http::h1::{IncomingRequest, parse_request};
use http::response::Response;
use string::to_bytes;

class Hello {}

impl HttpHandler for Hello {
    fn handle(Hello self, IncomingRequest req) -> Response {
        let r = Response::ok();
        if req.path_val() != "/" {
            r.status(404);
            return r;
        }
        r.header("Content-Type", "text/plain");
        r.body(to_bytes("hello"));
        return r;
    }
}

fn main() {
    let h = new Hello();
    let req = match parse_request(to_bytes("GET /missing HTTP/1.1\r\nHost: x\r\n\r\n")) {
        Result::Ok(r) => r,
        Result::Err(e) => panic show(e),
    };
    assert!(h.handle(req).status == 404);
}
```

## See also

- [`HttpHandler::handle`](/packages/http/reference/http/server/HttpHandler/handle)
- [`http::server::serve`](/packages/http/reference/http/server/serve)
