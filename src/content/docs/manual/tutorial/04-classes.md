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

## Objects behave like values

Assigning an object to another variable gives that variable its own value.
Changing one of them leaves the other as it was:

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
    println(format("a %i, b %i", a.value, b.value))?;
}
```

Output:

```text
a 1, b 1
```

Nothing is copied when you write `let b = a;`. Both names point at the
same object until one of them changes it; only then does Coil copy it
(*copy-on-write*). The compiler warns (`E0141`) at a write that will copy,
so a copy never happens without you seeing it.

A function changes the variable you pass it: `bump(a)` raises `a.value`,
as above. The same holds for vectors and maps.

When you do want a second name for the same object, ask for it with
`mut`:

```coil
use io::sync::{println};
use string::{format};

class Counter {
    pub value: int,
}

fn main() {
    let a = new Counter(0);
    let c = mut a;
    c.value = 5;
    println(format("%i", a.value))?;
}
```

Output:

```text
5
```

`for mut item in list { … }` changes the items in place, and a lambda
written `use (mut list)` changes the outer `list`. For an object that is
meant to be shared (a connection, a logger, a window), declare it
`shared class`: its instances are never copied. A plain value that several
parts of a program must see change goes in a `Ref<T>` from `cell`. The
[Memory management](/docs/language/memory#copy-on-write) page has the
details.

Numbers, booleans, strings and tuples are values too. Records are the
exception: they are shared, so `let r2 = r; r2.x = 9;` changes `r` as
well. If a function must not change an object, take it as `readonly`:
`fn print_balance(readonly Account a)`.

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

Without `Eq`, `==` on two objects compares identity: it is true only when
both sides are the same object, so two separate `new Point(1, 2)` are not
equal. Chapter 7 shows how to write these by hand when the derived version
is not what you want.

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

    pub fn len() -> int {
        return self.items.len();
    }
}

fn main() {
    let undo: Stack<string> = Stack::new();
    undo.push("type a");
    undo.push("delete line");
    println(format("undo: %v, %i left", undo.pop(), undo.len()))?;
}
```

Output:

```text
undo: Some(delete line), 1 left
```

`Stack<string>` and `Stack<int>` are different types, and the compiler
checks that you only push what the stack holds.

## Henry's challenges

> [!henry]
> A shell is a home with a door, and a class decides who gets through it.
> Build on `Account` and `Stack` from this chapter.

1. Add a `withdraw(int amount) -> bool` method to `Account` that refuses to
   go below zero.

   > [!hint]
   > Check the sign as well as the balance. Without it, `withdraw(-50)`
   > quietly turns into a deposit.

   ```coil challenge=c04-1
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
       println(format("balance %i", acct.balance()))?;
   }
   ```

   ```coil check=c04-1
   use tests::assert;
   use solution::{Account};

   test("withdrawing part of the balance works") {
       let a = Account::open("Ada");
       a.deposit(100);
       assert!(a.withdraw(30), "withdraw(30) from 100 should succeed");
       assert!(a.balance() == 70, "balance is " + show(a.balance()));
   }

   test("withdrawing more than the balance is refused") {
       let a = Account::open("Ada");
       a.deposit(100);
       assert!(!a.withdraw(500));
       assert!(a.balance() == 100, "balance is " + show(a.balance()));
   }

   test("the whole balance can be withdrawn") {
       let a = Account::open("Ada");
       a.deposit(100);
       assert!(a.withdraw(100));
       assert!(a.balance() == 0);
   }

   test("a negative withdrawal is refused") {
       let a = Account::open("Ada");
       a.deposit(100);
       assert!(!a.withdraw(-50));
       assert!(a.balance() == 100, "balance is " + show(a.balance()));
   }
   ```

2. Write a `Temperature` class that stores Celsius in a private field and
   has `celsius()` and `fahrenheit()` methods, plus a static
   `Temperature::from_fahrenheit(float f)` constructor.

   > [!hint]
   > `9 / 5` is integer division and gives `1`. Write the formula with
   > float literals: `self.celsius * 9.0 / 5.0 + 32.0`.

   ```coil challenge=c04-2
   use io::sync::{println};
   use string::{format};

   class Temperature {
       celsius: float,
   }

   impl Temperature {
       // celsius(), fahrenheit() and a static from_fahrenheit(float f)
   }

   fn main() {
       let boiling = Temperature::from_fahrenheit(212.0);
       println(format("%f °C, %f °F", boiling.celsius(), boiling.fahrenheit()))?;
   }
   ```

   ```coil check=c04-2
   use tests::assert;
   use solution::{Temperature};

   test("212 °F is 100 °C") {
       let t = Temperature::from_fahrenheit(212.0);
       assert!(t.celsius() > 99.999 && t.celsius() < 100.001, "got " + show(t.celsius()));
   }

   test("32 °F is 0 °C and back to 32 °F") {
       let t = Temperature::from_fahrenheit(32.0);
       assert!(t.celsius() > -0.001 && t.celsius() < 0.001, "got " + show(t.celsius()));
       assert!(t.fahrenheit() > 31.999 && t.fahrenheit() < 32.001, "got " + show(t.fahrenheit()));
   }

   test("-40 is the same on both scales") {
       let t = Temperature::from_fahrenheit(-40.0);
       assert!(t.celsius() > -40.001 && t.celsius() < -39.999, "got " + show(t.celsius()));
   }

   test("98.6 °F is 37 °C") {
       let t = Temperature::from_fahrenheit(98.6);
       assert!(t.celsius() > 36.999 && t.celsius() < 37.001, "got " + show(t.celsius()));
   }
   ```

3. Give `Stack<T>` an `is_empty() -> bool` method and a `clear()` method,
   and check that a cleared stack pops `None`.

   ```coil challenge=c04-3
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

       pub fn len() -> int {
           return self.items.len();
       }
   }

   fn main() {
       let s: Stack<int> = Stack::new();
       s.push(1);
       s.push(2);
       println(format("%i on the stack", s.len()))?;
   }
   ```

   ```coil check=c04-3
   use tests::assert;
   use solution::{Stack};

   test("a new stack is empty") {
       let s: Stack<int> = Stack::new();
       assert!(s.is_empty());
   }

   test("a stack with items is not empty") {
       let s: Stack<int> = Stack::new();
       s.push(1);
       assert!(!s.is_empty());
   }

   test("a cleared stack is empty and pops None") {
       let s: Stack<int> = Stack::new();
       s.push(1);
       s.push(2);
       s.clear();
       assert!(s.is_empty());
       assert!(s.pop().is_none());
   }
   ```

4. Give a `Card` class a `rank: int` and a `suit: string`, derive `Show`,
   `Eq` and `Ord`, and sort a hand of cards with `sort` from chapter 3.

   > [!hint]
   > A derived `Ord` compares fields in the order they are declared, so the
   > field that matters most goes first.

   ```coil challenge=c04-4
   use io::sync::{println};
   use string::{format};
   use collections::{sort};

   class Card {
       pub suit: string,
   }

   fn main() {
       let hand: Vec<Card> = [];
       println(format("%v", sort(hand)))?;
   }
   ```

   ```coil check=c04-4
   use tests::assert;
   use solution::{Card};
   use collections::{sort};

   test("cards with the same rank and suit are equal") {
       assert!(new Card(3, "spades") == new Card(3, "spades"));
       assert!(new Card(3, "spades") != new Card(4, "spades"));
   }

   test("a hand sorts by rank first") {
       let hand: Vec<Card> = [new Card(12, "hearts"), new Card(3, "spades"), new Card(7, "clubs")];
       let sorted = sort(hand);
       assert!(sorted[0].rank == 3 && sorted[1].rank == 7 && sorted[2].rank == 12, "got " + show(sorted));
   }

   test("cards of the same rank sort by suit") {
       let hand: Vec<Card> = [new Card(12, "hearts"), new Card(12, "clubs")];
       let sorted = sort(hand);
       assert!(sorted[0].suit == "clubs", "got " + show(sorted));
   }
   ```

5. Check something: build a `Vec<Counter>` that holds the *same* counter
   twice (`[c, c]`), add one to `counters[0].value`, and print
   `counters[1].value`. Before you run it, decide what you expect.

   ```coil challenge=c04-5
   use io::sync::{println};
   use string::{format};

   class Counter {
       pub value: int,
   }

   fn main() {
       let c = new Counter(0);
       let counters: Vec<Counter> = [c, c];
       counters[0].value++;
       println(format("%i", counters[1].value))?;
   }
   ```

6. Check something: which of these behave like values, and which are
   shared like objects? Copy each one with `let b = a;`, change `b`, and
   print `a`.

   ```coil ignore
   let t = (1, 2);           // a tuple
   let r = { x: 1 };         // a record
   let v: Vec<int> = [1];    // a vector
   let s = "a";              // a string
   ```

   > [!hint]
   > Tuples, strings, vectors and maps behave like values:
   > changing `b` leaves `a` alone. Records are shared, so changing `r2`
   > changes `r` too.

   ```coil challenge=c04-6
   use io::sync::{println};
   use string::{format};

   fn main() {
       let t = (1, 2);
       let t2 = t;
       t2 = (9, 2);
       println(format("tuple %v", t))?;

       let r = { x: 1 };
       let r2 = r;
       r2.x = 9;
       println(format("record %v", r))?;

       let v: Vec<int> = [1];
       let v2 = v;
       v2.push(9);
       println(format("vector %v", v))?;

       let s = "a";
       let s2 = s;
       s2 = s2 + "9";
       println(format("string %s", s))?;
   }
   ```

7. Check something: take `Point` without its `#[derive(…)]` line and
   compare `new Point(1, 2) == new Point(1, 2)`, then `a == a`. Add
   `#[derive(Eq)]` back and compare again.

   > [!hint]
   > Without `Eq`, `==` asks "is this the same object?" rather than "do
   > the fields match?".

   ```coil challenge=c04-7
   use io::sync::{println};
   use string::{format};

   class Point {
       pub x: int,
       pub y: int,
   }

   fn main() {
       let a = new Point(1, 2);
       println(format("%z", new Point(1, 2) == new Point(1, 2)))?;
       println(format("%z", a == a))?;
   }
   ```

Next: [Chapter 5 — Enums and match](/docs/manual/tutorial/05-enums-and-match).
