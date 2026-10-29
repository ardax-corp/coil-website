---
description: "Option, Result, Vec, ranges and iteration: in scope in every file."
---
The prelude is imported into every file for you, so nothing here needs a
`use`. It holds the types almost every program touches: `Option` and `Result`
for values that may be missing or may have failed, `Vec` for growable lists,
the `Range` types behind `a..b`, and the `Iterator` traits that `for x in`
loops are built on.

Operator traits live in [`prelude::ops`](/docs/reference/prelude/ops) and
small linear algebra (`dot`, `cross`, `matmul`, `Matrix`) in
[`prelude::math`](/docs/reference/prelude/math); both are auto-imported too.
Float functions such as `sin` and `sqrt` are the standard library's
[`math`](/docs/reference/math) module, imported with `use`. The primitive types (`int`, `string`, …) are listed under
[types](/docs/reference/types).
