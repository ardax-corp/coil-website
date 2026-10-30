---
slug: "http/http/h2/index"
package: "http"
title: "http::h2"
description: "HTTP/2 framing, cleartext prior knowledge and TLS ALPN h2."
module: "http::h2"
kind: "module"
name: "http::h2"
origin: "package"
auto: false
order: 3
---

Part of the [http](/packages/http) package ([coil-http](https://github.com/ardax-corp/coil-http)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/http)).

Import what you use (`use path::*` is not allowed):

```coil
use http::h2::{H2Settings, H2Goaway};
```

## Types

| Name | Description |
|------|-------------|
| [`H2Settings`](/packages/http/reference/http/h2/H2Settings) | SETTINGS identifier/value pairs (RFC 7540 §6.5). |
| [`H2Goaway`](/packages/http/reference/http/h2/H2Goaway) | GOAWAY last-stream-id and error code (RFC 7540 §6.8). |
| [`H2Push`](/packages/http/reference/http/h2/H2Push) | PUSH_PROMISE promised-id plus remaining header-block fragment. |
| [`H2Frame`](/packages/http/reference/http/h2/H2Frame) |  |

## Functions

| Name | Description |
|------|-------------|
| [`h2_max_window`](/packages/http/reference/http/h2/h2_max_window) | Largest HTTP/2 flow-control window (2^31 - 1). |
| [`frame_wire_len`](/packages/http/reference/http/h2/frame_wire_len) | Complete first-frame size (9 + length), or 0 if `raw` is truncated. |
| [`decode_frame`](/packages/http/reference/http/h2/decode_frame) | Parse the first HTTP/2 frame in `raw`. |
| [`encode_settings_payload`](/packages/http/reference/http/h2/encode_settings_payload) | Encode SETTINGS parameters. |
| [`decode_settings_payload`](/packages/http/reference/http/h2/decode_settings_payload) | Decode SETTINGS payload. |
| [`encode_window_update_payload`](/packages/http/reference/http/h2/encode_window_update_payload) | Encode WINDOW_UPDATE increment (31-bit). |
| [`decode_window_update_payload`](/packages/http/reference/http/h2/decode_window_update_payload) | Decode 4-byte WINDOW_UPDATE. |
| [`encode_goaway_payload`](/packages/http/reference/http/h2/encode_goaway_payload) | Encode GOAWAY: 31-bit last-stream-id + 32-bit error code. |
| [`decode_goaway_payload`](/packages/http/reference/http/h2/decode_goaway_payload) | Decode GOAWAY. |
| [`ping_frame`](/packages/http/reference/http/h2/ping_frame) | PING payload is exactly 8 bytes. |
| [`headers_frame`](/packages/http/reference/http/h2/headers_frame) | HEADERS frame with HPACK payload. |
| [`headers_from_frame_with`](/packages/http/reference/http/h2/headers_from_frame_with) | Decode HEADERS through `t` so later frames can use dynamic indices. |
| [`data_frame`](/packages/http/reference/http/h2/data_frame) | DATA frame. |
| [`continuation_frame`](/packages/http/reference/http/h2/continuation_frame) | CONTINUATION payload. |
| [`encode_headers_block_frames`](/packages/http/reference/http/h2/encode_headers_block_frames) | Split a header block into HEADERS + CONTINUATION frames (RFC 7540 §6.10). |
| [`encode_push_promise_frames`](/packages/http/reference/http/h2/encode_push_promise_frames) | Split PUSH_PROMISE + CONTINUATION. |
| [`h2_authority`](/packages/http/reference/http/h2/h2_authority) | `:authority` is `host` on default ports, otherwise `host:port`. |
| [`h2_prior_knowledge_get`](/packages/http/reference/http/h2/h2_prior_knowledge_get) | Connection preface + empty SETTINGS + GET HEADERS (END_HEADERS\|END_STREAM) on stream 1. |
| [`h2_read_n_wait`](/packages/http/reference/http/h2/h2_read_n_wait) | `wait` 0: empty vec if no bytes are ready. |
| [`h2_read_n`](/packages/http/reference/http/h2/h2_read_n) | Blocking read of `n` bytes. |
| [`h2_read_frame`](/packages/http/reference/http/h2/h2_read_frame) | One complete frame: 9-byte header, then payload; [`frame_wire_len`](/packages/http/reference/http/h2/frame_wire_len) must match. |
| [`h2_try_read_frame`](/packages/http/reference/http/h2/h2_try_read_frame) | Non-blocking first byte: `None` if nothing is ready. |
| [`h2_client_alpn`](/packages/http/reference/http/h2/h2_client_alpn) | Client ALPN offer list for HTTPS `h2_connect` (prefer h2, allow HTTP/1.1). |
| [`h2_server_alpn`](/packages/http/reference/http/h2/h2_server_alpn) | Server ALPN offer: HTTP/2 when selected, otherwise HTTP/1.1 on the same listener. |
| [`h2_alpn_is_h2`](/packages/http/reference/http/h2/h2_alpn_is_h2) | Exact ALPN `h2` means speak HTTP/2; anything else (incl. |
