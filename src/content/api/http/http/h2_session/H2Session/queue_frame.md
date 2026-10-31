---
slug: "http/http/h2_session/H2Session/queue_frame"
package: "http"
title: "H2Session::queue_frame"
description: "Queues frame f for drain."
module: "http::h2_session"
kind: "method"
name: "queue_frame"
parent: "H2Session"
signature: "pub fn queue_frame(H2Frame f)"
import: "use http::h2_session::{H2Session};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/h2_session.hy#L317"
order: 4
---

Queues frame `f` for [`drain`](/packages/http/reference/http/h2_session/H2Session/drain).

Called on a `H2Session` value as `value.queue_frame(…)`.

## Parameters

| Name | Type |
|------|------|
| `f` | `H2Frame` |

## See also

- [`H2Session::drain`](/packages/http/reference/http/h2_session/H2Session/drain)
- [`H2Session`](/packages/http/reference/http/h2_session/H2Session): One HTTP/2 connection (client or server side) driven through byte buffers, with no socket of its own.
- [`H2Session::open`](/packages/http/reference/http/h2_session/H2Session/open): A session for `role` (1 client, 0 server); `preface_done` 1 skips waiting for the client preface.
- [`H2Session::new`](/packages/http/reference/http/h2_session/H2Session/new): A server session, expecting the client connection preface first.
- [`H2Session::client`](/packages/http/reference/http/h2_session/H2Session/client): A client session: the peer sends no connection preface.
- [`H2Session::find_id`](/packages/http/reference/http/h2_session/H2Session/find_id): The internal index of stream `sid`, or 999999 when the session has no such stream.
- [`H2Session::queue_bytes`](/packages/http/reference/http/h2_session/H2Session/queue_bytes): Queues raw bytes for `drain`.
- [`H2Session::fail_conn`](/packages/http/reference/http/h2_session/H2Session/fail_conn): Queues GOAWAY with `code` (once) and returns `Protocol`: a connection error.
