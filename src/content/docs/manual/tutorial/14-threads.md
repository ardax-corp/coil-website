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
module. Its functions report failures in three error sets: `spawn`, `join`
and `detach` return a `ThreadError`, channel functions a `ChannelError`,
and lock functions a `LockError`.

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
use thread::{spawn, join, channel, send, recv, close, Sender, Receiver, ChannelError};

fn squarer((Receiver<int>, Sender<int>) ends) {
    while let Ok(job) = recv(ends[0]) {
        send(ends[1], job * job)?;
    }
}

fn sum_of_squares() -> Result<int, ChannelError> {
    let jobs = channel()?;
    let results = channel()?;
    let t = match spawn(squarer, (jobs[1], results[0])) {
        Ok(t) => t,
        Err(e) => panic "spawn failed: " + show(e),
    };
    for n in 1..=3 {
        send(jobs[0], n)?;
    }
    close(jobs[0])?;
    let total = 0;
    for i in 0..3 {
        total += recv(results[1])?;
    }
    match join(t) {
        Ok(done) => done?,
        Err(e) => panic "join failed: " + show(e),
    }
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

`sum_of_squares` returns a `Result<…, ChannelError>`, because, as chapter 6
explained, one function uses `?` with one error type. Its channel calls take
`?`, and `spawn` and `join`, which report a `ThreadError`, are matched
instead. `squarer` uses `?` too, so it returns a `Result` of its own: `join`
gives back that `Result`, and `done?` passes on an error the thread hit.
Dropping it would be warning `E0136`.

## Mutex

When several threads must update one value, put it in a mutex.
`with_lock(m, f)` locks it, calls `f` with the current value, stores the
first element of what `f` returns, and gives you the second:

```coil
use io::sync::{println};
use string::{format};
use thread::{spawn, join, mutex, with_lock, Mutex, ThreadError, LockError};

fn add_thousand(Mutex<int> counter) {
    for i in 0..1000 {
        with_lock(counter, fn (int n) => (n + 1, 0))?;
    }
}

fn run_both(Mutex<int> counter) -> Result<unit, ThreadError> {
    let a = spawn(add_thousand, counter)?;
    let b = spawn(add_thousand, counter)?;
    let added_a = join(a)?;
    let added_b = join(b)?;
    if added_a.is_err() || added_b.is_err() {
        panic "a thread could not lock the counter";
    }
    return Ok(());
}

fn count() -> Result<int, LockError> {
    let counter = mutex(0)?;
    match run_both(counter) {
        Ok(_) => {},
        Err(e) => panic "thread failed: " + show(e),
    }
    return with_lock(counter, fn (int n) => (n, n));
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
ever left held. Lock calls report a `LockError`, so `count` keeps them and
`run_both` keeps the thread calls, each with its own `?`. For data that is read often and written rarely,
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

## Henry's challenges

> [!henry]
> One nautilus, one shell: each thread keeps its own memory, and values
> are copied on the way in. Use `spawn`, `join`, channels and mutexes.

1. Count the primes below 200000 with four threads that each count a
   quarter of the range, and add up their results. Check the total against
   a single-threaded count.

   > [!hint]
   > `count_primes` always starts at 2, so write a version that counts in
   > a range. `spawn(f, arg)` passes one argument; a tuple `(lo, hi)`
   > carries two. Remember that 0 and 1 are not primes.

   ```coil challenge=c14-1
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

   fn main() {
       let together = 0; // the four threads' counts added up
       println(format("four threads: %i, one thread: %i", together, count_primes(200000)))?;
   }
   ```

   ```text expect=c14-1
   four threads: 17984, one thread: 17984
   ```

2. Write a worker pool: three threads reading jobs from one channel and
   writing results to another. Send nine jobs and add up the results.

   > [!hint]
   > All three workers can take the same receiving end, `jobs[1]`. Close
   > the jobs channel once every job is sent, or the workers' `recv` loops
   > never end and `join` waits for ever. `spawn` and `join` fail with
   > `ThreadError` while the channel calls fail with `ChannelError`, so
   > start and join the workers in a helper that matches on them.

   ```coil challenge=c14-2
   use io::sync::{println};
   use string::{format};
   use thread::{spawn, join, channel, send, recv, close, Sender, Receiver, Thread};

   // Each job is a number; a worker sends back ten times it.
   fn worker((Receiver<int>, Sender<int>) ends) {
   }

   fn run() -> Result<int, ChannelError> {
       let jobs = channel()?;
       let results = channel()?;
       let total = 0;
       // Start three workers, send the jobs 1 to 9, add up the results.
       return Ok(total);
   }

   fn main() {
       println(format("total %v", run()))?;
   }
   ```

   ```text expect=c14-2
   total Ok(450)
   ```

3. Use a mutex holding a `Vec<string>` to collect log lines from two
   threads, then print them.

   > [!hint]
   > `with_lock` stores the first element of what the lambda returns, so
   > push onto the vector and return `(lines, 0)`. Keep that lambda free
   > of `use (…)` captures for now: a capturing lambda currently makes
   > `with_lock` fail
   > ([coil-lang#1979](https://github.com/ardax-corp/coil-lang/issues/1979)),
   > so give each thread its own function with its own text.

   ```coil challenge=c14-3
   use io::sync::{println};
   use thread::{spawn, join, mutex, with_lock, Mutex};

   fn main() {
       // Two threads push log lines onto a Mutex<Vec<string>>; print them after join.
   }
   ```

4. Check something: pass a `Counter` object from chapter 4 to a thread
   that adds one to it and returns the new value. After `join`, what does
   the thread return, and what is the caller's `c.value`? Compare with
   `bump` in chapter 4.

   ```coil challenge=c14-4
   use io::sync::{println};
   use string::{format};
   use thread::{spawn, join};

   class Counter {
       pub value: int,
   }

   fn bump(Counter c) -> int {
       c.value++;
       return c.value;
   }

   fn main() {
       let c = new Counter(0);
       match spawn(bump, c) {
           Ok(t) => {
               println(format("the thread returned %v", join(t)))?;
           },
           Err(e) => {
               println("spawn failed: " + show(e))?;
           },
       }
       println(format("c.value is %i", c.value))?;
   }
   ```

5. Check something: in `sum_of_squares`, write `join(t)?;` instead of
   the `match` on `join(t)`. What does the compiler say?

Next: [Chapter 15 — Macros](/docs/manual/tutorial/15-macros).
