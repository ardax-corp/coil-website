---
slug: "http/http/h2_session/H2Session"
package: "http"
title: "H2Session"
description: "One HTTP/2 connection (client or server side) driven through byte buffers, with no socket of its own."
module: "http::h2_session"
kind: "class"
name: "H2Session"
signature: "class H2Session"
import: "use http::h2_session::{H2Session};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/h2_session.hy#L129"
order: 0
---

One HTTP/2 connection (client or server side) driven through byte buffers, with no socket of its own.

Hand it the bytes read from the peer with [`feed`](/packages/http/reference/http/h2_session/H2Session/feed); it decodes frames, answers
SETTINGS and PING, tracks streams, HPACK tables and flow-control windows, and
queues what must be sent. [`drain`](/packages/http/reference/http/h2_session/H2Session/drain) returns the queued bytes for the caller to
write. The socket loops in [`http::server`](/packages/http/reference/http/server) and `Client::h2_get` are built on it.

The `pub` fields are the session's internal state, exposed for tests; read
streams through the `stream_*` methods instead.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `preface_done` | `int` |  |
| `settings_done` | `int` |  |
| `buf` | `Vec<byte>` |  |
| `outgoing` | `Vec<byte>` |  |
| `ids` | `Vec<int>` |  |
| `ended` | `Vec<int>` |  |
| `hnum` | `Vec<int>` |  |
| `names` | `Vec<string>` |  |
| `values` | `Vec<string>` |  |
| `blob` | `Vec<byte>` |  |
| `bstart` | `Vec<int>` |  |
| `blen` | `Vec<int>` |  |
| `hpack` | `HpackTable` |  |
| `cont_on` | `int` |  |
| `cont_sid` | `int` |  |
| `cont_end_stream` | `int` |  |
| `cont_kind` | `int` |  |
| `cont_promised` | `int` |  |
| `cont_buf` | `Vec<byte>` |  |
| `push_ids` | `Vec<int>` |  |
| `push_hnum` | `Vec<int>` |  |
| `push_names` | `Vec<string>` |  |
| `push_values` | `Vec<string>` |  |
| `role` | `int` |  |
| `conn_send` | `int` |  |
| `conn_recv` | `int` |  |
| `peer_window` | `int` |  |
| `local_window` | `int` |  |
| `peer_max_frame` | `int` |  |
| `local_max_frame` | `int` |  |
| `peer_max_streams` | `int` |  |
| `local_max_streams` | `int` |  |
| `local_enable_push` | `int` |  |
| `remote_streams` | `int` |  |
| `local_streams` | `int` |  |
| `goaway_recv` | `int` |  |
| `goaway_last` | `int` |  |
| `goaway_sent` | `int` |  |
| `last_peer_stream` | `int` |  |
| `send_win` | `Vec<int>` |  |
| `recv_win` | `Vec<int>` |  |
| `reset` | `Vec<int>` |  |
| `phase` | `Vec<int>` |  |
| `pblob` | `Vec<byte>` |  |
| `pstart` | `Vec<int>` |  |
| `plen` | `Vec<int>` |  |
| `pend_es` | `Vec<int>` |  |
| `tnum` | `Vec<int>` |  |
| `tnames` | `Vec<string>` |  |
| `tvalues` | `Vec<string>` |  |
| `encoder` | `HpackTable` |  |
| `conn_err` | `int` |  |
| `tb_on` | `Vec<int>` |  |
| `ot_num` | `Vec<int>` |  |
| `ot_names` | `Vec<string>` |  |
| `ot_values` | `Vec<string>` |  |
| `local_es` | `Vec<int>` |  |
| `conc_held` | `Vec<int>` |  |
| `conc_remote` | `Vec<int>` |  |

## Associated functions

| Name | Description |
|------|-------------|
| [`open`](/packages/http/reference/http/h2_session/H2Session/open) | A session for `role` (1 client, 0 server); `preface_done` 1 skips waiting for the client preface. |
| [`new`](/packages/http/reference/http/h2_session/H2Session/new) | A server session, expecting the client connection preface first. |
| [`client`](/packages/http/reference/http/h2_session/H2Session/client) | A client session: the peer sends no connection preface. |

## Methods

| Name | Description |
|------|-------------|
| [`find_id`](/packages/http/reference/http/h2_session/H2Session/find_id) | The internal index of stream `sid`, or 999999 when the session has no such stream. |
| [`queue_frame`](/packages/http/reference/http/h2_session/H2Session/queue_frame) | Queues frame `f` for [`drain`](/packages/http/reference/http/h2_session/H2Session/drain). |
| [`queue_bytes`](/packages/http/reference/http/h2_session/H2Session/queue_bytes) | Queues raw bytes for [`drain`](/packages/http/reference/http/h2_session/H2Session/drain). |
| [`fail_conn`](/packages/http/reference/http/h2_session/H2Session/fail_conn) | Queues GOAWAY with `code` (once) and returns `Protocol`: a connection error. |
| [`try_preface`](/packages/http/reference/http/h2_session/H2Session/try_preface) | Consumes the client connection preface from the input buffer once it is complete; `Protocol` when it does not match. |
| [`queue_local_settings`](/packages/http/reference/http/h2_session/H2Session/queue_local_settings) | Applies the local settings `s` and queues them as a SETTINGS frame. |
| [`on_settings`](/packages/http/reference/http/h2_session/H2Session/on_settings) | Handles a SETTINGS frame: applies the peer's settings and queues the ACK. |
| [`require_client_sid`](/packages/http/reference/http/h2_session/H2Session/require_client_sid) | Fails the connection unless `sid` is a valid client stream id (odd, nonzero). |
| [`store_headers`](/packages/http/reference/http/h2_session/H2Session/store_headers) | Opens stream `sid` with decoded header fields `h`; fails the connection if it already exists. |
| [`accept_headers`](/packages/http/reference/http/h2_session/H2Session/accept_headers) | Applies a decoded header block to stream `sid`: opens it, or records trailers on an open one. |
| [`finish_headers`](/packages/http/reference/http/h2_session/H2Session/finish_headers) | HPACK-decodes a complete header block for stream `sid` and applies it. |
| [`finish_push`](/packages/http/reference/http/h2_session/H2Session/finish_push) | HPACK-decodes a complete PUSH_PROMISE block and records the promised request. |
| [`clear_cont`](/packages/http/reference/http/h2_session/H2Session/clear_cont) | Forgets a pending HEADERS / PUSH_PROMISE + CONTINUATION sequence. |
| [`on_headers`](/packages/http/reference/http/h2_session/H2Session/on_headers) | Handles a HEADERS frame, starting a CONTINUATION sequence when END_HEADERS is not set. |
| [`on_push_promise`](/packages/http/reference/http/h2_session/H2Session/on_push_promise) | Handles a PUSH_PROMISE frame, starting a CONTINUATION sequence when END_HEADERS is not set. |
| [`on_continuation`](/packages/http/reference/http/h2_session/H2Session/on_continuation) | Handles a CONTINUATION frame; `Protocol` when none was expected or it is on another stream. |
| [`queue_push`](/packages/http/reference/http/h2_session/H2Session/queue_push) | Queues a PUSH_PROMISE on stream `associated` promising `promised` for `method path` at `authority`. |
| [`append_body`](/packages/http/reference/http/h2_session/H2Session/append_body) | Appends DATA `payload` to the stream at internal index `idx`. |
| [`on_data`](/packages/http/reference/http/h2_session/H2Session/on_data) | Handles a DATA frame: checks the stream and flow-control windows and stores the payload. |
| [`on_frame`](/packages/http/reference/http/h2_session/H2Session/on_frame) | Handles one decoded frame of any type. |
| [`feed`](/packages/http/reference/http/h2_session/H2Session/feed) | Adds bytes received from the peer and handles every complete frame in them. |
| [`drain`](/packages/http/reference/http/h2_session/H2Session/drain) | Returns and clears the bytes queued for the peer. |
| [`write_request`](/packages/http/reference/http/h2_session/H2Session/write_request) | Client: opens stream `sid` (odd) and queues HEADERS with `h` plus `body` as DATA, within the peer's flow-control window. |
| [`queue_response`](/packages/http/reference/http/h2_session/H2Session/queue_response) | Server: queues the response on stream `sid`: `:status` and `fields`, the body as DATA within the flow-control window, then `trailers` if any. |
| [`stream_count`](/packages/http/reference/http/h2_session/H2Session/stream_count) | The number of streams the session tracks. |
| [`forget_ended`](/packages/http/reference/http/h2_session/H2Session/forget_ended) | Drops every stream once all of them are finished, so a long sequential session stays small. |
| [`stream_headers`](/packages/http/reference/http/h2_session/H2Session/stream_headers) | The header fields received on stream `sid`; `Protocol` when there is no such stream. |
| [`stream_trailers`](/packages/http/reference/http/h2_session/H2Session/stream_trailers) | The trailing fields received on stream `sid`. |
| [`stream_body`](/packages/http/reference/http/h2_session/H2Session/stream_body) | The DATA received on stream `sid` so far. |
| [`stream_ended`](/packages/http/reference/http/h2_session/H2Session/stream_ended) | 1 when the peer ended stream `sid` (END_STREAM), otherwise 0. |
| [`stream_reset`](/packages/http/reference/http/h2_session/H2Session/stream_reset) | 1 when stream `sid` was reset with RST_STREAM, otherwise 0. |
| [`stream_id_at`](/packages/http/reference/http/h2_session/H2Session/stream_id_at) | The id of the `i`th tracked stream. |
| [`goaway_received`](/packages/http/reference/http/h2_session/H2Session/goaway_received) | 1 once the peer sent GOAWAY. |
| [`goaway_last_stream`](/packages/http/reference/http/h2_session/H2Session/goaway_last_stream) | The last stream id from the peer's GOAWAY. |
| [`push_count`](/packages/http/reference/http/h2_session/H2Session/push_count) | The number of PUSH_PROMISEs received. |
| [`push_promised_id`](/packages/http/reference/http/h2_session/H2Session/push_promised_id) | The promised stream id of the `i`th PUSH_PROMISE. |
| [`push_headers`](/packages/http/reference/http/h2_session/H2Session/push_headers) | The request header fields of the push promising `promised_id`. |

## Examples

A server session reading a prior-knowledge GET:

```coil
use tests::assert;
use http::h2::h2_prior_knowledge_get;
use http::h2_session::H2Session;
use http::url::parse_url;

let u = match parse_url("http://example.com/hello") {
    Result::Ok(u) => u,
    Result::Err(e) => panic show(e),
};
let sess = H2Session::new();
match sess.feed(h2_prior_knowledge_get(u)) {
    Result::Ok(_) => 0,
    Result::Err(e) => panic show(e),
};
assert!(sess.stream_count() == 1);
let h = match sess.stream_headers(1) {
    Result::Ok(h) => h,
    Result::Err(e) => panic show(e),
};
assert!(h.value_at(1) == "/hello");
assert!(sess.drain().len() > 0);
```

## See also

- [`H2Session::feed`](/packages/http/reference/http/h2_session/H2Session/feed)
- [`H2Session::drain`](/packages/http/reference/http/h2_session/H2Session/drain)
- [`http::server`](/packages/http/reference/http/server)
- [`H2Pair`](/packages/http/reference/http/h2_session/H2Pair): The two responses of `h2_connect_two` (streams 1 and 3).
