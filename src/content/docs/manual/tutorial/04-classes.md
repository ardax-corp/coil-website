---
title: Chapter 4 — Classes
description: "Declaring classes, constructing them with new, methods and self, private and pub members, static functions, derived Show/Eq/Hash and generic classes."
---

# Chapter 4 — Classes

A class bundles named fields with the functions that work on them. Use one
whenever a group of values has a name and behaviour of its own: an account,
a parser, a game board.

## Declaring and creating

```coil
use io::sync::{println};
use string::{format};

class Rectangle {
    pub width: float,
    pub height: float,
}

fn main() {
    let r = new Rectangle(3.0, 4.5);
    println(format("%f × %f", r.width, r.height))?;

    let square = new Rectangle(width: 2.0, height: 2.0);   // named arguments
    square.width = 2.5;
    println(format("%f", square.width))?;
}
```

Output:

```text
3.0 × 4.5
2.5
```

`new Rectangle(…)` takes one argument per field, in the order the fields are
declared, or by name. Fields marked `pub` can be read and written from
anywhere; the others only from the class's own methods.

## Methods

Methods go in an `impl` block. Inside a method, `self` is the object it was
called on:

```coil
use io::sync::{println};
use string::{format};

class Rectangle {
    pub width: float,
    pub height: float,
}

impl Rectangle {
    pub fn area() -> float {
        return self.width * self.height;
    }

    pub fn scale(float factor) {
        self.width *= factor;
        self.height *= factor;
    }

    pub fn is_square() -> bool {
        return self.width == self.height;
    }
}

fn main() {
    let r = new Rectangle(2.0, 3.0);
    println(format("area %f", r.area()))?;
    r.scale(2.0);
    println(format("area after scaling %f, square: %z", r.area(), r.is_square()))?;
}
```

Output:

```text
area 6.0
area after scaling 24.0, square: false
```

`self` is not written in the parameter list; every method has it.

## Keeping fields private

Leave `pub` off a field to keep it internal. Code outside the class then has
to go through the methods, which can check what they are given:

```coil
use io::sync::{println};
use string::{format};

class Account {
    owner: string,
    balance: int,
}

impl Account {
    pub static fn open(string owner) -> Account {
        return new Account(owner, 0);
    }

    pub fn deposit(int amount) -> bool {
        if amount <= 0 {
            return false;
        }
        self.balance += amount;
        return true;
    }

    pub fn balance() -> int {
        return self.balance;
    }
}

fn main() {
    let acct = Account::open("Ada");
    acct.deposit(100);
    let ok = acct.deposit(-5);
    println(format("balance %i, negative deposit accepted: %z", acct.balance(), ok))?;
}
```

Output:

```text
balance 100, negative deposit accepted: false
```

Reading `acct.balance` from `main` would be a compile error
(`cannot access private field`), so the only way to change the balance is
`deposit`.

`open` is a **static function**: it belongs to the class rather than to an
object, so it has no `self` and is called as `Account::open(…)`. Static
functions are the usual way to write constructors with defaults or checks.

## Objects are shared

Assigning an object to another variable, or passing it to a function, does
not copy it. Both names refer to the same object:

```coil
use io::sync::{println};
use string::{format};

class Counter {
    pub value: int,
}

fn bump(Counter c) {
    c.value++;
}

fn main() {
    let a = new Counter(0);
    let b = a;
    bump(a);
    bump(b);
    println(format("%i", a.value))?;
}
```

Output:

```text
2
```

Numbers, booleans, strings and tuples behave like values: a function that
gets an `int` cannot change the caller's variable. If a function must not
change an object, take it as `readonly`: `fn print_balance(readonly Account a)`.

## Printing and comparing: derive

`#[derive(…)]` above a class writes common functionality for you:

- `Show` makes it printable with `%v` and `show`.
- `Eq` makes `==` and `!=` compare field by field.
- `Hash` (with `Eq`) lets it be a key in a `HashMap` or `HashSet`.
- `Ord` makes `<` and friends compare fields in order, so `sort` works.

```coil
use io::sync::{println};
use string::{format};
use collections::set::{HashSet};

#[derive(Show, Eq, Hash)]
class Point {
    pub x: int,
    pub y: int,
}

fn main() {
    let a = new Point(1, 2);
    let b = new Point(1, 2);
    println(format("%v equals %v: %z", a, b, a == b))?;

    let visited: HashSet<Point> = HashSet::new();
    visited.insert(a);
    println(format("visited (1, 2): %z", visited.contains(new Point(1, 2))))?;
}
```

Output:

```text
Point { x: 1, y: 2 } equals Point { x: 1, y: 2 }: true
visited (1, 2): true
```

Without `Eq`, `==` on two objects does not compile. Chapter 7 shows how to
write these by hand when the derived version is not what you want.

## Generic classes

A class can take type parameters, so one definition works for any element
type:

```coil
use io::sync::{println};
use string::{format};

class Stack<T> {
    items: Vec<T>,
}

impl Stack<T> {
    pub static fn new() -> Stack<T> {
        return new Stack(Vec::new());
    }

    pub fn push(T item) {
        self.items.push(item);
    }

    pub fn pop() -> Option<T> {
        return self.items.pop();
    }

    pub fn size() -> int {
        return self.items.len();
    }
}

fn main() {
    let undo: Stack<string> = Stack::new();
    undo.push("type a");
    undo.push("delete line");
    println(format("undo: %v, %i left", undo.pop(), undo.size()))?;
}
```

Output:

```text
undo: Some(delete line), 1 left
```

`Stack<string>` and `Stack<int>` are different types, and the compiler
checks that you only push what the stack holds.

## Exercises

1. Add a `withdraw(int amount) -> bool` method to `Account` that refuses to
   go below zero.
2. Write a `Temperature` class that stores Celsius privately and has
   `celsius()` and `fahrenheit()` methods.
3. Give `Stack<T>` a `peek() -> Option<T>` method that returns the top
   element without removing it.

Next: [Chapter 5 — Enums and match](/docs/manual/tutorial/05-enums-and-match).
