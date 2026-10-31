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
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/server.hy#L68"
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
