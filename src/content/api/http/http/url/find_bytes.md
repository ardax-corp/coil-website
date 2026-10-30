---
slug: "http/http/url/find_bytes"
package: "http"
title: "find_bytes"
description: "Find needle in hay; returns index or 999999 if missing."
module: "http::url"
kind: "fn"
name: "find_bytes"
signature: "fn find_bytes(Vec<byte> hay, Vec<byte> needle) -> int"
import: "use http::url::{find_bytes};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/url.hy#L144"
order: 3
---

Find `needle` in `hay`; returns index or 999999 if missing.

## Parameters

| Name | Type |
|------|------|
| `hay` | `Vec<byte>` |
| `needle` | `Vec<byte>` |

## Returns

`int`

## See also

- [`http_not_bound`](/packages/http/reference/http/url/http_not_bound): No listener: `Server.bind` was not called.
- [`parse_url`](/packages/http/reference/http/url/parse_url): Parse `http://`, `https://`, `ws://`, or `wss://` URL string.
