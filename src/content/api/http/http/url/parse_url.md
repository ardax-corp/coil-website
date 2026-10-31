---
slug: "http/http/url/parse_url"
package: "http"
title: "parse_url"
description: "Parses an http://, https://, ws:// or wss:// URL."
module: "http::url"
kind: "fn"
name: "parse_url"
signature: "fn parse_url(string s) -> Result<Url, HttpError>"
import: "use http::url::{parse_url};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/url.hy#L386"
order: 3
---

Parses an `http://`, `https://`, `ws://` or `wss://` URL.

The port defaults to 80 ([`http`](/packages/http/reference/http), [`ws`](/packages/http/reference/http/ws)) or 443 (`https`, `wss`) and the path to
`/`. A query string with no path (`http://host?q=1`) becomes the path `?q=1`.

Returns `BadUrl` when there is no `://`, the host is empty, the port is not
decimal digits, or the host or path holds CR / LF; `UnsupportedScheme` for any
other scheme. IPv6 literals (`[::1]`) are not supported.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Result<Url, HttpError>`

## Examples

```coil
use tests::assert;
use http::url::parse_url;

let u = match parse_url("http://localhost:8080/health") {
    Result::Ok(u) => u,
    Result::Err(e) => panic show(e),
};
assert!(u.host == "localhost");
assert!(u.port == 8080);
assert!(u.path == "/health");

let plain = match parse_url("https://example.com") {
    Result::Ok(u) => u,
    Result::Err(e) => panic show(e),
};
assert!(plain.port == 443);
assert!(plain.path == "/");
```

## See also

- [`http`](/packages/http/reference/http)
- [`http::ws`](/packages/http/reference/http/ws)
