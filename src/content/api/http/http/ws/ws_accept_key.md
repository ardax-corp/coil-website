---
slug: "http/http/ws/ws_accept_key"
package: "http"
title: "ws_accept_key"
description: "SHA-1(key + GUID) then Base64 — Sec-WebSocket-Accept."
module: "http::ws"
kind: "fn"
name: "ws_accept_key"
signature: "fn ws_accept_key(string key) -> string"
import: "use http::ws::{ws_accept_key};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/ws.hy#L350"
order: 4
---

SHA-1(key + GUID) then Base64 — `Sec-WebSocket-Accept`.

## Parameters

| Name | Type |
|------|------|
| `key` | `string` |

## Returns

`string`

## See also

- [`encode_ws_frame`](/packages/http/reference/http/ws/encode_ws_frame): Encode one frame.
- [`decode_ws_frame`](/packages/http/reference/http/ws/decode_ws_frame): Parse the first complete WebSocket frame in `raw`.
- [`ws_frame_wire_len`](/packages/http/reference/http/ws/ws_frame_wire_len): Byte count of the first complete frame, or 0 if truncated.
- [`ws_new_key`](/packages/http/reference/http/ws/ws_new_key): 16 random-ish bytes as standard Base64 (`Sec-WebSocket-Key`).
- [`ws_read_n`](/packages/http/reference/http/ws/ws_read_n): Blocking read that parks on WouldBlock (same pattern as HTTP/2).
- [`ws_recv`](/packages/http/reference/http/ws/ws_recv): Read one frame.
- [`ws_connect_tls`](/packages/http/reference/http/ws/ws_connect_tls): Client upgrade with TLS options (`verify` / optional CA PEM).
- [`ws_connect`](/packages/http/reference/http/ws/ws_connect): Client upgrade.
