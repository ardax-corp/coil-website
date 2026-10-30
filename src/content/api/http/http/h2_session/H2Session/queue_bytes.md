---
slug: "http/http/h2_session/H2Session/queue_bytes"
package: "http"
title: "H2Session::queue_bytes"
description: "Method H2Session::queue_bytes."
module: "http::h2_session"
kind: "method"
name: "queue_bytes"
parent: "H2Session"
signature: "pub fn queue_bytes(Vec<byte> wire)"
import: "use http::h2_session::{H2Session};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/h2_session.hy#L281"
order: 5
---

*No documentation yet.*

Called on a `H2Session` value as `value.queue_bytes(…)`.

## Parameters

| Name | Type |
|------|------|
| `wire` | `Vec<byte>` |

## See also

- [`H2Session`](/packages/http/reference/http/h2_session/H2Session): One HTTP/2 connection (client or server) over a byte buffer.
- [`H2Session::open`](/packages/http/reference/http/h2_session/H2Session/open)
- [`H2Session::new`](/packages/http/reference/http/h2_session/H2Session/new): Server role: expect the client connection preface.
- [`H2Session::client`](/packages/http/reference/http/h2_session/H2Session/client): Client role: the peer does not send a connection preface.
- [`H2Session::find_id`](/packages/http/reference/http/h2_session/H2Session/find_id)
- [`H2Session::queue_frame`](/packages/http/reference/http/h2_session/H2Session/queue_frame)
- [`H2Session::fail_conn`](/packages/http/reference/http/h2_session/H2Session/fail_conn)
- [`H2Session::try_preface`](/packages/http/reference/http/h2_session/H2Session/try_preface)
