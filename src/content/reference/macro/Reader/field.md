---
slug: "macro/Reader/field"
title: "Reader::field"
description: "Method Reader::field."
module: "macro"
kind: "method"
name: "field"
parent: "Reader"
signature: "pub fn field() -> Field"
import: "use macro::{Reader};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/e553eda99b575bb4f78c04622508caa036a1a01b/compiler/src/prelude/macro.hy#L774"
order: 12
---

*No documentation yet.*

Called on a `Reader` value as `value.field(…)`.

## Returns

`Field`

## See also

- [`Reader`](/docs/reference/macro/Reader): Reads a macro call's input: length-prefixed fields (`<len>:<bytes>`, lists as a count then their items) in constructor order, written by the compiler (`macros::encode`).
- [`Reader::over`](/docs/reference/macro/Reader/over)
- [`Reader::str`](/docs/reference/macro/Reader/str): One field.
- [`Reader::int`](/docs/reference/macro/Reader/int): A field holding a decimal integer, possibly negative.
- [`Reader::bool`](/docs/reference/macro/Reader/bool)
- [`Reader::strings`](/docs/reference/macro/Reader/strings)
- [`Reader::ident`](/docs/reference/macro/Reader/ident)
- [`Reader::expr`](/docs/reference/macro/Reader/expr): A macro argument: kind, text, then its value (kind, text, exponent).
