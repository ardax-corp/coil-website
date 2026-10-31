---
slug: "http/http/ws/ws_send_ping"
package: "http"
title: "ws_send_ping"
description: "Sends a ping with payload b (RFC 6455 allows at most 125 bytes; not checked)."
module: "http::ws"
kind: "fn"
name: "ws_send_ping"
signature: "fn ws_send_ping(WsConn c, Vec<byte> b) -> Result<(), HttpError>"
import: "use http::ws::{ws_send_ping};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/ws.hy#L553"
order: 16
---

Sends a ping with payload `b` (RFC 6455 allows at most 125 bytes; not checked).

## Parameters

| Name | Type |
|------|------|
| `c` | `WsConn` |
| `b` | `Vec<byte>` |

## Returns

`Result<(), HttpError>`

## See also

- [`ws_opcode_cont`](/packages/http/reference/http/ws/ws_opcode_cont): Opcode 0: continuation frame.
- [`ws_opcode_text`](/packages/http/reference/http/ws/ws_opcode_text): Opcode 1: text frame (UTF-8 payload).
- [`ws_opcode_bin`](/packages/http/reference/http/ws/ws_opcode_bin): Opcode 2: binary frame.
- [`ws_opcode_close`](/packages/http/reference/http/ws/ws_opcode_close): Opcode 8: close frame.
- [`ws_opcode_ping`](/packages/http/reference/http/ws/ws_opcode_ping): Opcode 9: ping frame.
- [`ws_opcode_pong`](/packages/http/reference/http/ws/ws_opcode_pong): Opcode 10: pong frame.
- [`encode_ws_frame`](/packages/http/reference/http/ws/encode_ws_frame): Encodes one frame.
- [`decode_ws_frame`](/packages/http/reference/http/ws/decode_ws_frame): Decodes the first complete frame in `raw`, unmasking the payload.
