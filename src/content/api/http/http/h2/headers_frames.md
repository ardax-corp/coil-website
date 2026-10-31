---
slug: "http/http/h2/headers_frames"
package: "http"
title: "headers_frames"
description: "HPACK-encodes h and splits it into HEADERS + CONTINUATION frames, as encode_headers_block_frames."
module: "http::h2"
kind: "fn"
name: "headers_frames"
signature: "fn headers_frames(int stream_id, Headers h, int end_stream, int max_payload) -> Vec<byte>"
import: "use http::h2::{headers_frames};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/h2.coil#L564"
order: 54
---

HPACK-encodes `h` and splits it into HEADERS + CONTINUATION frames, as [`encode_headers_block_frames`](/packages/http/reference/http/h2/encode_headers_block_frames).

## Parameters

| Name | Type |
|------|------|
| `stream_id` | `int` |
| `h` | `Headers` |
| `end_stream` | `int` |
| `max_payload` | `int` |

## Returns

`Vec<byte>`

## See also

- [`http::h2::encode_headers_block_frames`](/packages/http/reference/http/h2/encode_headers_block_frames)
- [`frame_type_data`](/packages/http/reference/http/h2/frame_type_data): Frame type 0x0, DATA.
- [`frame_type_headers`](/packages/http/reference/http/h2/frame_type_headers): Frame type 0x1, HEADERS.
- [`frame_type_settings`](/packages/http/reference/http/h2/frame_type_settings): Frame type 0x4, SETTINGS.
- [`frame_type_ping`](/packages/http/reference/http/h2/frame_type_ping): Frame type 0x6, PING.
- [`frame_type_goaway`](/packages/http/reference/http/h2/frame_type_goaway): Frame type 0x7, GOAWAY.
- [`frame_type_push_promise`](/packages/http/reference/http/h2/frame_type_push_promise): Frame type 0x5, PUSH_PROMISE.
- [`frame_type_window_update`](/packages/http/reference/http/h2/frame_type_window_update): Frame type 0x8, WINDOW_UPDATE.
