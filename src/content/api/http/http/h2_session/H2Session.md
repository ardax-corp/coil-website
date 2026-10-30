---
slug: "http/http/h2_session/H2Session"
package: "http"
title: "H2Session"
description: "One HTTP/2 connection (client or server) over a byte buffer."
module: "http::h2_session"
kind: "class"
name: "H2Session"
signature: "class H2Session"
import: "use http::h2_session::{H2Session};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/h2_session.hy#L92"
order: 0
---

One HTTP/2 connection (client or server) over a byte buffer.

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
| [`open`](/packages/http/reference/http/h2_session/H2Session/open) |  |
| [`new`](/packages/http/reference/http/h2_session/H2Session/new) | Server role: expect the client connection preface. |
| [`client`](/packages/http/reference/http/h2_session/H2Session/client) | Client role: the peer does not send a connection preface. |

## Methods

| Name | Description |
|------|-------------|
| [`find_id`](/packages/http/reference/http/h2_session/H2Session/find_id) |  |
| [`queue_frame`](/packages/http/reference/http/h2_session/H2Session/queue_frame) |  |
| [`queue_bytes`](/packages/http/reference/http/h2_session/H2Session/queue_bytes) |  |
| [`fail_conn`](/packages/http/reference/http/h2_session/H2Session/fail_conn) |  |
| [`try_preface`](/packages/http/reference/http/h2_session/H2Session/try_preface) |  |
| [`queue_local_settings`](/packages/http/reference/http/h2_session/H2Session/queue_local_settings) | Queue a SETTINGS frame and apply it to the local side. |
| [`on_settings`](/packages/http/reference/http/h2_session/H2Session/on_settings) |  |
| [`require_client_sid`](/packages/http/reference/http/h2_session/H2Session/require_client_sid) |  |
| [`store_headers`](/packages/http/reference/http/h2_session/H2Session/store_headers) |  |
| [`accept_headers`](/packages/http/reference/http/h2_session/H2Session/accept_headers) |  |
| [`finish_headers`](/packages/http/reference/http/h2_session/H2Session/finish_headers) |  |
| [`finish_push`](/packages/http/reference/http/h2_session/H2Session/finish_push) |  |
| [`clear_cont`](/packages/http/reference/http/h2_session/H2Session/clear_cont) |  |
| [`on_headers`](/packages/http/reference/http/h2_session/H2Session/on_headers) |  |
| [`on_push_promise`](/packages/http/reference/http/h2_session/H2Session/on_push_promise) |  |
| [`on_continuation`](/packages/http/reference/http/h2_session/H2Session/on_continuation) |  |
| [`queue_push`](/packages/http/reference/http/h2_session/H2Session/queue_push) |  |
| [`append_body`](/packages/http/reference/http/h2_session/H2Session/append_body) |  |
| [`on_data`](/packages/http/reference/http/h2_session/H2Session/on_data) |  |
| [`on_frame`](/packages/http/reference/http/h2_session/H2Session/on_frame) |  |
| [`feed`](/packages/http/reference/http/h2_session/H2Session/feed) |  |
| [`drain`](/packages/http/reference/http/h2_session/H2Session/drain) |  |
| [`write_request`](/packages/http/reference/http/h2_session/H2Session/write_request) | Client: open an odd stream and queue HEADERS plus a request body. |
| [`queue_response`](/packages/http/reference/http/h2_session/H2Session/queue_response) | Server: queue the handler response on an existing stream. |
| [`stream_count`](/packages/http/reference/http/h2_session/H2Session/stream_count) |  |
| [`forget_ended`](/packages/http/reference/http/h2_session/H2Session/forget_ended) | Drop finished streams so a long sequential session does not scan them. |
| [`stream_headers`](/packages/http/reference/http/h2_session/H2Session/stream_headers) |  |
| [`stream_trailers`](/packages/http/reference/http/h2_session/H2Session/stream_trailers) |  |
| [`stream_body`](/packages/http/reference/http/h2_session/H2Session/stream_body) |  |
| [`stream_ended`](/packages/http/reference/http/h2_session/H2Session/stream_ended) |  |
| [`stream_reset`](/packages/http/reference/http/h2_session/H2Session/stream_reset) |  |
| [`stream_id_at`](/packages/http/reference/http/h2_session/H2Session/stream_id_at) |  |
| [`goaway_received`](/packages/http/reference/http/h2_session/H2Session/goaway_received) |  |
| [`goaway_last_stream`](/packages/http/reference/http/h2_session/H2Session/goaway_last_stream) |  |
| [`push_count`](/packages/http/reference/http/h2_session/H2Session/push_count) |  |
| [`push_promised_id`](/packages/http/reference/http/h2_session/H2Session/push_promised_id) |  |
| [`push_headers`](/packages/http/reference/http/h2_session/H2Session/push_headers) |  |

## See also

- [`H2Pair`](/packages/http/reference/http/h2_session/H2Pair): Two responses from one multiplexed exchange (streams 1 and 3).
- [`H2ClientSlot`](/packages/http/reference/http/h2_session/H2ClientSlot): One HTTP/2 connection held by `Client`.
