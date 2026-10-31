---
description: "assert! and the other macros used in tests and examples."
---
Tests are `test("name") { … }` blocks run by `coil test`; see [Tests](/docs/language/test-harness). `assert!` raises an error rather than panicking, so it works in any function that returns a `Result`.
