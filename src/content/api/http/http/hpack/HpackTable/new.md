---
slug: "http/http/hpack/HpackTable/new"
package: "http"
title: "HpackTable::new"
description: "An empty table with limit cap octets (the RFC default is 4096)."
module: "http::hpack"
kind: "static method"
name: "new"
parent: "HpackTable"
signature: "pub static fn new(int cap) -> HpackTable"
import: "use http::hpack::{HpackTable};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/hpack.hy#L106"
order: 0
---

An empty table with limit `cap` octets (the RFC default is 4096).

## Parameters

| Name | Type |
|------|------|
| `cap` | `int` |

## Returns

`HpackTable`

## See also

- [`HpackTable`](/packages/http/reference/http/hpack/HpackTable): An HPACK dynamic table (RFC 7541 §2.3), for one direction of one connection.
