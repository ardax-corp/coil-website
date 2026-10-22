---
slug: "macro/Reader/fn_decl"
title: "Reader::fn_decl"
description: "Method Reader::fn_decl."
module: "macro"
kind: "method"
name: "fn_decl"
parent: "Reader"
signature: "pub fn fn_decl() -> FnDecl"
import: "use macro::{Reader};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/prelude/macro.hy#L839"
order: 16
---

*No documentation yet.*

Called on a `Reader` value as `value.fn_decl(…)`.

## Returns

`FnDecl`

## See also

- [`Reader`](/docs/reference/macro/Reader): Reads a macro call's input: length-prefixed fields (<len>:<bytes>, lists as a count then their items) in constructor order, written by the compiler (macros::encode).
- [`Reader::over`](/docs/reference/macro/Reader/over)
- [`Reader::str`](/docs/reference/macro/Reader/str): One field.
- [`Reader::int`](/docs/reference/macro/Reader/int): A field holding a decimal integer, possibly negative.
- [`Reader::bool`](/docs/reference/macro/Reader/bool)
- [`Reader::strings`](/docs/reference/macro/Reader/strings)
- [`Reader::ident`](/docs/reference/macro/Reader/ident)
- [`Reader::expr`](/docs/reference/macro/Reader/expr): A macro argument: kind, text, then its value (kind, text, exponent).
