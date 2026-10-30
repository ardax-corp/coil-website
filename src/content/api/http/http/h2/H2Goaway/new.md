---
slug: "http/http/h2/H2Goaway/new"
package: "http"
title: "H2Goaway::new"
description: "Associated function H2Goaway::new."
module: "http::h2"
kind: "static method"
name: "new"
parent: "H2Goaway"
signature: "pub static fn new(int last_stream_id, int error_code) -> H2Goaway"
import: "use http::h2::{H2Goaway};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/h2.hy#L66"
order: 0
---

*No documentation yet.*

## Parameters

| Name | Type |
|------|------|
| `last_stream_id` | `int` |
| `error_code` | `int` |

## Returns

`H2Goaway`

## See also

- [`H2Goaway`](/packages/http/reference/http/h2/H2Goaway): GOAWAY last-stream-id and error code (RFC 7540 §6.8).
