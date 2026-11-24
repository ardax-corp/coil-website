---
slug: "http/http/url/http_io"
package: "http"
title: "http_io"
description: "HttpError::Io(e), for map_err."
module: "http::url"
kind: "fn"
name: "http_io"
signature: "fn http_io(IoError e) -> HttpError"
import: "use http::url::{http_io};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/ff451cfa7e0dc940487a1ab88a8e84412cc71127/src/http/url.coil#L332"
order: 3
---

`HttpError::Io(e)`, for `map_err`.

## Parameters

| Name | Type |
|------|------|
| `e` | `IoError` |

## Returns

`HttpError`

## See also

- [`parse_url`](/packages/http/reference/http/url/parse_url): Parses an `http://`, `https://`, `ws://` or `wss://` URL.
