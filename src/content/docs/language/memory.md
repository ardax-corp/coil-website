---
title: "Memory management"
description: "How Coil manages memory: a tracing garbage collector as the backstop, a nursery for young objects, early freeing the compiler proves safe, and checked region blocks."
---

# Memory management

Coil programs never free memory by hand. Four layers share the work, each
one cheaper than the one below it:

1. **The compiler frees early.** Objects it can prove dead are freed where
   they die: at the end of their scope, right after a call, or when an
   assignment replaces them.
2. **`region` blocks** free everything a unit of work made, in one go,
   checked by the compiler.
3. **The nursery** holds new objects and empties itself with a quick
   minor collection that copies out the few still alive.
4. **The tracing collector** reclaims whatever the program can no longer
   reach. It is the backstop for everything the other three miss.

None of this changes what a program computes. It changes when memory comes
back, and with it how often the collector has to run.

## Values and objects

Most values never touch the heap. An `int`, `float`, `bool` or `byte`, a
scalar `#[repr]` enum, and many `Option` and `Result` values live in a
single word, in a local or a register. The compiler also takes small
tuples and enums apart into locals when they do not outlive a function.

Class instances, strings, vectors, records, tuples and enums with payloads
that do outlive that are *objects*: they live on the heap and a value is a
pointer to them.

Each thread has its own heap. [`thread::spawn`](/docs/reference/thread/spawn)
starts a thread with a fresh one, and values cross between threads by copy,
so no collector ever waits on another thread.

## The collector

When the heap has grown enough since the last collection, an allocation
starts one. The collector marks every object reachable from the program's
locals, statics and [`gc::Root`](/docs/reference/gc/Root) pins. It then runs
the `fn drop()` of each unreachable object that has one (at most once per
object) and clears the [`gc::Weak`](/docs/reference/gc/Weak) handles whose
object is gone. Then it frees the rest, a little at each later allocation
rather than all at once. Between collections it may move objects out of
nearly empty memory pages so the pages can go back to the system.

The [`gc`](/docs/reference/gc) module is the program's handle on all this:
`root` and `weak` for native code and registries, `heap_bytes` and
`collect` for measuring.

## What the compiler frees early

For every function the compiler works out its *escape facts*: which
parameters a call may keep after it returns, which it may hand back in its
result, and whether its result is *fresh* (everything in it was made by
the call, and nothing else holds it). It then frees:

- **Objects at the end of their scope.** A local whose object nothing else
  can reach is freed where its block ends, or before a `return`.
- **Call temporaries.** In `check(build(n))`, when `build` returns a fresh
  result and `check` keeps none of it, the whole result is freed right
  after the call.
- **Values replaced by an assignment.** `s = s + piece` frees the old `s`
  once the new one is made, when nothing else holds it.
- **Matched results.** `match parse(x) { … }` frees the fresh value it
  matched once the arms are done.

Byte conversions benefit too: `to_bytes(s)` that is only indexed reads
`s`'s own bytes, and `from_bytes(buf)` on a buffer nothing reads again
takes it over instead of copying.

A class with a `fn drop()` may see its drop run at the point the object is
freed early, before the next collection would have run it.

`coil dissect --effects FILE` prints the facts the compiler inferred, one
`;; escape` line per function: `keeps nothing`, ``keeps `t` ``,
``returns `self` ``, `result fresh`.

## Stating escape facts

You never have to write escape facts down. When you do, the compiler checks
them against what it inferred, the way it checks `pure fn`
([Effects](/docs/language/effects)):

- `#[noescape(a, b)]`: the call neither keeps nor hands back `a` and `b`.
- `#[fresh]`: the result is fresh.

```coil
#[noescape(s)]
fn look(string s) -> int {
    return s.len();
}

#[fresh]
fn make(int n) -> Vec<int> {
    let v: Vec<int> = Vec::new();
    v.push(n);
    return v;
}
```

A stated fact that does not hold is error `E0139`:

```text
Error: [E0139] `keep` states `#[noescape(s)]`, but it may keep `s`
```

A stated fact is never trusted in place of the analysis; it documents an
intent and fails the build when a later change breaks it.

## Regions

`region { … }` runs a block whose garbage is freed in one go when it ends.
It suits code with a clear unit of work: one request, one frame of a game
loop, one pass over a file.

```coil
use string::format;

fn total_len(int rounds) -> int {
    let total = 0;
    let i = 0;
    while i < rounds {
        total += region {
            let line = format("row %i", i);
            line.len()
        };
        i += 1;
    }
    return total;
}
```

A region is a block: it works as a statement or as a value. Its value may
be a plain value (`int`, `bool`, `float`, …) or an object made before the
region. `region` is a keyword only right before `{`; anywhere else it is an
ordinary name.

### What may not leave a region

The compiler rejects, with error `E0140`, an object made inside a region
that could outlive it:

- assigned to a local declared outside the region,
- stored or pushed into an object, vector or static from outside,
- passed to a function that keeps it (by its escape facts),
- captured by a `defer` or yielded,
- the region's value.

```coil fail
use string::format;

fn main() {
    let last = "";
    region {
        let s = format("a%i", 1);
        last = s; // E0140: assigned to `last`, declared outside the region
    }
}
```

`return` and `?` may carry an object out of a region (an error built
inside it, say): the runtime copies it out as the region ends. So do the
few cases the check cannot follow, such as a function value it cannot see
into. A region is never unsound, only slower when something escapes.
`break` and `continue` leave a region like any block.

Regions nest; only the outermost one frees its garbage at its end.

## The nursery

The runtime allocates new objects in a *nursery*: memory it fills by
bumping a pointer and empties with a minor collection that copies out the
few objects still alive. Most objects die young, so a minor collection
touches little memory, and the full collector runs far less often.
Regions are built on it. The nursery is on by default. Programs that make many short-lived objects run faster with it;
programs that keep large structures alive across many collections can run
slower, and `COIL_NURSERY=0` turns it off (regions then run as plain
blocks).

## Switches

These environment variables change the behaviour at run time, for
measuring and debugging:

| Variable | Effect |
| --- | --- |
| `COIL_EARLY_FREE=0` | Compile no early frees and free nothing early at run time |
| `COIL_EARLY_FREE=check` | Compile the frees but free nothing; at the next collection, abort if a freed object was still reachable |
| `COIL_NURSERY=0` / `=1` | Turn the nursery off or on |
