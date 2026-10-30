---
slug: "http/http/url/index"
package: "http"
title: "http::url"
description: "URL parsing, headers, HttpError and shared HTTP helpers."
module: "http::url"
kind: "module"
name: "http::url"
origin: "package"
auto: false
order: 10
---

Part of the [http](/packages/http) package ([coil-http](https://github.com/ardax-corp/coil-http)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/http)).

Import what you use (`use path::*` is not allowed):

```coil
use http::url::{HttpError, Url};
```

## Types

| Name | Description |
|------|-------------|
| [`HttpError`](/packages/http/reference/http/url/HttpError) | An HTTP failure. |
| [`Url`](/packages/http/reference/http/url/Url) | Parsed [`http`](/packages/http/reference/http)/`https`/[`ws`](/packages/http/reference/http/ws)/`wss` URL (scheme, host, port, path). |
| [`Headers`](/packages/http/reference/http/url/Headers) | Parallel name/value header pairs for requests and responses. |

## Functions

| Name | Description |
|------|-------------|
| [`find_bytes`](/packages/http/reference/http/url/find_bytes) | Find `needle` in `hay`; returns index or 999999 if missing. |
| [`http_not_bound`](/packages/http/reference/http/url/http_not_bound) | No listener: `Server.bind` was not called. |
| [`parse_url`](/packages/http/reference/http/url/parse_url) | Parse `http://`, `https://`, `ws://`, or `wss://` URL string. |
