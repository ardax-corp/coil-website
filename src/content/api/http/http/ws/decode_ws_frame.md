---
slug: "http/http/ws/decode_ws_frame"
package: "http"
title: "decode_ws_frame"
description: "Decodes the first complete frame in raw, unmasking the payload. Bytes after it are ignored."
module: "http::ws"
kind: "fn"
name: "decode_ws_frame"
signature: "fn decode_ws_frame(Vec<byte> raw) -> Result<WsFrame, HttpError>"
import: "use http::ws::{decode_ws_frame};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/ws.hy#L261"
order: 9
---

Decodes the first complete frame in `raw`, unmasking the payload. Bytes after it are ignored.

Returns `Protocol` when `raw` is truncated, a reserved (RSV) bit is set, or the
payload is over 1 MiB.

## Parameters

| Name | Type |
|------|------|
| `raw` | `Vec<byte>` |

## Returns

`Result<WsFrame, HttpError>`

## See also

- [`ws_opcode_cont`](/packages/http/reference/http/ws/ws_opcode_cont): Opcode 0: continuation frame.
- [`ws_opcode_text`](/packages/http/reference/http/ws/ws_opcode_text): Opcode 1: text frame (UTF-8 payload).
- [`ws_opcode_bin`](/packages/http/reference/http/ws/ws_opcode_bin): Opcode 2: binary frame.
- [`ws_opcode_close`](/packages/http/reference/http/ws/ws_opcode_close): Opcode 8: close frame.
- [`ws_opcode_ping`](/packages/http/reference/http/ws/ws_opcode_ping): Opcode 9: ping frame.
- [`ws_opcode_pong`](/packages/http/reference/http/ws/ws_opcode_pong): Opcode 10: pong frame.
- [`encode_ws_frame`](/packages/http/reference/http/ws/encode_ws_frame): Encodes one frame.
- [`ws_frame_wire_len`](/packages/http/reference/http/ws/ws_frame_wire_len): The byte length of the first complete frame in `raw`, or 0 when `raw` is truncated.
