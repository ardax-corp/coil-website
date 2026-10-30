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
use http::conn::{HttpConn, read_http_message};
```

## Types

| Name | Description |
|------|-------------|
| [`HttpConn`](/packages/http/reference/http/conn/HttpConn) | Stream plus bytes pulled past the current message (keep-alive / pipelining). |

## Functions

| Name | Description |
|------|-------------|
| [`read_http_message`](/packages/http/reference/http/conn/read_http_message) | Read until CRLFCRLF, then exactly Content-Length body bytes. |
| [`read_request_bytes`](/packages/http/reference/http/conn/read_request_bytes) | Read a full request or response message from a raw stream (no leftover yet). |
