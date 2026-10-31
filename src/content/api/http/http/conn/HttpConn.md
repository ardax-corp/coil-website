---
slug: "http/http/conn/HttpConn"
package: "http"
title: "HttpConn"
description: "A socket plus the bytes read past the current HTTP/1.1 message."
module: "http::conn"
kind: "class"
name: "HttpConn"
signature: "class HttpConn"
import: "use http::conn::{HttpConn};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/conn.hy#L14"
order: 0
---

A socket plus the bytes read past the current HTTP/1.1 message.

[`read_http_message`](/packages/http/reference/http/conn/read_http_message) keeps any bytes after one message (a pipelined request or
the next response) in `leftover` for the next read, so a keep-alive
connection is read message by message. Used by `ConnPool`, the server loops
and `WsConn`. Close it with [`close_conn`](/packages/http/reference/http/conn/close_conn).

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `inner` | `Stream` | The underlying TCP or TLS stream. |
| `leftover` | `Vec<byte>` | Bytes already read that belong to the next message. |
| `reusable` | `int` | 1 when the last message was framed and the connection can carry another. |
| `closed` | `int` | 1 once [`close_conn`](/packages/http/reference/http/conn/close_conn) closed the stream. |

## Associated functions

| Name | Description |
|------|-------------|
| [`wrap`](/packages/http/reference/http/conn/HttpConn/wrap) | Wraps an open stream with no buffered bytes. |

## Methods

| Name | Description |
|------|-------------|
| [`stream`](/packages/http/reference/http/conn/HttpConn/stream) | The underlying stream, for writing. |
| [`can_reuse`](/packages/http/reference/http/conn/HttpConn/can_reuse) | 1 when the connection can carry another message, otherwise 0. |

## See also

- [`http::conn::read_http_message`](/packages/http/reference/http/conn/read_http_message)
- [`http::conn::close_conn`](/packages/http/reference/http/conn/close_conn)
