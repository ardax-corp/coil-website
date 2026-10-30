---
slug: "http/http/url/Headers/add"
package: "http"
title: "Headers::add"
description: "Append a header name/value pair."
module: "http::url"
kind: "method"
name: "add"
parent: "Headers"
signature: "pub fn add(string name, string value)"
import: "use http::url::{Headers};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/url.hy#L48"
order: 1
---

Append a header name/value pair.

Called on a `Headers` value as `value.add(…)`.

## Parameters

| Name | Type |
|------|------|
| `name` | `string` |
| `value` | `string` |

## See also

- [`Headers`](/packages/http/reference/http/url/Headers): Parallel name/value header pairs for requests and responses.
- [`Headers::new`](/packages/http/reference/http/url/Headers/new): Empty header list.
- [`Headers::count`](/packages/http/reference/http/url/Headers/count): Number of header pairs.
- [`Headers::name_at`](/packages/http/reference/http/url/Headers/name_at): Header name at index `i`.
- [`Headers::value_at`](/packages/http/reference/http/url/Headers/value_at): Header value at index `i`.
