---
slug: "http/http/h2/push_promise_frame"
package: "http"
title: "push_promise_frame"
description: "A single PUSH_PROMISE frame (END_HEADERS set) promising promised_id with request fields h."
module: "http::h2"
kind: "fn"
name: "push_promise_frame"
signature: "fn push_promise_frame(int stream_id, int promised_id, Headers h) -> H2Frame"
import: "use http::h2::{push_promise_frame};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/h2.hy#L608"
order: 57
---

A single PUSH_PROMISE frame (END_HEADERS set) promising `promised_id` with request fields `h`.

## Parameters

| Name | Type |
|------|------|
| `stream_id` | `int` |
| `promised_id` | `int` |
| `h` | `Headers` |

## Returns

`H2Frame`

## See also

- [`frame_type_data`](/packages/http/reference/http/h2/frame_type_data): Frame type 0x0, DATA.
- [`frame_type_headers`](/packages/http/reference/http/h2/frame_type_headers): Frame type 0x1, HEADERS.
- [`frame_type_settings`](/packages/http/reference/http/h2/frame_type_settings): Frame type 0x4, SETTINGS.
- [`frame_type_ping`](/packages/http/reference/http/h2/frame_type_ping): Frame type 0x6, PING.
- [`frame_type_goaway`](/packages/http/reference/http/h2/frame_type_goaway): Frame type 0x7, GOAWAY.
- [`frame_type_push_promise`](/packages/http/reference/http/h2/frame_type_push_promise): Frame type 0x5, PUSH_PROMISE.
- [`frame_type_window_update`](/packages/http/reference/http/h2/frame_type_window_update): Frame type 0x8, WINDOW_UPDATE.
- [`frame_type_priority`](/packages/http/reference/http/h2/frame_type_priority): Frame type 0x2, PRIORITY (ignored on receipt).
