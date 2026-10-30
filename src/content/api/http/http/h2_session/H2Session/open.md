---
slug: "http/http/h2_session/H2Session/open"
package: "http"
title: "H2Session::open"
description: "Associated function H2Session::open."
module: "http::h2_session"
kind: "static method"
name: "open"
parent: "H2Session"
signature: "pub static fn open(int role, int preface_done) -> H2Session"
import: "use http::h2_session::{H2Session};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/h2_session.hy#L155"
order: 0
---

*No documentation yet.*

## Parameters

| Name | Type |
|------|------|
| `role` | `int` |
| `preface_done` | `int` |

## Returns

`H2Session`

## See also

- [`H2Session`](/packages/http/reference/http/h2_session/H2Session): One HTTP/2 connection (client or server) over a byte buffer.
- [`H2Session::new`](/packages/http/reference/http/h2_session/H2Session/new): Server role: expect the client connection preface.
- [`H2Session::client`](/packages/http/reference/http/h2_session/H2Session/client): Client role: the peer does not send a connection preface.
- [`H2Session::find_id`](/packages/http/reference/http/h2_session/H2Session/find_id)
- [`H2Session::queue_frame`](/packages/http/reference/http/h2_session/H2Session/queue_frame)
- [`H2Session::queue_bytes`](/packages/http/reference/http/h2_session/H2Session/queue_bytes)
- [`H2Session::fail_conn`](/packages/http/reference/http/h2_session/H2Session/fail_conn)
- [`H2Session::try_preface`](/packages/http/reference/http/h2_session/H2Session/try_preface)
