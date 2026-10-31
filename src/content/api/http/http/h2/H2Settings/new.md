---
slug: "http/http/h2/H2Settings/new"
package: "http"
title: "H2Settings::new"
description: "An empty list of settings."
module: "http::h2"
kind: "static method"
name: "new"
parent: "H2Settings"
signature: "pub static fn new() -> H2Settings"
import: "use http::h2::{H2Settings};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/h2.coil#L74"
order: 0
---

An empty list of settings.

## Returns

`H2Settings`

## See also

- [`H2Settings`](/packages/http/reference/http/h2/H2Settings): SETTINGS identifier/value pairs (RFC 7540 §6.5).
- [`H2Settings::add`](/packages/http/reference/http/h2/H2Settings/add): Appends the setting `id = value`.
- [`H2Settings::count`](/packages/http/reference/http/h2/H2Settings/count): The number of settings.
