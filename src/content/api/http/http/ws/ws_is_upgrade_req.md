---
slug: "http/http/ws/ws_is_upgrade_req"
package: "http"
title: "ws_is_upgrade_req"
description: "1 when req is a WebSocket upgrade: GET with Upgrade: websocket, Connection: upgrade, Sec-WebSocket-Version: 13 and a Sec-WebSocket-Key; otherwise 0."
module: "http::ws"
kind: "fn"
name: "ws_is_upgrade_req"
signature: "fn ws_is_upgrade_req(IncomingRequest req) -> int"
import: "use http::ws::{ws_is_upgrade_req};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/ws.hy#L441"
order: 12
---

1 when `req` is a WebSocket upgrade: `GET` with `Upgrade: websocket`, `Connection: upgrade`, `Sec-WebSocket-Version: 13` and a `Sec-WebSocket-Key`; otherwise 0.

## Parameters

| Name | Type |
|------|------|
| `req` | `IncomingRequest` |

## Returns

`int`

## See also

- [`ws_opcode_cont`](/packages/http/reference/http/ws/ws_opcode_cont): Opcode 0: continuation frame.
- [`ws_opcode_text`](/packages/http/reference/http/ws/ws_opcode_text): Opcode 1: text frame (UTF-8 payload).
- [`ws_opcode_bin`](/packages/http/reference/http/ws/ws_opcode_bin): Opcode 2: binary frame.
- [`ws_opcode_close`](/packages/http/reference/http/ws/ws_opcode_close): Opcode 8: close frame.
- [`ws_opcode_ping`](/packages/http/reference/http/ws/ws_opcode_ping): Opcode 9: ping frame.
- [`ws_opcode_pong`](/packages/http/reference/http/ws/ws_opcode_pong): Opcode 10: pong frame.
- [`encode_ws_frame`](/packages/http/reference/http/ws/encode_ws_frame): Encodes one frame.
- [`decode_ws_frame`](/packages/http/reference/http/ws/decode_ws_frame): Decodes the first complete frame in `raw`, unmasking the payload.
