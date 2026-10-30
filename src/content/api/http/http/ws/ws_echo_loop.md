---
slug: "http/http/ws/ws_echo_loop"
package: "http"
title: "ws_echo_loop"
description: "Echo text/binary, answer ping, stop on close. Used by loopback examples."
module: "http::ws"
kind: "fn"
name: "ws_echo_loop"
signature: "fn ws_echo_loop(WsConn c) -> Result<(), HttpError>"
import: "use http::ws::{ws_echo_loop};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/ws.hy#L796"
order: 12
---

Echo text/binary, answer ping, stop on close. Used by loopback examples.

## Parameters

| Name | Type |
|------|------|
| `c` | `WsConn` |

## Returns

`Result<(), HttpError>`

## See also

- [`encode_ws_frame`](/packages/http/reference/http/ws/encode_ws_frame): Encode one frame.
- [`decode_ws_frame`](/packages/http/reference/http/ws/decode_ws_frame): Parse the first complete WebSocket frame in `raw`.
- [`ws_frame_wire_len`](/packages/http/reference/http/ws/ws_frame_wire_len): Byte count of the first complete frame, or 0 if truncated.
- [`ws_accept_key`](/packages/http/reference/http/ws/ws_accept_key): SHA-1(key + GUID) then Base64 — `Sec-WebSocket-Accept`.
- [`ws_new_key`](/packages/http/reference/http/ws/ws_new_key): 16 random-ish bytes as standard Base64 (`Sec-WebSocket-Key`).
- [`ws_read_n`](/packages/http/reference/http/ws/ws_read_n): Blocking read that parks on WouldBlock (same pattern as HTTP/2).
- [`ws_recv`](/packages/http/reference/http/ws/ws_recv): Read one frame.
- [`ws_connect_tls`](/packages/http/reference/http/ws/ws_connect_tls): Client upgrade with TLS options (`verify` / optional CA PEM).
