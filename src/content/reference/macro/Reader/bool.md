---
slug: "macro/Reader/bool"
title: "Reader::bool"
description: "Method Reader::bool."
module: "macro"
kind: "method"
name: "bool"
parent: "Reader"
signature: "pub fn bool() -> bool"
import: "use macro::{Reader};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/12901b3580d5c7df098353b1e92eedcb7e41f91d/compiler/src/prelude/macro.hy#L679"
order: 3
---

*No documentation yet.*

Called on a `Reader` value as `value.bool(…)`.

## Returns

`bool`

## See also

- [`Reader`](/docs/reference/macro/Reader): Reads a macro call's input: length-prefixed fields (`<len>:<bytes>`, lists as a count then their items) in constructor order, written by the compiler (`macros::encode`).
- [`Reader::over`](/docs/reference/macro/Reader/over)
- [`Reader::str`](/docs/reference/macro/Reader/str): One field.
- [`Reader::int`](/docs/reference/macro/Reader/int): A field holding a decimal integer, possibly negative.
- [`Reader::strings`](/docs/reference/macro/Reader/strings)
- [`Reader::ident`](/docs/reference/macro/Reader/ident)
- [`Reader::expr`](/docs/reference/macro/Reader/expr): A macro argument: kind, text, then its value (kind, text, exponent).
- [`Reader::exprs`](/docs/reference/macro/Reader/exprs)
