---
slug: "http/http/url/Url/path_val"
package: "http"
title: "Url::path_val"
description: "The path and query (same as the path field)."
module: "http::url"
kind: "method"
name: "path_val"
parent: "Url"
signature: "pub fn path_val() -> string"
import: "use http::url::{Url};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/url.hy#L147"
order: 3
---

The path and query (same as the [`path`](/packages/stdlib/reference/path) field).

Called on a `Url` value as `value.path_val(…)`.

## Returns

`string`

## See also

- [`path`](/packages/stdlib/reference/path)
- [`Url`](/packages/http/reference/http/url/Url): A parsed `http`, `https`, `ws` or `wss` URL.
- [`Url::scheme_val`](/packages/http/reference/http/url/Url/scheme_val): The scheme (same as the `scheme` field).
- [`Url::host_val`](/packages/http/reference/http/url/Url/host_val): The host (same as the `host` field).
- [`Url::port_val`](/packages/http/reference/http/url/Url/port_val): The port (same as the `port` field).
