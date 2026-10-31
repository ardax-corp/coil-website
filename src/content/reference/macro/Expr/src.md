---
slug: "macro/Expr/src"
title: "Expr::src"
description: "The source to splice: parenthesized unless it is a single term, so ${a} * 2 keeps a whole."
module: "macro"
kind: "method"
name: "src"
parent: "Expr"
signature: "pub fn src() -> string"
import: "use macro::{Expr};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/prelude/macro.hy#L118"
order: 1
---

The source to splice: parenthesized unless it is a single term, so `${a} * 2` keeps `a` whole.

Called on a `Expr` value as `value.src(…)`.

## Returns

`string`

## See also

- [`Expr`](/docs/reference/macro/Expr): A function-style macro argument as written: `f(1)`, `a + b`, `"text"`.
- [`Expr::str`](/docs/reference/macro/Expr/str): The source text as written.
- [`Expr::kind`](/docs/reference/macro/Expr/kind)
- [`Expr::is_literal`](/docs/reference/macro/Expr/is_literal)
- [`Expr::is_ident`](/docs/reference/macro/Expr/is_ident)
- [`Expr::int`](/docs/reference/macro/Expr/int): The argument's value when it is an integer constant: `3`, `-2`, `2 * 21`.
- [`Expr::float`](/docs/reference/macro/Expr/float): The value of a float constant (`2.5`, `-1.0e3`), or of an integer one.
- [`Expr::bool`](/docs/reference/macro/Expr/bool): The value of a `true` / `false` constant.
