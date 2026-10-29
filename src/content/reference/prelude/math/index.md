---
slug: "prelude/math/index"
title: "prelude::math"
description: "Small linear algebra (dot, cross, matmul, Matrix) on fixed-size float arrays. Auto-imported."
module: "prelude::math"
kind: "module"
name: "prelude::math"
origin: "builtin"
auto: true
order: 2
---

The linear-algebra helpers work on fixed-size arrays (`[float; 3]`,
`[[float; 2]; 2]`) and check shapes at compile time.

Scalar float functions (`sqrt`, `sin`, `ln`, …) are not here: they are the
standard library's [`math`](/docs/reference/math) module, imported with
`use math::{sqrt};`. Powers and remainders are the `**` and `%` operators.
For integer helpers (`abs`, `gcd`, `clamp`, …) and constants such as `PI`, see
the stdlib [`num`](/docs/reference/num) module; for overflow-aware integer
powers, [`arith`](/docs/reference/arith).

Built into the compiler.

## Types

| Name | Description |
|------|-------------|
| [`Matrix`](/docs/reference/prelude/math/Matrix) | A matrix: nested fixed-length numeric rows with matrix operators. |

## Functions

| Name | Description |
|------|-------------|
| [`dot`](/docs/reference/prelude/math/dot) | Returns the dot product of two vectors of the same length. |
| [`cross`](/docs/reference/prelude/math/cross) | Returns the cross product of two 3-element vectors. |
| [`matmul`](/docs/reference/prelude/math/matmul) | Multiplies two matrices written as nested fixed-length arrays. |
| [`matrix`](/docs/reference/prelude/math/fn.matrix) | Wraps nested fixed-length rows as a [`Matrix`](/docs/reference/prelude/math/Matrix). |
| [`intersect`](/docs/reference/prelude/math/intersect) | Returns a [`byte`](/docs/reference/types/byte) mask that is `1` where both matrices have a non-zero cell. |
| [`diff`](/docs/reference/prelude/math/diff) | Returns a [`byte`](/docs/reference/types/byte) mask that is `1` where `a` has a non-zero cell and `b` has `0`. |
