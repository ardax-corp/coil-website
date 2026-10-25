---
slug: "macro/Reader/strings"
title: "Reader::strings"
description: "Method Reader::strings."
module: "macro"
kind: "method"
name: "strings"
parent: "Reader"
signature: "pub fn strings() -> Vec<string>"
import: "use macro::{Reader};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/8d0a3c16e6cbbb1b1f3fe264f1cb8be4f8bb9019/compiler/src/prelude/macro.hy#L683"
order: 4
---

*No documentation yet.*

Called on a `Reader` value as `value.strings(…)`.

## Returns

`Vec<string>`

## See also

- [`Reader`](/docs/reference/macro/Reader): Reads a macro call's input: length-prefixed fields (`<len>:<bytes>`, lists as a count then their items) in constructor order, written by the compiler (`macros::encode`).
- [`Reader::over`](/docs/reference/macro/Reader/over)
- [`Reader::str`](/docs/reference/macro/Reader/str): One field.
- [`Reader::int`](/docs/reference/macro/Reader/int): A field holding a decimal integer, possibly negative.
- [`Reader::bool`](/docs/reference/macro/Reader/bool)
- [`Reader::ident`](/docs/reference/macro/Reader/ident)
- [`Reader::expr`](/docs/reference/macro/Reader/expr): A macro argument: kind, text, then its value (kind, text, exponent).
- [`Reader::exprs`](/docs/reference/macro/Reader/exprs)
