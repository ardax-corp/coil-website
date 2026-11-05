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
source: "https://github.com/ardax-corp/coil-http/blob/d2b81eaeb6f5b4e7d794874f593cb4e9406afd27/src/http/ws.coil#L66"
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
