---
slug: "http/http/url/Url/port_val"
package: "http"
title: "Url::port_val"
description: "The port (same as the port field)."
module: "http::url"
kind: "method"
name: "port_val"
parent: "Url"
signature: "pub fn port_val() -> int"
import: "use http::url::{Url};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/url.coil#L142"
order: 2
---

The port (same as the `port` field).

Called on a `Url` value as `value.port_val(…)`.

## Returns

`int`

## See also

- [`Url`](/packages/http/reference/http/url/Url): A parsed `http`, `https`, `ws` or `wss` URL.
- [`Url::scheme_val`](/packages/http/reference/http/url/Url/scheme_val): The scheme (same as the `scheme` field).
- [`Url::host_val`](/packages/http/reference/http/url/Url/host_val): The host (same as the `host` field).
- [`Url::path_val`](/packages/http/reference/http/url/Url/path_val): The path and query (same as the `path` field).
