---
slug: "http/http/h2_session/H2Session/stream_headers"
package: "http"
title: "H2Session::stream_headers"
description: "Method H2Session::stream_headers."
module: "http::h2_session"
kind: "method"
name: "stream_headers"
parent: "H2Session"
signature: "pub fn stream_headers(int sid) -> Result<Headers, HttpError>"
import: "use http::h2_session::{H2Session};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/h2_session.hy#L1307"
order: 29
---

*No documentation yet.*

Called on a `H2Session` value as `value.stream_headers(…)`.

## Parameters

| Name | Type |
|------|------|
| `sid` | `int` |

## Returns

`Result<Headers, HttpError>`

## See also

- [`H2Session`](/packages/http/reference/http/h2_session/H2Session): One HTTP/2 connection (client or server) over a byte buffer.
- [`H2Session::open`](/packages/http/reference/http/h2_session/H2Session/open)
- [`H2Session::new`](/packages/http/reference/http/h2_session/H2Session/new): Server role: expect the client connection preface.
- [`H2Session::client`](/packages/http/reference/http/h2_session/H2Session/client): Client role: the peer does not send a connection preface.
- [`H2Session::find_id`](/packages/http/reference/http/h2_session/H2Session/find_id)
- [`H2Session::queue_frame`](/packages/http/reference/http/h2_session/H2Session/queue_frame)
- [`H2Session::queue_bytes`](/packages/http/reference/http/h2_session/H2Session/queue_bytes)
- [`H2Session::fail_conn`](/packages/http/reference/http/h2_session/H2Session/fail_conn)
