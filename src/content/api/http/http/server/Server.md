---
slug: "http/http/server/Server"
package: "http"
title: "Server"
description: "Class Server."
module: "http::server"
kind: "class"
name: "Server"
signature: "class Server"
import: "use http::server::{Server};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/server.hy#L30"
order: 9
---

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `host` | `string` |  |
| `port` | `int` |  |
| `listener` | `Option<Stream>` |  |
| `tls_cert` | `string` |  |
| `tls_key` | `string` |  |
| `use_tls` | `int` |  |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/http/reference/http/server/Server/new) |  |

## Methods

| Name | Description |
|------|-------------|
| [`bind`](/packages/http/reference/http/server/Server/bind) |  |
| [`tls`](/packages/http/reference/http/server/Server/tls) |  |
| [`bound_port`](/packages/http/reference/http/server/Server/bound_port) |  |
