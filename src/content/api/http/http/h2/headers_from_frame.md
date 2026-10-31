---
slug: "http/http/h2/headers_from_frame"
package: "http"
title: "headers_from_frame"
description: "Decodes a HEADERS frame's header block with a fresh HPACK table."
module: "http::h2"
kind: "fn"
name: "headers_from_frame"
signature: "fn headers_from_frame(H2Frame f) -> Result<Headers, HttpError>"
import: "use http::h2::{headers_from_frame};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/h2.hy#L488"
order: 50
---

Decodes a HEADERS frame's header block with a fresh HPACK table.

## Parameters

| Name | Type |
|------|------|
| `f` | `H2Frame` |

## Returns

`Result<Headers, HttpError>`

## See also

- [`frame_type_data`](/packages/http/reference/http/h2/frame_type_data): Frame type 0x0, DATA.
- [`frame_type_headers`](/packages/http/reference/http/h2/frame_type_headers): Frame type 0x1, HEADERS.
- [`frame_type_settings`](/packages/http/reference/http/h2/frame_type_settings): Frame type 0x4, SETTINGS.
- [`frame_type_ping`](/packages/http/reference/http/h2/frame_type_ping): Frame type 0x6, PING.
- [`frame_type_goaway`](/packages/http/reference/http/h2/frame_type_goaway): Frame type 0x7, GOAWAY.
- [`frame_type_push_promise`](/packages/http/reference/http/h2/frame_type_push_promise): Frame type 0x5, PUSH_PROMISE.
- [`frame_type_window_update`](/packages/http/reference/http/h2/frame_type_window_update): Frame type 0x8, WINDOW_UPDATE.
- [`frame_type_priority`](/packages/http/reference/http/h2/frame_type_priority): Frame type 0x2, PRIORITY (ignored on receipt).
