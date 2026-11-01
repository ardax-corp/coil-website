---
slug: "http/http/url/Headers/add"
package: "http"
title: "Headers::add"
description: "Appends the field name: value. An existing field with the same name is kept."
module: "http::url"
kind: "method"
name: "add"
parent: "Headers"
signature: "pub fn add(string name, string value)"
import: "use http::url::{Headers};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/url.coil#L109"
order: 1
---

Appends the field `name: value`. An existing field with the same name is kept.

Called on a `Headers` value as `value.add(…)`.

## Parameters

| Name | Type |
|------|------|
| `name` | `string` |
| `value` | `string` |

## See also

- [`Headers`](/packages/http/reference/http/url/Headers): An ordered list of header fields, kept as parallel name and value vectors.
- [`Headers::new`](/packages/http/reference/http/url/Headers/new): An empty header list.
- [`Headers::count`](/packages/http/reference/http/url/Headers/count): The number of fields.
- [`Headers::name_at`](/packages/http/reference/http/url/Headers/name_at): The name of field `i`.
- [`Headers::value_at`](/packages/http/reference/http/url/Headers/value_at): The value of field `i`.
