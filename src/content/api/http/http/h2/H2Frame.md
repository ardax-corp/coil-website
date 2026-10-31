---
slug: "http/http/h2/H2Frame"
package: "http"
title: "H2Frame"
description: "One HTTP/2 frame (RFC 7540 §4.1): type, flags, stream id and payload."
module: "http::h2"
kind: "class"
name: "H2Frame"
signature: "class H2Frame"
import: "use http::h2::{H2Frame};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/h2.hy#L46"
order: 0
---

One HTTP/2 frame (RFC 7540 §4.1): type, flags, stream id and payload.

Most programs use `Client::h2_get` or `h2_serve_all` and never see frames.
[`encode_frame`](/packages/http/reference/http/h2/encode_frame) / [`decode_frame`](/packages/http/reference/http/h2/decode_frame) convert to and from the 9-byte header form;
the `*_frame` functions build each frame type.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `typ` | `int` | Frame type (`frame_type_*`). |
| `flags` | `int` | Flag bits (`flag_*`). |
| `stream_id` | `int` | Stream identifier; 0 for connection-level frames. |
| `payload` | `Vec<byte>` | Frame payload. |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/http/reference/http/h2/H2Frame/new) | A frame from its parts. |

## Examples

```coil
use tests::assert;
use http::h2::{data_frame, decode_frame, encode_frame, flag_end_stream, frame_type_data};
use string::to_bytes;

let wire = encode_frame(data_frame(1, to_bytes("hi"), 1));
assert!(wire.len() == 9 + 2);
let f = match decode_frame(wire) {
    Result::Ok(f) => f,
    Result::Err(e) => panic show(e),
};
assert!(f.typ == frame_type_data());
assert!(f.flags == flag_end_stream());
assert!(f.stream_id == 1);
```

## See also

- [`http::h2::encode_frame`](/packages/http/reference/http/h2/encode_frame)
- [`http::h2::decode_frame`](/packages/http/reference/http/h2/decode_frame)
- [`H2Settings`](/packages/http/reference/http/h2/H2Settings): SETTINGS identifier/value pairs (RFC 7540 §6.5).
- [`H2Goaway`](/packages/http/reference/http/h2/H2Goaway): GOAWAY last-stream-id and error code (RFC 7540 §6.8).
- [`H2Push`](/packages/http/reference/http/h2/H2Push): A decoded PUSH_PROMISE payload: the promised stream id and the header-block fragment.
