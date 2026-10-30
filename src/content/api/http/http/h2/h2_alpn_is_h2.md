---
slug: "http/http/h2/h2_alpn_is_h2"
package: "http"
title: "h2_alpn_is_h2"
description: "Exact ALPN h2 means speak HTTP/2; anything else (incl. empty) falls back to HTTP/1.1."
module: "http::h2"
kind: "fn"
name: "h2_alpn_is_h2"
signature: "fn h2_alpn_is_h2(string proto) -> int"
import: "use http::h2::{h2_alpn_is_h2};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/h2.hy#L837"
order: 27
---

Exact ALPN [`h2`](/packages/http/reference/http/h2) means speak HTTP/2; anything else (incl. empty) falls back to HTTP/1.1.

## Parameters

| Name | Type |
|------|------|
| `proto` | `string` |

## Returns

`int`

## See also

- [`http::h2`](/packages/http/reference/http/h2)
- [`h2_max_window`](/packages/http/reference/http/h2/h2_max_window): Largest HTTP/2 flow-control window (2^31 - 1).
- [`frame_wire_len`](/packages/http/reference/http/h2/frame_wire_len): Complete first-frame size (9 + length), or 0 if `raw` is truncated.
- [`decode_frame`](/packages/http/reference/http/h2/decode_frame): Parse the first HTTP/2 frame in `raw`.
- [`encode_settings_payload`](/packages/http/reference/http/h2/encode_settings_payload): Encode SETTINGS parameters.
- [`decode_settings_payload`](/packages/http/reference/http/h2/decode_settings_payload): Decode SETTINGS payload.
- [`encode_window_update_payload`](/packages/http/reference/http/h2/encode_window_update_payload): Encode WINDOW_UPDATE increment (31-bit).
- [`decode_window_update_payload`](/packages/http/reference/http/h2/decode_window_update_payload): Decode 4-byte WINDOW_UPDATE.
