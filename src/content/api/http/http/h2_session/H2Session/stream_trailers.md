---
slug: "http/http/h2_session/H2Session/stream_trailers"
package: "http"
title: "H2Session::stream_trailers"
description: "The trailing fields received on stream sid."
module: "http::h2_session"
kind: "method"
name: "stream_trailers"
parent: "H2Session"
signature: "pub fn stream_trailers(int sid) -> Result<Headers, HttpError>"
import: "use http::h2_session::{H2Session};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/h2_session.hy#L1382"
order: 30
---

The trailing fields received on stream `sid`.

Called on a `H2Session` value as `value.stream_trailers(…)`.

## Parameters

| Name | Type |
|------|------|
| `sid` | `int` |

## Returns

`Result<Headers, HttpError>`

## See also

- [`H2Session`](/packages/http/reference/http/h2_session/H2Session): One HTTP/2 connection (client or server side) driven through byte buffers, with no socket of its own.
- [`H2Session::open`](/packages/http/reference/http/h2_session/H2Session/open): A session for `role` (1 client, 0 server); `preface_done` 1 skips waiting for the client preface.
- [`H2Session::new`](/packages/http/reference/http/h2_session/H2Session/new): A server session, expecting the client connection preface first.
- [`H2Session::client`](/packages/http/reference/http/h2_session/H2Session/client): A client session: the peer sends no connection preface.
- [`H2Session::find_id`](/packages/http/reference/http/h2_session/H2Session/find_id): The internal index of stream `sid`, or 999999 when the session has no such stream.
- [`H2Session::queue_frame`](/packages/http/reference/http/h2_session/H2Session/queue_frame): Queues frame `f` for `drain`.
- [`H2Session::queue_bytes`](/packages/http/reference/http/h2_session/H2Session/queue_bytes): Queues raw bytes for `drain`.
- [`H2Session::fail_conn`](/packages/http/reference/http/h2_session/H2Session/fail_conn): Queues GOAWAY with `code` (once) and returns `Protocol`: a connection error.
