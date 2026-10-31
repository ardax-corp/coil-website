---
slug: "http/http/ws/ws_connect_tls"
package: "http"
title: "ws_connect_tls"
description: "Opens a WebSocket to a ws:// or wss:// URL with TLS options."
module: "http::ws"
kind: "fn"
name: "ws_connect_tls"
signature: "fn ws_connect_tls(string url, bool verify, string ca_pem) -> Result<WsConn, HttpError>"
import: "use http::ws::{ws_connect_tls};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/ws.hy#L822"
order: 21
---

Opens a WebSocket to a `ws://` or `wss://` URL with TLS options.

For `wss://`, `verify` false skips certificate checks and a non-empty
`ca_pem` trusts that PEM CA; both are ignored for `ws://`. Returns `BadUrl` for
other schemes, `Io` / `Tls` when connecting fails and `Protocol` when the
server does not accept the upgrade.

## Parameters

| Name | Type |
|------|------|
| `url` | `string` |
| `verify` | `bool` |
| `ca_pem` | `string` |

## Returns

`Result<WsConn, HttpError>`

## See also

- [`ws_opcode_cont`](/packages/http/reference/http/ws/ws_opcode_cont): Opcode 0: continuation frame.
- [`ws_opcode_text`](/packages/http/reference/http/ws/ws_opcode_text): Opcode 1: text frame (UTF-8 payload).
- [`ws_opcode_bin`](/packages/http/reference/http/ws/ws_opcode_bin): Opcode 2: binary frame.
- [`ws_opcode_close`](/packages/http/reference/http/ws/ws_opcode_close): Opcode 8: close frame.
- [`ws_opcode_ping`](/packages/http/reference/http/ws/ws_opcode_ping): Opcode 9: ping frame.
- [`ws_opcode_pong`](/packages/http/reference/http/ws/ws_opcode_pong): Opcode 10: pong frame.
- [`encode_ws_frame`](/packages/http/reference/http/ws/encode_ws_frame): Encodes one frame.
- [`decode_ws_frame`](/packages/http/reference/http/ws/decode_ws_frame): Decodes the first complete frame in `raw`, unmasking the payload.
