---
slug: "http/http/h2/H2Push"
package: "http"
title: "H2Push"
description: "PUSH_PROMISE promised-id plus remaining header-block fragment."
module: "http::h2"
kind: "class"
name: "H2Push"
signature: "class H2Push"
import: "use http::h2::{H2Push};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/h2.hy#L497"
order: 2
---

PUSH_PROMISE promised-id plus remaining header-block fragment.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `promised_id` | `int` |  |
| `block` | `Vec<byte>` |  |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/http/reference/http/h2/H2Push/new) |  |

## See also

- [`H2Settings`](/packages/http/reference/http/h2/H2Settings): SETTINGS identifier/value pairs (RFC 7540 §6.5).
- [`H2Goaway`](/packages/http/reference/http/h2/H2Goaway): GOAWAY last-stream-id and error code (RFC 7540 §6.8).
- [`H2Frame`](/packages/http/reference/http/h2/H2Frame)
