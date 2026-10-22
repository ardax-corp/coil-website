---
slug: "macro/Expr/float"
title: "Expr::float"
description: "The value of a float constant (2.5, -1.0e3), or of an integer one."
module: "macro"
kind: "method"
name: "float"
parent: "Expr"
signature: "pub fn float() -> Option<float>"
import: "use macro::{Expr};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/398a75756bed65b1ece7801a7a0f96154af4c6fb/compiler/src/prelude/macro.hy#L147"
order: 6
---

The value of a float constant (`2.5`, `-1.0e3`), or of an integer one.

Called on a `Expr` value as `value.float(…)`.

## Returns

`Option<float>`

## See also

- [`Expr`](/docs/reference/macro/Expr): A function-style macro argument as written: f(1), a + b, "text".
- [`Expr::str`](/docs/reference/macro/Expr/str): The source text as written.
- [`Expr::src`](/docs/reference/macro/Expr/src): The source to splice: parenthesized unless it is a single term, so ${a} * 2 keeps a whole.
- [`Expr::kind`](/docs/reference/macro/Expr/kind)
- [`Expr::is_literal`](/docs/reference/macro/Expr/is_literal)
- [`Expr::is_ident`](/docs/reference/macro/Expr/is_ident)
- [`Expr::int`](/docs/reference/macro/Expr/int): The argument's value when it is an integer constant: 3, -2, 2 * 21.
- [`Expr::bool`](/docs/reference/macro/Expr/bool): The value of a true / false constant.
