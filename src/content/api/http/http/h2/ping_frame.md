---
slug: "http/http/h2/ping_frame"
package: "http"
title: "ping_frame"
description: "PING payload is exactly 8 bytes. ack nonzero sets the ACK flag."
module: "http::h2"
kind: "fn"
name: "ping_frame"
signature: "fn ping_frame(Vec<byte> payload, int ack) -> Result<H2Frame, HttpError>"
import: "use http::h2::{ping_frame};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/h2.hy#L443"
order: 45
---

PING payload is exactly 8 bytes. `ack` nonzero sets the ACK flag.

## Parameters

| Name | Type |
|------|------|
| `payload` | `Vec<byte>` |
| `ack` | `int` |

## Returns

`Result<H2Frame, HttpError>`

## See also

- [`frame_type_data`](/packages/http/reference/http/h2/frame_type_data): Frame type 0x0, DATA.
- [`frame_type_headers`](/packages/http/reference/http/h2/frame_type_headers): Frame type 0x1, HEADERS.
- [`frame_type_settings`](/packages/http/reference/http/h2/frame_type_settings): Frame type 0x4, SETTINGS.
- [`frame_type_ping`](/packages/http/reference/http/h2/frame_type_ping): Frame type 0x6, PING.
- [`frame_type_goaway`](/packages/http/reference/http/h2/frame_type_goaway): Frame type 0x7, GOAWAY.
- [`frame_type_push_promise`](/packages/http/reference/http/h2/frame_type_push_promise): Frame type 0x5, PUSH_PROMISE.
- [`frame_type_window_update`](/packages/http/reference/http/h2/frame_type_window_update): Frame type 0x8, WINDOW_UPDATE.
- [`frame_type_priority`](/packages/http/reference/http/h2/frame_type_priority): Frame type 0x2, PRIORITY (ignored on receipt).
