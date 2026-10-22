---
slug: "tests/index"
title: "tests"
description: "assert! and the other macros used in tests and examples."
module: "tests"
kind: "module"
name: "tests"
origin: "stdlib"
auto: false
order: 35
---

Tests are `test("name") { … }` blocks run by `coil test`; see [Tests](/docs/language/test-harness). [`assert!`](/docs/reference/tests/assert) raises an error rather than panicking, so it works in any function that returns a [`Result`](/docs/reference/prelude/Result).

Part of [coil-stdlib](/packages/stdlib): add it with `spool add coil-stdlib` or pass `--root path/to/coil-stdlib/src`.

Import what you use (`use path::*` is not allowed):

```coil
use tests::{not, eq};
```

## Macros

| Name | Description |
|------|-------------|
| [`not!`](/docs/reference/tests/not) | Expands to `!expression`. |
| [`eq!`](/docs/reference/tests/eq) | Expands to `lhs == rhs`. |
| [`matches!`](/docs/reference/tests/matches) | Returns whether `expr` matches the pattern `ty`, as a [`bool`](/docs/reference/types/bool). |
| [`type!`](/docs/reference/tests/type) | Expands to `typeof ty`: the type of an expression, as a value that can be compared. |
| [`and!`](/docs/reference/tests/and) | Expands to `lhs && rhs`. |
| [`assert!`](/docs/reference/tests/assert) | Fails the enclosing function with an error when `condition` is false. |
