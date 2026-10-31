---
slug: "prelude/index"
title: "prelude"
description: "Option, Result, Vec, ranges and iteration: in scope in every file."
module: "prelude"
kind: "module"
name: "prelude"
origin: "builtin"
auto: true
order: 0
---

The prelude is imported into every file for you, so nothing here needs a
`use`. It holds the types almost every program touches: [`Option`](/docs/reference/prelude/Option) and [`Result`](/docs/reference/prelude/Result)
for values that may be missing or may have failed, [`Vec`](/docs/reference/prelude/Vec) for growable lists,
the [`Range`](/docs/reference/prelude/Range) types behind `a..b`, and the [`Iterator`](/docs/reference/prelude/Iterator) traits that `for x in`
loops are built on.

Operator traits live in [`prelude::ops`](/docs/reference/prelude/ops) and
small linear algebra ([`dot`](/docs/reference/prelude/math/dot), [`cross`](/docs/reference/prelude/math/cross), [`matmul`](/docs/reference/prelude/math/matmul), [`Matrix`](/docs/reference/prelude/math/Matrix)) in
[`prelude::math`](/docs/reference/prelude/math); both are auto-imported too.
Float functions such as `sin` and `sqrt` are the standard library's
[`math`](/packages/stdlib/reference/math) module, imported with `use`. The primitive types ([`int`](/docs/reference/types/int), [`string`](/docs/reference/types/string), …) are listed under
[types](/docs/reference/types).

Built into the compiler.

## Modules

| Module | Description |
|--------|-------------|
| [`prelude::ops`](/docs/reference/prelude/ops) | Operator traits (Add, Eq, Ord, Show, …): implement them to use operators on your types. |
| [`prelude::math`](/docs/reference/prelude/math) | Small linear algebra (dot, cross, matmul, Matrix) on fixed-size float arrays. Auto-imported. |

## Types

| Name | Description |
|------|-------------|
| [`Option`](/docs/reference/prelude/Option) | An optional value: either `Some(value)` or `None`. |
| [`Result`](/docs/reference/prelude/Result) | The outcome of an operation that can fail: `Ok(value)` or `Err(error)`. |
| [`Vec`](/docs/reference/prelude/Vec) | A growable, heap-allocated vector of `T` values. |
| [`Range`](/docs/reference/prelude/Range) | A lazy half-open range `start..end`: every value from `start` up to, but not including, `end`. |
| [`RangeInclusive`](/docs/reference/prelude/RangeInclusive) | A lazy inclusive range `start..=end`: every value from `start` up to and including `end`. |

## Traits

| Name | Description |
|------|-------------|
| [`Iterator`](/docs/reference/prelude/Iterator) | A source of values that `for` loops pull from one at a time. |
| [`IntoIterator`](/docs/reference/prelude/IntoIterator) | A type that can be turned into an [`Iterator`](/docs/reference/prelude/Iterator), which makes it usable in `for x in value`. |

## Functions

| Name | Description |
|------|-------------|
| [`ord`](/docs/reference/prelude/ord) | Returns the code of the single character in `s` as a [`byte`](/docs/reference/types/byte). |
| [`char`](/docs/reference/prelude/char) | Returns the one-character string whose code point is `b`. |
| [`black_box`](/docs/reference/prelude/black_box) | Returns `x` unchanged, through a call the optimizer cannot see into. |
