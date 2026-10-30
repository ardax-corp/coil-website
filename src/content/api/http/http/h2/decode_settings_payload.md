---
slug: "http/http/h2/decode_settings_payload"
package: "http"
title: "decode_settings_payload"
description: "Decode SETTINGS payload. Length must be a multiple of 6 (ACK uses empty payload)."
module: "http::h2"
kind: "fn"
name: "decode_settings_payload"
signature: "fn decode_settings_payload(Vec<byte> raw) -> Result<H2Settings, HttpError>"
import: "use http::h2::{decode_settings_payload};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/h2.hy#L298"
order: 7
---

Decode SETTINGS payload. Length must be a multiple of 6 (ACK uses empty payload).

## Parameters

| Name | Type |
|------|------|
| `raw` | `Vec<byte>` |

## Returns

`Result<H2Settings, HttpError>`

## See also

- [`h2_max_window`](/packages/http/reference/http/h2/h2_max_window): Largest HTTP/2 flow-control window (2^31 - 1).
- [`frame_wire_len`](/packages/http/reference/http/h2/frame_wire_len): Complete first-frame size (9 + length), or 0 if `raw` is truncated.
- [`decode_frame`](/packages/http/reference/http/h2/decode_frame): Parse the first HTTP/2 frame in `raw`.
- [`encode_settings_payload`](/packages/http/reference/http/h2/encode_settings_payload): Encode SETTINGS parameters.
- [`encode_window_update_payload`](/packages/http/reference/http/h2/encode_window_update_payload): Encode WINDOW_UPDATE increment (31-bit).
- [`decode_window_update_payload`](/packages/http/reference/http/h2/decode_window_update_payload): Decode 4-byte WINDOW_UPDATE.
- [`encode_goaway_payload`](/packages/http/reference/http/h2/encode_goaway_payload): Encode GOAWAY: 31-bit last-stream-id + 32-bit error code.
- [`decode_goaway_payload`](/packages/http/reference/http/h2/decode_goaway_payload): Decode GOAWAY.
