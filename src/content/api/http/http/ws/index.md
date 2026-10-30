---
slug: "http/http/ws/index"
package: "http"
title: "http::ws"
description: "WebSockets (RFC 6455) over an HTTP/1.1 upgrade: handshake and framing."
module: "http::ws"
kind: "module"
name: "http::ws"
origin: "package"
auto: false
order: 11
---

Part of the [http](/packages/http) package ([coil-http](https://github.com/ardax-corp/coil-http)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/http)).

Import what you use (`use path::*` is not allowed):

```coil
use http::ws::{WsConn, encode_ws_frame};
```

## Types

| Name | Description |
|------|-------------|
| [`WsConn`](/packages/http/reference/http/ws/WsConn) | Upgraded WebSocket on an HTTP/1.1 connection. |
| [`WsFrame`](/packages/http/reference/http/ws/WsFrame) |  |

## Functions

| Name | Description |
|------|-------------|
| [`encode_ws_frame`](/packages/http/reference/http/ws/encode_ws_frame) | Encode one frame. |
| [`decode_ws_frame`](/packages/http/reference/http/ws/decode_ws_frame) | Parse the first complete WebSocket frame in `raw`. |
| [`ws_frame_wire_len`](/packages/http/reference/http/ws/ws_frame_wire_len) | Byte count of the first complete frame, or 0 if truncated. |
| [`ws_accept_key`](/packages/http/reference/http/ws/ws_accept_key) | SHA-1(key + GUID) then Base64 — `Sec-WebSocket-Accept`. |
| [`ws_new_key`](/packages/http/reference/http/ws/ws_new_key) | 16 random-ish bytes as standard Base64 (`Sec-WebSocket-Key`). |
| [`ws_read_n`](/packages/http/reference/http/ws/ws_read_n) | Blocking read that parks on WouldBlock (same pattern as HTTP/2). |
| [`ws_recv`](/packages/http/reference/http/ws/ws_recv) | Read one frame. |
| [`ws_connect_tls`](/packages/http/reference/http/ws/ws_connect_tls) | Client upgrade with TLS options (`verify` / optional CA PEM). |
| [`ws_connect`](/packages/http/reference/http/ws/ws_connect) | Client upgrade. |
| [`ws_connect_key`](/packages/http/reference/http/ws/ws_connect_key) | Client upgrade with a caller-supplied `Sec-WebSocket-Key` (tests / RFC vector). |
| [`ws_serve_once`](/packages/http/reference/http/ws/ws_serve_once) | Accept one TCP connection, read an HTTP/1.1 upgrade, return the WebSocket. |
| [`ws_echo_loop`](/packages/http/reference/http/ws/ws_echo_loop) | Echo text/binary, answer ping, stop on close. |
