---
description: "What a macro receives and returns: Code, Expr, TypeDecl, FnDecl and helpers."
---
Macros are Coil functions that run at compile time and return code. A derive
receives a `TypeDecl`, an attribute macro an `FnDecl` or `TypeDecl`, and a
function-style macro (`name!(…)`) its arguments as `Expr`. Each returns
`Code`, usually built with a `quote` block. See [Macros](/docs/language/macros)
and the [macros tutorial](/docs/manual/tutorial/15-macros).
