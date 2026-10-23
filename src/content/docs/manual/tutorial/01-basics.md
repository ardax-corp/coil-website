---
title: Chapter 1 — Basics
description: "A first tour of Coil: printing, variables, functions, if, loops and blocks, ending with FizzBuzz."
---

# Chapter 1 — Basics

This chapter covers what almost every program needs: printing, variables,
functions, conditions and loops. By the end you will have written FizzBuzz.

If you have not installed Coil yet, start with
[Getting started](/docs/manual/getting-started). Every example in this
tutorial is a complete program unless it says otherwise. Save it as a `.hy`
file and run it with `coil --root ~/.coil/stdlib/src file.hy` (or inside a
spool project with `spool run`).

## A program

```coil
use io::sync::{println};

fn main() {
    println("Hello from Coil")?;
}
```

Output:

```text
Hello from Coil
```

A program is a list of declarations: imports (`use`), functions (`fn`), and
the types you will meet in later chapters. Running a program calls its
`main` function. Statements end with a semicolon and blocks are wrapped in
braces.

`println` comes from the stdlib module `io::sync`. Writing output can fail,
so it returns a `Result`, and the `?` after the call hands any failure to
the caller. For now, think of `println(…)?;` as the way to print; chapter 6
explains `?`.

## Comments

```coil
// A line comment runs to the end of the line.
let width = 80; // and can follow code

/* A block comment can span lines,
   /* and nests, */ so commenting out code that has one is safe. */

/// A documentation comment describes the item below it.
/// Editors show it on hover, and `coil test` runs its examples.
fn area(int w, int h) -> int {
    return w * h;
}
```

## Variables

`let` introduces a variable. Its type is inferred from the value, or you can
write it after a colon:

```coil
use io::sync::{println};
use string::{format};

fn main() {
    let count = 3;              // int
    let price: float = 2.5;     // float, written out
    let name = "lamp";          // string
    let in_stock = true;        // bool

    count = count + 1;          // assign a new value (no `let`)
    count += 10;                // compound assignment: += -= *= /= %= …
    count++;                    // add one

    println(format("%i × %s at %f, in stock: %z", count, name, price, in_stock))?;
}
```

Output:

```text
15 × lamp at 2.5, in stock: true
```

A variable keeps the type it started with: assigning a `string` to `count`
is a compile error. The next chapter covers the types in detail.

## Printing values

`string::format` builds a string from a template. Each `%` specifier takes
the next argument, and the compiler checks that the types match:

| Specifier | Argument | Example |
|-----------|----------|---------|
| `%i` | `int` | `format("%i", 42)` → `42` |
| `%f` | `float` | `format("%f", 0.5)` → `0.5` |
| `%s` | `string` | `format("%s!", "hi")` → `hi!` |
| `%z` | `bool` | `format("%z", 1 < 2)` → `true` |
| `%x`, `%b` | `int` | hexadecimal, binary |
| `%v` | anything printable | arrays, tuples, `Option`, your own types |
| `%%` | | a literal `%` |

`format("%i", "ten")` does not compile, so a wrong specifier never reaches
your users. To join strings, `+` works too: `"Hello, " + name`.

`show(value)` turns any printable value into a string on its own, the same
text `%v` produces.

## Functions

```coil
use io::sync::{println};
use string::{format};

fn add(int a, int b) -> int {
    return a + b;
}

fn greeting(string name) -> string {
    return "Hello, " + name;
}

fn main() {
    let sum = add(2, 3);
    println(format("2 + 3 = %i", sum))?;
    println(greeting("Ada"))?;
}
```

Output:

```text
2 + 3 = 5
Hello, Ada
```

Parameters are written type first: `int a`. The return type follows `->`; a
function without one returns nothing. A function that returns a value must
`return` on every path, and the compiler checks that it does.

`?` only works in a function that can hand the error on, such as `main`.
That is why these helpers return strings and leave the printing to `main`;
chapter 6 shows how to write helpers that print and pass errors along.

Functions can be declared in any order; `main` can call a function defined
below it.

## Conditions

```coil
use io::sync::{println};

fn describe(int temperature) -> string {
    if temperature < 0 {
        return "freezing";
    } else if temperature < 20 {
        return "cool";
    } else {
        return "warm";
    }
}

fn main() {
    println(describe(-5))?;
    println(describe(12))?;
    println(describe(25))?;
}
```

Output:

```text
freezing
cool
warm
```

The condition must be a `bool`; `if count { … }` with an `int` is an error.
No parentheses are needed around it. Combine conditions with `&&`, `||` and
`!`.

## Loops

`for` walks over a range, an array or any other collection. `a..b` counts
from `a` up to but not including `b`; `a..=b` includes `b`:

```coil
use io::sync::{println};
use string::{format};

fn main() {
    let total = 0;
    for n in 1..=100 {
        total += n;
    }
    println(format("1 + 2 + … + 100 = %i", total))?;

    for word in ["red", "green", "blue"] {
        println(word)?;
    }
}
```

Output:

```text
1 + 2 + … + 100 = 5050
red
green
blue
```

`while` repeats as long as its condition holds. `break` leaves the loop and
`continue` skips to the next round; both work in `for` loops too:

```coil
use io::sync::{println};
use string::{format};

fn main() {
    let n = 27;
    let steps = 0;
    while n != 1 {
        if n % 2 == 0 {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
        steps++;
    }
    println(format("27 reaches 1 after %i steps", steps))?;
}
```

Output:

```text
27 reaches 1 after 111 steps
```

## Blocks and scope

A variable lives until the end of the block (`{ … }`) it was declared in:

```coil
use io::sync::{println};
use string::{format};

fn main() {
    let x = 1;
    {
        let y = 2;
        println(format("inside: %i", x + y))?;
    }
    // `y` does not exist here; `x` still does.
    println(format("outside: %i", x))?;
}
```

Output:

```text
inside: 3
outside: 1
```

## Cleanup with `defer`

`defer { … }` runs a block when the function returns, however it returns.
It keeps cleanup next to the setup it belongs to. Several `defer`s run in
reverse order. A deferred block sees only the variables listed in its
`use (…)`. `let _ = …` runs an expression and throws its result away on
purpose, here because a deferred block has nowhere to pass an error to:

```coil
use io::sync::{println};

fn work(string name) {
    defer use (name) {
        let _ = println("done: " + name);
    }
    let _ = println("working on " + name);
}

fn main() {
    work("report");
}
```

Output:

```text
working on report
done: report
```

## Putting it together: FizzBuzz

Print the numbers from 1 to 15, but `Fizz` for multiples of 3, `Buzz` for
multiples of 5 and `FizzBuzz` for multiples of both:

```coil
use io::sync::{println};
use string::{format};

fn fizzbuzz(int n) -> string {
    if n % 15 == 0 {
        return "FizzBuzz";
    }
    if n % 3 == 0 {
        return "Fizz";
    }
    if n % 5 == 0 {
        return "Buzz";
    }
    return format("%i", n);
}

fn main() {
    for n in 1..=15 {
        println(fizzbuzz(n))?;
    }
}
```

Output:

```text
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
```

## Henry's challenges

> [!henry]
> Hello, I'm Henry. My shell grew one chamber at a time, and programs grow
> the same way. Everything below can be solved with what this chapter
> showed you: printing, variables, functions, `if`, loops and `defer`.

1. Write `fn max(int a, int b) -> int` and print `max(3, 9)` and
   `max(-2, -7)`.

   > [!hint]
   > The compiler checks that a function returns on every path. After
   > `if a > b { return a; }` there still has to be a `return` for the
   > other case.

2. Print the first 10 Fibonacci numbers (0, 1, 1, 2, 3, 5, …) with a
   `while` loop.

   > [!hint]
   > Keep the last two numbers in two variables. Work out the next one
   > before you overwrite either of them: `let next = a + b;` inside the
   > loop is fine, it only lives until the end of that round.

3. Change FizzBuzz to read the upper limit from a variable, and print `Fizz`
   for multiples of 7 instead of 3. Run it up to 35 and check the last line.

   > [!hint]
   > The checks run top to bottom and the first `return` wins. The
   > "both" case is now multiples of 35, and it has to come first.

4. Every number in the Collatz loop from this chapter eventually reaches 1.
   Move the loop into `fn steps(int n) -> int` and find the number below
   100 that takes the most steps.

5. Check something: predict what this prints, then run it.

   ```coil
   use io::sync::{println};

   fn main() {
       for n in 3..3 {
           println("a")?;
       }
       for n in 3..=3 {
           println("b")?;
       }
       for n in 5..1 {
           println("c")?;
       }
   }
   ```

   > [!hint]
   > `a..b` stops *before* `b`, so a range whose end is not past its start
   > is simply empty. Ranges never count down.

6. Check something: write a function with three `defer` blocks that print
   `one`, `two` and `three`, and a line after them that prints `working`.
   In which order do the four lines appear?

Next: [Chapter 2 — Types and variables](/docs/manual/tutorial/02-types-and-variables).
