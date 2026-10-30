---
slug: "http/http/h2/H2Frame"
package: "http"
title: "H2Frame"
description: "Class H2Frame."
module: "http::h2"
kind: "class"
name: "H2Frame"
signature: "class H2Frame"
import: "use http::h2::{H2Frame};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/h2.hy#L23"
order: 28
---

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `typ` | `int` |  |
| `flags` | `int` |  |
| `stream_id` | `int` |  |
| `payload` | `Vec<byte>` |  |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/http/reference/http/h2/H2Frame/new) |  |

## See also

- [`H2Settings`](/packages/http/reference/http/h2/H2Settings): SETTINGS identifier/value pairs (RFC 7540 §6.5).
- [`H2Goaway`](/packages/http/reference/http/h2/H2Goaway): GOAWAY last-stream-id and error code (RFC 7540 §6.8).
- [`H2Push`](/packages/http/reference/http/h2/H2Push): PUSH_PROMISE promised-id plus remaining header-block fragment.
