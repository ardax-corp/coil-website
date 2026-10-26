---
slug: "macro/Expr/bool"
title: "Expr::bool"
description: "The value of a true / false constant."
module: "macro"
kind: "method"
name: "bool"
parent: "Expr"
signature: "pub fn bool() -> Option<bool>"
import: "use macro::{Expr};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/12901b3580d5c7df098353b1e92eedcb7e41f91d/compiler/src/prelude/macro.hy#L173"
order: 7
---

The value of a `true` / `false` constant.

Called on a `Expr` value as `value.bool(…)`.

## Returns

`Option<bool>`

## See also

- [`Expr`](/docs/reference/macro/Expr): A function-style macro argument as written: `f(1)`, `a + b`, `"text"`.
- [`Expr::str`](/docs/reference/macro/Expr/str): The source text as written.
- [`Expr::src`](/docs/reference/macro/Expr/src): The source to splice: parenthesized unless it is a single term, so `${a} * 2` keeps `a` whole.
- [`Expr::kind`](/docs/reference/macro/Expr/kind)
- [`Expr::is_literal`](/docs/reference/macro/Expr/is_literal)
- [`Expr::is_ident`](/docs/reference/macro/Expr/is_ident)
- [`Expr::int`](/docs/reference/macro/Expr/int): The argument's value when it is an integer constant: `3`, `-2`, `2 * 21`.
- [`Expr::float`](/docs/reference/macro/Expr/float): The value of a float constant (`2.5`, `-1.0e3`), or of an integer one.
