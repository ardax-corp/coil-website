---
slug: "http/http/h2_session/H2ClientSlot"
package: "http"
title: "H2ClientSlot"
description: "One HTTP/2 connection held by Client. Not the HTTP/1.1 ConnPool."
module: "http::h2_session"
kind: "class"
name: "H2ClientSlot"
signature: "class H2ClientSlot"
import: "use http::h2_session::{H2ClientSlot};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/h2_session.hy#L1694"
order: 2
---

One HTTP/2 connection held by `Client`. Not the HTTP/1.1 `ConnPool`.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `on` | `int` |  |
| `key` | `string` |  |
| `next` | `int` |  |
| `stream` | `Option<Stream>` |  |
| `sess` | `Option<H2Session>` |  |

## See also

- [`H2Session`](/packages/http/reference/http/h2_session/H2Session): One HTTP/2 connection (client or server) over a byte buffer.
- [`H2Pair`](/packages/http/reference/http/h2_session/H2Pair): Two responses from one multiplexed exchange (streams 1 and 3).
