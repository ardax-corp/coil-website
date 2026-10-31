---
slug: "http/http/h2/index"
package: "http"
title: "http::h2"
description: "HTTP/2 framing, cleartext prior knowledge and TLS ALPN h2."
module: "http::h2"
kind: "module"
name: "http::h2"
origin: "package"
auto: false
order: 3
---

Part of the [http](/packages/http) package ([coil-http](https://github.com/ardax-corp/coil-http)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/http)).

Import what you use (`use path::*` is not allowed):

```coil
use http::h2::{H2Frame, H2Settings};
```

## Types

| Name | Description |
|------|-------------|
| [`H2Frame`](/packages/http/reference/http/h2/H2Frame) | One HTTP/2 frame (RFC 7540 §4.1): type, flags, stream id and payload. |
| [`H2Settings`](/packages/http/reference/http/h2/H2Settings) | SETTINGS identifier/value pairs (RFC 7540 §6.5). |
| [`H2Goaway`](/packages/http/reference/http/h2/H2Goaway) | GOAWAY last-stream-id and error code (RFC 7540 §6.8). |
| [`H2Push`](/packages/http/reference/http/h2/H2Push) | A decoded PUSH_PROMISE payload: the promised stream id and the header-block fragment. |

## Functions

| Name | Description |
|------|-------------|
| [`frame_type_data`](/packages/http/reference/http/h2/frame_type_data) | Frame type 0x0, DATA. |
| [`frame_type_headers`](/packages/http/reference/http/h2/frame_type_headers) | Frame type 0x1, HEADERS. |
| [`frame_type_settings`](/packages/http/reference/http/h2/frame_type_settings) | Frame type 0x4, SETTINGS. |
| [`frame_type_ping`](/packages/http/reference/http/h2/frame_type_ping) | Frame type 0x6, PING. |
| [`frame_type_goaway`](/packages/http/reference/http/h2/frame_type_goaway) | Frame type 0x7, GOAWAY. |
| [`frame_type_push_promise`](/packages/http/reference/http/h2/frame_type_push_promise) | Frame type 0x5, PUSH_PROMISE. |
| [`frame_type_window_update`](/packages/http/reference/http/h2/frame_type_window_update) | Frame type 0x8, WINDOW_UPDATE. |
| [`frame_type_priority`](/packages/http/reference/http/h2/frame_type_priority) | Frame type 0x2, PRIORITY (ignored on receipt). |
| [`frame_type_rst_stream`](/packages/http/reference/http/h2/frame_type_rst_stream) | Frame type 0x3, RST_STREAM. |
| [`frame_type_continuation`](/packages/http/reference/http/h2/frame_type_continuation) | Frame type 0x9, CONTINUATION. |
| [`settings_id_header_table_size`](/packages/http/reference/http/h2/settings_id_header_table_size) | Setting 0x1, SETTINGS_HEADER_TABLE_SIZE. |
| [`settings_id_enable_push`](/packages/http/reference/http/h2/settings_id_enable_push) | Setting 0x2, SETTINGS_ENABLE_PUSH. |
| [`settings_id_max_concurrent`](/packages/http/reference/http/h2/settings_id_max_concurrent) | Setting 0x3, SETTINGS_MAX_CONCURRENT_STREAMS. |
| [`settings_id_initial_window`](/packages/http/reference/http/h2/settings_id_initial_window) | Setting 0x4, SETTINGS_INITIAL_WINDOW_SIZE. |
| [`settings_id_max_frame_size`](/packages/http/reference/http/h2/settings_id_max_frame_size) | Setting 0x5, SETTINGS_MAX_FRAME_SIZE. |
| [`h2_max_frame_setting`](/packages/http/reference/http/h2/h2_max_frame_setting) | Largest allowed SETTINGS_MAX_FRAME_SIZE (2^24 - 1). |
| [`h2_err_protocol`](/packages/http/reference/http/h2/h2_err_protocol) | Error code 0x1, PROTOCOL_ERROR. |
| [`h2_err_flow_control`](/packages/http/reference/http/h2/h2_err_flow_control) | Error code 0x3, FLOW_CONTROL_ERROR. |
| [`h2_err_frame_size`](/packages/http/reference/http/h2/h2_err_frame_size) | Error code 0x6, FRAME_SIZE_ERROR. |
| [`h2_err_refused_stream`](/packages/http/reference/http/h2/h2_err_refused_stream) | Error code 0x7, REFUSED_STREAM. |
| [`default_max_frame_payload`](/packages/http/reference/http/h2/default_max_frame_payload) | Default maximum frame payload, 16384 bytes. |
| [`flag_ack`](/packages/http/reference/http/h2/flag_ack) | Flag 0x1, ACK (SETTINGS, PING). |
| [`flag_end_stream`](/packages/http/reference/http/h2/flag_end_stream) | Flag 0x1, END_STREAM (DATA, HEADERS). |
| [`flag_end_headers`](/packages/http/reference/http/h2/flag_end_headers) | Flag 0x4, END_HEADERS (HEADERS, PUSH_PROMISE, CONTINUATION). |
| [`h2_max_window`](/packages/http/reference/http/h2/h2_max_window) | Largest HTTP/2 flow-control window (2^31 - 1). |
| [`encode_frame`](/packages/http/reference/http/h2/encode_frame) | Encodes `f` as the 9-byte frame header followed by its payload. |
| [`frame_wire_len`](/packages/http/reference/http/h2/frame_wire_len) | Complete first-frame size (9 + length), or 0 if `raw` is truncated. |
| [`decode_frame`](/packages/http/reference/http/h2/decode_frame) | Parse the first HTTP/2 frame in `raw`. |
| [`connection_preface`](/packages/http/reference/http/h2/connection_preface) | The 24-byte client connection preface, `PRI * HTTP/2.0\r\n\r\nSM\r\n\r\n`. |
| [`preface_ok`](/packages/http/reference/http/h2/preface_ok) | 1 when `raw` starts with the connection preface, otherwise 0. |
| [`empty_settings_frame`](/packages/http/reference/http/h2/empty_settings_frame) | A SETTINGS frame with no parameters. |
| [`encode_settings_payload`](/packages/http/reference/http/h2/encode_settings_payload) | Encode SETTINGS parameters. |
| [`decode_settings_payload`](/packages/http/reference/http/h2/decode_settings_payload) | Decode SETTINGS payload. |
| [`settings_frame`](/packages/http/reference/http/h2/settings_frame) | A SETTINGS frame carrying `s`. |
| [`settings_ack_frame`](/packages/http/reference/http/h2/settings_ack_frame) | A SETTINGS frame with the ACK flag and no payload. |
| [`encode_window_update_payload`](/packages/http/reference/http/h2/encode_window_update_payload) | Encode WINDOW_UPDATE increment (31-bit). |
| [`decode_window_update_payload`](/packages/http/reference/http/h2/decode_window_update_payload) | Decode 4-byte WINDOW_UPDATE. |
| [`window_update_frame`](/packages/http/reference/http/h2/window_update_frame) | A WINDOW_UPDATE frame. |
| [`encode_goaway_payload`](/packages/http/reference/http/h2/encode_goaway_payload) | Encode GOAWAY: 31-bit last-stream-id + 32-bit error code. |
| [`decode_goaway_payload`](/packages/http/reference/http/h2/decode_goaway_payload) | Decode GOAWAY. |
| [`goaway_frame`](/packages/http/reference/http/h2/goaway_frame) | A GOAWAY frame on stream 0. |
| [`ping_frame`](/packages/http/reference/http/h2/ping_frame) | PING payload is exactly 8 bytes. |
| [`rst_stream_frame`](/packages/http/reference/http/h2/rst_stream_frame) | A RST_STREAM frame ending `stream_id` with `error_code`. |
| [`decode_rst_payload`](/packages/http/reference/http/h2/decode_rst_payload) | The error code of a RST_STREAM payload. |
| [`headers_frame`](/packages/http/reference/http/h2/headers_frame) | HEADERS frame with HPACK payload. |
| [`headers_from_frame_with`](/packages/http/reference/http/h2/headers_from_frame_with) | Decode HEADERS through `t` so later frames can use dynamic indices. |
| [`headers_from_frame`](/packages/http/reference/http/h2/headers_from_frame) | Decodes a HEADERS frame's header block with a fresh HPACK table. |
| [`data_frame`](/packages/http/reference/http/h2/data_frame) | DATA frame. |
| [`continuation_frame`](/packages/http/reference/http/h2/continuation_frame) | CONTINUATION payload. |
| [`encode_headers_block_frames`](/packages/http/reference/http/h2/encode_headers_block_frames) | Split a header block into HEADERS + CONTINUATION frames (RFC 7540 §6.10). |
| [`headers_frames`](/packages/http/reference/http/h2/headers_frames) | HPACK-encodes `h` and splits it into HEADERS + CONTINUATION frames, as [`encode_headers_block_frames`](/packages/http/reference/http/h2/encode_headers_block_frames). |
| [`encode_push_promise_payload`](/packages/http/reference/http/h2/encode_push_promise_payload) | A PUSH_PROMISE payload: the promised id followed by `block`. |
| [`decode_push_promise_payload`](/packages/http/reference/http/h2/decode_push_promise_payload) | Decodes a PUSH_PROMISE payload. |
| [`push_promise_frame`](/packages/http/reference/http/h2/push_promise_frame) | A single PUSH_PROMISE frame (END_HEADERS set) promising `promised_id` with request fields `h`. |
| [`encode_push_promise_frames`](/packages/http/reference/http/h2/encode_push_promise_frames) | Split PUSH_PROMISE + CONTINUATION. |
| [`apply_settings_to_table`](/packages/http/reference/http/h2/apply_settings_to_table) | Applies any SETTINGS_HEADER_TABLE_SIZE in `s` to the HPACK table `t`. |
| [`h2_prior_knowledge_get`](/packages/http/reference/http/h2/h2_prior_knowledge_get) | Connection preface + empty SETTINGS + GET HEADERS (END_HEADERS\|END_STREAM) on stream 1. |
| [`h2_read_n`](/packages/http/reference/http/h2/h2_read_n) | Reads exactly `n` bytes from `s`, waiting while none are ready. |
| [`h2_write_frame`](/packages/http/reference/http/h2/h2_write_frame) | Writes the encoded frame `f` to `s`. |
| [`h2_read_frame`](/packages/http/reference/http/h2/h2_read_frame) | Reads one complete frame from `s`, waiting while none is ready. |
| [`h2_try_read_frame`](/packages/http/reference/http/h2/h2_try_read_frame) | Reads one frame if its first byte is already available, otherwise returns `None` without waiting. |
| [`h2_client_alpn`](/packages/http/reference/http/h2/h2_client_alpn) | The client ALPN offer, `h2,http/1.1`. |
| [`h2_server_alpn`](/packages/http/reference/http/h2/h2_server_alpn) | The server ALPN list, `h2,http/1.1`: HTTP/2 when the client offers it, otherwise HTTP/1.1. |
| [`h2_alpn_is_h2`](/packages/http/reference/http/h2/h2_alpn_is_h2) | 1 when the negotiated ALPN protocol is exactly `h2`; anything else, including empty, means HTTP/1.1. |
