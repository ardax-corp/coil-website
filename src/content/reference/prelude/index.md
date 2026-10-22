---
slug: "prelude/index"
title: "prelude"
description: "The prelude module."
module: "prelude"
kind: "module"
name: "prelude"
origin: "builtin"
auto: true
order: 0
---

Built into the compiler.

## Modules

| Module | Description |
|--------|-------------|
| [`prelude::ops`](/docs/reference/prelude/ops) |  |
| [`prelude::math`](/docs/reference/prelude/math) |  |

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
