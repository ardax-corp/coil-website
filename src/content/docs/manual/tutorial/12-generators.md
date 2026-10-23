---
title: Chapter 12 — Generators
description: "gen fn functions that yield a sequence of values lazily, looping over them with for, infinite sequences, pipelines, sending values back in, and yield from."
---

# Chapter 12 — Generators

A generator is a function that produces a sequence of values one at a
time, pausing after each. It computes the next value only when it is asked
for, so a generator can describe a long or even endless sequence without
building it in memory.

## gen fn and yield

Mark a function with `gen` and use `yield` to hand out each value. A `for`
loop runs the generator until it finishes:

```coil
use io::sync::{println};

gen fn countdown(int from) {
    let n = from;
    while n > 0 {
        yield n;
        n--;
    }
}

fn main() {
    for n in countdown(3) {
        println(show(n))?;
    }
    println("liftoff")?;
}
```

Output:

```text
3
2
1
liftoff
```

Calling `countdown(3)` does not run any of its code. It returns a paused
generator; each round of the loop resumes it until the next `yield`, and the
loop ends when the function returns.

## Endless sequences

Because values are produced on demand, a generator may never finish. The
consumer decides when to stop:

```coil
use io::sync::{println};

gen fn squares() {
    let n = 1;
    while true {
        yield n * n;
        n++;
    }
}

fn main() {
    for sq in squares() {
        if sq > 50 {
            break;
        }
        println(show(sq))?;
    }
}
```

Output:

```text
1
4
9
16
25
36
49
```

## Pipelines

A generator can take another generator as input. Its type is
`coroutine<int>` for one that yields `int`s. Chaining them builds a
pipeline in which each value flows through every stage before the next one
is produced:

```coil
use io::sync::{println};

gen fn naturals() {
    let n = 1;
    while true {
        yield n;
        n++;
    }
}

gen fn only_odd(coroutine<int> source) {
    for x in source {
        if x % 2 == 1 {
            yield x;
        }
    }
}

gen fn take(coroutine<int> source, int count) {
    let left = count;
    for x in source {
        if left == 0 {
            break;
        }
        yield x;
        left--;
    }
}

fn main() {
    for x in take(only_odd(naturals()), 4) {
        println(show(x))?;
    }
}
```

Output:

```text
1
3
5
7
```

## Resuming by hand

`for` is the usual way to use a generator, but you can also drive one
yourself. `resume g` runs it to its next `yield` and returns the value, and
`done(g)` says whether it has finished:

```coil
use io::sync::{println};
use string::{format};

gen fn steps() {
    yield "mix";
    yield "bake";
    yield "serve";
}

fn main() {
    let recipe = steps();
    let first = resume recipe;
    let second = resume recipe;
    println(format("%s, then %s, finished: %z", first, second, done(recipe)))?;
}
```

Output:

```text
mix, then bake, finished: false
```

Resuming a generator that has finished is a panic, so check `done` first
when you are not sure.

## Sending values in

`resume g with value` passes a value into the generator, where it becomes the
result of the `yield` that paused it. That turns a generator into a small
state machine that reacts to input:

```coil
use io::sync::{println};
use string::{format};

gen fn running_average() {
    let total = 0.0;
    let count = 0.0;
    while true {
        let x = yield total / count;
        total += x;
        count += 1.0;
    }
}

fn main() {
    let avg = running_average();
    resume avg;                        // run to the first yield
    resume avg with 10.0;
    let now = resume avg with 20.0;
    println(format("average %f", now))?;
}
```

Output:

```text
average 15.0
```

The first `resume` starts the generator and runs it to its first `yield`;
values sent after that arrive one per `yield`.

## yield from

`yield from other` passes on every value of another generator before
continuing:

```coil
use io::sync::{println};

gen fn greeting() {
    yield "hello";
    yield "there";
}

gen fn conversation() {
    yield from greeting();
    yield "bye";
}

fn main() {
    for word in conversation() {
        println(word)?;
    }
}
```

Output:

```text
hello
there
bye
```

## Generators and tasks

Generators are for producing values. To run several pieces of work at the
same time, for example to wait on many network connections, use tasks,
the subject of the next chapter. Your own types can also be used in `for`
loops by implementing the [`Iterator`](/docs/reference/prelude/Iterator)
trait, which is sometimes simpler than a generator when the state is
already in an object.

## Henry's challenges

> [!henry]
> A nautilus adds one chamber at a time and never builds ahead. Generators
> work the same way. Use `gen fn`, `yield`, `resume` and `yield from`.

1. Write `gen fn fibonacci()` and print the Fibonacci numbers below 1000.

   > [!hint]
   > Let the generator run for ever and stop in the consumer: the `for`
   > loop `break`s at the first number that reaches 1000.

2. Write `gen fn lines_of(string text)` that yields one line at a time, and
   use it with a `take` like the one above to print the first two lines.

   > [!hint]
   > `take` above accepts a `coroutine<int>`. Lines are strings, so your
   > copy takes a `coroutine<string>`.

3. Write a generator that receives words with `resume … with` and yields
   how many distinct words it has seen so far.

   > [!hint]
   > The first `resume` only starts the generator and runs it to its first
   > `yield`; the words you send after that arrive one per `yield`. A
   > `HashSet` (chapter 3) does the counting.

4. Check something: add `let _ = println("made " + show(n));` before the
   `yield` in `naturals`, and run `take(naturals(), 3)`. How many numbers
   does `naturals` make? Change `take` so it makes exactly three.

   > [!hint]
   > `take` asks its source for the next value before checking whether it
   > still needs one. Checking `left` right after the `yield` stops the
   > loop before it pulls one value too many.

5. Check something: print the value of the very first `resume avg` in the
   running average. What is `0.0 / 0.0`? Make the generator yield `0.0`
   until it has seen a number.

6. Check something: make a generator that yields once, then `resume` it
   three times, printing `done(g)` after each. When does `done` turn
   `true`, and what happens on the third `resume`?

Next: [Chapter 13 — Tasks](/docs/manual/tutorial/13-tasks).
