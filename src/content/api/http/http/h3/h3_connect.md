---
slug: "http/http/h3/h3_connect"
package: "http"
title: "h3_connect"
description: "HTTP/3 client placeholder. Always returns NotSupported; use HTTP/1.1 or HTTP/2."
module: "http::h3"
kind: "fn"
name: "h3_connect"
signature: "fn h3_connect(string url) -> Result<(), HttpError>"
import: "use http::h3::{h3_connect};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/h3.coil#L18"
order: 0
---

HTTP/3 client placeholder. Always returns `NotSupported`; use HTTP/1.1 or HTTP/2.

## Parameters

| Name | Type |
|------|------|
| `url` | `string` |

## Returns

`Result<(), HttpError>`

## See also

- [`h3_serve`](/packages/http/reference/http/h3/h3_serve): HTTP/3 server placeholder.
