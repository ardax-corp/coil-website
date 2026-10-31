---
slug: "http/http/ws/ws_opcode_bin"
package: "http"
title: "ws_opcode_bin"
description: "Opcode 2: binary frame."
module: "http::ws"
kind: "fn"
name: "ws_opcode_bin"
signature: "fn ws_opcode_bin() -> int"
import: "use http::ws::{ws_opcode_bin};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/ws.hy#L135"
order: 4
---

Opcode 2: binary frame.

## Returns

`int`

## See also

- [`ws_opcode_cont`](/packages/http/reference/http/ws/ws_opcode_cont): Opcode 0: continuation frame.
- [`ws_opcode_text`](/packages/http/reference/http/ws/ws_opcode_text): Opcode 1: text frame (UTF-8 payload).
- [`ws_opcode_close`](/packages/http/reference/http/ws/ws_opcode_close): Opcode 8: close frame.
- [`ws_opcode_ping`](/packages/http/reference/http/ws/ws_opcode_ping): Opcode 9: ping frame.
- [`ws_opcode_pong`](/packages/http/reference/http/ws/ws_opcode_pong): Opcode 10: pong frame.
- [`encode_ws_frame`](/packages/http/reference/http/ws/encode_ws_frame): Encodes one frame.
- [`decode_ws_frame`](/packages/http/reference/http/ws/decode_ws_frame): Decodes the first complete frame in `raw`, unmasking the payload.
- [`ws_frame_wire_len`](/packages/http/reference/http/ws/ws_frame_wire_len): The byte length of the first complete frame in `raw`, or 0 when `raw` is truncated.
