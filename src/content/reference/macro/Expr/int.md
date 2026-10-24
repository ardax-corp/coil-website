---
slug: "macro/Expr/int"
title: "Expr::int"
description: "The argument's value when it is an integer constant: 3, -2, 2 * 21. Names are not looked up (macros run before typechecking)."
module: "macro"
kind: "method"
name: "int"
parent: "Expr"
signature: "pub fn int() -> Option<int>"
import: "use macro::{Expr};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/62e75718cb75a68f2a80f051fe8180e7a5f6cde9/compiler/src/prelude/macro.hy#L139"
order: 5
---

The argument's value when it is an integer constant: `3`, `-2`, `2 * 21`. Names are not looked up (macros run before typechecking).

Called on a `Expr` value as `value.int(…)`.

## Returns

`Option<int>`

## See also

- [`Expr`](/docs/reference/macro/Expr): A function-style macro argument as written: `f(1)`, `a + b`, `"text"`.
- [`Expr::str`](/docs/reference/macro/Expr/str): The source text as written.
- [`Expr::src`](/docs/reference/macro/Expr/src): The source to splice: parenthesized unless it is a single term, so `${a} * 2` keeps `a` whole.
- [`Expr::kind`](/docs/reference/macro/Expr/kind)
- [`Expr::is_literal`](/docs/reference/macro/Expr/is_literal)
- [`Expr::is_ident`](/docs/reference/macro/Expr/is_ident)
- [`Expr::float`](/docs/reference/macro/Expr/float): The value of a float constant (`2.5`, `-1.0e3`), or of an integer one.
- [`Expr::bool`](/docs/reference/macro/Expr/bool): The value of a `true` / `false` constant.
