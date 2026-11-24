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
source: "https://github.com/ardax-corp/coil-http/blob/ff451cfa7e0dc940487a1ab88a8e84412cc71127/src/http/h3.coil#L24"
order: 1
---

HTTP/3 server placeholder. Always returns `NotSupported`.

## Returns

`Result<(), HttpError>`

## See also

- [`h3_connect`](/packages/http/reference/http/h3/h3_connect): HTTP/3 client placeholder.
