---
title: Chapter 14 — Threads
description: "Running CPU-heavy work in parallel on OS threads with spawn and join, passing values over channels, and sharing state with a mutex."
---

# Chapter 14 — Threads

Tasks (chapter 13) take turns on one thread, which is ideal for waiting but
does nothing for heavy computation. Threads run truly in parallel on
several CPU cores. Each thread has its own memory, and values are copied
when they move between threads, so two threads can never change the same
object at the same time.

Everything here comes from the built-in [`thread`](/docs/reference/thread)
module. Its functions return `Result<…, ThreadError>`.

## spawn and join

`spawn(f)` runs the function `f` on another thread, and `spawn(f, arg)`
passes it one argument. `join` waits for the thread and returns what `f`
returned:

```coil
use io::sync::{println};
use string::{format};
use thread::{spawn, join};

fn count_primes(int limit) -> int {
    let count = 0;
    for n in 2..limit {
        let prime = true;
        let d = 2;
        while d * d <= n {
            if n % d == 0 {
                prime = false;
                break;
            }
            d++;
        }
        if prime {
            count++;
        }
    }
    return count;
}

fn both() -> Result<(int, int), ThreadError> {
    let small = spawn(count_primes, 50000)?;
    let large = spawn(count_primes, 60000)?;
    return Ok((join(small)?, join(large)?));
}

fn main() {
    match both() {
        Ok(counts) => {
            println(format("%i primes below 50000, %i below 60000", counts[0], counts[1]))?;
        },
        Err(e) => {
            println("thread failed: " + show(e))?;
        },
    }
}
```

Output:

```text
5133 primes below 50000, 6057 below 60000
```

The two counts run at the same time. `both` returns its own
`Result<…, ThreadError>`, because, as chapter 6 explained, one function
uses `?` with one error type; `main` only prints.

The argument, and anything a lambda captures with `use (…)`, is copied to
the new thread. Objects are copied too, so changes a thread makes to its
copy are not seen by the caller. Return results instead, or use a channel or
a mutex.

## Channels

`channel()` makes a pair: index `0` is the sending end and `1` the receiving
end. `send` puts a value in, `recv` waits for the next one, and `close`
tells the receiver no more values are coming. To send work to a thread and
get answers back, use two channels:

```coil
use io::sync::{println};
use string::{format};
use thread::{spawn, join, channel, send, recv, close, Sender, Receiver};

fn squarer((Receiver<int>, Sender<int>) ends) {
    while let Ok(job) = recv(ends[0]) {
        send(ends[1], job * job)?;
    }
}

fn sum_of_squares() -> Result<int, ThreadError> {
    let jobs = channel()?;
    let results = channel()?;
    let t = spawn(squarer, (jobs[1], results[0]))?;
    for n in 1..=3 {
        send(jobs[0], n)?;
    }
    close(jobs[0])?;
    let total = 0;
    for i in 0..3 {
        total += recv(results[1])?;
    }
    (join(t)?)?;
    return Ok(total);
}

fn main() {
    println(format("%v", sum_of_squares()))?;
}
```

Output:

```text
Ok(14)
```

Handles carry the type of value they hold: `Sender<int>` and
`Receiver<int>` move `int`s, `Thread<T>` joins as the `T` its function
returned, and `Mutex<T>` guards a `T`. A bare `Sender` or `Thread` lets the
compiler infer `T` from how the handle is used. Channels carry any value that
can be copied between threads.

`squarer` uses `?`, so it returns a `Result` of its own. `join(t)?` gives back
that `Result`, and the second `?` passes on an error the thread hit:
`(join(t)?)?`. Dropping it would be warning `E0136`.

## Mutex

When several threads must update one value, put it in a mutex.
`with_lock(m, f)` locks it, calls `f` with the current value, stores the
first element of what `f` returns, and gives you the second:

```coil
use io::sync::{println};
use string::{format};
use thread::{spawn, join, mutex, with_lock, Mutex};

fn add_thousand(Mutex<int> counter) {
    for i in 0..1000 {
        with_lock(counter, fn (int n) => (n + 1, 0))?;
    }
}

fn count() -> Result<int, ThreadError> {
    let counter = mutex(0)?;
    let a = spawn(add_thousand, counter)?;
    let b = spawn(add_thousand, counter)?;
    (join(a)?)?;
    (join(b)?)?;
    return Ok(with_lock(counter, fn (int n) => (n, n))?);
}

fn main() {
    println(format("%v", count()))?;
}
```

Output:

```text
Ok(2000)
```

The lock is held only while `f` runs, so no update is lost and no lock is
ever left held. For data that is read often and written rarely,
`rwlock` with `with_read` and `with_write` lets many readers in at once.

## Tasks or threads?

| Use | When |
|-----|------|
| Tasks | Waiting on many things: sockets, files, timers. Thousands are cheap. |
| Threads | Keeping several CPU cores busy with computation. |
| Both | Tasks for IO, with `task::blocking(f)` to run heavy steps on a worker thread. |

The compiler can also parallelise some pure recursive functions on its own;
`coil dissect --effects` shows what it decided and why. See
[effects](/docs/language/effects).

## Exercises

1. Split `count_primes(200000)` into four threads that each count a quarter
   of the range, and add up their results.
2. Write a worker pool: three threads reading jobs from one channel and
   writing results to another.
3. Use a mutex holding a `Vec<string>` to collect log lines from several
   threads, then print them.

Next: [Chapter 15 — Macros](/docs/manual/tutorial/15-macros).
