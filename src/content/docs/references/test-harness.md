---
title: "`test(\"…\") { … }` (harness cases)"
description: "Top-level declaration used by coil test. The name must be a string literal. The body is typechecked in Result mode (Result<(), string>), so assert!(...) and raise work as in a…"
---

# `test("…") { … }` (harness cases)

Top-level declaration used by `coil test`. The name must be a **string literal**. The body is typechecked in Result mode (`Result<(), string>`), so `assert!(...)` (from `use tests::assert;`) and `raise` work as in a result-mode function.

```coil
use tests::assert;

test("addition works") {
    assert!(1 + 1 == 2);
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

(A case that reaches `open` needs `coil test --allow-read`, like any program; see [Permissions](/docs/references/permissions).) This applies only to the test body itself. Helper functions and lambdas keep their own declared `Result` / `Option` types. A user type without `#[derive(Show)]` or an `impl Show` shows as its type name, so derive `Show` to get the variant in the message.

Do **not** also define `fn main` in a file that uses `test(...)` cases — the compiler injects a virtual `main` for standalone runs. The `coil test` CLI runs each case in an isolated VM (so a `panic` in one case does not skip later cases) and prints `> Test " " failed` on failure. Pass `--fail-fast` to stop after the first failed case. The code examples in `///` docs also run; see [Doc-tests](#doc-tests).

`#[test]` on `fn` is a type error. Tests are the statement form only.

**Production compiles** (`compile`, default `cargo run`) strip harness declarations unless you pass `--include-tests`. The `coil test` command always compiles them.

## Doc-tests

`coil test` also runs the code examples in `///` doc comments, the way `cargo test` runs Rust doc-tests, so examples in docs cannot rot. Each example is its own program, compiled with the run's `--root` directories, permissions and `-O`, and is reported in the same run as the `test` cases:

```text
ok   tests/strings.hy
doc-tests of 1 project file
> Test "doc: mathx::double (src/mathx.hy:12)" failed
FAILED src/mathx.hy
```

The name is `doc:`, the item's module path (the file's path under its `--root`, `src` or the test root) and the file and line of the example. Under `--json` the examples are cases of their file's `file` event.

````coil
/// Twice `x`.
///
/// # Examples
///
/// ```
/// # use tests::assert;
/// use mathx::double;
///
/// assert!(double(3) == 6);
/// ```
fn double(int x) -> int {
    return x * 2;
}
````

- A fence opened with ```` ``` ```` or ```` ```coil ```` is an example. ```` ```text ```` (or any other language) is not run.
- Tags after the fence, comma-separated: ```` ```ignore ```` is not compiled, ```` ```no_run ```` is compiled but not run, ```` ```should_panic ```` passes only when the example panics.
- Lines starting with `# ` (or a lone `#`) are hidden on hover in the editor but are part of the example, for setup such as `# use tests::assert;`.
- `use` lines move to the top; an example without its own `fn main` is wrapped in `fn main() { … }`.
- An example passes when it compiles and runs without a panic. An `Err` that reaches the end of `main` panics, so a failed `assert!` or an uncaught `raise` fails it.
- The wrapping `main` takes its error type from the example, so one example cannot use `?` on, say, an `IoError` and also `assert!` (which raises a `string`). `match` on the `Result` instead, or write the example's own `fn main`.
- An example does not see the file's items by itself: `use` them by their module path, as any program would.
- An example that ends the process (`env::exit`) must be `no_run`: examples run inside the test process.

**Which docs run:** the docs of every function, method, class, field, enum, variant, trait, type alias and macro in the test files, and in the project's own sources that the tests import (files under the current directory, outside the test directory and `.deps/`). Dependencies are not doc-tested.

| Flag | Effect |
|------|--------|
| `--no-doc-tests` | do not run doc examples |
| `--doc-tests-only [PATH]` | only the examples of every `.hy` file under PATH; the files are read, not compiled (for example `coil test --doc-tests-only src`, or a dependency's sources) |

---

## Related

- [assert](/docs/references/assert)
- [Getting Started](/docs/manual/getting-started)
