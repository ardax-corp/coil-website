---
slug: "http/http/h2_session/H2Session/queue_push"
package: "http"
title: "H2Session::queue_push"
description: "Queues a PUSH_PROMISE on stream associated promising promised for method path at authority."
module: "http::h2_session"
kind: "method"
name: "queue_push"
parent: "H2Session"
signature: "pub fn queue_push(int associated, int promised, string method, string path, string authority)"
import: "use http::h2_session::{H2Session};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/h2_session.hy#L800"
order: 19
---

Queues a PUSH_PROMISE on stream `associated` promising `promised` for `method path` at `authority`.

Called on a `H2Session` value as `value.queue_push(…)`.

## Parameters

| Name | Type |
|------|------|
| `associated` | `int` |
| `promised` | `int` |
| `method` | `string` |
| `path` | `string` |
| `authority` | `string` |

## See also

- [`H2Session`](/packages/http/reference/http/h2_session/H2Session): One HTTP/2 connection (client or server side) driven through byte buffers, with no socket of its own.
- [`H2Session::open`](/packages/http/reference/http/h2_session/H2Session/open): A session for `role` (1 client, 0 server); `preface_done` 1 skips waiting for the client preface.
- [`H2Session::new`](/packages/http/reference/http/h2_session/H2Session/new): A server session, expecting the client connection preface first.
- [`H2Session::client`](/packages/http/reference/http/h2_session/H2Session/client): A client session: the peer sends no connection preface.
- [`H2Session::find_id`](/packages/http/reference/http/h2_session/H2Session/find_id): The internal index of stream `sid`, or 999999 when the session has no such stream.
- [`H2Session::queue_frame`](/packages/http/reference/http/h2_session/H2Session/queue_frame): Queues frame `f` for `drain`.
- [`H2Session::queue_bytes`](/packages/http/reference/http/h2_session/H2Session/queue_bytes): Queues raw bytes for `drain`.
- [`H2Session::fail_conn`](/packages/http/reference/http/h2_session/H2Session/fail_conn): Queues GOAWAY with `code` (once) and returns `Protocol`: a connection error.
