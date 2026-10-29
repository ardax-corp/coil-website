---
title: Freeing memory sooner
description: Classes, vectors and maps are now values with copy-on-write, the compiler frees objects it can prove dead, region blocks free a unit of work in one go, and a nursery catches young garbage. The collector stays as the backstop.
date: 2026-10-27
---

# Freeing memory sooner

Coil has always had a tracing garbage collector. It works, but it reclaims
memory late, in batches, and every batch costs a walk over everything still
alive. Most garbage, though, is obvious: a string built for one log line, a
tree checked and thrown away, the old value of `s` in `s = s + piece`.

The latest round of work teaches Coil to free that kind of garbage where it
dies. The collector stays as the backstop for everything else.

It also changes one rule of the language: class instances, vectors and maps
are now values, copied on write. That change is the one you will notice in
your code, so it comes first. The rest only changes when memory comes back.
The full story is on the [Memory management](/docs/language/memory) page.

Work landed in [coil-lang](https://github.com/ardax-corp/coil-lang).

## Objects are values now

Until now, `let b = a;` gave you a second name for the same object, and so
did passing `a` to a function. That made two kinds of bug easy to write: a
snapshot that silently tracked the live state, and a helper that kept an
argument and changed it later. It also meant the compiler could rarely
prove that an object had one owner, which is what freeing early needs.

Now class instances, `Vec`, fixed arrays and `HashMap` behave like values:

```coil
use tests::assert;

class Counter {
    pub value: int,
}

fn main() {
    let a = new Counter(1);
    let b = a;      // no copy yet: both names share one object
    b.value = 5;    // `b` is copied here, then changed
    assert!(a.value == 1 && b.value == 5);
}
```

Nothing is copied when you assign. The copy happens at the first write to
an object that something else still holds, and an object that only one
name holds is written in place. A function still changes the variable you
pass it, so `list.push(x)` and `bump(counter)` work as they always did.

When you do want two names for one object, you say so:

- `let c = mut a.config;`, `for mut item in items` and `use (mut list)`
  borrow instead of copying.
- `Ref<T>` from `cell` holds one shared value; every copy of the `Ref`
  reaches it.
- `shared class` declares a type whose instances are identities and are
  never copied: connections, windows, loggers, registries.

The compiler warns (`E0141`) at every write that will copy, with the
borrow or `Ref` that avoids it as the fix, and `coil FILE --cow-report`
counts the copies each line made at run time.

Before deciding, we measured how much existing code relies on two names
changing one object. Of about 4,200 places that change an object in the
standard library and the libraries we maintain, 96% are unaffected. The
rest come down to a handful of types that really are identities, now
marked `shared class` (`Ref`, the terminal UI's widgets, a CLI buffer and
history, a MessagePack store), and closures that kept state in a captured
object.

### What it costs

We compared three ways to run the same programs: the old sharing rules,
copy-on-write, and copying on every assignment (the simple way to get
values). Wall time is the median of 7 runs.

| Bench | Old sharing | Copy-on-write | Copy on assign |
| --- | --- | --- | --- |
| records (1.1M shares into lists) | 521 ms, 34 MB | 576 ms, 34 MB | 1136 ms, 122 MB |
| world (snapshots of a live state) | 51 ms, 12 MB | 147 ms, 20 MB | 606 ms, 109 MB |
| hashmap | 873 ms | 887 ms | n/a |
| sort | 2353 ms | 2337 ms | 2214 ms |
| binary_trees | 2250 ms | 2319 ms | 2188 ms |

The hashmap row comes from a later run, after the fix described below,
with the two builds run alternately. Against copying on assignment,
copy-on-write is 2 to 4 times faster and
uses 3.5 to 5.5 times less memory. On `records` it copies about 1 object
in 11,000 shares.

Against the old rules, programs that never share pay nothing measurable.
`world` is about 3 times slower, but the old version of it is *wrong*: every
snapshot aliased the live state, so the history read 35 where it should
read 5. The copies copy-on-write makes there are the ones the program
needs, and under the old rules you had to write them by hand.

The first cut cost `hashmap` 24%, because `insert` checks each of a map's
five internal vectors before writing it. A fused VM instruction now checks
a field and copies it in place only when it is shared, which brought that
down to about 2%.

## Escape facts

For every function the compiler now works out which parameters a call may
keep, which it may hand back, and whether its result is *fresh* (made by
the call and held by nothing else). Those facts flow across calls, so
`check(build(n))` knows that `build` returns something new and `check`
keeps none of it.

You never write these facts down. You can, though, and the compiler checks
them:

```coil
#[noescape(s)]
fn look(string s) -> int {
    return s.len();
}
```

A stated fact that stops holding after a later change fails the build with
`E0139`.

## Early freeing

With the facts in hand, the compiler frees (at `-O1` and above):

- a local nothing else can reach, where its block ends or before a `return`;
- a call's fresh result right after the call, when the callee kept none of it;
- the old value an assignment replaces, as in `s = s + piece`;
- a fresh value a `match` inspected, once the arms are done.

`to_bytes` and `from_bytes` skip their copy when the compiler can see the
original is never used again.

## Regions

Some code has an obvious unit of work: one request, one frame, one line of
a file. A `region` block says so:

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

Everything the block makes is freed in one go when it ends. The compiler
rejects, with `E0140`, an object made inside that could outlive it.

## The nursery

New objects now start in a nursery that the runtime fills by bumping a
pointer and empties by copying out the few still alive. Regions are built
on it, and churn-heavy programs gain the most: one bench that rebuilds and
drops a large structure each round got 29% faster and uses 37% less memory.

## Numbers

Wall-time medians and peak memory, main before this work against the new
build with the nursery off and on:

| Bench | Before | Nursery off | Nursery on (default) |
| --- | --- | --- | --- |
| binary_trees 16 | 2024 ms, 28 MB | 1720 ms, 17 MB | 1593 ms, 19 MB |
| gc_rebuild | 779 ms, 67 MB | 532 ms, 46 MB | 623 ms, 50 MB |
| gc_shrink | 420 ms, 63 MB | 473 ms, 65 MB | 333 ms, 41 MB |
| JSON round trip | 809 ms, 38 MB | 740 ms, 25 MB | 765 ms, 24 MB |
| CSV parse | 574 ms, 44 MB | 569 ms, 23 MB | 568 ms, 22 MB |
| strings 50k | 153 ms, 37 MB | 127 ms, 36 MB | 137 ms, 39 MB |

The nursery is not free. Programs that keep large structures alive across
many collections pay for copying them before they settle, up to about 20%
on our benches. We kept it on by default because short-lived garbage is
the common case; `--nursery off` turns it off.

## What we did not do

We looked hard at dropping the collector, or swapping it for reference
counting. Neither pays. Copy-on-write rules out most cycles, but `shared
class` instances and `Ref` can still form them, so reference counting
would still need a cycle collector. The garbage that is left after early
freeing is mostly shared container data, which is exactly what a tracing
collector handles best.

We also looked at adding a separate `struct` value type next to classes,
as Swift does. Making classes themselves values turned out to be simpler:
there is one kind of type to learn, and the few types that need identity
say so with `shared class`.
