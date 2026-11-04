---
slug: "http/http/url/Headers/count"
package: "http"
title: "Headers::count"
description: "The number of fields."
module: "http::url"
kind: "method"
name: "count"
parent: "Headers"
signature: "pub fn count() -> int"
import: "use http::url::{Headers};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/d2b81eaeb6f5b4e7d794874f593cb4e9406afd27/src/http/url.coil#L115"
order: 2
---

The number of fields.

Called on a `Headers` value as `value.count(…)`.

## Returns

`int`

## See also

- [`Headers`](/packages/http/reference/http/url/Headers): An ordered list of header fields, kept as parallel name and value vectors.
- [`Headers::new`](/packages/http/reference/http/url/Headers/new): An empty header list.
- [`Headers::add`](/packages/http/reference/http/url/Headers/add): Appends the field `name: value`.
- [`Headers::name_at`](/packages/http/reference/http/url/Headers/name_at): The name of field `i`.
- [`Headers::value_at`](/packages/http/reference/http/url/Headers/value_at): The value of field `i`.
