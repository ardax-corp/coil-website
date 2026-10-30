---
slug: "http/http/url/parse_url"
package: "http"
title: "parse_url"
description: "Parse http://, https://, ws://, or wss:// URL string."
module: "http::url"
kind: "fn"
name: "parse_url"
signature: "fn parse_url(string s) -> Result<Url, HttpError>"
import: "use http::url::{parse_url};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/url.hy#L292"
order: 5
---

Parse `http://`, `https://`, `ws://`, or `wss://` URL string.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Result<Url, HttpError>`

## See also

- [`find_bytes`](/packages/http/reference/http/url/find_bytes): Find `needle` in `hay`; returns index or 999999 if missing.
- [`http_not_bound`](/packages/http/reference/http/url/http_not_bound): No listener: `Server.bind` was not called.
