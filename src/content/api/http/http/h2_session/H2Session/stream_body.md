---
slug: "http/http/h2_session/H2Session/stream_body"
package: "http"
title: "H2Session::stream_body"
description: "Method H2Session::stream_body."
module: "http::h2_session"
kind: "method"
name: "stream_body"
parent: "H2Session"
signature: "pub fn stream_body(int sid) -> Result<Vec<byte>, HttpError>"
import: "use http::h2_session::{H2Session};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/h2_session.hy#L1323"
order: 31
---

*No documentation yet.*

Called on a `H2Session` value as `value.stream_body(…)`.

## Parameters

| Name | Type |
|------|------|
| `sid` | `int` |

## Returns

`Result<Vec<byte>, HttpError>`

## See also

- [`H2Session`](/packages/http/reference/http/h2_session/H2Session): One HTTP/2 connection (client or server) over a byte buffer.
- [`H2Session::open`](/packages/http/reference/http/h2_session/H2Session/open)
- [`H2Session::new`](/packages/http/reference/http/h2_session/H2Session/new): Server role: expect the client connection preface.
- [`H2Session::client`](/packages/http/reference/http/h2_session/H2Session/client): Client role: the peer does not send a connection preface.
- [`H2Session::find_id`](/packages/http/reference/http/h2_session/H2Session/find_id)
- [`H2Session::queue_frame`](/packages/http/reference/http/h2_session/H2Session/queue_frame)
- [`H2Session::queue_bytes`](/packages/http/reference/http/h2_session/H2Session/queue_bytes)
- [`H2Session::fail_conn`](/packages/http/reference/http/h2_session/H2Session/fail_conn)
