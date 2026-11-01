---
slug: "http/http/url/Url"
package: "http"
title: "Url"
description: "A parsed http, https, ws or wss URL."
module: "http::url"
kind: "class"
name: "Url"
signature: "class Url"
import: "use http::url::{Url};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/url.coil#L63"
order: 1
---

A parsed [`http`](/packages/http/reference/http), `https`, [`ws`](/packages/http/reference/http/ws) or `wss` URL.

Built by [`parse_url`](/packages/http/reference/http/url/parse_url). The query string, if any, stays on [`path`](/packages/stdlib/reference/path)
(`/search?q=coil`); there is no separate fragment or user-info part.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `scheme` | `string` | Scheme: [`http`](/packages/http/reference/http), `https`, [`ws`](/packages/http/reference/http/ws) or `wss`. |
| `host` | `string` | Host name or IPv4 address, without the port. |
| `port` | `int` | Port: the explicit one, or 80 for [`http`](/packages/http/reference/http)/[`ws`](/packages/http/reference/http/ws) and 443 for `https`/`wss`. |
| `path` | `string` | Path and query (`/a?b=1`); `/` when the URL has none. |

## Methods

| Name | Description |
|------|-------------|
| [`scheme_val`](/packages/http/reference/http/url/Url/scheme_val) | The scheme (same as the `scheme` field). |
| [`host_val`](/packages/http/reference/http/url/Url/host_val) | The host (same as the `host` field). |
| [`port_val`](/packages/http/reference/http/url/Url/port_val) | The port (same as the `port` field). |
| [`path_val`](/packages/http/reference/http/url/Url/path_val) | The path and query (same as the [`path`](/packages/stdlib/reference/path) field). |

## Examples

```coil
use tests::assert;
use http::url::parse_url;

let u = match parse_url("https://example.com:8443/a?b=1") {
    Result::Ok(u) => u,
    Result::Err(e) => panic show(e),
};
assert!(u.scheme == "https");
assert!(u.host == "example.com");
assert!(u.port == 8443);
assert!(u.path == "/a?b=1");
```

## See also

- [`http`](/packages/http/reference/http)
- [`http::ws`](/packages/http/reference/http/ws)
- [`http::url::parse_url`](/packages/http/reference/http/url/parse_url)
- [`path`](/packages/stdlib/reference/path)
- [`Headers`](/packages/http/reference/http/url/Headers): An ordered list of header fields, kept as parallel name and value vectors.
