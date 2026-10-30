---
slug: "http/http/h2/H2Settings"
package: "http"
title: "H2Settings"
description: "SETTINGS identifier/value pairs (RFC 7540 §6.5)."
module: "http::h2"
kind: "class"
name: "H2Settings"
signature: "class H2Settings"
import: "use http::h2::{H2Settings};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/h2.hy#L37"
order: 0
---

SETTINGS identifier/value pairs (RFC 7540 §6.5).

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `ids` | `Vec<int>` |  |
| `values` | `Vec<int>` |  |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/http/reference/http/h2/H2Settings/new) |  |

## Methods

| Name | Description |
|------|-------------|
| [`add`](/packages/http/reference/http/h2/H2Settings/add) |  |
| [`count`](/packages/http/reference/http/h2/H2Settings/count) |  |

## See also

- [`H2Goaway`](/packages/http/reference/http/h2/H2Goaway): GOAWAY last-stream-id and error code (RFC 7540 §6.8).
- [`H2Push`](/packages/http/reference/http/h2/H2Push): PUSH_PROMISE promised-id plus remaining header-block fragment.
- [`H2Frame`](/packages/http/reference/http/h2/H2Frame)
