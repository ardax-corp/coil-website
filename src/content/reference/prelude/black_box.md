---
slug: "prelude/black_box"
title: "black_box"
description: "Returns x unchanged, through a call the optimizer cannot see into."
module: "prelude"
kind: "fn"
name: "black_box"
signature: "fn black_box<T>(T x) -> T"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/8d0a3c16e6cbbb1b1f3fe264f1cb8be4f8bb9019/compiler/src/builtin_docs/prelude.hy#L491"
order: 9
---

Returns `x` unchanged, through a call the optimizer cannot see into.

Use it in benchmarks: at `-O2` and above a pure function called with
constant arguments is computed while compiling, so `fib(30)` would time
nothing. `fib(black_box(30))` runs the call. A function that calls
`black_box` counts as reading host state, so it is never computed at
compile time, hoisted out of a loop or run in parallel automatically.
It takes a value of one word: not a tuple or a two-word [`Result`](/docs/reference/prelude/Result).

## Parameters

| Name | Type |
|------|------|
| `x` | `T` |

## Returns

`T`

## Examples

```coil
use tests::assert;
fn sq(int x) -> int {
    return x * x;
}

fn main() {
    assert!(sq(black_box(7)) == 49);
    assert!(black_box("same") == "same");
}
```

## See also

- [`Result`](/docs/reference/prelude/Result)
- [`ord`](/docs/reference/prelude/ord): Returns the code of the single character in `s` as a `byte`.
- [`char`](/docs/reference/prelude/char): Returns the one-character string whose code point is `b`.
