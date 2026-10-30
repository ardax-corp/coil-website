---
slug: "http/http/h1/IncomingRequest"
package: "http"
title: "IncomingRequest"
description: "Parsed inbound HTTP/1.1 request (server side)."
module: "http::h1"
kind: "class"
name: "IncomingRequest"
signature: "class IncomingRequest"
import: "use http::h1::{IncomingRequest};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/h1.hy#L16"
order: 0
---

Parsed inbound HTTP/1.1 request (server side).

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `method` | `string` |  |
| `path` | `string` |  |
| `version` | `string` |  |
| `headers` | `Headers` |  |
| `body` | `Vec<byte>` |  |

## Methods

| Name | Description |
|------|-------------|
| [`method_val`](/packages/http/reference/http/h1/IncomingRequest/method_val) |  |
| [`path_val`](/packages/http/reference/http/h1/IncomingRequest/path_val) |  |
| [`headers_val`](/packages/http/reference/http/h1/IncomingRequest/headers_val) |  |
| [`body_val`](/packages/http/reference/http/h1/IncomingRequest/body_val) |  |
