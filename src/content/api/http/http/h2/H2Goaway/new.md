---
slug: "http/http/h2/H2Goaway/new"
package: "http"
title: "H2Goaway::new"
description: "A GOAWAY body from its parts."
module: "http::h2"
kind: "static method"
name: "new"
parent: "H2Goaway"
signature: "pub static fn new(int last_stream_id, int error_code) -> H2Goaway"
import: "use http::h2::{H2Goaway};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5b91a79d1460e4bb06d99db02a2a90ab6b76533f/src/http/h2.coil#L102"
order: 0
---

A GOAWAY body from its parts.

## Parameters

| Name | Type |
|------|------|
| `last_stream_id` | `int` |
| `error_code` | `int` |

## Returns

`H2Goaway`

## See also

- [`H2Goaway`](/packages/http/reference/http/h2/H2Goaway): GOAWAY last-stream-id and error code (RFC 7540 §6.8).
