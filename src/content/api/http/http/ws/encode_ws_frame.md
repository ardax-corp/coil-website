---
slug: "http/http/ws/encode_ws_frame"
package: "http"
title: "encode_ws_frame"
description: "Encodes one frame."
module: "http::ws"
kind: "fn"
name: "encode_ws_frame"
signature: "fn encode_ws_frame(int fin, int opcode, Vec<byte> mask_key, Vec<byte> payload) -> Vec<byte>"
import: "use http::ws::{encode_ws_frame};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/ws.hy#L212"
order: 8
---

Encodes one frame.

`fin` 1 marks the final frame. A 4-byte `mask_key` masks the payload (client
to server); an empty one sends it unmasked. The length uses the 7-, 16- or
64-bit form as needed.

## Parameters

| Name | Type |
|------|------|
| `fin` | `int` |
| `opcode` | `int` |
| `mask_key` | `Vec<byte>` |
| `payload` | `Vec<byte>` |

## Returns

`Vec<byte>`

## See also

- [`ws_opcode_cont`](/packages/http/reference/http/ws/ws_opcode_cont): Opcode 0: continuation frame.
- [`ws_opcode_text`](/packages/http/reference/http/ws/ws_opcode_text): Opcode 1: text frame (UTF-8 payload).
- [`ws_opcode_bin`](/packages/http/reference/http/ws/ws_opcode_bin): Opcode 2: binary frame.
- [`ws_opcode_close`](/packages/http/reference/http/ws/ws_opcode_close): Opcode 8: close frame.
- [`ws_opcode_ping`](/packages/http/reference/http/ws/ws_opcode_ping): Opcode 9: ping frame.
- [`ws_opcode_pong`](/packages/http/reference/http/ws/ws_opcode_pong): Opcode 10: pong frame.
- [`decode_ws_frame`](/packages/http/reference/http/ws/decode_ws_frame): Decodes the first complete frame in `raw`, unmasking the payload.
- [`ws_frame_wire_len`](/packages/http/reference/http/ws/ws_frame_wire_len): The byte length of the first complete frame in `raw`, or 0 when `raw` is truncated.
