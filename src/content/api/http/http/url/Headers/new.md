---
slug: "http/http/url/Headers/new"
package: "http"
title: "Headers::new"
description: "An empty header list."
module: "http::url"
kind: "static method"
name: "new"
parent: "Headers"
signature: "pub static fn new() -> Headers"
import: "use http::url::{Headers};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/url.hy#L102"
order: 0
---

An empty header list.

## Returns

`Headers`

## See also

- [`Headers`](/packages/http/reference/http/url/Headers): An ordered list of header fields, kept as parallel name and value vectors.
- [`Headers::add`](/packages/http/reference/http/url/Headers/add): Appends the field `name: value`.
- [`Headers::count`](/packages/http/reference/http/url/Headers/count): The number of fields.
- [`Headers::name_at`](/packages/http/reference/http/url/Headers/name_at): The name of field `i`.
- [`Headers::value_at`](/packages/http/reference/http/url/Headers/value_at): The value of field `i`.
