---
slug: "http/http/conn/read_http_message"
package: "http"
title: "read_http_message"
description: "Reads one complete HTTP/1.1 message (head and body) from c."
module: "http::conn"
kind: "fn"
name: "read_http_message"
signature: "fn read_http_message(HttpConn c) -> Result<Vec<byte>, HttpError>"
import: "use http::conn::{read_http_message};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/conn.coil#L220"
order: 2
---

Reads one complete HTTP/1.1 message (head and body) from `c`.

The body is framed by `Content-Length` or chunked encoding (returned still
chunked); a message with neither ends at the head. Bytes after the message
stay on `c`. Waits while the socket has no data. Returns `Protocol` when the
peer closes before the head is complete and `Io` when the socket fails.

## Parameters

| Name | Type |
|------|------|
| `c` | `HttpConn` |

## Returns

`Result<Vec<byte>, HttpError>`

## See also

- [`close_conn`](/packages/http/reference/http/conn/close_conn): Closes `c`'s stream.
- [`read_request_bytes`](/packages/http/reference/http/conn/read_request_bytes): Reads one complete HTTP/1.1 message from a fresh stream `s`.
