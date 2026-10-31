---
slug: "http/http/h2/H2Settings/add"
package: "http"
title: "H2Settings::add"
description: "Appends the setting id = value."
module: "http::h2"
kind: "method"
name: "add"
parent: "H2Settings"
signature: "pub fn add(int id, int value)"
import: "use http::h2::{H2Settings};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/h2.hy#L81"
order: 1
---

Appends the setting `id = value`.

Called on a `H2Settings` value as `value.add(…)`.

## Parameters

| Name | Type |
|------|------|
| `id` | `int` |
| `value` | `int` |

## See also

- [`H2Settings`](/packages/http/reference/http/h2/H2Settings): SETTINGS identifier/value pairs (RFC 7540 §6.5).
- [`H2Settings::new`](/packages/http/reference/http/h2/H2Settings/new): An empty list of settings.
- [`H2Settings::count`](/packages/http/reference/http/h2/H2Settings/count): The number of settings.
