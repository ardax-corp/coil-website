---
slug: "http/http/h2/H2Push"
package: "http"
title: "H2Push"
description: "A decoded PUSH_PROMISE payload: the promised stream id and the header-block fragment."
module: "http::h2"
kind: "class"
name: "H2Push"
signature: "class H2Push"
import: "use http::h2::{H2Push};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/h2.hy#L569"
order: 3
---

A decoded PUSH_PROMISE payload: the promised stream id and the header-block fragment.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `promised_id` | `int` | The stream id the server promises (even, nonzero). |
| `block` | `Vec<byte>` | HPACK header-block fragment. |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/http/reference/http/h2/H2Push/new) | A push promise from its parts. |

## See also

- [`H2Frame`](/packages/http/reference/http/h2/H2Frame): One HTTP/2 frame (RFC 7540 §4.1): type, flags, stream id and payload.
- [`H2Settings`](/packages/http/reference/http/h2/H2Settings): SETTINGS identifier/value pairs (RFC 7540 §6.5).
- [`H2Goaway`](/packages/http/reference/http/h2/H2Goaway): GOAWAY last-stream-id and error code (RFC 7540 §6.8).
