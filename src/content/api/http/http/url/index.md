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
order: 12
---

Part of the [http](/packages/http) package ([coil-http](https://github.com/ardax-corp/coil-http)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/http)).

Import what you use (`use path::*` is not allowed):

```coil
use http::url::{HttpError, Url};
```

## Types

| Name | Description |
|------|-------------|
| [`HttpError`](/packages/http/reference/http/url/HttpError) | An HTTP failure, returned by every fallible call in this package. |
| [`Url`](/packages/http/reference/http/url/Url) | A parsed [`http`](/packages/http/reference/http), `https`, [`ws`](/packages/http/reference/http/ws) or `wss` URL. |
| [`Headers`](/packages/http/reference/http/url/Headers) | An ordered list of header fields, kept as parallel name and value vectors. |

## Functions

| Name | Description |
|------|-------------|
| [`parse_url`](/packages/http/reference/http/url/parse_url) | Parses an `http://`, `https://`, `ws://` or `wss://` URL. |
