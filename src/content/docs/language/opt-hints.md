---
title: "Optimizer hints: `#[inline]`, `#[cold]`, `#[hot]`"
description: "Function attributes that tell the optimizer what it cannot see: which functions to inline, which code is rare and which is on a hot path. They change speed only, never behaviour."
---

# Optimizer hints

The compiler decides on its own what to inline, which functions get a
per-type clone and how to lay out branches. A few function attributes
steer those decisions where it cannot tell by itself. A hint changes only
speed: a program returns the same results with or without it.

```coil
use io::sync::println;

#[inline]
fn sq(int x) -> int {
    return x * x;
}

#[cold]
fn bad_input(int x) -> int {
    panic "negative input: " + x.show();
}

#[hot]
fn sum_squares(Vec<int> xs) -> int {
    let total = 0;
    for x in xs {
        if x < 0 {
            return bad_input(x);
        }
        total = total + sq(x);
    }
    return total;
}

fn main() {
    let _ = println(sum_squares([1, 2, 3]).show());
}
```

```text
14
```

The compiler never measures a run to pick these. It infers cold code where
the program makes it plain (see [Inferred cold code](#inferred-cold-code)),
and it never infers hot code.

## The attributes

Hints go on a function or a method: an inherent method, a trait impl's
method or a trait's default method.

| Attribute | Meaning | What the compiler does |
|-----------|---------|------------------------|
| `#[inline]` | Inline this function where it is worth it | Inlines it under a raised cost limit (see [Limits](#limits)). Best effort: a call that still does not fit stays a call, and nothing is reported |
| `#[inline(always)]` | Inline this function wherever it is called directly | No cost limit, loops included. Only what cannot be inlined stays a call (recursion, generators and tasks, calls through a function value), with an **E0807** warning saying why |
| `#[inline(never)]` | Keep calls to this function | Never inlined, even from a hot function. Calls stay where they are. Useful for code size, stack traces and benchmarks |
| `#[cold]` | Calls to this function are rare | Never inlined. A branch that calls it is laid out after the hot path, and is cut out into a separate helper when its caller is inlined (see [Partial inlining](#partial-inlining)) |
| `#[hot]` | This function is on a hot path | Gets a per-type clone even past `--clone-budget`, and inlines under the highest cost limit. Calls inside it use a raised limit, and its direct callees and the other methods of its class count as hot too |

Some combinations contradict each other and are **E0806**
(`ConflictingOptHints`): `#[cold]` with `#[inline]`, `#[inline(always)]` or
`#[hot]`, and `#[inline(never)]` with any of those three. `#[cold]` with
`#[inline(never)]` is allowed. A hint on a class or an enum, or one with
another argument, is **E0119**.

```coil fail
#[cold]
#[hot]
fn confused(int x) -> int {
    return x;
}

fn main() {
    let _ = confused(1);
}
```

### Which hint wins

From the strongest:

1. A hint on the function itself, in this order: `#[inline(never)]`,
   `#[cold]`, `#[inline(always)]`, `#[hot]`, `#[inline]`. A `#[cold]`
   function stays cold when a hot function calls it.
2. Hot inherited from a hot caller (direct callees only) or from a hot
   method of the same class.
3. What the compiler infers.

Inherited hot beats inferred cold, except on a function that never
returns: specializing code that only panics gains nothing.

## Limits

Each optimization level has an inline cost limit. A function is inlined
when its body is under it. Hints raise the limit as a multiple of the
level's own, and the multiples grow with the level:

| Level | Base limit | Hot by spreading | `#[inline]` | `#[hot]` |
|-------|------------|------------------|-------------|----------|
| `-O1` | 25 | 2x (50) | 3x (75) | 5x (125) |
| `-O2` (default) | 100 | 2x (200) | 3x (300) | 5x (500) |
| `-O3` | 200 | 4x (800) | 5x (1000) | 10x (2000) |
| `-Os` | 40 | 1x (40) | 2x (80) | 3x (120) |

"Hot by spreading" is a callee of a `#[hot]` function or a method of a
`#[hot]` method's class, and also the limit for calls inside a hot function.
Calls into another module use a separate limit, 100 at `-O2` and `-Os` and
200 at `-O3`, raised by the same multiples. `-O0` and `-Og` inline nothing,
so there only `#[inline(always)]` takes effect.

## Inferred cold code

Some code is rare in every program, so the compiler treats it as cold
without a hint:

- **Functions that never return.** A function where every path ends in
  `panic`, `exit` or a failed contract.
- **Failure arms.** An `if` or `match` arm that ends in `panic`, `raise` or
  a failed `assert`, whatever comes before it.
- **Calls to cold functions.** A branch that calls a cold function, tagged
  or inferred.

A cold branch is laid out after the rest of the function, so the common
path runs straight through. Guesses that only hold for some programs, such
as "a `Vec` rarely grows", are not inferred; tag those yourself.

## Partial inlining

A function over its cost limit is sometimes large only because of a rare
branch, such as a failure path or a call to a cold function. The compiler
then cuts that branch out into a separate `#[cold]` helper and inlines the
rest. A function holding a `panic` can be inlined this way too, which it
cannot be whole.

A branch is cut only when it is plain: no loop, closure, `defer`, `break`,
`continue` or `return`, and no writes through a value it borrows from the
caller.

## When to use them

Write the program first and measure. The defaults are tuned on real
libraries, and a hint that helps a microbenchmark often only adds code
elsewhere. The standard library carries no hints for that reason.

- `#[cold]` on error-reporting and slow-path functions is nearly always
  safe, and it keeps them out of the hot loop.
- `#[inline]` on a small function just over the limit that a hot loop calls.
- `#[hot]` on the few functions a profile shows the program lives in,
  especially generic ones, so they get their own per-type clones.
- `#[inline(always)]` and `#[inline(never)]` when you need a fixed outcome,
  for example to keep a benchmark's call in place.

`coil dissect` shows which calls stayed calls after the optimizer ran.
