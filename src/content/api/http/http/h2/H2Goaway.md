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
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/h2.hy#L60"
order: 1
---

GOAWAY last-stream-id and error code (RFC 7540 §6.8). Debug data after 8 bytes is ignored on decode.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `last_stream_id` | `int` |  |
| `error_code` | `int` |  |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/http/reference/http/h2/H2Goaway/new) |  |

## See also

- [`H2Settings`](/packages/http/reference/http/h2/H2Settings): SETTINGS identifier/value pairs (RFC 7540 §6.5).
- [`H2Push`](/packages/http/reference/http/h2/H2Push): PUSH_PROMISE promised-id plus remaining header-block fragment.
- [`H2Frame`](/packages/http/reference/http/h2/H2Frame)
