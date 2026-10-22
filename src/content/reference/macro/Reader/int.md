---
slug: "macro/Reader/int"
title: "Reader::int"
description: "A field holding a decimal integer, possibly negative."
module: "macro"
kind: "method"
name: "int"
parent: "Reader"
signature: "pub fn int() -> int"
import: "use macro::{Reader};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/398a75756bed65b1ece7801a7a0f96154af4c6fb/compiler/src/prelude/macro.hy#L660"
order: 2
---

A field holding a decimal integer, possibly negative.

Called on a `Reader` value as `value.int(…)`.

## Returns

`int`

## See also

- [`Reader`](/docs/reference/macro/Reader): Reads a macro call's input: length-prefixed fields (<len>:<bytes>, lists as a count then their items) in constructor order, written by the compiler (macros::encode).
- [`Reader::over`](/docs/reference/macro/Reader/over)
- [`Reader::str`](/docs/reference/macro/Reader/str): One field.
- [`Reader::bool`](/docs/reference/macro/Reader/bool)
- [`Reader::strings`](/docs/reference/macro/Reader/strings)
- [`Reader::ident`](/docs/reference/macro/Reader/ident)
- [`Reader::expr`](/docs/reference/macro/Reader/expr): A macro argument: kind, text, then its value (kind, text, exponent).
- [`Reader::exprs`](/docs/reference/macro/Reader/exprs)
