---
slug: "http/http/url/Headers"
package: "http"
title: "Headers"
description: "An ordered list of header fields, kept as parallel name and value vectors."
module: "http::url"
kind: "class"
name: "Headers"
signature: "class Headers"
import: "use http::url::{Headers};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/url.hy#L93"
order: 2
---

An ordered list of header fields, kept as parallel name and value vectors.

Names keep the case they were added or received with, and duplicates are
allowed. Used for request headers (`Request::header`), parsed request headers
(`IncomingRequest.headers`) and HTTP/2 header blocks.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `names` | `Vec<string>` | Field names, in insertion order. |
| `values` | `Vec<string>` | Field values; `values[i]` belongs to `names[i]`. |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/http/reference/http/url/Headers/new) | An empty header list. |

## Methods

| Name | Description |
|------|-------------|
| [`add`](/packages/http/reference/http/url/Headers/add) | Appends the field `name: value`. |
| [`count`](/packages/http/reference/http/url/Headers/count) | The number of fields. |
| [`name_at`](/packages/http/reference/http/url/Headers/name_at) | The name of field `i`. |
| [`value_at`](/packages/http/reference/http/url/Headers/value_at) | The value of field `i`. |

## Examples

```coil
use tests::assert;
use http::url::Headers;

let h = Headers::new();
h.add("Accept", "text/plain");
h.add("X-Trace", "abc");
assert!(h.count() == 2);
assert!(h.name_at(1) == "X-Trace");
assert!(h.value_at(1) == "abc");
```

## See also

- [`Url`](/packages/http/reference/http/url/Url): A parsed `http`, `https`, `ws` or `wss` URL.
