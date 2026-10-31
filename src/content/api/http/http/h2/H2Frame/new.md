---
slug: "http/http/h2/H2Frame/new"
package: "http"
title: "H2Frame::new"
description: "A frame from its parts."
module: "http::h2"
kind: "static method"
name: "new"
parent: "H2Frame"
signature: "pub static fn new(int typ, int flags, int stream_id, Vec<byte> payload) -> H2Frame"
import: "use http::h2::{H2Frame};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/h2.hy#L59"
order: 0
---

A frame from its parts.

## Parameters

| Name | Type |
|------|------|
| `typ` | `int` |
| `flags` | `int` |
| `stream_id` | `int` |
| `payload` | `Vec<byte>` |

## Returns

`H2Frame`

## See also

- [`H2Frame`](/packages/http/reference/http/h2/H2Frame): One HTTP/2 frame (RFC 7540 §4.1): type, flags, stream id and payload.
