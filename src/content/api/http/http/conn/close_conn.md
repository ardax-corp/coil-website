---
slug: "http/http/conn/close_conn"
package: "http"
title: "close_conn"
description: "Closes c's stream. Closing twice does nothing; close errors are ignored."
module: "http::conn"
kind: "fn"
name: "close_conn"
signature: "fn close_conn(HttpConn c)"
import: "use http::conn::{close_conn};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/ff451cfa7e0dc940487a1ab88a8e84412cc71127/src/http/conn.coil#L109"
order: 2
---

Closes `c`'s stream. Closing twice does nothing; close errors are ignored.

## Parameters

| Name | Type |
|------|------|
| `c` | `HttpConn` |

## See also

- [`read_http_message`](/packages/http/reference/http/conn/read_http_message): Reads one complete HTTP/1.1 message (head and body) from `c`.
- [`read_request_bytes`](/packages/http/reference/http/conn/read_request_bytes): Reads one complete HTTP/1.1 message from a fresh connection `s`.
