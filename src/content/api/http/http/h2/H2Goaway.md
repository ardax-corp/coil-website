---
slug: "http/http/h2/H2Goaway"
package: "http"
title: "H2Goaway"
description: "GOAWAY last-stream-id and error code (RFC 7540 §6.8). Debug data after 8 bytes is ignored on decode."
module: "http::h2"
kind: "class"
name: "H2Goaway"
signature: "class H2Goaway"
import: "use http::h2::{H2Goaway};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/h2.coil#L93"
order: 2
---

GOAWAY last-stream-id and error code (RFC 7540 §6.8). Debug data after 8 bytes is ignored on decode.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `last_stream_id` | `int` | Highest stream id the sender may still process. |
| `error_code` | `int` | Error code (`h2_err_*`; 0 is NO_ERROR). |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/http/reference/http/h2/H2Goaway/new) | A GOAWAY body from its parts. |

## See also

- [`H2Frame`](/packages/http/reference/http/h2/H2Frame): One HTTP/2 frame (RFC 7540 §4.1): type, flags, stream id and payload.
- [`H2Settings`](/packages/http/reference/http/h2/H2Settings): SETTINGS identifier/value pairs (RFC 7540 §6.5).
- [`H2Push`](/packages/http/reference/http/h2/H2Push): A decoded PUSH_PROMISE payload: the promised stream id and the header-block fragment.
