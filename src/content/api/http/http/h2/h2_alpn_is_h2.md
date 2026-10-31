---
slug: "http/http/h2/h2_alpn_is_h2"
package: "http"
title: "h2_alpn_is_h2"
description: "1 when the negotiated ALPN protocol is exactly h2; anything else, including empty, means HTTP/1.1."
module: "http::h2"
kind: "fn"
name: "h2_alpn_is_h2"
signature: "fn h2_alpn_is_h2(string proto) -> int"
import: "use http::h2::{h2_alpn_is_h2};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/h2.hy#L917"
order: 67
---

1 when the negotiated ALPN protocol is exactly [`h2`](/packages/http/reference/http/h2); anything else, including empty, means HTTP/1.1.

## Parameters

| Name | Type |
|------|------|
| `proto` | `string` |

## Returns

`int`

## See also

- [`http::h2`](/packages/http/reference/http/h2)
- [`frame_type_data`](/packages/http/reference/http/h2/frame_type_data): Frame type 0x0, DATA.
- [`frame_type_headers`](/packages/http/reference/http/h2/frame_type_headers): Frame type 0x1, HEADERS.
- [`frame_type_settings`](/packages/http/reference/http/h2/frame_type_settings): Frame type 0x4, SETTINGS.
- [`frame_type_ping`](/packages/http/reference/http/h2/frame_type_ping): Frame type 0x6, PING.
- [`frame_type_goaway`](/packages/http/reference/http/h2/frame_type_goaway): Frame type 0x7, GOAWAY.
- [`frame_type_push_promise`](/packages/http/reference/http/h2/frame_type_push_promise): Frame type 0x5, PUSH_PROMISE.
- [`frame_type_window_update`](/packages/http/reference/http/h2/frame_type_window_update): Frame type 0x8, WINDOW_UPDATE.
