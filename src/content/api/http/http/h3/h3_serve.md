---
slug: "http/http/h3/h3_serve"
package: "http"
title: "h3_serve"
description: "HTTP/3 server placeholder. Always returns NotSupported."
module: "http::h3"
kind: "fn"
name: "h3_serve"
signature: "fn h3_serve() -> Result<(), HttpError>"
import: "use http::h3::{h3_serve};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/h3.hy#L24"
order: 1
---

HTTP/3 server placeholder. Always returns `NotSupported`.

## Returns

`Result<(), HttpError>`

## See also

- [`h3_connect`](/packages/http/reference/http/h3/h3_connect): HTTP/3 client placeholder.
