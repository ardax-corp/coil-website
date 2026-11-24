---
title: Counting instead of tracing
description: Coil no longer has a tracing garbage collector. Objects are freed by reference counts the compiler inserts and mostly removes, and a small cycle collector handles the few types that can form cycles.
date: 2026-11-24
---

# Counting instead of tracing

A month ago, [Freeing memory sooner](/blog/freeing-memory-sooner) taught the
compiler to free objects it could prove dead, with the tracing collector as
the backstop for the rest. The backstop is now gone. Coil frees memory with
reference counts, and nothing walks the heap to find out what is still alive.

## How it works

Every object counts the places that own it: variables, fields, elements and
captures. When the count reaches zero the object is freed at once, and the
objects it held lose an owner in turn. The compiler inserts the count updates
into the code every engine runs, then removes most of them: numbers are never
counted, a read of a field that nothing can change meanwhile counts nothing,
and an increment followed by its decrement cancels. The early frees from last
month still run first and give back whole structures without touching a
count.

Reference counts cannot free a group of objects that only own each other.
Copy-on-write makes such cycles rare: a write to a shared value copies it, so
a value cannot point back at itself. Only objects with an identity can close a
cycle, such as a `shared class` whose fields lead back to its own type, or a
class that holds a function or a generator. The compiler marks those types,
and a cycle collector looks only at objects of those types, when the heap has
grown. A program without them never runs it.

## What you will notice

- **Memory comes back sooner.** An object is freed after its last use, not at
  the next collection. A `fn drop()` runs when its object's last owner goes,
  or at the end of the scope that owns it.
- **Nothing moves and nothing pauses.** There is no nursery, no evacuation and
  no mark phase.
- **`region { … }` is gone.** A region freed a unit of work's garbage in one
  go; counts already free each object where it dies. `--nursery` is gone too.

Your code does not change. `gc::collect`, `gc::weak` and `gc::root` keep
their meaning: `collect` runs pending drops and the cycle collector, a weak
handle clears when its object's last owner goes, and a root keeps its value
alive until you `unroot` it.

## Numbers

Instruction counts of the packaged benchmarks against the tracing collector
on the same branch: `tak` is unchanged, `nsieve` runs 7% fewer instructions,
`sort` 16% fewer and `object_walk` 8% fewer, while `hashmap` runs 5% more. A
packaged hello world shrank from 1,035 KB to 941 KB, since native code no
longer carries stack maps for the collector.

The [Memory management](/docs/language/memory) page has the full picture.
