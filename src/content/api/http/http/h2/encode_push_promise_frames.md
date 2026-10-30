---
slug: "http/http/h2/encode_push_promise_frames"
package: "http"
title: "encode_push_promise_frames"
description: "Split PUSH_PROMISE + CONTINUATION. Promised id stays on the first frame."
module: "http::h2"
kind: "fn"
name: "encode_push_promise_frames"
signature: "fn encode_push_promise_frames(int stream_id, int promised_id, Headers h, int max_payload) -> Vec<byte>"
import: "use http::h2::{encode_push_promise_frames};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/h2.hy#L536"
order: 18
---

Split PUSH_PROMISE + CONTINUATION. Promised id stays on the first frame.

## Parameters

| Name | Type |
|------|------|
| `stream_id` | `int` |
| `promised_id` | `int` |
| `h` | `Headers` |
| `max_payload` | `int` |

## Returns

`Vec<byte>`

## See also

- [`h2_max_window`](/packages/http/reference/http/h2/h2_max_window): Largest HTTP/2 flow-control window (2^31 - 1).
- [`frame_wire_len`](/packages/http/reference/http/h2/frame_wire_len): Complete first-frame size (9 + length), or 0 if `raw` is truncated.
- [`decode_frame`](/packages/http/reference/http/h2/decode_frame): Parse the first HTTP/2 frame in `raw`.
- [`encode_settings_payload`](/packages/http/reference/http/h2/encode_settings_payload): Encode SETTINGS parameters.
- [`decode_settings_payload`](/packages/http/reference/http/h2/decode_settings_payload): Decode SETTINGS payload.
- [`encode_window_update_payload`](/packages/http/reference/http/h2/encode_window_update_payload): Encode WINDOW_UPDATE increment (31-bit).
- [`decode_window_update_payload`](/packages/http/reference/http/h2/decode_window_update_payload): Decode 4-byte WINDOW_UPDATE.
- [`encode_goaway_payload`](/packages/http/reference/http/h2/encode_goaway_payload): Encode GOAWAY: 31-bit last-stream-id + 32-bit error code.
