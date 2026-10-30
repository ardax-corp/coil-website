---
slug: "http/http/url/Headers/new"
package: "http"
title: "Headers::new"
description: "Empty header list."
module: "http::url"
kind: "static method"
name: "new"
parent: "Headers"
signature: "pub static fn new() -> Headers"
import: "use http::url::{Headers};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/url.hy#L41"
order: 0
---

Empty header list.

## Returns

`Headers`

## See also

- [`Headers`](/packages/http/reference/http/url/Headers): Parallel name/value header pairs for requests and responses.
- [`Headers::add`](/packages/http/reference/http/url/Headers/add): Append a header name/value pair.
- [`Headers::count`](/packages/http/reference/http/url/Headers/count): Number of header pairs.
- [`Headers::name_at`](/packages/http/reference/http/url/Headers/name_at): Header name at index `i`.
- [`Headers::value_at`](/packages/http/reference/http/url/Headers/value_at): Header value at index `i`.
