---
slug: "http/http/h2/H2Settings/count"
package: "http"
title: "H2Settings::count"
description: "The number of settings."
module: "http::h2"
kind: "method"
name: "count"
parent: "H2Settings"
signature: "pub fn count() -> int"
import: "use http::h2::{H2Settings};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/d2b81eaeb6f5b4e7d794874f593cb4e9406afd27/src/http/h2.coil#L87"
order: 2
---

The number of settings.

Called on a `H2Settings` value as `value.count(…)`.

## Returns

`int`

## See also

- [`H2Settings`](/packages/http/reference/http/h2/H2Settings): SETTINGS identifier/value pairs (RFC 7540 §6.5).
- [`H2Settings::new`](/packages/http/reference/http/h2/H2Settings/new): An empty list of settings.
- [`H2Settings::add`](/packages/http/reference/http/h2/H2Settings/add): Appends the setting `id = value`.
