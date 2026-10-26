---
title: Chapter 7 — Traits and generics
description: "Generic functions that work for many types, traits that describe what a type can do, implementing them for your own types, and values of any type that has a trait."
---

# Chapter 7 — Traits and generics

A generic function is written once and works for many types. A trait names
an ability, such as "can be printed" or "has an area", that a type can
have. Together they let you write code that depends on what a value can do
rather than on exactly what it is.

## Generic functions

Type parameters go in angle brackets after the function name. A **bound**
like `T: Ord` says what the type must support, here comparison:

```coil
use io::sync::{println};

fn largest<T: Ord>(Vec<T> items) -> T {
    let best = items[0];
    for item in items {
        if item > best {
            best = item;
        }
    }
    return best;
}

fn main() {
    let numbers: Vec<int> = [3, 8, 1];
    let words: Vec<string> = ["pear", "apple", "plum"];
    println(show(largest(numbers)))?;
    println(largest(words))?;
}
```

Output:

```text
8
plum
```

Without the bound, `item > best` would not compile: the function could be
called with a type that has no order. The common built-in traits are:

| Trait | Gives you |
|-------|-----------|
| `Eq` | `==` and `!=` |
| `Ord` | `<`, `<=`, `>`, `>=` (and `Eq`) |
| `Num` | `+`, `-`, `*`, `/`, `%`, `**` and unary `-` |
| `Show` | `show(x)` and `%v` in `format` |
| `Hash` | use as a key in `HashMap` and `HashSet` |

Several bounds combine with `+`: `fn report<T: Show + Ord>(Vec<T> xs)`.

## Defining a trait

A trait lists functions that each type implementing it must provide. The
trait's type parameter, `T` below, stands for the implementing type, and
each function takes the value it works on as an ordinary parameter. A trait
can also give a default body that types may override:

```coil
use io::sync::{println};
use string::{format};

trait Shape<T> {
    fn area(T shape) -> float;

    fn name(T shape) -> string {
        return "shape";
    }
}

class Circle {
    pub radius: float,
}

class Square {
    pub side: float,
}

impl Shape for Circle {
    fn area(Circle c) -> float {
        return 3.14159 * c.radius * c.radius;
    }

    fn name(Circle c) -> string {
        return "circle";
    }
}

impl Shape for Square {
    fn area(Square s) -> float {
        return s.side * s.side;
    }
}

fn describe<T: Shape>(T shape) -> string {
    return format("%s with area %f", shape.name(), shape.area());
}

fn main() {
    println(describe(new Circle(1.0)))?;
    println(describe(new Square(2.0)))?;
}
```

Output:

```text
circle with area 3.14159
shape with area 4.0
```

Trait functions can be called either way: `shape.area()` or `area(shape)`.
`Square` did not write `name`, so it gets the default.

## Implementing built-in traits

The operators and `show` are traits too, so your own types can support them.
Here `+` adds two vectors and `%v` prints them:

```coil
use io::sync::{println};
use string::{format};

class Vec2 {
    pub x: float,
    pub y: float,
}

impl Add for Vec2 {
    fn add(Vec2 a, Vec2 b) -> Vec2 {
        return new Vec2(a.x + b.x, a.y + b.y);
    }
}

impl Show for Vec2 {
    fn show(Vec2 v) -> string {
        return format("⟨%f, %f⟩", v.x, v.y);
    }
}

fn main() {
    let velocity = new Vec2(1.0, 0.5) + new Vec2(0.5, 0.5);
    println(format("velocity %v", velocity))?;
}
```

Output:

```text
velocity ⟨1.5, 1.0⟩
```

`#[derive(Show, Eq, Ord, Hash)]`, from chapter 4, writes these
implementations for you when the field-by-field version is what you want.
Each operator's trait is listed on the [`ops` reference page](/docs/reference/prelude/ops).

## Values of any type with a trait

Using a trait name as a type, such as `Vec<Shape>`, means "a value of some
type that implements `Shape`". That is how you put circles and squares in
one list:

```coil
use io::sync::{println};
use string::{format};

trait Shape<T> {
    fn area(T shape) -> float;
}

class Circle {
    pub radius: float,
}

class Square {
    pub side: float,
}

impl Shape for Circle {
    fn area(Circle c) -> float {
        return 3.14159 * c.radius * c.radius;
    }
}

impl Shape for Square {
    fn area(Square s) -> float {
        return s.side * s.side;
    }
}

fn main() {
    let floor_plan: Vec<Shape> = Vec::new();
    floor_plan.push(new Square(4.0));
    floor_plan.push(new Circle(1.0));
    floor_plan.push(new Square(2.0));

    let total = 0.0;
    for room in floor_plan {
        total += room.area();
    }
    println(format("total area %f", total))?;
}
```

Output:

```text
total area 23.14159
```

Each element remembers its own type, so `room.area()` runs the `Circle` or
`Square` version as appropriate. A generic function (`fn f<T: Shape>`) is
the better choice when all the values have the same type; a trait-typed
value is for when they do not.

## Generic classes and enums

Classes (chapter 4) and enums take type parameters the same way. Methods
that need a bound go in a separate `impl` block that states it:

```coil
use io::sync::{println};

class Pair<T> {
    pub first: T,
    pub second: T,
}

impl Pair<T> {
    pub fn swap() -> Pair<T> {
        return new Pair(self.second, self.first);
    }
}

impl Pair<T: Ord> {
    pub fn max() -> T {
        if self.first > self.second {
            return self.first;
        }
        return self.second;
    }
}

fn main() {
    let p = new Pair(3, 9);
    println(show(p.swap().first))?;
    println(show(p.max()))?;
}
```

Output:

```text
9
9
```

`max` only exists on pairs whose elements can be compared; `swap` exists on
every pair.

The [type system page](/docs/language/types#generics-and-traits) goes much
further: traits with several type parameters, associated types,
higher-kinded parameters and more.

## Henry's challenges

> [!henry]
> Every nautilus shell follows the same spiral, whatever its size. Write
> code that way too: once, for every type that fits. Generics, traits and
> bounds are your tools here.

1. Write `fn sum<T: Num>(Vec<T> xs, T zero) -> T` and call it with ints
   and with floats.

   > [!hint]
   > Inside a generic function there is no literal for "zero of `T`":
   > `0` is an `int` and `0.0` a `float`. That is why the caller passes
   > `zero` in.

   ```coil challenge=c07-1
   use io::sync::{println};
   use string::{format};

   fn sum<T: Num>(Vec<T> xs, T zero) -> T {
       return zero;
   }

   fn main() {
       let ints: Vec<int> = [1, 2, 3];
       let floats: Vec<float> = [0.5, 0.25];
       println(format("%i %f", sum(ints, 0), sum(floats, 0.0)))?;
   }
   ```

   ```coil check=c07-1
   use tests::assert;
   use solution::{sum};

   test("the sum of [1, 2, 3] is 6") {
       assert!(sum([1, 2, 3], 0) == 6);
   }

   test("the sum of [0.5, 0.25] is 0.75") {
       assert!(sum([0.5, 0.25], 0.0) == 0.75);
   }

   test("an empty vector sums to zero") {
       let none: Vec<int> = [];
       assert!(sum(none, 0) == 0);
   }
   ```

2. Add a `Triangle` class to the floor plan and implement `Shape` for it.

   ```coil challenge=c07-2
   use io::sync::{println};
   use string::{format};

   trait Shape<T> {
       fn area(T shape) -> float;
   }

   class Circle {
       pub radius: float,
   }

   class Square {
       pub side: float,
   }

   impl Shape for Circle {
       fn area(Circle c) -> float {
           return 3.14159 * c.radius * c.radius;
       }
   }

   impl Shape for Square {
       fn area(Square s) -> float {
           return s.side * s.side;
       }
   }

   fn main() {
       let floor_plan: Vec<Shape> = Vec::new();
       floor_plan.push(new Square(4.0));
       floor_plan.push(new Circle(1.0));
       floor_plan.push(new Square(2.0));

       let total = 0.0;
       for room in floor_plan {
           total += room.area();
       }
       println(format("total area %f", total))?;
   }
   ```

   ```coil check=c07-2
   use tests::assert;
   use solution::{Shape, Square, Triangle};

   test("a triangle with base 3 and height 4 has area 6") {
       assert!(new Triangle(3.0, 4.0).area() == 6.0);
   }

   test("a triangle fits in the floor plan") {
       let plan: Vec<Shape> = Vec::new();
       plan.push(new Square(2.0));
       plan.push(new Triangle(3.0, 4.0));
       let total = 0.0;
       for room in plan {
           total += room.area();
       }
       assert!(total == 10.0, "total area " + show(total));
   }
   ```

3. Implement `Eq` by hand for a `Version` class so that two versions are
   equal when their major and minor numbers match, ignoring a `label`
   field.

   > [!hint]
   > `Eq` needs both `fn eq(Version a, Version b) -> bool` and
   > `fn ne(Version a, Version b) -> bool`. `ne` can simply return
   > `!(a == b)`.

   ```coil challenge=c07-3
   use io::sync::{println};
   use string::{format};

   class Version {
       pub major: int,
       pub minor: int,
       pub label: string,
   }

   fn main() {
       let a = new Version(1, 2, "beta");
       let b = new Version(1, 2, "final");
       println(format("%z", a == b))?;
   }
   ```

   ```coil check=c07-3
   use tests::assert;
   use solution::{Version};

   test("1.2 beta equals 1.2 final") {
       assert!(new Version(1, 2, "beta") == new Version(1, 2, "final"));
   }

   test("1.2 differs from 1.3 and from 2.2") {
       assert!(new Version(1, 2, "beta") != new Version(1, 3, "beta"));
       assert!(new Version(1, 2, "beta") != new Version(2, 2, "beta"));
   }

   test("!= is the opposite of ==") {
       let a = new Version(1, 2, "x");
       let b = new Version(1, 2, "y");
       assert!(!(a != b));
   }
   ```

4. Check something: call `largest` with an empty `Vec<int>`. What
   happens? Then change it to return `Option<T>` so that an empty input
   gives `None`.

   > [!hint]
   > `items[0]` on an empty vector is the index-out-of-bounds panic from
   > chapter 3. Look at `len()` before you read it.

   ```coil challenge=c07-4
   use io::sync::{println};

   fn largest<T: Ord>(Vec<T> items) -> T {
       let best = items[0];
       for item in items {
           if item > best {
               best = item;
           }
       }
       return best;
   }

   fn main() {
       let none: Vec<int> = [];
       println(show(largest(none)))?;
   }
   ```

   ```coil check=c07-4
   use tests::assert;
   use solution::{largest};

   test("an empty vector gives None") {
       let none: Vec<int> = [];
       assert!(largest(none).is_none());
   }

   test("the largest of [3, 8, 1] is 8") {
       assert!((largest([3, 8, 1]) ?? -1) == 8);
   }

   test("it still works for strings") {
       let words: Vec<string> = ["pear", "apple", "plum"];
       assert!((largest(words) ?? "") == "plum");
   }
   ```

5. Give `Vec2` a `-` operator by implementing `Sub`, and `==` by
   implementing `Eq`, then check that `⟨3, 1⟩ - ⟨1, 1⟩ == ⟨2, 0⟩`.

   > [!hint]
   > `Sub` follows the same pattern as `Add`, with
   > `fn sub(Vec2 a, Vec2 b) -> Vec2`. The
   > [`ops` reference page](/docs/reference/prelude/ops) lists every
   > operator's trait.

   ```coil challenge=c07-5
   use io::sync::{println};
   use string::{format};

   class Vec2 {
       pub x: float,
       pub y: float,
   }

   impl Add for Vec2 {
       fn add(Vec2 a, Vec2 b) -> Vec2 {
           return new Vec2(a.x + b.x, a.y + b.y);
       }
   }

   impl Show for Vec2 {
       fn show(Vec2 v) -> string {
           return format("⟨%f, %f⟩", v.x, v.y);
       }
   }

   fn main() {
       let velocity = new Vec2(1.0, 0.5) + new Vec2(0.5, 0.5);
       println(format("velocity %v", velocity))?;
   }
   ```

   ```coil check=c07-5
   use tests::assert;
   use solution::{Vec2};

   test("⟨3, 1⟩ - ⟨1, 1⟩ == ⟨2, 0⟩") {
       assert!(new Vec2(3.0, 1.0) - new Vec2(1.0, 1.0) == new Vec2(2.0, 0.0));
   }

   test("⟨1, 1⟩ - ⟨3, 1⟩ is ⟨-2, 0⟩, not ⟨2, 0⟩") {
       let d = new Vec2(1.0, 1.0) - new Vec2(3.0, 1.0);
       assert!(d.x == -2.0 && d.y == 0.0);
       assert!(d != new Vec2(2.0, 0.0));
   }
   ```

6. Check something: `Pair<T>.max()` is only defined when `T: Ord`. Call
   it on a `Pair` of strings, then on a `Pair` of `Vec2`s. Which compiles?

   ```coil challenge=c07-6
   use io::sync::{println};

   class Pair<T> {
       pub first: T,
       pub second: T,
   }

   impl Pair<T: Ord> {
       pub fn max() -> T {
           if self.first > self.second {
               return self.first;
           }
           return self.second;
       }
   }

   class Vec2 {
       pub x: float,
       pub y: float,
   }

   fn main() {
       let words = new Pair("pear", "plum");
       println(words.max())?;
       let points = new Pair(new Vec2(1.0, 2.0), new Vec2(3.0, 4.0));
       let top = points.max();
   }
   ```

Next: [Chapter 8 — Functions as values](/docs/manual/tutorial/08-closures).
