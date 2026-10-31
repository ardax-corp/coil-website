---
slug: "http/http/url/Headers/value_at"
package: "http"
title: "Headers::value_at"
description: "The value of field i. Panics if i is out of range."
module: "http::url"
kind: "method"
name: "value_at"
parent: "Headers"
signature: "pub fn value_at(int i) -> string"
import: "use http::url::{Headers};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/url.coil#L125"
order: 4
---

The value of field `i`. Panics if `i` is out of range.

Called on a `Headers` value as `value.value_at(…)`.

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
- [`Headers::name_at`](/packages/http/reference/http/url/Headers/name_at): The name of field `i`.
