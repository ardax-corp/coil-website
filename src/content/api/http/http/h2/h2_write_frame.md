---
slug: "http/http/h2/h2_write_frame"
package: "http"
title: "h2_write_frame"
description: "Writes the encoded frame f to s."
module: "http::h2"
kind: "fn"
name: "h2_write_frame"
signature: "fn h2_write_frame(Stream s, H2Frame f) -> Result<(), HttpError>"
import: "use http::h2::{h2_write_frame};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/h2.hy#L823"
order: 62
---

Writes the encoded frame `f` to `s`.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |
| `f` | `H2Frame` |

## Returns

`Result<(), HttpError>`

## See also

- [`frame_type_data`](/packages/http/reference/http/h2/frame_type_data): Frame type 0x0, DATA.
- [`frame_type_headers`](/packages/http/reference/http/h2/frame_type_headers): Frame type 0x1, HEADERS.
- [`frame_type_settings`](/packages/http/reference/http/h2/frame_type_settings): Frame type 0x4, SETTINGS.
- [`frame_type_ping`](/packages/http/reference/http/h2/frame_type_ping): Frame type 0x6, PING.
- [`frame_type_goaway`](/packages/http/reference/http/h2/frame_type_goaway): Frame type 0x7, GOAWAY.
- [`frame_type_push_promise`](/packages/http/reference/http/h2/frame_type_push_promise): Frame type 0x5, PUSH_PROMISE.
- [`frame_type_window_update`](/packages/http/reference/http/h2/frame_type_window_update): Frame type 0x8, WINDOW_UPDATE.
- [`frame_type_priority`](/packages/http/reference/http/h2/frame_type_priority): Frame type 0x2, PRIORITY (ignored on receipt).
