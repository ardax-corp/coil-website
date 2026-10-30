---
slug: "http/http/h2_session/H2Pair"
package: "http"
title: "H2Pair"
description: "Two responses from one multiplexed exchange (streams 1 and 3)."
module: "http::h2_session"
kind: "class"
name: "H2Pair"
signature: "class H2Pair"
import: "use http::h2_session::{H2Pair};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/h2_session.hy#L1411"
order: 1
---

Two responses from one multiplexed exchange (streams 1 and 3).

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `first` | `Response` |  |
| `second` | `Response` |  |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/http/reference/http/h2_session/H2Pair/new) |  |

## See also

- [`H2Session`](/packages/http/reference/http/h2_session/H2Session): One HTTP/2 connection (client or server) over a byte buffer.
- [`H2ClientSlot`](/packages/http/reference/http/h2_session/H2ClientSlot): One HTTP/2 connection held by `Client`.
