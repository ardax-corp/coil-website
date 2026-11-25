---
slug: "http/http/server/HttpHandler/handle"
package: "http"
title: "HttpHandler::handle"
description: "Builds the response to req."
module: "http::server"
kind: "method"
name: "handle"
parent: "HttpHandler"
signature: "fn handle(H self, IncomingRequest req) -> Response"
import: "use http::server::{HttpHandler};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/ff451cfa7e0dc940487a1ab88a8e84412cc71127/src/http/server.coil#L67"
order: 0
---

Builds the response to `req`.

## Parameters

| Name | Type |
|------|------|
| `self` | `H` |
| `req` | `IncomingRequest` |

## Returns

`Response`

## See also

- [`HttpHandler`](/packages/http/reference/http/server/HttpHandler): Answers server requests: implement `handle` and pass the value to `serve` (or another serve function).
