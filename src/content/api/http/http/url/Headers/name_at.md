---
slug: "http/http/url/Headers/name_at"
package: "http"
title: "Headers::name_at"
description: "Header name at index i."
module: "http::url"
kind: "method"
name: "name_at"
parent: "Headers"
signature: "pub fn name_at(int i) -> string"
import: "use http::url::{Headers};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/url.hy#L59"
order: 3
---

Header name at index `i`.

Called on a `Headers` value as `value.name_at(…)`.

## Parameters

| Name | Type |
|------|------|
| `i` | `int` |

## Returns

`string`

## See also

- [`Headers`](/packages/http/reference/http/url/Headers): Parallel name/value header pairs for requests and responses.
- [`Headers::new`](/packages/http/reference/http/url/Headers/new): Empty header list.
- [`Headers::add`](/packages/http/reference/http/url/Headers/add): Append a header name/value pair.
- [`Headers::count`](/packages/http/reference/http/url/Headers/count): Number of header pairs.
- [`Headers::value_at`](/packages/http/reference/http/url/Headers/value_at): Header value at index `i`.
