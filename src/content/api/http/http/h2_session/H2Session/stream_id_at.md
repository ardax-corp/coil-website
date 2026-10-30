---
slug: "http/http/h2_session/H2Session/stream_id_at"
package: "http"
title: "H2Session::stream_id_at"
description: "Method H2Session::stream_id_at."
module: "http::h2_session"
kind: "method"
name: "stream_id_at"
parent: "H2Session"
signature: "pub fn stream_id_at(int i) -> Result<int, HttpError>"
import: "use http::h2_session::{H2Session};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/h2_session.hy#L1348"
order: 34
---

*No documentation yet.*

Called on a `H2Session` value as `value.stream_id_at(…)`.

## Parameters

| Name | Type |
|------|------|
| `i` | `int` |

## Returns

`Result<int, HttpError>`

## See also

- [`H2Session`](/packages/http/reference/http/h2_session/H2Session): One HTTP/2 connection (client or server) over a byte buffer.
- [`H2Session::open`](/packages/http/reference/http/h2_session/H2Session/open)
- [`H2Session::new`](/packages/http/reference/http/h2_session/H2Session/new): Server role: expect the client connection preface.
- [`H2Session::client`](/packages/http/reference/http/h2_session/H2Session/client): Client role: the peer does not send a connection preface.
- [`H2Session::find_id`](/packages/http/reference/http/h2_session/H2Session/find_id)
- [`H2Session::queue_frame`](/packages/http/reference/http/h2_session/H2Session/queue_frame)
- [`H2Session::queue_bytes`](/packages/http/reference/http/h2_session/H2Session/queue_bytes)
- [`H2Session::fail_conn`](/packages/http/reference/http/h2_session/H2Session/fail_conn)
