---
slug: "http/http/hpack/HpackTable/new"
package: "http"
title: "HpackTable::new"
description: "Empty table; cap is the SETTINGS limit (RFC default 4096)."
module: "http::hpack"
kind: "static method"
name: "new"
parent: "HpackTable"
signature: "pub static fn new(int cap) -> HpackTable"
import: "use http::hpack::{HpackTable};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/hpack.hy#L61"
order: 0
---

Empty table; `cap` is the SETTINGS limit (RFC default 4096).

## Parameters

| Name | Type |
|------|------|
| `cap` | `int` |

## Returns

`HpackTable`

## See also

- [`HpackTable`](/packages/http/reference/http/hpack/HpackTable): Decoder dynamic table (RFC 7541 §2.3).
