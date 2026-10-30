---
slug: "http/http/h2_session/index"
package: "http"
title: "http::h2_session"
description: "An in-memory HTTP/2 connection: preface, frames and flow control, no sockets."
module: "http::h2_session"
kind: "module"
name: "http::h2_session"
origin: "package"
auto: false
order: 4
---

Part of the [http](/packages/http) package ([coil-http](https://github.com/ardax-corp/coil-http)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/http)).

Import what you use (`use path::*` is not allowed):

```coil
use http::h2_session::{H2Session, H2Pair};
```

## Types

| Name | Description |
|------|-------------|
| [`H2Session`](/packages/http/reference/http/h2_session/H2Session) | One HTTP/2 connection (client or server) over a byte buffer. |
| [`H2Pair`](/packages/http/reference/http/h2_session/H2Pair) | Two responses from one multiplexed exchange (streams 1 and 3). |
| [`H2ClientSlot`](/packages/http/reference/http/h2_session/H2ClientSlot) | One HTTP/2 connection held by `Client`. |

## Functions

| Name | Description |
|------|-------------|
| [`h2_roundtrip`](/packages/http/reference/http/h2_session/h2_roundtrip) | One request/response on an open HTTP/2 connection. |
| [`h2_request`](/packages/http/reference/http/h2_session/h2_request) | HTTP/2 request. |
| [`h2_connect`](/packages/http/reference/http/h2_session/h2_connect) | GET: cleartext prior-knowledge, or HTTPS TLS ALPN [`h2`](/packages/http/reference/http/h2) with HTTP/1.1 fallback. |
| [`h2_connect_tls`](/packages/http/reference/http/h2_session/h2_connect_tls) | HTTPS GET after TLS enable with optional CA PEM (`""` uses default verify). |
| [`h2_connect_two`](/packages/http/reference/http/h2_session/h2_connect_two) | Two cleartext prior-knowledge GETs on one connection (streams 1 and 3). |
| [`h2_get_over_h2`](/packages/http/reference/http/h2_session/h2_get_over_h2) | HTTP/2 GET on an already-connected stream (prior knowledge or TLS [`h2`](/packages/http/reference/http/h2)). |
| [`h2_slot_exchange`](/packages/http/reference/http/h2_session/h2_slot_exchange) | Request on this slot. |
