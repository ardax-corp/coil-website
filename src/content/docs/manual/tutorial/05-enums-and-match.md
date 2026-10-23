---
title: Chapter 5 — Enums and match
description: "Enums model a value that is one of several cases, each with its own data. match takes them apart, and the compiler checks every case is handled."
---

# Chapter 5 — Enums and match

An enum is a type whose values are one of a fixed set of cases. Each case
can carry its own data. Together with `match`, enums are how Coil models
"this or that": a shape that is a circle or a rectangle, a command that is
`move` or `quit`, a result that succeeded or failed.

## Declaring and constructing

```coil
enum Direction {
    North,
    East,
    South,
    West,
}

enum Shape {
    Circle(float),                  // a payload, by position
    Rectangle { w: float, h: float }, // named fields
    Point,                          // no data
}

fn main() {
    // Values are written `Enum::Case`:
    let heading = Direction::North;
    let wheel = Shape::Circle(0.35);
    let door = Shape::Rectangle { w: 0.9, h: 2.1 };
}
```

## match

`match` compares a value against patterns, top to bottom, and evaluates the
first arm that fits. Patterns can pull the data out of a case:

```coil
use io::sync::{println};
use string::{format};

enum Shape {
    Circle(float),
    Rectangle { w: float, h: float },
    Point,
}

fn area(Shape s) -> float {
    return match s {
        Shape::Circle(r) => 3.14159 * r * r,
        Shape::Rectangle { w, h } => w * h,
        Shape::Point => 0.0,
    };
}

fn main() {
    let shapes: Vec<Shape> = [Shape::Circle(1.0), Shape::Rectangle { w: 2.0, h: 3.0 }, Shape::Point];
    for s in shapes {
        println(format("%f", area(s)))?;
    }
}
```

Output:

```text
3.14159
6.0
0.0
```

`match` is an expression: it produces the value of the arm that ran, so it
can be returned or assigned. An arm can also run a block:
`Shape::Point => { … }`.

## Every case must be handled

If you add a case to an enum, every `match` that does not handle it stops
compiling, which points you at each place that needs updating:

```coil fail
enum Direction {
    North,
    East,
    South,
}

fn degrees(Direction d) -> int {
    return match d {
        Direction::North => 0,
        Direction::East => 90,
    };
}
```

```text
Error: [E0209] Non-exhaustive match: variants not covered: `South`
```

When you really mean "everything else", write a `default` arm:

```coil
use io::sync::{println};

enum Direction {
    North,
    East,
    South,
    West,
}

fn is_north(Direction d) -> bool {
    return match d {
        Direction::North => true,
        default => false,
    };
}

fn main() {
    println(show(is_north(Direction::West)))?;
}
```

Output:

```text
false
```

Use `default` sparingly: unlike listing the cases, it keeps compiling when a
new case is added, even if that case needed different handling.

## Matching numbers

Integer literals work as patterns. Since no list of numbers covers every
`int`, these matches always need a `default`:

```coil
use io::sync::{println};

fn http_text(int code) -> string {
    return match code {
        200 => "OK",
        404 => "Not Found",
        500 => "Internal Server Error",
        default => "Unknown",
    };
}

fn main() {
    println(http_text(404))?;
}
```

Output:

```text
Not Found
```

For strings and other conditions, use `if` / `else if`.

## Recursive enums

A case can hold values of the enum itself, which makes enums a natural fit
for trees. Here is a tiny calculator:

```coil
use io::sync::{println};
use string::{format};

enum Expr {
    Num(int),
    Add(Expr, Expr),
    Mul(Expr, Expr),
}

fn eval(Expr e) -> int {
    return match e {
        Expr::Num(n) => n,
        Expr::Add(a, b) => eval(a) + eval(b),
        Expr::Mul(a, b) => eval(a) * eval(b),
    };
}

fn main() {
    // 2 + 3 * 4
    let e = Expr::Add(Expr::Num(2), Expr::Mul(Expr::Num(3), Expr::Num(4)));
    println(format("%i", eval(e)))?;
}
```

Output:

```text
14
```

## Option: a value that may be missing

The prelude defines two enums you will use constantly. The first is
`Option<T>`, with the cases `Some(value)` and `None`. Functions that may
have nothing to return use it instead of a special value like `-1`:

```coil
use io::sync::{println};
use string::{format};

fn find(Vec<string> names, string wanted) -> Option<int> {
    for i in 0..names.len() {
        if names[i] == wanted {
            return Some(i);
        }
    }
    return None;
}

fn main() {
    let names: Vec<string> = ["ada", "alan", "grace"];
    match find(names, "alan") {
        Some(i) => println(format("found at %i", i))?,
        None => println("not found")?,
    }
}
```

Output:

```text
found at 1
```

For `Option`, `Result` and other enums, the case names can be written
without the enum name (`Some(i)` instead of `Option::Some(i)`) when only one
enum in scope has a case of that name.

The second prelude enum, `Result`, is the subject of the next chapter.

## if let and while let

When you only care about one case, `if let` is shorter than a `match`:

```coil
use io::sync::{println};
use string::{format};

fn main() {
    let stack: Vec<string> = ["first", "second"];
    if let Some(top) = stack.pop() {
        println(format("top was %s", top))?;
    }
    while let Some(item) = stack.pop() {
        println(format("then %s", item))?;
    }
}
```

Output:

```text
top was second
then first
```

## Enums with fixed values

Sometimes each case stands for a fixed number or string, such as a status
code. Give each case a value with `=`; the enum then behaves like that value
wherever one is expected:

```coil
use io::sync::{println};
use string::{format};

#[repr(int)]
enum Status {
    Ok = 200,
    NotFound = 404,
}

fn main() {
    let s = Status::NotFound;
    let code: int = s;
    println(format("code %i", code))?;
}
```

Output:

```text
code 404
```

`#[repr(string)]`, `#[repr(float)]` and `#[repr(bool)]` work the same way.
See [scalar-backed enums](/docs/language/types#scalar-backed-enums) for the
rules.

## Henry's challenges

> [!henry]
> A nautilus is one of a few things at any moment: drifting, hunting or
> hiding. Enums say the same about values. Use `match`, `Option`,
> `if let` and what came before.

1. Add a `Triangle { base: float, height: float }` case to `Shape` and fix
   the compile errors it causes.

   > [!hint]
   > Let the compiler find the places for you: every `match` on `Shape`
   > that misses the new case fails with `E0209`. A `default` arm would
   > have hidden this, which is why it is best kept rare.

2. Extend the calculator with `Neg(Expr)` and `Sub(Expr, Expr)`, then check
   that `10 - -(3 * 4)` evaluates to 22.

   > [!hint]
   > Order matters for `Sub`: `Sub(a, b)` is `eval(a) - eval(b)`, and
   > swapping them still compiles.

3. Write `fn render(Expr e) -> string` that turns an expression back into
   text with parentheses, such as `(2 + (3 * 4))`.

   > [!hint]
   > It has the same shape as `eval`: one arm per case, calling itself for
   > the parts. `format("(%s + %s)", render(a), render(b))` does the rest.

4. Write `fn first_even(Vec<int> xs) -> Option<int>` and print its result
   for `[1, 3, 4, 5]` and for `[1, 3]` with `%v`.

5. Go back to `Stack<T>` from chapter 4 and give it a
   `peek() -> Option<T>` method that returns the top element without
   removing it.

   > [!hint]
   > An empty stack has no top. Check `len()` first and return `None`;
   > otherwise wrap the last element in `Some(…)`.

6. Write `fn turn_right(Direction d) -> Direction` and check that four
   right turns bring you back to `North`, printing the heading in degrees
   after each turn.

7. Check something: put the `default` arm *first* in `http_text`. What
   does the compiler say about the arms below it?

Next: [Chapter 6 — Error handling](/docs/manual/tutorial/06-error-handling).
