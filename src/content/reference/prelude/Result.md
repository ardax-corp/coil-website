---
slug: "prelude/Result"
title: "Result"
description: "The outcome of an operation that can fail: Ok(value) or Err(error)."
module: "prelude"
kind: "enum"
name: "Result"
signature: "enum Result<T, E>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/77fade5c3d914df2d977d52981e180deb6bea0e4/compiler/src/builtin_docs/prelude.hy#L82"
order: 1
---

The outcome of an operation that can fail: `Ok(value)` or `Err(error)`.

`Result` is auto-imported into every file. Construct it with
`Result::Ok(x)` and `Result::Err(e)`; bare [`Ok`](/docs/reference/prelude/Result#variant-ok) / [`Err`](/docs/reference/prelude/Result#variant-err) also work while no
other enum in scope has a case with the same name.

A function annotated `-> Result<T, E>`, or one that uses `raise` or `?` on
a `Result`, runs in result mode: a plain `return v;` is wrapped as `Ok(v)`
and `raise e;` returns `Err(e)`. `x?` unwraps [`Ok`](/docs/reference/prelude/Result#variant-ok) or returns the [`Err`](/docs/reference/prelude/Result#variant-err)
early. `x ?? default` unwraps [`Ok`](/docs/reference/prelude/Result#variant-ok) or falls back to `default`, silently
discarding the error, so prefer `match` or `?` when the failure matters.

## Variants

### `Ok(T)` {#variant-ok}

The operation succeeded with a value of type `T`.

### `Err(E)` {#variant-err}

The operation failed with an error of type `E`.

## Methods

| Name | Description |
|------|-------------|
| [`is_ok`](/docs/reference/prelude/Result/is_ok) | True when this is [`Ok`](/docs/reference/prelude/Result#variant-ok). |
| [`is_err`](/docs/reference/prelude/Result/is_err) | True when this is [`Err`](/docs/reference/prelude/Result#variant-err). |
| [`ok`](/docs/reference/prelude/Result/ok) | The [`Ok`](/docs/reference/prelude/Result#variant-ok) value as an [`Option`](/docs/reference/prelude/Option). |
| [`err`](/docs/reference/prelude/Result/err) | The [`Err`](/docs/reference/prelude/Result#variant-err) value as an [`Option`](/docs/reference/prelude/Option). |
| [`unwrap_or`](/docs/reference/prelude/Result/unwrap_or) | The [`Ok`](/docs/reference/prelude/Result#variant-ok) value, or `fallback` on [`Err`](/docs/reference/prelude/Result#variant-err). |
| [`unwrap_or_else`](/docs/reference/prelude/Result/unwrap_or_else) | The [`Ok`](/docs/reference/prelude/Result#variant-ok) value, or `f` applied to the error. |
| [`map`](/docs/reference/prelude/Result/map) | `Ok(f(value))`, or the same error. |
| [`map_err`](/docs/reference/prelude/Result/map_err) | The same value, or `Err(f(error))`. |
| [`and_then`](/docs/reference/prelude/Result/and_then) | `f(value)` (itself a `Result`), or the same error. |
| [`or_else`](/docs/reference/prelude/Result/or_else) | This result if it is [`Ok`](/docs/reference/prelude/Result#variant-ok), otherwise `f(error)`. |

## Trait implementations

- `Hash` for `Result<T: Hash, E: Hash>`

## Examples

```coil
use tests::assert;
fn half(int n) -> Result<int, string> {
    if n % 2 != 0 {
        raise "odd";
    }
    return n / 2;
}

fn main() {
    let ok = match half(10) {
        Result::Ok(v) => v,
        Result::Err(_) => 0,
    };
    assert!(ok == 5);
    let msg = match half(3) {
        Result::Ok(_) => "",
        Result::Err(e) => e,
    };
    assert!(msg == "odd");
}
```

## See also

- [`Option`](/docs/reference/prelude/Option): An optional value: either `Some(value)` or `None`.
