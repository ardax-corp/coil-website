---
slug: "http/http/url/Url"
package: "http"
title: "Url"
description: "Parsed http/https/ws/wss URL (scheme, host, port, path)."
module: "http::url"
kind: "class"
name: "Url"
signature: "class Url"
import: "use http::url::{Url};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/url.hy#L26"
order: 1
---

Parsed [`http`](/packages/http/reference/http)/`https`/[`ws`](/packages/http/reference/http/ws)/`wss` URL (scheme, host, port, path).

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `scheme` | `string` |  |
| `host` | `string` |  |
| `port` | `int` |  |
| `path` | `string` |  |

## Methods

| Name | Description |
|------|-------------|
| [`scheme_val`](/packages/http/reference/http/url/Url/scheme_val) |  |
| [`host_val`](/packages/http/reference/http/url/Url/host_val) |  |
| [`port_val`](/packages/http/reference/http/url/Url/port_val) |  |
| [`path_val`](/packages/http/reference/http/url/Url/path_val) |  |

## See also

- [`http`](/packages/http/reference/http)
- [`http::ws`](/packages/http/reference/http/ws)
- [`Headers`](/packages/http/reference/http/url/Headers): Parallel name/value header pairs for requests and responses.
