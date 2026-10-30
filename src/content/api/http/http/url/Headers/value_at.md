---
slug: "http/http/url/Headers/value_at"
package: "http"
title: "Headers::value_at"
description: "Header value at index i."
module: "http::url"
kind: "method"
name: "value_at"
parent: "Headers"
signature: "pub fn value_at(int i) -> string"
import: "use http::url::{Headers};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/url.hy#L64"
order: 4
---

Header value at index `i`.

Called on a `Headers` value as `value.value_at(…)`.

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
- [`Headers::name_at`](/packages/http/reference/http/url/Headers/name_at): Header name at index `i`.
