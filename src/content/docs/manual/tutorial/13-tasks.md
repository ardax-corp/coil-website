---
title: Chapter 13 — Tasks
description: "Concurrent work on one thread with task::scope and spawn: waiting on IO and timers, channels between tasks, timeouts and cancellation, and a small TCP echo server."
---

# Chapter 13 — Tasks

A program that talks to the network or the disk spends most of its time
waiting. Tasks let it wait on many things at once: while one task waits for
a reply, the others keep running. All tasks run on one thread and share the
same memory, so they need no locks.

Everything here comes from the compiler's built-in
[`task`](/docs/reference/task) module.

## Scopes and spawn

`scope` runs a function that can start tasks with `s.spawn(…)`. Each spawn
returns a handle whose `join()` waits for the task's result. The scope
itself finishes only when every task started in it has finished, so no task
can outlive the code that started it:

```coil
use io::sync::{println};
use task::{scope, Scope, sleep};

fn fetch(string name, int ms) -> string {
    sleep(ms);                      // stands in for a network request
    return name;
}

fn main() {
    let result = scope(fn (Scope s) {
        let slow = s.spawn(fn () => fetch("slow", 50));
        let fast = s.spawn(fn () => fetch("fast", 10));
        return fast.join().unwrap_or("?") + " finished before " + slow.join().unwrap_or("?");
    });
    println(result.unwrap_or("failed"))?;
}
```

Output:

```text
fast finished before slow
```

Both requests wait at the same time, so the whole thing takes about 50 ms,
not 60. `join` returns a `Result`, because a task can fail; `scope` returns
one too, holding the value its function returned.

## When tasks switch

A task runs until it has to wait, and only then does another task get the
thread. Tasks switch at:

- an IO wait, such as reading from a socket, accepting a connection or
  `read_line` on a stream that has no data yet;
- `task::sleep(ms)`;
- `join()` on a task that has not finished;
- `send` on a full channel or `recv` on an empty one (see below);
- `task::yield_now()`, which just lets the others run.

There is no preemption: a long calculation without any of these keeps the
thread to itself. Ordinary functions that do IO need no changes to run
inside a task. For heavy computation, use a thread instead (chapter 14), or
`task::blocking(f)`, which runs `f` on a worker thread while the other tasks
carry on.

## Channels

A [`Channel`](/docs/reference/task/Channel) passes values from one task to
another. It holds a limited number of values: `send` waits while it is
full, and `recv` waits while it is empty. After `close`, `recv` returns
what is left and then an error, which ends a `while let` loop:

```coil
use io::sync::{println};
use string::{format};
use task::{scope, Scope, channel, Channel};

fn main() {
    let queue: Channel<int> = channel(4);
    let total = scope(fn (Scope s) use (queue) {
        s.spawn(fn () use (queue) {
            for n in 1..=5 {
                let _ = queue.send(n * n);
            }
            queue.close();
        });

        let sum = 0;
        while let Ok(value) = queue.recv() {
            sum += value;
        }
        return sum;
    });
    println(format("sum of squares %i", total.unwrap_or(-1)))?;
}
```

Output:

```text
sum of squares 55
```

The producer stops each time the queue is full and resumes when the
consumer has made room, so a fast producer cannot run away with memory.

## Timeouts and cancellation

`timeout(ms, f)` runs `f` as a task and gives up when it takes too long:

```coil
use io::sync::{println};
use string::{format};
use task::{timeout, sleep};

fn slow_lookup() -> int {
    sleep(1000);
    return 42;
}

fn main() {
    let answer = timeout(20, fn () => slow_lookup());
    println(format("%v", answer))?;
}
```

Output:

```text
Err(TaskError::TimedOut)
```

You can also stop a task yourself with `handle.cancel()`. A cancelled task
stops at its next wait, runs its `defer` blocks, and its `join` returns
`Err(TaskError::Cancelled)`. Wrap a section that must not be interrupted
halfway, such as writing a record, in `task::shield(fn () { … })`.

If a task panics, the panic does not end the program. The scope cancels the
task's siblings and returns `Err(TaskError::Panicked(message))`.

## A small echo server

Putting it together: a TCP server that serves each connection in its own
task, and two clients that talk to it at the same time. The listener uses
port 0, which lets the operating system pick a free port:

```coil
use io::{Stream, close};
use io::sync::{println, write_all, read_line, accept_wait};
use io::net::tcp::{listen, connect, local_addr};
use string::{to_bytes};
use task::{scope, Scope};

// Sends every line back to the client until it disconnects.
fn serve(Stream conn) -> Result<int, IoError> {
    while let Some(line) = read_line(conn)? {
        write_all(conn, to_bytes("echo: " + line + "\n"))?;
    }
    close(conn)?;
    return Ok(0);
}

fn ask(int port, string message) -> Result<string, IoError> {
    let conn = connect("127.0.0.1", port)?;
    write_all(conn, to_bytes(message + "\n"))?;
    let reply = read_line(conn)? ?? "";
    close(conn)?;
    return Ok(reply);
}

fn main() {
    let listener = listen("127.0.0.1", 0)?;
    let (_, port) = local_addr(listener)?;

    let replies = scope(fn (Scope s) use (listener, port) {
        // The server: accept two connections, one task each.
        s.spawn(fn () use (listener, s) {
            for i in 0..2 {
                let conn = accept_wait(listener)?;
                s.spawn(fn () use (conn) => serve(conn));
            }
            return Ok(0);
        });

        // Two clients, running at the same time as the server.
        let a = s.spawn(fn () use (port) => ask(port, "hello"));
        let b = s.spawn(fn () use (port) => ask(port, "world"));
        let ra = a.join().unwrap_or(Err(IoError::Other));
        let rb = b.join().unwrap_or(Err(IoError::Other));
        return [ra.unwrap_or("no reply"), rb.unwrap_or("no reply")];
    });

    for reply in replies.unwrap_or(["failed", "failed"]) {
        println(reply)?;
    }
}
```

Output:

```text
echo: hello
echo: world
```

Run it with `--allow-net`. A real server would loop on `accept_wait` for
ever instead of twice; each connection costs one task, not one thread.

## Henry's challenges

> [!henry]
> A nautilus spends its day waiting: for the tide, for the dark, for
> dinner to drift by. Tasks are good at waiting too. Work with `scope`,
> `spawn`, channels and `timeout`.

1. Start ten tasks numbered 0 to 9, where task `i` sleeps `(10 - i) * 10`
   ms, and have each print its number when it wakes. In which order do the
   numbers appear?

   > [!hint]
   > Each lambda needs `use (i)` to see its own number. A task that only
   > prints has nothing to hand back through `?`, so print with
   > `let _ = println(…);`.

   ```coil challenge=c13-1
   use io::sync::{println};
   use task::{scope, Scope, sleep};

   fn main() {
       let r = scope(fn (Scope s) {
           // Spawn ten tasks; task i sleeps (10 - i) * 10 ms, then prints i.
           return 0;
       });
   }
   ```

   ```text expect=c13-1
   9
   8
   7
   6
   5
   4
   3
   2
   1
   0
   ```

2. Build a pipeline of three tasks connected by two channels: one produces
   the numbers 1 to 5, one squares them, one prints them.

   > [!hint]
   > Each stage must `close` the channel it writes to when it is done.
   > The next stage's `while let Ok(…) = ch.recv()` only ends when its
   > channel is closed and empty.

   ```coil challenge=c13-2
   use io::sync::{println};
   use task::{scope, Scope, channel, Channel};

   fn main() {
       let numbers: Channel<int> = channel(2);
       let squares: Channel<int> = channel(2);
       let r = scope(fn (Scope s) use (numbers, squares) {
           // Three tasks: produce 1 to 5, square them, print them.
           return 0;
       });
   }
   ```

   ```text expect=c13-2
   1
   4
   9
   16
   25
   ```

3. Check something: take the `close` out of the squaring stage in your
   pipeline and run it again. What does Coil report instead of hanging?

   ```coil challenge=c13-3
   use io::sync::{println};
   use task::{scope, Scope, channel, Channel};

   fn main() {
       let numbers: Channel<int> = channel(2);
       let r = scope(fn (Scope s) use (numbers) {
           s.spawn(fn () use (numbers) {
               for n in 1..=5 {
                   let _ = numbers.send(n);
               }
               // numbers.close();
           });
           s.spawn(fn () use (numbers) {
               while let Ok(n) = numbers.recv() {
                   let _ = println(show(n));
               }
           });
           return 0;
       });
       println(show(r))?;
   }
   ```

4. Change the echo server to serve three clients, and add a third client
   that sends `again`.

5. Check something: spawn one task that prints `busy 0`, `busy 1`,
   `busy 2` in a loop and a second task that prints `other`. Where does
   `other` appear? Now call `task::yield_now()` after each `busy` line.

   > [!hint]
   > Tasks switch only where one of them waits, and printing to the
   > terminal does not wait. `yield_now()` is a deliberate wait.

   ```coil challenge=c13-5
   use io::sync::{println};
   use task::{scope, Scope, yield_now};

   fn main() {
       let r = scope(fn (Scope s) {
           s.spawn(fn () {
               for i in 0..3 {
                   let _ = println("busy " + show(i));
               }
           });
           s.spawn(fn () {
               let _ = println("other");
           });
           return 0;
       });
   }
   ```

6. Check something: in one scope, spawn a task that sleeps 50 ms and then
   prints, and another that sleeps 10 ms and panics. Does the sleeper ever
   print? What does `scope` return?

   ```coil challenge=c13-6
   use io::sync::{println};
   use task::{scope, Scope, sleep};

   fn main() {
       let r = scope(fn (Scope s) {
           s.spawn(fn () {
               sleep(50);
               let _ = println("the sleeper woke up");
           });
           s.spawn(fn () {
               sleep(10);
               panic "something broke";
           });
           return 0;
       });
       println(show(r))?;
   }
   ```

Next: [Chapter 14 — Threads](/docs/manual/tutorial/14-threads).
