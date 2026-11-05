---
slug: "http/http/url/Headers/name_at"
package: "http"
title: "Headers::name_at"
description: "The name of field i. Panics if i is out of range."
module: "http::url"
kind: "method"
name: "name_at"
parent: "Headers"
signature: "pub fn name_at(int i) -> string"
import: "use http::url::{Headers};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/d2b81eaeb6f5b4e7d794874f593cb4e9406afd27/src/http/url.coil#L120"
order: 3
---

The name of field `i`. Panics if `i` is out of range.

Called on a `Headers` value as `value.name_at(…)`.

## Parameters

| Name | Type |
|------|------|
| `i` | `int` |

## Returns

`string`

## See also

- [`Headers`](/packages/http/reference/http/url/Headers): An ordered list of header fields, kept as parallel name and value vectors.
- [`Headers::new`](/packages/http/reference/http/url/Headers/new): An empty header list.
- [`Headers::add`](/packages/http/reference/http/url/Headers/add): Appends the field `name: value`.
- [`Headers::count`](/packages/http/reference/http/url/Headers/count): The number of fields.
- [`Headers::value_at`](/packages/http/reference/http/url/Headers/value_at): The value of field `i`.
