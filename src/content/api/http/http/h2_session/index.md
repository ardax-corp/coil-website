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
| [`H2Session`](/packages/http/reference/http/h2_session/H2Session) | One HTTP/2 connection (client or server side) driven through byte buffers, with no socket of its own. |
| [`H2Pair`](/packages/http/reference/http/h2_session/H2Pair) | The two responses of [`h2_connect_two`](/packages/http/reference/http/h2_session/h2_connect_two) (streams 1 and 3). |

## Functions

| Name | Description |
|------|-------------|
| [`h2_request`](/packages/http/reference/http/h2_session/h2_request) | Sends one HTTP/2 request on a new connection and closes it. |
| [`h2_connect`](/packages/http/reference/http/h2_session/h2_connect) | `GET url` over HTTP/2 on a new connection, like [`h2_request`](/packages/http/reference/http/h2_session/h2_request). |
| [`h2_connect_tls`](/packages/http/reference/http/h2_session/h2_connect_tls) | [`h2_connect`](/packages/http/reference/http/h2_session/h2_connect) with TLS options: `verify` false skips certificate checks, a non-empty `ca_pem` trusts that CA. |
| [`h2_connect_two`](/packages/http/reference/http/h2_session/h2_connect_two) | Two cleartext prior-knowledge GETs multiplexed on one new connection (streams 1 and 3). |
| [`h2_get_over_h2`](/packages/http/reference/http/h2_session/h2_get_over_h2) | `GET u` over HTTP/2 on an already connected stream (cleartext prior knowledge, or TLS after ALPN [`h2`](/packages/http/reference/http/h2)). |
