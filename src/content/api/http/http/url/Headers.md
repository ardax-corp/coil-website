---
slug: "http/http/url/Headers"
package: "http"
title: "Headers"
description: "Parallel name/value header pairs for requests and responses."
module: "http::url"
kind: "class"
name: "Headers"
signature: "class Headers"
import: "use http::url::{Headers};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/url.hy#L34"
order: 2
---

Parallel name/value header pairs for requests and responses.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `names` | `Vec<string>` |  |
| `values` | `Vec<string>` |  |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/http/reference/http/url/Headers/new) | Empty header list. |

## Methods

| Name | Description |
|------|-------------|
| [`add`](/packages/http/reference/http/url/Headers/add) | Append a header name/value pair. |
| [`count`](/packages/http/reference/http/url/Headers/count) | Number of header pairs. |
| [`name_at`](/packages/http/reference/http/url/Headers/name_at) | Header name at index `i`. |
| [`value_at`](/packages/http/reference/http/url/Headers/value_at) | Header value at index `i`. |

## See also

- [`Url`](/packages/http/reference/http/url/Url): Parsed `http`/`https`/`ws`/`wss` URL (scheme, host, port, path).
