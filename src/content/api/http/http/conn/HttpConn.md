---
slug: "http/http/conn/HttpConn"
package: "http"
title: "HttpConn"
description: "Stream plus bytes pulled past the current message (keep-alive / pipelining)."
module: "http::conn"
kind: "class"
name: "HttpConn"
signature: "class HttpConn"
import: "use http::conn::{HttpConn};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/conn.hy#L9"
order: 0
---

Stream plus bytes pulled past the current message (keep-alive / pipelining).

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `inner` | `Stream` |  |
| `leftover` | `Vec<byte>` |  |
| `reusable` | `int` |  |
| `closed` | `int` |  |

## Associated functions

| Name | Description |
|------|-------------|
| [`wrap`](/packages/http/reference/http/conn/HttpConn/wrap) |  |

## Methods

| Name | Description |
|------|-------------|
| [`stream`](/packages/http/reference/http/conn/HttpConn/stream) |  |
| [`can_reuse`](/packages/http/reference/http/conn/HttpConn/can_reuse) |  |
