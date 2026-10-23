---
title: Chapter 2 — Types and variables
description: "Coil's built-in types, how inference and annotations work, conversions with as, strings, tuples, records, constants and readonly values."
---

# Chapter 2 — Types and variables

Every value in Coil has a type that is known when the program compiles. You
rarely have to write types down, because the compiler infers them, but
knowing them helps you read error messages and design your own types.

## The built-in types

| Type | Values | Example |
|------|--------|---------|
| `int` | 64-bit signed integers | `42`, `-7`, `1000000` |
| `float` | 64-bit floating point | `3.14`, `-0.5`, `1.0` |
| `bool` | `true` or `false` | `x > 3` |
| `string` | UTF-8 text | `"héllo"`, `"tab\there"` |
| `byte` | integers from 0 to 255 | `let b: byte = 200;` |
| `unit` | "nothing", the result of a function with no return type | `()` |

A few rules that differ from some other languages:

- `int` arithmetic that overflows stops the program with a panic instead of
  wrapping around silently. `byte` arithmetic wraps modulo 256, and the
  compiler warns where it does.
- Integer division rounds toward zero: `7 / 2` is `3` and `-7 / 2` is `-3`.
  Use floats for fractions: `7.0 / 2.0` is `3.5`.
- A float literal needs a decimal point: `1.0`, not `1`. `int` and `float`
  never mix silently, so `1 + 0.5` is an error; convert one side first.
- Conditions must be `bool`. There is no "truthy" `0` or empty string.

Each type has a reference page with its operations: [`int`](/docs/reference/types/int),
[`float`](/docs/reference/types/float), [`string`](/docs/reference/types/string),
[`bool`](/docs/reference/types/bool), [`byte`](/docs/reference/types/byte).

## Inference and annotations

The compiler works out the type of each variable from its value and from how
it is used. Annotations are optional, but you can add one wherever it makes
the code clearer:

```coil
let count = 10;            // int
let ratio = 0.75;          // float
let label: string = "ok";  // annotated
```

Function parameters always carry their types. The return type can be left
out when the body settles it (`fn twice(int n) { return n * 2; }` returns an
`int`), but writing it keeps the signature a complete statement of what the
function takes and gives back.

When types do not fit, the compiler says so before the program runs:

```coil fail
fn main() {
    let count = 5;
    count = "five";
}
```

```text
Error: [E0102] Type mismatch: expected `int`, found `string`
```

Every error has a code like `E0102`; the [error code list](/docs/language/error-codes)
explains each one.

## Converting between types

`as` converts between the numeric types and `bool`:

```coil
use io::sync::{println};
use string::{format};

fn main() {
    let apples = 7;
    let people = 2;
    let share = apples as float / people as float;
    println(format("each gets %f apples", share))?;

    let rounded_down = 3.99 as int;          // 3: `as` truncates toward zero
    println(format("%i", rounded_down))?;
}
```

Output:

```text
each gets 3.5 apples
3
```

Strings are not converted with `as`. Use `format` or `show` to turn a value
into text, and [`conv::parse_int`](/docs/reference/conv/parse_int) or
[`conv::parse_float`](/docs/reference/conv/parse_float) to read a number
from text. Parsing can fail, so those return a `Result`, which chapter 6
covers. The [casts page](/docs/language/casts) lists every conversion.

## Strings

Strings are immutable UTF-8 text. `+` joins them, `==` compares contents and
`<` orders them. `len()` counts bytes, which is the number of characters
only for ASCII text:

```coil
use io::sync::{println};
use string::{format};
use text::{Searchable};

fn main() {
    let first = "Ada";
    let full = first + " Lovelace";
    println(full)?;
    println(format("%i bytes", "héllo".len()))?;
    println(format("%z %z", full.contains("Love"), full.starts_with("Bob")))?;
}
```

Output:

```text
Ada Lovelace
6 bytes
true false
```

The stdlib module [`text`](/docs/reference/text) has the everyday string
helpers. Importing its `Searchable` trait gives strings the search methods
`contains`, `starts_with`, `ends_with`, `find`, `split`, `split_once` and
`replace_all`; free functions such as `trim`, `to_upper` and `join` cover the
rest. Some of those return a `Result`; you will see how to use those in
chapter 6.

## Tuples

A tuple groups a fixed number of values, possibly of different types. Index
it with a constant, or unpack it with `let`:

```coil
use io::sync::{println};
use string::{format};

fn min_max(int a, int b) -> (int, int) {
    if a < b {
        return (a, b);
    }
    return (b, a);
}

fn main() {
    let pair = min_max(9, 4);
    println(format("smallest %i", pair[0]))?;
    let (low, high) = min_max(9, 4);
    println(format("%i..%i", low, high))?;
}
```

Output:

```text
smallest 4
4..9
```

## Records

A record is a set of named fields, written in braces. It needs no
declaration, which makes it handy for small, local groupings:

```coil
use io::sync::{println};
use string::{format};

fn main() {
    let book = { title: "Dune", year: 1965 };
    book.year = 1966;
    println(format("%s (%i)", book.title, book.year))?;
    println(format("%v", book))?;
}
```

Output:

```text
Dune (1966)
{ title: Dune, year: 1966 }
```

For anything with behaviour or a name of its own, declare a class
(chapter 4) or an enum (chapter 5).

## Type aliases

`type` gives an existing type a second name. It is the same type, only
easier to read:

```coil
type Point = (float, float);

fn midpoint(Point a, Point b) -> Point {
    return ((a[0] + b[0]) / 2.0, (a[1] + b[1]) / 2.0);
}
```

## Constants and shared variables

At the top of a file, `const` names a value that never changes and
`static let` declares a variable the whole program shares:

```coil
use io::sync::{println};
use string::{format};

const MAX_RETRIES = 3;
static let attempts = 0;

fn try_once() -> bool {
    attempts += 1;
    return attempts >= 2;
}

fn main() {
    while attempts < MAX_RETRIES {
        if try_once() {
            break;
        }
    }
    println(format("succeeded after %i attempts", attempts))?;
}
```

Output:

```text
succeeded after 2 attempts
```

`const` also works inside a function, for a local that must not be
reassigned. Assigning to a constant is a compile error.

## Readonly values

`const` stops a *name* from being reassigned, but the value behind it can
still change: a constant array's elements can be written. `readonly` seals
the *value* instead, all the way down:

```coil fail
fn main() {
    let primes = readonly [2, 3, 5, 7];
    primes[0] = 1;
}
```

```text
Error: [E0107] Cannot mutate a `readonly` value
```

`readonly T` is a type too, so a function can promise it only reads its
argument: `fn total(readonly Vec<int> xs) -> int`. Both readonly and
ordinary values can be passed to it.

## Exercises

1. Write `fn average(int a, int b, int c) -> float` and print the average
   of 1, 2 and 4.
2. Make a record for a city with a name and a population, increase the
   population, and print it with `%v`.
3. What does `format("%i", 255 as byte as int + 1)` produce, and why is
   `(255 as byte) + 1 as byte` different?

Next: [Chapter 3 — Collections](/docs/manual/tutorial/03-collections).
