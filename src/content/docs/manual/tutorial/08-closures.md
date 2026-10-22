---
title: Chapter 8 — Functions as values
description: "Passing functions to functions, lambdas with fn (…) =>, capturing variables with use (…), returning functions, and partial application."
---

# Chapter 8 — Functions as values

Functions are values in Coil. You can store them in variables, pass them to
other functions and return them. This chapter shows how, and how inline
functions (lambdas) capture the variables around them.

## Passing a function

A function type is written `int -> int` ("takes an `int`, returns an
`int`"), or `fn(int) -> int`. Any function with a matching signature can be
passed by name:

```coil
use io::sync::{println};

fn apply_twice(int -> int f, int x) -> int {
    return f(f(x));
}

fn increment(int x) -> int {
    return x + 1;
}

fn main() {
    println(show(apply_twice(increment, 5)))?;
}
```

Output:

```text
7
```

A function that takes two `int`s and returns an `int` is `int -> int -> int`,
or `fn(int, int) -> int`. One that takes nothing is `fn() -> int`.

## Lambdas

A lambda is a function written inline, without a name. With `=>` its body
is one expression; with braces it is a block with `return`:

```coil
use io::sync::{println};
use collections::vec::{map, filter};

fn main() {
    let prices: Vec<int> = [120, 45, 300, 80];
    let cheap = filter(prices, fn (int p) => p < 100);
    let with_tax = map(prices, fn (int p) {
        let tax = p / 5;
        return p + tax;
    });
    println(show(cheap.len()))?;
    println(show(with_tax[0]))?;
}
```

Output:

```text
2
144
```

Lambdas are most often passed straight to functions like `map`, `filter`
and [`sort_by`](/docs/reference/collections/sort_by).

## Capturing variables

A lambda does not see the variables around it unless it asks for them with
`use (…)`. The listed values are copied into the lambda when it is created:

```coil
use io::sync::{println};
use collections::vec::{filter};

fn main() {
    let limit = 50;
    let scores: Vec<int> = [20, 75, 40, 90];
    let low = filter(scores, fn (int s) use (limit) => s < limit);
    println(show(low.len()))?;
}
```

Output:

```text
2
```

Leaving out `use (limit)` is a compile error that tells you what to add.
Listing captures makes it obvious what a lambda depends on.

Because captures are copies, assigning to a captured `int` inside the lambda
does not change the variable outside. To share a value the lambda can
update, put it in an object. The stdlib's [`cell::Ref`](/docs/reference/cell/Ref)
is a one-field box for exactly that:

```coil
use io::sync::{println};
use cell::{Ref};

fn main() {
    let clicks = Ref::new(0);
    let on_click = fn () use (clicks) {
        clicks.set(clicks.get() + 1);
    };
    on_click();
    on_click();
    println(show(clicks.get()))?;
}
```

Output:

```text
2
```

Objects are shared, not copied (chapter 4), so the lambda and `main` see the
same `Ref`.

## Returning functions

A function can build and return another function. Each returned lambda keeps
its own captured values:

```coil
use io::sync::{println};
use string::{format};

fn make_multiplier(int factor) -> int -> int {
    return fn (int x) use (factor) => x * factor;
}

fn main() {
    let double = make_multiplier(2);
    let triple = make_multiplier(3);
    println(format("%i %i", double(10), triple(10)))?;
}
```

Output:

```text
20 30
```

## Partial application

Calling a function with fewer arguments than it takes does not run it.
Instead it returns a function that waits for the rest:

```coil
use io::sync::{println};
use string::{format};

fn clamp(int lo, int hi, int x) -> int {
    if x < lo {
        return lo;
    }
    if x > hi {
        return hi;
    }
    return x;
}

fn main() {
    let percent = clamp(0, 100);       // int -> int
    println(format("%i %i", percent(150), percent(42)))?;
}
```

Output:

```text
100 42
```

This is handy with `map`: `map(readings, clamp(0, 100))`. It is why
parameters that change least often usually come first.

## Exercises

1. Write `fn count_if(Vec<int> xs, int -> bool pred) -> int`.
2. Use `sort_by` to sort a list of words by their last letter.
3. Write `make_counter()` that returns a `fn() -> int` which returns 1, 2,
   3, … on successive calls.

Next: [Chapter 9 — Modules and packages](/docs/manual/tutorial/09-modules).
