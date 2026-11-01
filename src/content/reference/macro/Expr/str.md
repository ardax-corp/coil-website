---
slug: "macro/Expr/str"
title: "Expr::str"
description: "The source text as written."
module: "macro"
kind: "method"
name: "str"
parent: "Expr"
signature: "pub fn str() -> string"
import: "use macro::{Expr};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/prelude/macro.coil#L112"
order: 0
---

The source text as written.

Called on a `Expr` value as `value.str(…)`.

## Returns

`string`

## See also

- [`Expr`](/docs/reference/macro/Expr): A function-style macro argument as written: `f(1)`, `a + b`, `"text"`.
- [`Expr::src`](/docs/reference/macro/Expr/src): The source to splice: parenthesized unless it is a single term, so `${a} * 2` keeps `a` whole.
- [`Expr::kind`](/docs/reference/macro/Expr/kind)
- [`Expr::is_literal`](/docs/reference/macro/Expr/is_literal)
- [`Expr::is_ident`](/docs/reference/macro/Expr/is_ident)
- [`Expr::int`](/docs/reference/macro/Expr/int): The argument's value when it is an integer constant: `3`, `-2`, `2 * 21`.
- [`Expr::float`](/docs/reference/macro/Expr/float): The value of a float constant (`2.5`, `-1.0e3`), or of an integer one.
- [`Expr::bool`](/docs/reference/macro/Expr/bool): The value of a `true` / `false` constant.
