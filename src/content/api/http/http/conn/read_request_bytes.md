---
slug: "http/http/conn/read_request_bytes"
package: "http"
title: "read_request_bytes"
description: "Reads one complete HTTP/1.1 message from a fresh stream s."
module: "http::conn"
kind: "fn"
name: "read_request_bytes"
signature: "fn read_request_bytes(Stream s) -> Result<Vec<byte>, HttpError>"
import: "use http::conn::{read_request_bytes};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/conn.hy#L315"
order: 3
---

Reads one complete HTTP/1.1 message from a fresh stream `s`.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |

## Returns

`Result<Vec<byte>, HttpError>`

## See also

- [`close_conn`](/packages/http/reference/http/conn/close_conn): Closes `c`'s stream.
- [`read_http_message`](/packages/http/reference/http/conn/read_http_message): Reads one complete HTTP/1.1 message (head and body) from `c`.
