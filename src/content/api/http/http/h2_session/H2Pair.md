---
slug: "http/http/h2_session/H2Pair"
package: "http"
title: "H2Pair"
description: "The two responses of h2_connect_two (streams 1 and 3)."
module: "http::h2_session"
kind: "class"
name: "H2Pair"
signature: "class H2Pair"
import: "use http::h2_session::{H2Pair};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/h2_session.hy#L1487"
order: 1
---

The two responses of [`h2_connect_two`](/packages/http/reference/http/h2_session/h2_connect_two) (streams 1 and 3).

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `first` | `Response` | Response on stream 1. |
| `second` | `Response` | Response on stream 3. |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/http/reference/http/h2_session/H2Pair/new) | A pair from its parts. |

## See also

- [`http::h2_session::h2_connect_two`](/packages/http/reference/http/h2_session/h2_connect_two)
- [`H2Session`](/packages/http/reference/http/h2_session/H2Session): One HTTP/2 connection (client or server side) driven through byte buffers, with no socket of its own.
