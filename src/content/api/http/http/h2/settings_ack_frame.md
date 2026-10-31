---
slug: "http/http/h2/settings_ack_frame"
package: "http"
title: "settings_ack_frame"
description: "A SETTINGS frame with the ACK flag and no payload."
module: "http::h2"
kind: "fn"
name: "settings_ack_frame"
signature: "fn settings_ack_frame() -> H2Frame"
import: "use http::h2::{settings_ack_frame};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/h2.hy#L382"
order: 38
---

A SETTINGS frame with the ACK flag and no payload.

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
