---
slug: "http/http/ws/WsFrame"
package: "http"
title: "WsFrame"
description: "One WebSocket frame (RFC 6455 §5.2), as ws_recv and decode_ws_frame return it."
module: "http::ws"
kind: "class"
name: "WsFrame"
signature: "class WsFrame"
import: "use http::ws::{WsFrame};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/ws.hy#L52"
order: 0
---

One WebSocket frame (RFC 6455 §5.2), as [`ws_recv`](/packages/http/reference/http/ws/ws_recv) and [`decode_ws_frame`](/packages/http/reference/http/ws/decode_ws_frame) return it.

`opcode` is one of the `ws_opcode_*` values. `payload` is already unmasked.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `fin` | `int` | 1 when this is the final frame of a message. |
| `opcode` | `int` | Frame type: text, binary, close, ping, pong or continuation (`ws_opcode_*`). |
| `masked` | `int` | 1 when the frame arrived masked (client to server). |
| `payload` | `Vec<byte>` | Payload bytes, unmasked. |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/http/reference/http/ws/WsFrame/new) | A frame from its parts. |

## Examples

```coil
use tests::assert;
use http::ws::{decode_ws_frame, encode_ws_frame, ws_opcode_text};
use string::to_bytes;

let no_mask: Vec<byte> = Vec::new();
let wire = encode_ws_frame(1, ws_opcode_text(), no_mask, to_bytes("hi"));
let f = match decode_ws_frame(wire) {
    Result::Ok(f) => f,
    Result::Err(e) => panic show(e),
};
assert!(f.fin == 1);
assert!(f.opcode == ws_opcode_text());
assert!(f.masked == 0);
assert!(f.payload.len() == 2);
```

## See also

- [`http::ws::ws_recv`](/packages/http/reference/http/ws/ws_recv)
- [`http::ws::decode_ws_frame`](/packages/http/reference/http/ws/decode_ws_frame)
- [`WsConn`](/packages/http/reference/http/ws/WsConn): An open WebSocket over an upgraded HTTP/1.1 connection.
