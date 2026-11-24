---
slug: "http/http/conn/read_request_bytes"
package: "http"
title: "read_request_bytes"
description: "Reads one complete HTTP/1.1 message from a fresh connection s."
module: "http::conn"
kind: "fn"
name: "read_request_bytes"
signature: "fn read_request_bytes(Conn s) -> Result<Vec<byte>, HttpError>"
import: "use http::conn::{read_request_bytes};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/ff451cfa7e0dc940487a1ab88a8e84412cc71127/src/http/conn.coil#L398"
order: 4
---

Reads one complete HTTP/1.1 message from a fresh connection `s`.

## Parameters

| Name | Type |
|------|------|
| `s` | `Conn` |

## Returns

`Result<Vec<byte>, HttpError>`

## See also

- [`close_conn`](/packages/http/reference/http/conn/close_conn): Closes `c`'s stream.
- [`read_http_message`](/packages/http/reference/http/conn/read_http_message): Reads one complete HTTP/1.1 message (head and body) from `c`.
