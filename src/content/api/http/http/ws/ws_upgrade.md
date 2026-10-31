---
slug: "http/http/ws/ws_upgrade"
package: "http"
title: "ws_upgrade"
description: "Completes the server side of an upgrade for a request already read from c."
module: "http::ws"
kind: "fn"
name: "ws_upgrade"
signature: "fn ws_upgrade(HttpConn c, IncomingRequest req) -> Result<WsConn, HttpError>"
import: "use http::ws::{ws_upgrade};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/ws.hy#L858"
order: 24
---

Completes the server side of an upgrade for a request already read from `c`.

Writes `101 Switching Protocols` and returns the server [`WsConn`](/packages/http/reference/http/ws/WsConn). Returns
`Protocol` when `req` is not an upgrade (see [`ws_is_upgrade_req`](/packages/http/reference/http/ws/ws_is_upgrade_req)).

## Parameters

| Name | Type |
|------|------|
| `c` | `HttpConn` |
| `req` | `IncomingRequest` |

## Returns

`Result<WsConn, HttpError>`

## See also

- [`http::ws::WsConn`](/packages/http/reference/http/ws/WsConn)
- [`http::ws::ws_is_upgrade_req`](/packages/http/reference/http/ws/ws_is_upgrade_req)
- [`ws_opcode_cont`](/packages/http/reference/http/ws/ws_opcode_cont): Opcode 0: continuation frame.
- [`ws_opcode_text`](/packages/http/reference/http/ws/ws_opcode_text): Opcode 1: text frame (UTF-8 payload).
- [`ws_opcode_bin`](/packages/http/reference/http/ws/ws_opcode_bin): Opcode 2: binary frame.
- [`ws_opcode_close`](/packages/http/reference/http/ws/ws_opcode_close): Opcode 8: close frame.
- [`ws_opcode_ping`](/packages/http/reference/http/ws/ws_opcode_ping): Opcode 9: ping frame.
- [`ws_opcode_pong`](/packages/http/reference/http/ws/ws_opcode_pong): Opcode 10: pong frame.
