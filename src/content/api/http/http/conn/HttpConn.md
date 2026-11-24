---
slug: "http/http/conn/HttpConn"
package: "http"
title: "HttpConn"
description: "A connection plus the bytes read past the current HTTP/1.1 message."
module: "http::conn"
kind: "class"
name: "HttpConn"
signature: "class HttpConn"
import: "use http::conn::{HttpConn};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/ff451cfa7e0dc940487a1ab88a8e84412cc71127/src/http/conn.coil#L97"
order: 1
---

A connection plus the bytes read past the current HTTP/1.1 message.

[`read_http_message`](/packages/http/reference/http/conn/read_http_message) keeps any bytes after one message (a pipelined request or
the next response) in `leftover` for the next read, so a keep-alive
connection is read message by message. Used by `ConnPool`, the server loops
and `WsConn`. Close it with [`close_conn`](/packages/http/reference/http/conn/close_conn).

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `inner` | `Conn` | The underlying TCP or TLS connection. |
| `leftover` | `Vec<byte>` | Bytes already read that belong to the next message. |
| `reusable` | `int` | 1 when the last message was framed and the connection can carry another. |
| `closed` | `int` | 1 once [`close_conn`](/packages/http/reference/http/conn/close_conn) closed the stream. |

## Associated functions

| Name | Description |
|------|-------------|
| [`wrap`](/packages/http/reference/http/conn/HttpConn/wrap) | Wraps an open connection with no buffered bytes. |

## Methods

| Name | Description |
|------|-------------|
| [`stream`](/packages/http/reference/http/conn/HttpConn/stream) | The underlying connection, for writing. |
| [`can_reuse`](/packages/http/reference/http/conn/HttpConn/can_reuse) | 1 when the connection can carry another message, otherwise 0. |

## See also

- [`http::conn::read_http_message`](/packages/http/reference/http/conn/read_http_message)
- [`http::conn::close_conn`](/packages/http/reference/http/conn/close_conn)
