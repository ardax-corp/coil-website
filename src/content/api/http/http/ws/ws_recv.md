---
slug: "http/http/ws/ws_recv"
package: "http"
title: "ws_recv"
description: "Reads the next complete frame. Waits while no data is ready."
module: "http::ws"
kind: "fn"
name: "ws_recv"
signature: "fn ws_recv(WsConn c) -> Result<WsFrame, HttpError>"
import: "use http::ws::{ws_recv};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/ws.hy#L703"
order: 19
---

Reads the next complete frame. Waits while no data is ready.

Returns `Protocol` for a fragment (`fin` 0), for a masked frame on a client
or an unmasked one on a server, and for the cases [`decode_ws_frame`](/packages/http/reference/http/ws/decode_ws_frame) rejects.

## Parameters

| Name | Type |
|------|------|
| `c` | `WsConn` |

## Returns

`Result<WsFrame, HttpError>`

## See also

- [`http::ws::decode_ws_frame`](/packages/http/reference/http/ws/decode_ws_frame)
- [`ws_opcode_cont`](/packages/http/reference/http/ws/ws_opcode_cont): Opcode 0: continuation frame.
- [`ws_opcode_text`](/packages/http/reference/http/ws/ws_opcode_text): Opcode 1: text frame (UTF-8 payload).
- [`ws_opcode_bin`](/packages/http/reference/http/ws/ws_opcode_bin): Opcode 2: binary frame.
- [`ws_opcode_close`](/packages/http/reference/http/ws/ws_opcode_close): Opcode 8: close frame.
- [`ws_opcode_ping`](/packages/http/reference/http/ws/ws_opcode_ping): Opcode 9: ping frame.
- [`ws_opcode_pong`](/packages/http/reference/http/ws/ws_opcode_pong): Opcode 10: pong frame.
- [`encode_ws_frame`](/packages/http/reference/http/ws/encode_ws_frame): Encodes one frame.
