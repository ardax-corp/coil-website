---
slug: "prelude/math/Matrix"
title: "Matrix"
description: "A matrix: nested fixed-length numeric rows with matrix operators."
module: "prelude::math"
kind: "class"
name: "Matrix"
signature: "class Matrix<D>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/de4bf4dc9af36e25e72142d3d0ccd454fb0021a4/compiler/src/builtin_docs/prelude/math.hy#L137"
order: 0
---

A matrix: nested fixed-length numeric rows with matrix operators.

Build one with `matrix(rows)`; `D` is the nested data type, for example
`Matrix<[[int; 2]; 2]>`. Cells are read with `m[row][col]`. On `Matrix`
values:

- `*` is matrix multiplication.
- `+`, `-` and unary `-` are element-wise.
- `==`, `!=`, `<`, `<=`, `>`, `>=` compare cell by cell and return a
  `Matrix` of [`byte`](/docs/reference/types/byte) (`1` where the test holds). A scalar of the cell type
  is broadcast (`m == 1`).
- `&`, `|`, `^`, `<<`, `>>`, `~` work cell by cell on [`int`](/docs/reference/types/int) or [`byte`](/docs/reference/types/byte)
  cells, with scalar broadcast.
- `/`, `%` and `**` are rejected: `Matrix` is not [`Num`](/docs/reference/prelude/ops/Num).

## Examples

```coil
use tests::assert;
let a = matrix([[1, 2], [3, 4]]);
let b = matrix([[5, 6], [7, 8]]);
let p = a * b;
assert!(p[0][0] == 19);
let s = a + a;
assert!(s[1][1] == 8);
let ones = a == 1;
assert!(ones[0][0] == 1 as byte);
assert!(ones[0][1] == 0 as byte);
```

## See also

- [`byte`](/docs/reference/types/byte)
- [`int`](/docs/reference/types/int)
- [`Num`](/docs/reference/prelude/ops/Num)
