---
slug: "http/http/ws/WsFrame/new"
package: "http"
title: "WsFrame::new"
description: "A frame from its parts."
module: "http::ws"
kind: "static method"
name: "new"
parent: "WsFrame"
signature: "pub static fn new(int fin, int opcode, int masked, Vec<byte> payload) -> WsFrame"
import: "use http::ws::{WsFrame};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/ws.coil#L65"
order: 0
---

A frame from its parts.

## Parameters

| Name | Type |
|------|------|
| `fin` | `int` |
| `opcode` | `int` |
| `masked` | `int` |
| `payload` | `Vec<byte>` |

## Returns

`WsFrame`

## See also

- [`WsFrame`](/packages/http/reference/http/ws/WsFrame): One WebSocket frame (RFC 6455 §5.2), as `ws_recv` and `decode_ws_frame` return it.
