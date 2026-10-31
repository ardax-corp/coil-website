---
slug: "http/http/h2_session/H2Pair/new"
package: "http"
title: "H2Pair::new"
description: "A pair from its parts."
module: "http::h2_session"
kind: "static method"
name: "new"
parent: "H2Pair"
signature: "pub static fn new(Response first, Response second) -> H2Pair"
import: "use http::h2_session::{H2Pair};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/h2_session.coil#L1496"
order: 0
---

A pair from its parts.

## Parameters

| Name | Type |
|------|------|
| `first` | `Response` |
| `second` | `Response` |

## Returns

`H2Pair`

## See also

- [`H2Pair`](/packages/http/reference/http/h2_session/H2Pair): The two responses of `h2_connect_two` (streams 1 and 3).
