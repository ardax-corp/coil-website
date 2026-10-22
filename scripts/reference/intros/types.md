---
title: "Primitive types"
description: "int, float, bool, byte, string and unit: the built-in value types."
---
The primitive types are always in scope. Arithmetic on `int` is checked:
overflow, division by zero and out-of-range shifts panic in every build.
`float` follows IEEE-754 and never panics. `byte` arithmetic wraps modulo 256
(the compiler warns, `E0130`). Convert between them with `as`; see
[Casts](/docs/language/casts).

Compound types (tuples, arrays, records, classes, enums, function types) are
described in the [type system](/docs/language/types) page.
