---
slug: "http/http/conn/index"
package: "http"
title: "http::conn"
description: "Per-connection HTTP/1.1 framed reads: headers and a Content-Length body."
module: "http::conn"
kind: "module"
name: "http::conn"
origin: "package"
auto: false
order: 1
---

Part of the [http](/packages/http) package ([coil-http](https://github.com/ardax-corp/coil-http)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/http)).

Import what you use (`use path::*` is not allowed):

```coil
use http::conn::{HttpConn, close_conn};
```

## Types

| Name | Description |
|------|-------------|
| [`HttpConn`](/packages/http/reference/http/conn/HttpConn) | A socket plus the bytes read past the current HTTP/1.1 message. |

## Functions

| Name | Description |
|------|-------------|
| [`close_conn`](/packages/http/reference/http/conn/close_conn) | Closes `c`'s stream. |
| [`read_http_message`](/packages/http/reference/http/conn/read_http_message) | Reads one complete HTTP/1.1 message (head and body) from `c`. |
| [`read_request_bytes`](/packages/http/reference/http/conn/read_request_bytes) | Reads one complete HTTP/1.1 message from a fresh stream `s`. |
