---
slug: "types/index"
title: "Primitive types"
description: "int, float, bool, byte, string and unit: the built-in value types."
module: "types"
kind: "module"
name: "types"
origin: "builtin"
auto: true
order: 21
---

The primitive types are always in scope. Arithmetic on [`int`](/docs/reference/types/int) is checked:
overflow, division by zero and out-of-range shifts panic in every build.
[`float`](/docs/reference/types/float) follows IEEE-754 and never panics. [`byte`](/docs/reference/types/byte) arithmetic wraps modulo 256
(the compiler warns, `E0130`). Convert between them with `as`; see
[Casts](/docs/language/casts).

Compound types (tuples, arrays, records, classes, enums, function types) are
described in the [type system](/docs/language/types) page.

Built into the compiler.

## Types

| Name | Description |
|------|-------------|
| [`int`](/docs/reference/types/int) | A 64-bit signed integer, from `-9223372036854775808` to `9223372036854775807`. |
| [`float`](/docs/reference/types/float) | A 64-bit IEEE-754 floating-point number. |
| [`bool`](/docs/reference/types/bool) | A boolean: `true` or `false`. |
| [`byte`](/docs/reference/types/byte) | An unsigned 8-bit integer in `0..=255`. |
| [`string`](/docs/reference/types/string) | A UTF-8 text string. |
| [`unit`](/docs/reference/types/unit) | The type with a single value, `()`, used where there is no meaningful value. |
