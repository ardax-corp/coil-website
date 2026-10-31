---
slug: "http/http/ws/ws_accept_key"
package: "http"
title: "ws_accept_key"
description: "The Sec-WebSocket-Accept value for a client's Sec-WebSocket-Key: Base64(SHA-1(key + RFC 6455 GUID))."
module: "http::ws"
kind: "fn"
name: "ws_accept_key"
signature: "fn ws_accept_key(string key) -> string"
import: "use http::ws::{ws_accept_key};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/ws.hy#L433"
order: 11
---

The `Sec-WebSocket-Accept` value for a client's `Sec-WebSocket-Key`: Base64(SHA-1(key + RFC 6455 GUID)).

## Parameters

| Name | Type |
|------|------|
| `key` | `string` |

## Returns

`string`

## Examples

```coil
use tests::assert;
use http::ws::ws_accept_key;

assert!(ws_accept_key("dGhlIHNhbXBsZSBub25jZQ==") == "s3pPLMBiTxaQ9kYGzzhZRbK+xOo=");
```

## See also

- [`ws_opcode_cont`](/packages/http/reference/http/ws/ws_opcode_cont): Opcode 0: continuation frame.
- [`ws_opcode_text`](/packages/http/reference/http/ws/ws_opcode_text): Opcode 1: text frame (UTF-8 payload).
- [`ws_opcode_bin`](/packages/http/reference/http/ws/ws_opcode_bin): Opcode 2: binary frame.
- [`ws_opcode_close`](/packages/http/reference/http/ws/ws_opcode_close): Opcode 8: close frame.
- [`ws_opcode_ping`](/packages/http/reference/http/ws/ws_opcode_ping): Opcode 9: ping frame.
- [`ws_opcode_pong`](/packages/http/reference/http/ws/ws_opcode_pong): Opcode 10: pong frame.
- [`encode_ws_frame`](/packages/http/reference/http/ws/encode_ws_frame): Encodes one frame.
- [`decode_ws_frame`](/packages/http/reference/http/ws/decode_ws_frame): Decodes the first complete frame in `raw`, unmasking the payload.
