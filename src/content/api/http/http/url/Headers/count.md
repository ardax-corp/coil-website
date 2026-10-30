---
slug: "http/http/url/Headers/count"
package: "http"
title: "Headers::count"
description: "Number of header pairs."
module: "http::url"
kind: "method"
name: "count"
parent: "Headers"
signature: "pub fn count() -> int"
import: "use http::url::{Headers};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/url.hy#L54"
order: 2
---

Number of header pairs.

Called on a `Headers` value as `value.count(…)`.

## Returns

`int`

## See also

- [`Headers`](/packages/http/reference/http/url/Headers): Parallel name/value header pairs for requests and responses.
- [`Headers::new`](/packages/http/reference/http/url/Headers/new): Empty header list.
- [`Headers::add`](/packages/http/reference/http/url/Headers/add): Append a header name/value pair.
- [`Headers::name_at`](/packages/http/reference/http/url/Headers/name_at): Header name at index `i`.
- [`Headers::value_at`](/packages/http/reference/http/url/Headers/value_at): Header value at index `i`.
