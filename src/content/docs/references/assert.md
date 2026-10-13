---
title: "`assert!` (`tests`)"
description: "Macro from the coil-stdlib tests module. A false condition raises an Err from the enclosing function."
---

# `assert!` (`tests`)

A macro from the [coil-stdlib](https://github.com/ardax-corp/coil-stdlib) `tests` module. Import it with `use tests::assert;`. When the condition is false it **raises** (a catchable `Err` + return from the enclosing function); it does not abort.

### Forms

| Form | On failure |
|------|------------|
| `assert!(cond)` | `raise "Assertion: '<cond source>' failed"` |
| `assert!(cond, msg)` | `raise msg` |

`cond` must be `bool`; `msg` must be `string`. Use it in a `test("…")` body or any result-mode function:

```coil
use tests::assert;

fn must_be_pos(int n) -> Result<int, string> {
    assert!(n > 0, "expected positive");
    return Result::Ok(n);
}

test("positive") {
    assert!(must_be_pos(3)? == 3);
}
```

`assert!` is a statement macro, not a value: wrap it in a function (as above) when you need the `Result`.

Earlier releases had a compiler builtin `assert(cond)?` auto-imported from `prelude::test`. It has been removed; `assert(...)` now reports `E0101 Cannot find function`.

See `examples/assert.hy`.

---

## Related

- [test harness](/docs/references/test-harness)
- [macros](/docs/references/macros)
- [panic](/docs/references/panic)
