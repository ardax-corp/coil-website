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
order: 13
---

Part of the [http](/packages/http) package ([coil-http](https://github.com/ardax-corp/coil-http)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/http)).

Import what you use (`use path::*` is not allowed):

```coil
use http::ws::{WsFrame, WsConn};
```

## Types

| Name | Description |
|------|-------------|
| [`WsFrame`](/packages/http/reference/http/ws/WsFrame) | One WebSocket frame (RFC 6455 §5.2), as [`ws_recv`](/packages/http/reference/http/ws/ws_recv) and [`decode_ws_frame`](/packages/http/reference/http/ws/decode_ws_frame) return it. |
| [`WsConn`](/packages/http/reference/http/ws/WsConn) | An open WebSocket over an upgraded HTTP/1.1 connection. |

## Functions

| Name | Description |
|------|-------------|
| [`ws_opcode_cont`](/packages/http/reference/http/ws/ws_opcode_cont) | Opcode 0: continuation frame. |
| [`ws_opcode_text`](/packages/http/reference/http/ws/ws_opcode_text) | Opcode 1: text frame (UTF-8 payload). |
| [`ws_opcode_bin`](/packages/http/reference/http/ws/ws_opcode_bin) | Opcode 2: binary frame. |
| [`ws_opcode_close`](/packages/http/reference/http/ws/ws_opcode_close) | Opcode 8: close frame. |
| [`ws_opcode_ping`](/packages/http/reference/http/ws/ws_opcode_ping) | Opcode 9: ping frame. |
| [`ws_opcode_pong`](/packages/http/reference/http/ws/ws_opcode_pong) | Opcode 10: pong frame. |
| [`encode_ws_frame`](/packages/http/reference/http/ws/encode_ws_frame) | Encodes one frame. |
| [`decode_ws_frame`](/packages/http/reference/http/ws/decode_ws_frame) | Decodes the first complete frame in `raw`, unmasking the payload. |
| [`ws_frame_wire_len`](/packages/http/reference/http/ws/ws_frame_wire_len) | The byte length of the first complete frame in `raw`, or 0 when `raw` is truncated. |
| [`ws_accept_key`](/packages/http/reference/http/ws/ws_accept_key) | The `Sec-WebSocket-Accept` value for a client's `Sec-WebSocket-Key`: Base64(SHA-1(key + RFC 6455 GUID)). |
| [`ws_is_upgrade_req`](/packages/http/reference/http/ws/ws_is_upgrade_req) | 1 when `req` is a WebSocket upgrade: `GET` with `Upgrade: websocket`, `Connection: upgrade`, `Sec-WebSocket-Version: 13` and a `Sec-WebSocket-Key`; otherwise 0. |
| [`ws_new_key`](/packages/http/reference/http/ws/ws_new_key) | A `Sec-WebSocket-Key`: 16 bytes from a simple generator seeded with `seed`, Base64-encoded. |
| [`ws_send_text`](/packages/http/reference/http/ws/ws_send_text) | Sends `s` as one text frame. |
| [`ws_send_bin`](/packages/http/reference/http/ws/ws_send_bin) | Sends `b` as one binary frame. |
| [`ws_send_ping`](/packages/http/reference/http/ws/ws_send_ping) | Sends a ping with payload `b` (RFC 6455 allows at most 125 bytes; not checked). |
| [`ws_send_pong`](/packages/http/reference/http/ws/ws_send_pong) | Sends a pong with payload `b`, normally the payload of the ping it answers. |
| [`ws_send_close`](/packages/http/reference/http/ws/ws_send_close) | Sends a close frame with no status code. |
| [`ws_recv`](/packages/http/reference/http/ws/ws_recv) | Reads the next complete frame. |
| [`ws_close`](/packages/http/reference/http/ws/ws_close) | Closes the connection. |
| [`ws_connect_tls`](/packages/http/reference/http/ws/ws_connect_tls) | Opens a WebSocket to a `ws://` or `wss://` URL with TLS options. |
| [`ws_connect`](/packages/http/reference/http/ws/ws_connect) | Opens a WebSocket to a `ws://` or `wss://` URL (`wss://` with verified TLS). |
| [`ws_connect_key`](/packages/http/reference/http/ws/ws_connect_key) | [`ws_connect`](/packages/http/reference/http/ws/ws_connect) with a caller-supplied `Sec-WebSocket-Key`, for tests against a known handshake. |
| [`ws_upgrade`](/packages/http/reference/http/ws/ws_upgrade) | Completes the server side of an upgrade for a request already read from `c`. |
| [`ws_serve_once`](/packages/http/reference/http/ws/ws_serve_once) | Accepts one connection on `srv`, reads its HTTP/1.1 request and completes the WebSocket upgrade. |
| [`ws_echo_loop`](/packages/http/reference/http/ws/ws_echo_loop) | Echoes text and binary frames, answers pings with pongs, and returns after answering a close frame or on the first error, closing the connection. |
