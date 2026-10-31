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
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/h2.hy#L65"
order: 1
---

SETTINGS identifier/value pairs (RFC 7540 §6.5).

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `ids` | `Vec<int>` | Setting identifiers (`settings_id_*`). |
| `values` | `Vec<int>` | Setting values; `values[i]` belongs to `ids[i]`. |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/http/reference/http/h2/H2Settings/new) | An empty list of settings. |

## Methods

| Name | Description |
|------|-------------|
| [`add`](/packages/http/reference/http/h2/H2Settings/add) | Appends the setting `id = value`. |
| [`count`](/packages/http/reference/http/h2/H2Settings/count) | The number of settings. |

## See also

- [`H2Frame`](/packages/http/reference/http/h2/H2Frame): One HTTP/2 frame (RFC 7540 §4.1): type, flags, stream id and payload.
- [`H2Goaway`](/packages/http/reference/http/h2/H2Goaway): GOAWAY last-stream-id and error code (RFC 7540 §6.8).
- [`H2Push`](/packages/http/reference/http/h2/H2Push): A decoded PUSH_PROMISE payload: the promised stream id and the header-block fragment.
