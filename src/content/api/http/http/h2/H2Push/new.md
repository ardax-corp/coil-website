---
slug: "http/http/h2/H2Push/new"
package: "http"
title: "H2Push::new"
description: "A push promise from its parts."
module: "http::h2"
kind: "static method"
name: "new"
parent: "H2Push"
signature: "pub static fn new(int promised_id, Vec<byte> block) -> H2Push"
import: "use http::h2::{H2Push};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/h2.hy#L578"
order: 0
---

A push promise from its parts.

## Parameters

| Name | Type |
|------|------|
| `promised_id` | `int` |
| `block` | `Vec<byte>` |

## Returns

`H2Push`

## See also

- [`H2Push`](/packages/http/reference/http/h2/H2Push): A decoded PUSH_PROMISE payload: the promised stream id and the header-block fragment.
