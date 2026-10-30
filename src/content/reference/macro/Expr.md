---
slug: "macro/Expr"
title: "Expr"
description: "A function-style macro argument as written: f(1), a + b, \"text\"."
module: "macro"
kind: "class"
name: "Expr"
signature: "class Expr"
import: "use macro::{Expr};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/8b9e0dda6cdbb0ebf164e5feafa3dd672e189da9/compiler/src/prelude/macro.hy#L96"
order: 2
---

A function-style macro argument as written: `f(1)`, `a + b`, `"text"`.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `text` | `string` |  |
| `kind_name` | `string` | `literal`, [`ident`](/docs/reference/macro/fn.ident), [`path`](/docs/reference/path), `call` or `other`. |
| `value_kind` | `string` | For a constant argument (`3`, `-2.5`, `"a\n"`, `1 + 2`): [`int`](/docs/reference/macro/Expr/int), [`float`](/docs/reference/macro/Expr/float), [`bool`](/docs/reference/macro/Expr/bool) or [`string`](/docs/reference/macro/Expr/string), else `""`. |
| `value_text` | `string` | The value: decimal digits for an [`int`](/docs/reference/macro/Expr/int), the text for a [`string`](/docs/reference/macro/Expr/string), `1` / `0` for a [`bool`](/docs/reference/macro/Expr/bool); for a [`float`](/docs/reference/macro/Expr/float), the digits of `d` in `d * 10^value_exp`. |
| `value_exp` | `int` |  |

## Methods

| Name | Description |
|------|-------------|
| [`str`](/docs/reference/macro/Expr/str) | The source text as written. |
| [`src`](/docs/reference/macro/Expr/src) | The source to splice: parenthesized unless it is a single term, so `${a} * 2` keeps `a` whole. |
| [`kind`](/docs/reference/macro/Expr/kind) |  |
| [`is_literal`](/docs/reference/macro/Expr/is_literal) |  |
| [`is_ident`](/docs/reference/macro/Expr/is_ident) |  |
| [`int`](/docs/reference/macro/Expr/int) | The argument's value when it is an integer constant: `3`, `-2`, `2 * 21`. |
| [`float`](/docs/reference/macro/Expr/float) | The value of a float constant (`2.5`, `-1.0e3`), or of an integer one. |
| [`bool`](/docs/reference/macro/Expr/bool) | The value of a `true` / `false` constant. |
| [`string`](/docs/reference/macro/Expr/string) | The value of a string constant, escapes decoded: for `"a\"b"`, `a"b`. |

## See also

- [`macro::ident`](/docs/reference/macro/fn.ident)
- [`path`](/docs/reference/path)
- [`Expr::int`](/docs/reference/macro/Expr/int)
- [`Expr::float`](/docs/reference/macro/Expr/float)
- [`Expr::bool`](/docs/reference/macro/Expr/bool)
- [`Expr::string`](/docs/reference/macro/Expr/string)
- [`Code`](/docs/reference/macro/Code): Generated coil source: declarations, an expression, statements or a type.
- [`Ident`](/docs/reference/macro/Ident): A name as written in source.
