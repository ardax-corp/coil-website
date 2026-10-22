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

The stdlib module [`collections`](/docs/reference/collections) has `sort`,
and [`collections::vec`](/docs/reference/collections/vec) has functional
helpers such as `map`, `filter`, `contains` and `index_of`. They return new
vectors and leave the original unchanged:

```coil
use io::sync::{println};
use string::{format};
use collections::{sort};
use collections::vec::{map, filter, contains};

fn main() {
    let scores: Vec<int> = [70, 95, 82, 60];
    let ranked = sort(scores);
    let curved = map(scores, fn (int s) => s + 5);
    let passed = filter(scores, fn (int s) => s >= 70);

    println(format("lowest %i, highest %i", ranked[0], ranked[3]))?;
    println(format("first curved score %i", curved[0]))?;
    println(format("%i passed, anyone at 95: %z", passed.len(), contains(scores, 95)))?;
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

A [`HashMap`](/docs/reference/collections/map/HashMap) stores values under
keys. `get` takes a fallback that it returns when the key is missing:

```coil
use io::sync::{println};
use string::{format};
use collections::map::{HashMap};

fn main() {
    let stock: HashMap<string, int> = HashMap::new();
    stock.insert("apples", 12);
    stock.insert("pears", 4);
    stock.insert("apples", stock.get("apples", 0) + 6);   // replace a value

    println(format("apples: %i", stock.get("apples", 0)))?;
    println(format("plums: %i", stock.get("plums", 0)))?;
    println(format("have pears: %z", stock.contains("pears")))?;

    for entry in stock {
        println(format("%s -> %i", entry.key, entry.value))?;
    }
}
```

Output:

```text
apples: 18
plums: 0
have pears: true
apples -> 18
pears -> 4
```

A loop over a map visits the entries in the order their keys were first
inserted. Each entry has a `key` and a `value`.

Keys can be any type that can be hashed and compared: `int`, `string`,
`bool` and your own types that derive `Hash` and `Eq` (chapter 4).

## Sets

A [`HashSet`](/docs/reference/collections/set/HashSet) holds each value at
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
    println(format("%i distinct, %i repeated", seen.size(), repeats))?;
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
| [`TreeMap`](/docs/reference/collections/tree/TreeMap) | A map that keeps its keys sorted |
| [`VecDeque`](/docs/reference/collections/deque/VecDeque) | A queue: fast push and pop at both ends |
| [`List`](/docs/reference/collections/list/List) | A singly-linked list |
| [`BitSet`](/docs/reference/collections/bitset/BitSet) | A compact set of small non-negative integers |

## Exercises

1. Read a list of temperatures from an array and print the highest and the
   average.
2. Count how many times each word occurs in
   `["a", "b", "a", "c", "b", "a"]` with a `HashMap<string, int>`.
3. Remove duplicates from a `Vec<int>` while keeping the original order,
   using a `HashSet`.

Next: [Chapter 4 — Classes](/docs/manual/tutorial/04-classes).
