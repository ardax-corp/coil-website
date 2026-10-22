---
slug: "prelude/math/index"
title: "prelude::math"
description: "Float math (sqrt, sin, ln, …) and small linear algebra (dot, cross, matmul, Matrix). Auto-imported."
module: "prelude::math"
kind: "module"
name: "prelude::math"
origin: "builtin"
auto: true
order: 2
---

Scalar functions take and return [`float`](/docs/reference/types/float) and follow IEEE-754: an invalid input
gives NaN and an overflow gives infinity, never a panic. Powers and remainders
are the `**` and `%` operators, not functions.

The linear-algebra helpers work on fixed-size arrays (`[float; 3]`,
`[[float; 2]; 2]`) and check shapes at compile time.

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
| [`sin`](/docs/reference/prelude/math/sin) | Returns the sine of `x` (in radians). |
| [`cos`](/docs/reference/prelude/math/cos) | Returns the cosine of `x` (in radians). |
| [`tan`](/docs/reference/prelude/math/tan) | Returns the tangent of `x` (in radians). |
| [`sqrt`](/docs/reference/prelude/math/sqrt) | Returns the square root of `x`. |
| [`floor`](/docs/reference/prelude/math/floor) | Returns the largest whole number less than or equal to `x`, as a [`float`](/docs/reference/types/float). |
| [`ceil`](/docs/reference/prelude/math/ceil) | Returns the smallest whole number greater than or equal to `x`, as a [`float`](/docs/reference/types/float). |
| [`exp`](/docs/reference/prelude/math/exp) | Returns `e` raised to the power `x`. |
| [`ln`](/docs/reference/prelude/math/ln) | Returns the natural logarithm of `x`. |
| [`atan`](/docs/reference/prelude/math/atan) | Returns the arctangent of `x`, in radians in `-pi/2..=pi/2`. |
| [`atan2`](/docs/reference/prelude/math/atan2) | Returns the angle of the point `(x, y)` from the positive x axis, in radians in `-pi..=pi`. |
| [`asin`](/docs/reference/prelude/math/asin) | Returns the arcsine of `x`, in radians in `-pi/2..=pi/2`. |
| [`acos`](/docs/reference/prelude/math/acos) | Returns the arccosine of `x`, in radians in `0..=pi`. |
| [`log10`](/docs/reference/prelude/math/log10) | Returns the base-10 logarithm of `x`. |
| [`log2`](/docs/reference/prelude/math/log2) | Returns the base-2 logarithm of `x`. |
| [`cbrt`](/docs/reference/prelude/math/cbrt) | Returns the cube root of `x`. |
| [`sinh`](/docs/reference/prelude/math/sinh) | Returns the hyperbolic sine of `x`. |
| [`cosh`](/docs/reference/prelude/math/cosh) | Returns the hyperbolic cosine of `x`. |
| [`tanh`](/docs/reference/prelude/math/tanh) | Returns the hyperbolic tangent of `x`. |
| [`dot`](/docs/reference/prelude/math/dot) | Returns the dot product of two vectors of the same length. |
| [`cross`](/docs/reference/prelude/math/cross) | Returns the cross product of two 3-element vectors. |
| [`matmul`](/docs/reference/prelude/math/matmul) | Multiplies two matrices written as nested fixed-length arrays. |
| [`matrix`](/docs/reference/prelude/math/matrix) | Wraps nested fixed-length rows as a [`Matrix`](/docs/reference/prelude/math/Matrix). |
| [`intersect`](/docs/reference/prelude/math/intersect) | Returns a [`byte`](/docs/reference/types/byte) mask that is `1` where both matrices have a non-zero cell. |
| [`diff`](/docs/reference/prelude/math/diff) | Returns a [`byte`](/docs/reference/types/byte) mask that is `1` where `a` has a non-zero cell and `b` has `0`. |
