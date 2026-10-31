---
slug: "http/http/url/Url/host_val"
package: "http"
title: "Url::host_val"
description: "The host (same as the host field)."
module: "http::url"
kind: "method"
name: "host_val"
parent: "Url"
signature: "pub fn host_val() -> string"
import: "use http::url::{Url};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/url.hy#L137"
order: 1
---

The host (same as the `host` field).

Called on a `Url` value as `value.host_val(…)`.

## Returns

`string`

## See also

- [`Url`](/packages/http/reference/http/url/Url): A parsed `http`, `https`, `ws` or `wss` URL.
- [`Url::scheme_val`](/packages/http/reference/http/url/Url/scheme_val): The scheme (same as the `scheme` field).
- [`Url::port_val`](/packages/http/reference/http/url/Url/port_val): The port (same as the `port` field).
- [`Url::path_val`](/packages/http/reference/http/url/Url/path_val): The path and query (same as the `path` field).
