---
slug: "http/http/ws/ws_opcode_close"
package: "http"
title: "ws_opcode_close"
description: "Opcode 8: close frame."
module: "http::ws"
kind: "fn"
name: "ws_opcode_close"
signature: "fn ws_opcode_close() -> int"
import: "use http::ws::{ws_opcode_close};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/ws.coil#L140"
order: 5
---

Opcode 8: close frame.

## Returns

`int`

## See also

- [`ws_opcode_cont`](/packages/http/reference/http/ws/ws_opcode_cont): Opcode 0: continuation frame.
- [`ws_opcode_text`](/packages/http/reference/http/ws/ws_opcode_text): Opcode 1: text frame (UTF-8 payload).
- [`ws_opcode_bin`](/packages/http/reference/http/ws/ws_opcode_bin): Opcode 2: binary frame.
- [`ws_opcode_ping`](/packages/http/reference/http/ws/ws_opcode_ping): Opcode 9: ping frame.
- [`ws_opcode_pong`](/packages/http/reference/http/ws/ws_opcode_pong): Opcode 10: pong frame.
- [`encode_ws_frame`](/packages/http/reference/http/ws/encode_ws_frame): Encodes one frame.
- [`decode_ws_frame`](/packages/http/reference/http/ws/decode_ws_frame): Decodes the first complete frame in `raw`, unmasking the payload.
- [`ws_frame_wire_len`](/packages/http/reference/http/ws/ws_frame_wire_len): The byte length of the first complete frame in `raw`, or 0 when `raw` is truncated.
