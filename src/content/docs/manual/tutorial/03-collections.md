---
title: Chapter 3 — Collections
description: "Arrays, growable vectors, maps and sets: creating them, looping over them, and the stdlib helpers for sorting, mapping and filtering."
---

# Chapter 3 — Collections

Most programs work with many values at once. This chapter covers the
collections you will use every day: fixed arrays, growable vectors (`Vec`),
hash maps and hash sets.

## Arrays and vectors

An array literal like `[1, 2, 3]` has a fixed length that is part of its
type (`[int; 3]`). A `Vec` can grow and shrink. Annotating a variable as
`Vec<T>` turns an array literal into a vector:

```coil
use io::sync::{println};
use string::{format};

fn main() {
    let primes = [2, 3, 5, 7];          // [int; 4], fixed length
    let names: Vec<string> = ["Ada", "Grace"];
    names.push("Alan");

    println(format("%i primes, %i names", primes.len(), names.len()))?;
    println(format("first prime %i, last name %s", primes[0], names[2]))?;

    names[0] = "Ada L.";
    for name in names {
        println(name)?;
    }
}
```

Output:

```text
4 primes, 3 names
first prime 2, last name Alan
Ada L.
Grace
Alan
```

Indexes start at 0. Reading or writing past the end stops the program with
a panic (`index out of bounds`), and a constant index past the end of a
fixed array is caught at compile time.

`Vec::new()` makes an empty vector; give it a type so the compiler knows
what it will hold:

```coil
let queue: Vec<int> = Vec::new();
```

The methods you will use most:

| Method | What it does |
|--------|--------------|
| `v.push(x)` | Add `x` at the end |
| `v.pop()` | Remove the last element; returns `Some(x)`, or `None` when empty |
| `v.insert(i, x)` | Insert `x` at index `i`, moving the rest up |
| `v.remove(i)` | Remove the element at `i`; returns `Some(x)`, or `None` if `i` is out of range |
| `v.len()` | Number of elements |
| `v.clear()` | Remove everything |

`pop` and `remove` return an `Option`, because there may be nothing to
return. `v.pop() ?? 0` gives the element or `0` when there was none;
chapter 6 explains `Option` and `??` in full. Every method is listed on the
[`Vec` reference page](/docs/reference/prelude/Vec).

## Looping with an index

`for x in v` gives you the elements. When you need the position too, loop
over a range of indexes:

```coil
use io::sync::{println};
use string::{format};

fn main() {
    let todo: Vec<string> = ["write", "test", "ship"];
    for i in 0..todo.len() {
        println(format("%i. %s", i + 1, todo[i]))?;
    }
}
```

Output:

```text
1. write
2. test
3. ship
```

## Sorting, mapping and filtering

The stdlib module [`collections`](/packages/stdlib/reference/collections) has `sort`,
and [`collections::vec`](/packages/stdlib/reference/collections/vec) has functional
methods such as `map`, `filter`, `contains` and `index_of`. They return new
vectors and leave the original unchanged:

```coil
use io::sync::{println};
use string::{format};
use collections::{sort};
use collections::vec::{VecOps, VecEq};

fn main() {
    let scores: Vec<int> = [70, 95, 82, 60];
    let ranked = sort(scores);
    let curved = scores.map(fn (int s) => s + 5);
    let passed = scores.filter(fn (int s) => s >= 70);

    println(format("lowest %i, highest %i", ranked[0], ranked[3]))?;
    println(format("first curved score %i", curved[0]))?;
    println(format("%i passed, anyone at 95: %z", passed.len(), scores.contains(95)))?;
}
```

Output:

```text
lowest 60, highest 95
first curved score 75
3 passed, anyone at 95: true
```

`fn (int s) => s + 5` is a function written inline, a *lambda*. Chapter 8
covers them; for now, read it as "given `s`, return `s + 5`".

## Maps

A [`HashMap`](/packages/stdlib/reference/collections/map/HashMap) stores values under
keys. `get` returns an `Option`: `Some(value)` when the key is there, `None`
when it is missing. `get_or` takes a fallback to return instead:

```coil
use io::sync::{println};
use string::{format};
use collections::map::{HashMap};

fn main() {
    let stock: HashMap<string, int> = HashMap::new();
    stock.insert("apples", 12);
    stock.insert("pears", 4);
    stock.insert("apples", stock.get_or("apples", 0) + 6);   // replace a value

    println(format("apples: %i", stock.get("apples") ?? 0))?;
    println(format("plums: %z", stock.get("plums").is_some()))?;
    println(format("have pears: %z", stock.contains("pears")))?;

    for entry in stock {
        println(format("%s -> %i", entry.key, entry.value))?;
    }
}
```

Output:

```text
apples: 18
plums: false
have pears: true
apples -> 18
pears -> 4
```

A loop over a map visits the entries in the order their keys were first
inserted. Each entry has a `key` and a `value`.

Keys can be any type that can be hashed and compared: `int`, `string`,
`bool` and your own types that derive `Hash` and `Eq` (chapter 4).

## Sets

A [`HashSet`](/packages/stdlib/reference/collections/set/HashSet) holds each value at
most once. It is the quickest way to ask "have I seen this before?":

```coil
use io::sync::{println};
use string::{format};
use collections::set::{HashSet};

fn main() {
    let words: Vec<string> = ["the", "cat", "saw", "the", "dog"];
    let seen: HashSet<string> = HashSet::new();
    let repeats = 0;
    for w in words {
        if seen.contains(w) {
            repeats++;
        }
        seen.insert(w);
    }
    println(format("%i distinct, %i repeated", seen.len(), repeats))?;
}
```

Output:

```text
4 distinct, 1 repeated
```

## Other collections

The stdlib has a few more, each with its own reference page:

| Type | Use it for |
|------|------------|
| [`TreeMap`](/packages/stdlib/reference/collections/tree/TreeMap) | A map that keeps its keys sorted |
| [`VecDeque`](/packages/stdlib/reference/collections/deque/VecDeque) | A queue: fast push and pop at both ends |
| [`List`](/packages/stdlib/reference/collections/list/List) | A singly-linked list |
| [`BitSet`](/packages/stdlib/reference/collections/bitset/BitSet) | A compact set of small non-negative integers |

## Henry's challenges

> [!henry]
> A nautilus keeps everything it owns in neat chambers, and so do these
> collections. Arrays, vectors, maps and sets are all you need here.

1. Keep a week of temperatures in an array and print the highest and the
   average. Try it with a week where every day is below zero.

   > [!hint]
   > Starting `highest` at `0` gives the wrong answer for a cold week.
   > Start it at the first element instead. For the average, convert both
   > the total and `len()` with `as float`.

   ```coil challenge=c03-1
   use io::sync::{println};
   use string::{format};

   fn highest(Vec<int> temps) -> int {
       return 0;
   }

   fn average(Vec<int> temps) -> float {
       return 0.0;
   }

   fn main() {
       let week: Vec<int> = [3, 7, 5, 9, 4, 6, 8];
       println(format("highest %i, average %f", highest(week), average(week)))?;
       let cold: Vec<int> = [-4, -9, -1, -6, -3, -8, -2];
       println(format("highest %i, average %f", highest(cold), average(cold)))?;
   }
   ```

   ```coil check=c03-1
   use tests::assert;
   use solution::{highest, average};

   test("the highest of a warm week") {
       assert!(highest([3, 7, 5, 9, 4, 6, 8]) == 9);
   }

   test("the highest of a week below zero is -1") {
       assert!(highest([-4, -9, -1, -6, -3, -8, -2]) == -1);
   }

   test("the average keeps its fraction") {
       let a = average([3, 7, 5, 9, 4, 6, 8]);
       assert!(a == 6.0, "got " + show(a));
       let b = average([1, 2, 2, 2, 2, 2, 2]);
       assert!(b > 1.857 && b < 1.858, "got " + show(b));
   }

   test("the average of a cold week is negative") {
       let a = average([-4, -9, -1, -6, -3, -8, -2]);
       assert!(a > -4.715 && a < -4.714, "got " + show(a));
   }
   ```

2. Count how many times each word occurs in
   `["a", "b", "a", "c", "b", "a"]` with a `HashMap<string, int>`, and
   print each word with its count.

   > [!hint]
   > `counts.get_or(w, 0) + 1` is the new count whether or not the word has
   > been seen yet, and `insert` replaces the old one.

   ```coil challenge=c03-2
   use io::sync::{println};
   use string::{format};
   use collections::map::{HashMap};

   fn count_words(Vec<string> words) -> HashMap<string, int> {
       let counts: HashMap<string, int> = HashMap::new();
       return counts;
   }

   fn main() {
       let counts = count_words(["a", "b", "a", "c", "b", "a"]);
       for entry in counts {
           println(format("%s: %i", entry.key, entry.value))?;
       }
   }
   ```

   ```coil check=c03-2
   use tests::assert;
   use solution::{count_words};

   test("a occurs three times, b twice, c once") {
       let counts = count_words(["a", "b", "a", "c", "b", "a"]);
       assert!(counts.get_or("a", 0) == 3, "a: " + show(counts.get_or("a", 0)));
       assert!(counts.get_or("b", 0) == 2, "b: " + show(counts.get_or("b", 0)));
       assert!(counts.get_or("c", 0) == 1, "c: " + show(counts.get_or("c", 0)));
   }

   test("words that never occur are not counted") {
       let counts = count_words(["a"]);
       assert!(!counts.contains("b"));
   }
   ```

3. Remove duplicates from a `Vec<int>` while keeping the original order,
   using a `HashSet`.

   > [!hint]
   > Looping over the set would lose the order. Use the set only to answer
   > "seen it already?", and push each new value onto a fresh `Vec`.

   ```coil challenge=c03-3
   use io::sync::{println};
   use string::{format};
   use collections::set::{HashSet};

   fn dedup(Vec<int> xs) -> Vec<int> {
       return xs;
   }

   fn main() {
       println(format("%v", dedup([3, 1, 3, 2, 1, 5])))?;
   }
   ```

   ```coil check=c03-3
   use tests::assert;
   use solution::{dedup};

   test("[3, 1, 3, 2, 1, 5] becomes [3, 1, 2, 5]") {
       let d = dedup([3, 1, 3, 2, 1, 5]);
       assert!(show(d) == "[3, 1, 2, 5]", "got " + show(d));
   }

   test("a vector without duplicates stays as it is") {
       let d = dedup([4, 2, 9]);
       assert!(show(d) == "[4, 2, 9]", "got " + show(d));
   }

   test("an empty vector stays empty") {
       let xs: Vec<int> = [];
       assert!(dedup(xs).len() == 0);
   }
   ```

4. Build a reversed copy of a `Vec<int>` with a loop over its indexes.

   > [!hint]
   > The last index is `len() - 1`, not `len()`. Reading `xs[xs.len()]` is
   > one past the end and panics.

   ```coil challenge=c03-4
   use io::sync::{println};
   use string::{format};

   fn reversed(Vec<int> xs) -> Vec<int> {
       let out: Vec<int> = Vec::new();
       return out;
   }

   fn main() {
       println(format("%v", reversed([1, 2, 3, 4])))?;
   }
   ```

   ```coil check=c03-4
   use tests::assert;
   use solution::{reversed};

   test("[1, 2, 3, 4] becomes [4, 3, 2, 1]") {
       let r = reversed([1, 2, 3, 4]);
       assert!(show(r) == "[4, 3, 2, 1]", "got " + show(r));
   }

   test("the original is left alone") {
       let xs: Vec<int> = [1, 2, 3];
       let _ = reversed(xs);
       assert!(show(xs) == "[1, 2, 3]", "the original became " + show(xs));
   }

   test("one element and no elements") {
       assert!(show(reversed([7])) == "[7]");
       let none: Vec<int> = [];
       assert!(reversed(none).len() == 0);
   }
   ```

5. Check something: after `let ranked = sort(scores);`, print both
   `scores` and `ranked` with `%v`. Did `sort` change `scores`?

   ```coil challenge=c03-5
   use io::sync::{println};
   use string::{format};
   use collections::{sort};

   fn main() {
       let scores: Vec<int> = [70, 95, 82, 60];
       let ranked = sort(scores);
       println(format("scores %v, ranked %v", scores, ranked))?;
   }
   ```

6. Check something: what happens when you read `names[2]` from a
   two-element `Vec`? And `primes[4]` from the fixed array `[2, 3, 5, 7]`?
   One fails while the program runs, the other before it starts. Which is
   which?

   ```coil challenge=c03-6
   use io::sync::{println};

   fn main() {
       let names: Vec<string> = ["Ada", "Grace"];
       println(names[2])?;
       let primes = [2, 3, 5, 7];
       println(show(primes[4]))?;
   }
   ```

7. Check something: call `pop()` and `remove(3)` on an empty
   `Vec<int>` and print what they return with `%v`.

   ```coil challenge=c03-7
   use io::sync::{println};
   use string::{format};

   fn main() {
       let xs: Vec<int> = [];
       println(format("pop: %v", xs.pop()))?;
       println(format("remove(3): %v", xs.remove(3)))?;
   }
   ```

Next: [Chapter 4 — Classes](/docs/manual/tutorial/04-classes).
