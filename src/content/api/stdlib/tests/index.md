---
slug: "stdlib/tests/index"
package: "stdlib"
title: "tests"
description: "assert! and the other macros used in tests and examples."
module: "tests"
kind: "module"
name: "tests"
origin: "stdlib"
auto: false
order: 24
---

Tests are `test("name") { … }` blocks run by `coil test`; see [Tests](/docs/language/test-harness). [`assert!`](/packages/stdlib/reference/tests/assert) raises an error rather than panicking, so it works in any function that returns a [`Result`](/docs/reference/prelude/Result).

Part of [coil-stdlib](/packages/stdlib), not the compiler. spool projects declare it as their `stdlib` dependency (`spool new` adds it); with plain `coil`, pass `--root` with the `src` of a coil-stdlib checkout.

Import what you use (`use path::*` is not allowed):

```coil
use tests::{not, eq};
```

## Macros

| Name | Description |
|------|-------------|
| [`not!`](/packages/stdlib/reference/tests/not) | Expands to `!expression`. |
| [`eq!`](/packages/stdlib/reference/tests/eq) | Expands to `lhs == rhs`. |
| [`matches!`](/packages/stdlib/reference/tests/matches) | Returns whether `expr` matches the pattern `ty`, as a [`bool`](/docs/reference/types/bool). |
| [`type!`](/packages/stdlib/reference/tests/type) | Expands to `typeof ty`: the type of an expression, as a value that can be compared. |
| [`and!`](/packages/stdlib/reference/tests/and) | Expands to `lhs && rhs`. |
| [`assert!`](/packages/stdlib/reference/tests/assert) | Fails the enclosing function with an error when `condition` is false. |
