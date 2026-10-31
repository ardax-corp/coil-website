---
slug: "http/http/client/Client"
package: "http"
title: "Client"
description: "An HTTP client for http:// and https:// URLs."
module: "http::client"
kind: "class"
name: "Client"
signature: "class Client"
import: "use http::client::{Client};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/client.hy#L79"
order: 0
---

An HTTP client for `http://` and `https://` URLs.

[`get`](/packages/http/reference/http/client/Client/get), [`post`](/packages/http/reference/http/client/Client/post) and [`send`](/packages/http/reference/http/client/Client/send) speak HTTP/1.1. By default they send
`Connection: keep-alive` and return the connection to a per-client pool
(`ConnPool`, up to 4 idle connections) when the response allows it, so later
requests to the same scheme, host and port reuse the socket. [`no_pool`](/packages/http/reference/http/client/Client/no_pool)
switches to one connection per request.

[`h2_get`](/packages/http/reference/http/client/Client/h2_get), [`h2_post`](/packages/http/reference/http/client/Client/h2_post) and [`h2_send`](/packages/http/reference/http/client/Client/h2_send) speak HTTP/2 on one connection per client,
kept separately from the HTTP/1.1 pool. Cleartext URLs use prior knowledge (the
connection preface is sent straight away); `https://` offers ALPN
`h2,http/1.1` and falls back to HTTP/1.1 on the same connection when the
server does not pick [`h2`](/packages/http/reference/http/h2).

HTTPS certificates are verified against the bundled webpki roots through coil-tls. The
program needs `--allow-net`, and for HTTPS also `--allow-attach` and the
`libtls` grants (see the package README). There are no redirects, cookies or
timeouts; a non-2xx status is an ordinary `Ok` response.

Call [`close`](/packages/http/reference/http/client/Client/close) when done: dropping the client closes its sockets only when the
garbage collector runs.

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/http/reference/http/client/Client/new) | A client with HTTP/1.1 connection pooling on and no open connections. |

## Methods

| Name | Description |
|------|-------------|
| [`no_pool`](/packages/http/reference/http/client/Client/no_pool) | Turns pooling off: later requests send `Connection: close` and close their connection after the response. |
| [`close`](/packages/http/reference/http/client/Client/close) | Closes every pooled HTTP/1.1 connection and the HTTP/2 session. |
| [`request_send`](/packages/http/reference/http/client/Client/request_send) | Sends an already serialized request head plus `body` to `u` and reads one response. |
| [`send`](/packages/http/reference/http/client/Client/send) | Sends `req` over HTTP/1.1 and returns the response. |
| [`get`](/packages/http/reference/http/client/Client/get) | Sends `GET url` over HTTP/1.1. |
| [`post`](/packages/http/reference/http/client/Client/post) | Sends `POST url` with `body` over HTTP/1.1. |
| [`h2_get`](/packages/http/reference/http/client/Client/h2_get) | Sends `GET url` over HTTP/2 (HTTP/1.1 when an `https://` server does not select [`h2`](/packages/http/reference/http/h2)). |
| [`h2_post`](/packages/http/reference/http/client/Client/h2_post) | Sends `POST url` with `body` over HTTP/2, like [`h2_get`](/packages/http/reference/http/client/Client/h2_get). |
| [`h2_send`](/packages/http/reference/http/client/Client/h2_send) | Sends `req` over HTTP/2, like [`h2_get`](/packages/http/reference/http/client/Client/h2_get), with its method, header fields and body. |

## Examples

```coil
use http::client::Client;
use string::{from_bytes, to_bytes};

fn main() {
    let c = Client::new();
    let r = match c.get("https://example.com/") {
        Result::Ok(r) => r,
        Result::Err(e) => panic show(e),
    };
    if r.status != 200 {
        panic "unexpected status";
    }
    let page = from_bytes(r.body);

    let posted = c.post("http://127.0.0.1:8080/echo", to_bytes("hello"));
    c.close();
}
```

## See also

- [`Client::get`](/packages/http/reference/http/client/Client/get)
- [`Client::post`](/packages/http/reference/http/client/Client/post)
- [`Client::send`](/packages/http/reference/http/client/Client/send)
- [`Client::no_pool`](/packages/http/reference/http/client/Client/no_pool)
- [`Client::h2_get`](/packages/http/reference/http/client/Client/h2_get)
- [`Client::h2_post`](/packages/http/reference/http/client/Client/h2_post)
- [`Client::h2_send`](/packages/http/reference/http/client/Client/h2_send)
- [`http::h2`](/packages/http/reference/http/h2)
- [`Client::close`](/packages/http/reference/http/client/Client/close)
