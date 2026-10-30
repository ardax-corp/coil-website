---
slug: "http/http/h2_session/H2Session/queue_response"
package: "http"
title: "H2Session::queue_response"
description: "Server: queue the handler response on an existing stream."
module: "http::h2_session"
kind: "method"
name: "queue_response"
parent: "H2Session"
signature: "pub fn queue_response(int sid, int status, Headers fields, Vec<byte> body, Headers trailers) -> Result<(), HttpError>"
import: "use http::h2_session::{H2Session};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/h2_session.hy#L1217"
order: 26
---

Server: queue the handler response on an existing stream.

Called on a `H2Session` value as `value.queue_response(…)`.

## Parameters

| Name | Type |
|------|------|
| `sid` | `int` |
| `status` | `int` |
| `fields` | `Headers` |
| `body` | `Vec<byte>` |
| `trailers` | `Headers` |

## Returns

`Result<(), HttpError>`

## See also

- [`H2Session`](/packages/http/reference/http/h2_session/H2Session): One HTTP/2 connection (client or server) over a byte buffer.
- [`H2Session::open`](/packages/http/reference/http/h2_session/H2Session/open)
- [`H2Session::new`](/packages/http/reference/http/h2_session/H2Session/new): Server role: expect the client connection preface.
- [`H2Session::client`](/packages/http/reference/http/h2_session/H2Session/client): Client role: the peer does not send a connection preface.
- [`H2Session::find_id`](/packages/http/reference/http/h2_session/H2Session/find_id)
- [`H2Session::queue_frame`](/packages/http/reference/http/h2_session/H2Session/queue_frame)
- [`H2Session::queue_bytes`](/packages/http/reference/http/h2_session/H2Session/queue_bytes)
- [`H2Session::fail_conn`](/packages/http/reference/http/h2_session/H2Session/fail_conn)
