---
slug: "prelude/Option"
title: "Option"
description: "An optional value: either Some(value) or None."
module: "prelude"
kind: "enum"
name: "Option"
signature: "enum Option<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/de4bf4dc9af36e25e72142d3d0ccd454fb0021a4/compiler/src/builtin_docs/prelude.hy#L39"
order: 0
---

An optional value: either `Some(value)` or [`None`](/docs/reference/prelude/Option#variant-none).

`Option` is auto-imported into every file. Construct it with
`Option::Some(x)` and [`Option::None`](/docs/reference/prelude/Option#variant-none); bare [`Some`](/docs/reference/prelude/Option#variant-some) / [`None`](/docs/reference/prelude/Option#variant-none) also work while
no other enum in scope has a case with the same name.

Take it apart with `match`, the coalesce operator `??` (use a default when
the value is [`None`](/docs/reference/prelude/Option#variant-none)), the try operator `?` (return [`None`](/docs/reference/prelude/Option#variant-none) early from a
function that itself returns an `Option`) or optional access `a?.field`.
[`Vec::pop`](/docs/reference/prelude/Vec/pop) and [`Vec::remove`](/docs/reference/prelude/Vec/remove) return `Option`.

## Variants

### `None` {#variant-none}

No value.

### `Some(T)` {#variant-some}

Some value of type `T`.

## Methods

| Name | Description |
|------|-------------|
| [`is_some`](/docs/reference/prelude/Option/is_some) | True when this is [`Some`](/docs/reference/prelude/Option#variant-some). |
| [`is_none`](/docs/reference/prelude/Option/is_none) | True when this is [`None`](/docs/reference/prelude/Option#variant-none). |
| [`unwrap_or`](/docs/reference/prelude/Option/unwrap_or) | The value, or `fallback` when [`None`](/docs/reference/prelude/Option#variant-none). |
| [`unwrap_or_else`](/docs/reference/prelude/Option/unwrap_or_else) | The value, or the result of `f` when [`None`](/docs/reference/prelude/Option#variant-none). |
| [`map`](/docs/reference/prelude/Option/map) | `Some(f(value))`, or [`None`](/docs/reference/prelude/Option#variant-none). |
| [`map_or`](/docs/reference/prelude/Option/map_or) | `f(value)`, or `fallback` when [`None`](/docs/reference/prelude/Option#variant-none). |
| [`and_then`](/docs/reference/prelude/Option/and_then) | `f(value)` (itself an `Option`), or [`None`](/docs/reference/prelude/Option#variant-none). |
| [`or`](/docs/reference/prelude/Option/or) | This option if it is [`Some`](/docs/reference/prelude/Option#variant-some), otherwise `other`. |
| [`or_else`](/docs/reference/prelude/Option/or_else) | This option if it is [`Some`](/docs/reference/prelude/Option#variant-some), otherwise the result of `f`. |
| [`filter`](/docs/reference/prelude/Option/filter) | This option if its value passes `pred`, otherwise [`None`](/docs/reference/prelude/Option#variant-none). |
| [`ok_or`](/docs/reference/prelude/Option/ok_or) | `Ok(value)`, or `Err(err)` when [`None`](/docs/reference/prelude/Option#variant-none). |

## Trait implementations

- `Hash` for `Option<T: Hash>`
- `Arbitrary` for `Option<T: Arbitrary>`

## Examples

```coil
use tests::assert;
fn find(Vec<int> xs, int wanted) -> Option<int> {
    let i = 0;
    while i < xs.len() {
        if xs[i] == wanted {
            return Option::Some(i);
        }
        i = i + 1;
    }
    return Option::None;
}

fn main() {
    let xs: Vec<int> = [4, 8, 15];
    let at = match find(xs, 8) {
        Option::Some(i) => i,
        Option::None => -1,
    };
    assert!(at == 1);
    assert!((find(xs, 99) ?? -1) == -1);
}
```

## See also

- [`Vec::pop`](/docs/reference/prelude/Vec/pop)
- [`Vec::remove`](/docs/reference/prelude/Vec/remove)
- [`Result`](/docs/reference/prelude/Result): The outcome of an operation that can fail: `Ok(value)` or `Err(error)`.
