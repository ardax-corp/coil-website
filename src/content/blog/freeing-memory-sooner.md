---
title: Freeing memory sooner
description: The Coil compiler now frees objects it can prove dead, region blocks free a unit of work in one go, and a nursery catches young garbage. The collector stays as the backstop.
date: 2026-10-27
---

# Freeing memory sooner

Coil has always had a tracing garbage collector. It works, but it reclaims
memory late, in batches, and every batch costs a walk over everything still
alive. Most garbage, though, is obvious: a string built for one log line, a
tree checked and thrown away, the old value of `s` in `s = s + piece`.

The latest round of work teaches Coil to free that kind of garbage where it
dies. The collector stays as the backstop for everything else. Nothing here
changes what a program computes, only when its memory comes back. The full
story is on the [Memory management](/docs/language/memory) page.

Work landed in [coil-lang](https://github.com/ardax-corp/coil-lang).

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
counting. Neither pays. Every library class is mutable, so cycles are
possible and reference counting would still need a cycle collector. The
garbage that is left after early freeing is mostly shared container data,
which is exactly what a tracing collector handles best.
