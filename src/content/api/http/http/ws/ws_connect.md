---
slug: "http/http/ws/ws_connect"
package: "http"
title: "ws_connect"
description: "Opens a WebSocket to a ws:// or wss:// URL (wss:// with verified TLS)."
module: "http::ws"
kind: "fn"
name: "ws_connect"
signature: "fn ws_connect(string url) -> Result<WsConn, HttpError>"
import: "use http::ws::{ws_connect};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/ws.hy#L838"
order: 22
---

Opens a WebSocket to a `ws://` or `wss://` URL (`wss://` with verified TLS).

Sends the HTTP/1.1 upgrade request and checks the server's
`Sec-WebSocket-Accept`. Errors are as for [`ws_connect_tls`](/packages/http/reference/http/ws/ws_connect_tls).

## Parameters

| Name | Type |
|------|------|
| `url` | `string` |

## Returns

`Result<WsConn, HttpError>`

## See also

- [`http::ws::ws_connect_tls`](/packages/http/reference/http/ws/ws_connect_tls)
- [`ws_opcode_cont`](/packages/http/reference/http/ws/ws_opcode_cont): Opcode 0: continuation frame.
- [`ws_opcode_text`](/packages/http/reference/http/ws/ws_opcode_text): Opcode 1: text frame (UTF-8 payload).
- [`ws_opcode_bin`](/packages/http/reference/http/ws/ws_opcode_bin): Opcode 2: binary frame.
- [`ws_opcode_close`](/packages/http/reference/http/ws/ws_opcode_close): Opcode 8: close frame.
- [`ws_opcode_ping`](/packages/http/reference/http/ws/ws_opcode_ping): Opcode 9: ping frame.
- [`ws_opcode_pong`](/packages/http/reference/http/ws/ws_opcode_pong): Opcode 10: pong frame.
- [`encode_ws_frame`](/packages/http/reference/http/ws/encode_ws_frame): Encodes one frame.
