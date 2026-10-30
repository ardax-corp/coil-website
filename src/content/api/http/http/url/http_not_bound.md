---
slug: "http/http/url/http_not_bound"
package: "http"
title: "http_not_bound"
description: "No listener: Server.bind was not called."
module: "http::url"
kind: "fn"
name: "http_not_bound"
signature: "fn http_not_bound() -> Result<Stream, HttpError>"
import: "use http::url::{http_not_bound};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/url.hy#L287"
order: 4
---

No listener: `Server.bind` was not called.

## Returns

`Result<Stream, HttpError>`

## See also

- [`find_bytes`](/packages/http/reference/http/url/find_bytes): Find `needle` in `hay`; returns index or 999999 if missing.
- [`parse_url`](/packages/http/reference/http/url/parse_url): Parse `http://`, `https://`, `ws://`, or `wss://` URL string.
