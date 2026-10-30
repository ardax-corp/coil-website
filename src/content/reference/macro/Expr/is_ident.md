---
slug: "macro/Expr/is_ident"
title: "Expr::is_ident"
description: "Method Expr::is_ident."
module: "macro"
kind: "method"
name: "is_ident"
parent: "Expr"
signature: "pub fn is_ident() -> bool"
import: "use macro::{Expr};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/ea16288b0bd35fbe92e6665d44f9277d1dec7d29/compiler/src/prelude/macro.hy#L133"
order: 4
---

*No documentation yet.*

Called on a `Expr` value as `value.is_ident(…)`.

## Returns

`bool`

## See also

- [`Expr`](/docs/reference/macro/Expr): A function-style macro argument as written: `f(1)`, `a + b`, `"text"`.
- [`Expr::str`](/docs/reference/macro/Expr/str): The source text as written.
- [`Expr::src`](/docs/reference/macro/Expr/src): The source to splice: parenthesized unless it is a single term, so `${a} * 2` keeps `a` whole.
- [`Expr::kind`](/docs/reference/macro/Expr/kind)
- [`Expr::is_literal`](/docs/reference/macro/Expr/is_literal)
- [`Expr::int`](/docs/reference/macro/Expr/int): The argument's value when it is an integer constant: `3`, `-2`, `2 * 21`.
- [`Expr::float`](/docs/reference/macro/Expr/float): The value of a float constant (`2.5`, `-1.0e3`), or of an integer one.
- [`Expr::bool`](/docs/reference/macro/Expr/bool): The value of a `true` / `false` constant.
