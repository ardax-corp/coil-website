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
use collections::vec::{VecOps};

fn main() {
    let prices: Vec<int> = [120, 45, 300, 80];
    let cheap = prices.filter(fn (int p) => p < 100);
    let with_tax = prices.map(fn (int p) {
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

Lambdas are most often passed straight to methods like `map` and `filter`,
and to functions like [`sort_by`](/docs/reference/collections/sort_by).

## Capturing variables

A lambda does not see the variables around it unless it asks for them with
`use (…)`. The listed values are copied into the lambda when it is created:

```coil
use io::sync::{println};
use collections::vec::{VecOps};

fn main() {
    let limit = 50;
    let scores: Vec<int> = [20, 75, 40, 90];
    let low = scores.filter(fn (int s) use (limit) => s < limit);
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

This is handy with `map`: `readings.map(clamp(0, 100))`. It is why
parameters that change least often usually come first.

## Henry's challenges

> [!henry]
> A nautilus carries its home wherever it swims, and a lambda carries its
> captures. Pass functions around, capture with `use (…)`, and apply them
> a piece at a time.

1. Write `fn count_if(Vec<int> xs, int -> bool pred) -> int` and count
   the numbers above 4 in `[1, 5, 8, 12]`.

   ```coil challenge=c08-1
   use io::sync::{println};

   fn count_if(Vec<int> xs, int -> bool pred) -> int {
       return 0;
   }

   fn main() {
       let xs: Vec<int> = [1, 5, 8, 12];
       println(show(count_if(xs, fn (int x) => x > 4)))?;
   }
   ```

   ```coil check=c08-1
   use tests::assert;
   use solution::{count_if};

   test("three numbers in [1, 5, 8, 12] are above 4") {
       assert!(count_if([1, 5, 8, 12], fn (int x) => x > 4) == 3);
   }

   test("the predicate decides: even numbers") {
       assert!(count_if([1, 2, 3, 4, 6], fn (int x) => x % 2 == 0) == 3);
   }

   test("an empty vector counts 0") {
       let none: Vec<int> = [];
       assert!(count_if(none, fn (int x) => true) == 0);
   }
   ```

2. Use [`sort_by`](/docs/reference/collections/sort_by) to sort a list of
   words from shortest to longest.

   > [!hint]
   > `sort_by` takes a *key* function rather than a comparison: give it
   > `fn (string w) => w.len()` and it sorts by that key.

   ```coil challenge=c08-2
   use io::sync::{println};
   use string::{format};
   use collections::{sort_by};

   fn shortest_first(Vec<string> words) -> Vec<string> {
       return words;
   }

   fn main() {
       let words: Vec<string> = ["banana", "fig", "apple", "kiwi"];
       println(format("%v", shortest_first(words)))?;
   }
   ```

   ```coil check=c08-2
   use tests::assert;
   use solution::{shortest_first};

   test("words come out from shortest to longest") {
       let sorted = shortest_first(["banana", "fig", "kiwi"]);
       assert!(show(sorted) == show(["fig", "kiwi", "banana"]), "got " + show(sorted));
   }

   test("the lengths never go down") {
       let sorted = shortest_first(["ccc", "a", "dddd", "bb"]);
       for i in 1..sorted.len() {
           assert!(sorted[i - 1].len() <= sorted[i].len(), "got " + show(sorted));
       }
   }
   ```

3. Write `make_counter()` that returns a `fn() -> int` which returns 1, 2,
   3, … on successive calls.

   > [!hint]
   > Capture a plain `int` and every call starts again from the copy taken
   > when the lambda was made, so it returns `1, 1, 1`. The value has to
   > live in something shared: a `Ref`.

   ```coil challenge=c08-3
   use io::sync::{println};
   use string::{format};
   use cell::{Ref};

   fn make_counter() -> fn() -> int {
       let n = 0;
       return fn () use (n) {
           n++;
           return n;
       };
   }

   fn main() {
       let next = make_counter();
       let a = next();
       let b = next();
       let c = next();
       println(format("%i %i %i", a, b, c))?;
   }
   ```

   ```coil check=c08-3
   use tests::assert;
   use solution::{make_counter};

   test("successive calls return 1, 2, 3") {
       let next = make_counter();
       let a = next();
       let b = next();
       let c = next();
       assert!(a == 1 && b == 2 && c == 3, "got " + show((a, b, c)));
   }

   test("two counters count on their own") {
       let one = make_counter();
       let two = make_counter();
       let _ = one();
       let _ = one();
       assert!(two() == 1);
       assert!(one() == 3);
   }
   ```

4. Check something: predict what this prints, then run it.

   ```coil challenge=c08-4
   use io::sync::{println};

   fn main() {
       let limit = 50;
       let below = fn (int s) use (limit) => s < limit;
       limit = 10;
       println(show(below(30)))?;
   }
   ```

5. Write `fn compose(int -> int f, int -> int g) -> int -> int` that
   returns a function running `f` and then `g`. What is
   `compose(inc, double)(5)`?

   > [!hint]
   > The returned lambda calls `f` and `g`, so it has to capture both:
   > `use (f, g)`.

   ```coil challenge=c08-5
   use io::sync::{println};

   fn compose(int -> int f, int -> int g) -> int -> int {
       return f;
   }

   fn main() {
       let inc = fn (int x) => x + 1;
       let double = fn (int x) => x * 2;
       println(show(compose(inc, double)(5)))?;
   }
   ```

   ```coil check=c08-5
   use tests::assert;
   use solution::{compose};

   test("compose(inc, double)(5) is 12") {
       let inc = fn (int x) => x + 1;
       let double = fn (int x) => x * 2;
       assert!(compose(inc, double)(5) == 12);
   }

   test("f runs first: compose(double, inc)(5) is 11") {
       let inc = fn (int x) => x + 1;
       let double = fn (int x) => x * 2;
       assert!(compose(double, inc)(5) == 11);
   }
   ```

6. Write `fn between(int lo, int hi, int x) -> bool` and use partial
   application to `filter` the readings that lie between 0 and 100,
   next to `readings.map(clamp(0, 100))`.

   ```coil challenge=c08-6
   use io::sync::{println};
   use string::{format};
   use collections::vec::{VecOps};

   fn clamp(int lo, int hi, int x) -> int {
       if x < lo {
           return lo;
       }
       if x > hi {
           return hi;
       }
       return x;
   }

   fn between(int lo, int hi, int x) -> bool {
       return false;
   }

   fn main() {
       let readings: Vec<int> = [-5, 42, 130, 99];
       println(format("%v", readings.map(clamp(0, 100))))?;
   }
   ```

   ```coil check=c08-6
   use tests::assert;
   use solution::{between};
   use collections::vec::{VecOps};

   test("50 lies between 0 and 100, the ends too") {
       assert!(between(0, 100, 50));
       assert!(between(0, 100, 0) && between(0, 100, 100));
   }

   test("-5 and 130 do not") {
       assert!(!between(0, 100, -5) && !between(0, 100, 130));
   }

   test("between(0, 100) filters the readings") {
       let readings: Vec<int> = [-5, 42, 130, 99];
       let kept = readings.filter(between(0, 100));
       assert!(show(kept) == "[42, 99]", "got " + show(kept));
   }
   ```

Next: [Chapter 9 — Modules and packages](/docs/manual/tutorial/09-modules).
