---
slug: "url/url/index"
package: "url"
title: "url"
description: "Parse, build and resolve URLs (RFC 3986), read and set query parameters, and percent-encode text."
module: "url"
kind: "module"
name: "url"
origin: "package"
auto: false
order: 0
---

Part of the [url](/packages/url) package ([coil-url](https://github.com/ardax-corp/coil-url)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/url)).

Import what you use (`use path::*` is not allowed):

```coil
use url::{UrlError, Url};
```

## Types

| Name | Description |
|------|-------------|
| [`UrlError`](/packages/url/reference/url/UrlError) | Why [`parse`](/packages/url/reference/url/parse), [`join`](/packages/url/reference/url/join) or [`percent_decode`](/packages/url/reference/url/percent_decode) rejected its input. |
| [`Url`](/packages/url/reference/url/Url) | A parsed RFC 3986 URI or relative reference. |

## Functions

| Name | Description |
|------|-------------|
| [`percent_encode`](/packages/url/reference/url/percent_encode) | Percent-encodes every byte of `s` that is not an RFC 3986 unreserved character. |
| [`percent_decode`](/packages/url/reference/url/percent_decode) | Decodes the `%HH` sequences in `s`; other bytes are kept as they are. |
| [`parse`](/packages/url/reference/url/parse) | Parses an absolute URI (`https://host/path`) or a relative reference (`../a?b`). |
| [`join`](/packages/url/reference/url/join) | Resolves `reference` against `base` (RFC 3986 §5.2), the way a browser follows a link. |
