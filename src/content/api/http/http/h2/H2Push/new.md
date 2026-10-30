---
slug: "http/http/h2/H2Push/new"
package: "http"
title: "H2Push::new"
description: "Associated function H2Push::new."
module: "http::h2"
kind: "static method"
name: "new"
parent: "H2Push"
signature: "pub static fn new(int promised_id, Vec<byte> block) -> H2Push"
import: "use http::h2::{H2Push};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/h2.hy#L503"
order: 0
---

*No documentation yet.*

## Parameters

| Name | Type |
|------|------|
| `promised_id` | `int` |
| `block` | `Vec<byte>` |

## Returns

`H2Push`

## See also

- [`H2Push`](/packages/http/reference/http/h2/H2Push): PUSH_PROMISE promised-id plus remaining header-block fragment.
