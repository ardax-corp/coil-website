---
slug: "macro/Reader/fields"
title: "Reader::fields"
description: "Method Reader::fields."
module: "macro"
kind: "method"
name: "fields"
parent: "Reader"
signature: "pub fn fields() -> Vec<Field>"
import: "use macro::{Reader};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/de4bf4dc9af36e25e72142d3d0ccd454fb0021a4/compiler/src/prelude/macro.hy#L783"
order: 13
---

*No documentation yet.*

Called on a `Reader` value as `value.fields(…)`.

## Returns

`Vec<Field>`

## See also

- [`Reader`](/docs/reference/macro/Reader): Reads a macro call's input: length-prefixed fields (`<len>:<bytes>`, lists as a count then their items) in constructor order, written by the compiler (`macros::encode`).
- [`Reader::over`](/docs/reference/macro/Reader/over)
- [`Reader::str`](/docs/reference/macro/Reader/str): One field.
- [`Reader::int`](/docs/reference/macro/Reader/int): A field holding a decimal integer, possibly negative.
- [`Reader::bool`](/docs/reference/macro/Reader/bool)
- [`Reader::strings`](/docs/reference/macro/Reader/strings)
- [`Reader::ident`](/docs/reference/macro/Reader/ident)
- [`Reader::expr`](/docs/reference/macro/Reader/expr): A macro argument: kind, text, then its value (kind, text, exponent).
