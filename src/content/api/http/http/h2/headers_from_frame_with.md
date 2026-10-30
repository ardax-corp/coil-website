---
slug: "http/http/h2/headers_from_frame_with"
package: "http"
title: "headers_from_frame_with"
description: "Decode HEADERS through t so later frames can use dynamic indices."
module: "http::h2"
kind: "fn"
name: "headers_from_frame_with"
signature: "fn headers_from_frame_with(H2Frame f, HpackTable t) -> Result<Headers, HttpError>"
import: "use http::h2::{headers_from_frame_with};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/h2.hy#L410"
order: 14
---

Decode HEADERS through `t` so later frames can use dynamic indices.

## Parameters

| Name | Type |
|------|------|
| `f` | `H2Frame` |
| `t` | `HpackTable` |

## Returns

`Result<Headers, HttpError>`

## See also

- [`h2_max_window`](/packages/http/reference/http/h2/h2_max_window): Largest HTTP/2 flow-control window (2^31 - 1).
- [`frame_wire_len`](/packages/http/reference/http/h2/frame_wire_len): Complete first-frame size (9 + length), or 0 if `raw` is truncated.
- [`decode_frame`](/packages/http/reference/http/h2/decode_frame): Parse the first HTTP/2 frame in `raw`.
- [`encode_settings_payload`](/packages/http/reference/http/h2/encode_settings_payload): Encode SETTINGS parameters.
- [`decode_settings_payload`](/packages/http/reference/http/h2/decode_settings_payload): Decode SETTINGS payload.
- [`encode_window_update_payload`](/packages/http/reference/http/h2/encode_window_update_payload): Encode WINDOW_UPDATE increment (31-bit).
- [`decode_window_update_payload`](/packages/http/reference/http/h2/decode_window_update_payload): Decode 4-byte WINDOW_UPDATE.
- [`encode_goaway_payload`](/packages/http/reference/http/h2/encode_goaway_payload): Encode GOAWAY: 31-bit last-stream-id + 32-bit error code.
