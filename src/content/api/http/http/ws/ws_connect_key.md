---
slug: "http/http/ws/ws_connect_key"
package: "http"
title: "ws_connect_key"
description: "ws_connect with a caller-supplied Sec-WebSocket-Key, for tests against a known handshake."
module: "http::ws"
kind: "fn"
name: "ws_connect_key"
signature: "fn ws_connect_key(string url, string key) -> Result<WsConn, HttpError>"
import: "use http::ws::{ws_connect_key};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/ws.coil#L843"
order: 23
---

[`ws_connect`](/packages/http/reference/http/ws/ws_connect) with a caller-supplied `Sec-WebSocket-Key`, for tests against a known handshake.

## Parameters

| Name | Type |
|------|------|
| `url` | `string` |
| `key` | `string` |

## Returns

`Result<WsConn, HttpError>`

## See also

- [`http::ws::ws_connect`](/packages/http/reference/http/ws/ws_connect)
- [`ws_opcode_cont`](/packages/http/reference/http/ws/ws_opcode_cont): Opcode 0: continuation frame.
- [`ws_opcode_text`](/packages/http/reference/http/ws/ws_opcode_text): Opcode 1: text frame (UTF-8 payload).
- [`ws_opcode_bin`](/packages/http/reference/http/ws/ws_opcode_bin): Opcode 2: binary frame.
- [`ws_opcode_close`](/packages/http/reference/http/ws/ws_opcode_close): Opcode 8: close frame.
- [`ws_opcode_ping`](/packages/http/reference/http/ws/ws_opcode_ping): Opcode 9: ping frame.
- [`ws_opcode_pong`](/packages/http/reference/http/ws/ws_opcode_pong): Opcode 10: pong frame.
- [`encode_ws_frame`](/packages/http/reference/http/ws/encode_ws_frame): Encodes one frame.
