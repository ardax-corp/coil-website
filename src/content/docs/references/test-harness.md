---
title: "`test(\"…\") { … }` (harness cases)"
description: "Top-level declaration used by coil test. The name must be a string literal. The body is typechecked in Result mode (Result<(), string>), so assert(...)? and raise work as in a…"
---

# `test("…") { … }` (harness cases)

Top-level declaration used by `coil test`. The name must be a **string literal**. The body is typechecked in Result mode (`Result<(), string>`), so `assert(...)?` and `raise` work as in a result-mode function.

```coil
test("addition works") {
    assert(1 + 1 == 2)?;
}
```

`?` in a test body also accepts any `Result` whose error type has `Show` (for example `IoError`, or your own `#[derive(Show)]` enum), and `Option`. A failed `?` fails the case with the shown error, such as `` `?` got Err(NotFound) `` or `` `?` got None ``. Inside the case there's no need to `match` on an error just to turn it into a string:

```coil
use io::{open, close};

test("reads the config") {
    let f = open("config.toml", "r")?;
    close(f)?;
}
```

This applies only to the test body itself. Helper functions and lambdas keep their own declared `Result` / `Option` types. A user type without `#[derive(Show)]` or an `impl Show` shows as its type name, so derive `Show` to get the variant in the message.

Do **not** also define `fn main` in a file that uses `test(...)` cases — the compiler injects a virtual `main` for standalone runs. The `coil test` CLI runs each case in an isolated VM (so a `panic` in one case does not skip later cases) and prints `> Test " " failed` on failure. Pass `--fail-fast` to stop after the first failed case.

`#[test]` on `fn` is a type error. Tests are the statement form only.

**Production compiles** (`compile`, default `cargo run`) strip harness declarations unless you pass `--include-tests`. The `coil test` command always compiles them.

---

## Related

- [assert](/docs/references/assert)
- [Getting Started](/docs/manual/getting-started)
