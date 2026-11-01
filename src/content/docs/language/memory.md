---
title: "Memory management"
description: "How Coil manages memory: copy-on-write values, a tracing garbage collector as the backstop, a nursery for young objects, early freeing the compiler proves safe, and checked region blocks."
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

None of these layers changes what a program computes. They change when
memory comes back, and with it how often the collector has to run.

What a program computes depends on one rule that sits above all four:
class instances, vectors and maps are values, shared until written and
copied on write. That rule is what lets the compiler know when an object
has a single owner, and so when it can free it.

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

## Copy-on-write

Class instances, vectors (`Vec<T>` and fixed arrays) and maps behave like
values. `let b = a;` gives `b` a value of its own: a change through `b`
never shows up in `a`. Copying on every assignment would be slow, so Coil
does not. Both names point at the same object until one of them writes
to it, and only then is the object copied. An object that only one name
holds is written in place, with no copy.

```coil
use tests::assert;

class Counter {
    pub value: int,
}

fn main() {
    let a = new Counter(1);
    let b = a;          // no copy: `a` and `b` share one object
    b.value = 5;        // `b` is copied here, then changed
    assert!(a.value == 1 && b.value == 5);
}
```

Copies are shallow: copying a class copies its fields, and a field that
holds a vector stays shared until that vector is written in its turn.

Records, strings, tuples and enums are not affected. Strings, tuples and
enums cannot be changed in place anyway; records are still shared by
reference.

### Calls

Passing an argument does not copy it. A function that changes its
parameter changes the caller's variable:

```coil
use tests::assert;

fn grow(Vec<int> v) {
    v.push(1);
}

fn main() {
    let v: Vec<int> = Vec::new();
    grow(v);
    assert!(v.len() == 1);
}
```

A method changes the object it is called on in the same way. When the
caller's variable shares its object with another name, the caller copies
it before the call, so the other name keeps its value. The compiler knows
from each function's [escape facts](#what-the-compiler-frees-early)
whether it writes or keeps an argument, and checks only where one does.

### Asking for a shared object

Write `mut` where a second name should reach the same object instead of
a copy:

- `let c = mut a.config;` makes `c` another name for `a.config`, so
  `c.port = 80` changes `a`.
- `for mut item in items { … }` changes each element in place.
- `fn () use (mut list) { … }` lets a lambda change the outer `list`.
  It shares `list`'s object, not the variable: assigning the capture
  (`n += 1` on a captured `int`) changes only the lambda's copy, and the
  compiler warns (E0143). Use a `Ref<int>` for a counter.

`mut` is a borrow: the name lives in its own scope and is never stored.
State that must be shared beyond that goes in one of two places:

- **`Ref<T>`** from [`cell`](/packages/stdlib/reference/cell) holds one shared value.
  Every copy of a `Ref` reaches the same value, so a closure that keeps
  a counter between calls captures a `Ref<int>`.
- **`shared class`** declares a type whose instances are identities, not
  values: they are never copied. Use it for things that stand for one
  resource or one place in the program, such as a connection, a window,
  a logger or a registry.

```coil
use tests::assert;

shared class Log {
    pub lines: int,
}

fn main() {
    let log = new Log(0);
    let alias = log;
    alias.lines += 1;
    assert!(log.lines == 1);
}
```

A class with a `fn drop()` and a `readonly class` are never copied
either: the first because it owns an outside resource, the second
because it never changes.

### Views: classes that borrow

A `view class` is a class whose `mut` fields borrow, the way `let c = mut
a.config` does. Writes through a view land in the object it was given, so
a view can stand for one place in a collection, such as a map entry or a
vector slot:

```coil
use tests::assert;

class Counts {
    pub vals: Vec<int>,
}

view class Slot {
    mut c: Counts,
    i: int,
}

impl Counts {
    pub fn slot(int i) -> Slot {
        return new Slot(mut self, i);
    }
}

impl Slot {
    pub fn add(int d) -> Slot {
        self.c.vals[self.i] += d;
        return self;
    }
}

fn main() {
    let c = new Counts([0, 0, 0]);
    let _ = c.slot(1).add(2).add(3);
    assert!(c.vals[1] == 5);
}
```

A `mut` field takes `mut place` in the constructor, and a plain field
never does. The place must hold an object (a class, vector or map), not a
number: there is no reference to one `int` slot. To point at an element,
borrow the vector and keep the index, as `Slot` does.

A view is the borrow it holds, so it lives no longer than the place it
borrows. The compiler refuses (E0151) a view that could outlive it:

- stored in a field, an element, a static, or a new object or variant;
- held inside another type, such as `Option<Slot>` or `Vec<Slot>`;
- captured by a lambda, or handed to a function that keeps it;
- returned from anything except a method of the object it borrows: a
  method that builds the view over `mut self`, a view's own method that
  returns `self`, or another such call on `self`.

While a view or a `mut` borrow is live, its place is not shared,
moved or replaced (E0149): `let other = c` after `c.slot(1)` is an error
until the last use of the slot, because writes through the view would
show through both names.

Inside one module, a chain such as `c.slot(i).add(1).add(2)` compiles
to the same code as writing `c.vals[i]` directly: the view is not
allocated and the calls inline. The standard library's
[`HashMap::entry`](/packages/stdlib/reference/collections/map) and
`Vec`'s `slot(i)` are views.

### Seeing the copies

The compiler warns where a write will copy:

- `E0141`: a write copies an object that a variable shares with another
  name. The help suggests `let x = mut …` when the change was meant for
  the original.
- `E0142`: a method changes a temporary copy, as in `shelf.top().bump()`
  where `top` returns an element the shelf still holds, and the change is
  lost.

At run time, `coil FILE --cow-report` prints how many copies each source
line made when the program exits, and hints at a `mut` borrow or a `Ref`
for lines that copy over and over.

### Threads and tasks

Values that cross to a thread or a task were always copied, and still
are. A value sent on a channel arrives as the receiver's own copy.

## The collector

When the heap has grown enough since the last collection, an allocation
starts one. The collector marks every object reachable from the program's
locals, statics and [`gc::Root`](/docs/reference/gc/Root) pins. It then runs
the `fn drop()` of each unreachable object that has one (at most once per
object) and clears the [`gc::Weak`](/docs/reference/gc/Weak) handles whose
object is gone. Then it frees the rest, a little at each later allocation
rather than all at once. Between collections it may move objects out of
nearly empty memory pages so the pages can go back to the system.

A `drop` the compiler cannot run at an early free runs when the collector
finds its object unreachable, which may be long after the last use, or at
program exit for an object still reachable then. When the release has to
happen at a known point, write it with a
[`defer`](/docs/language/syntax#defer). A `panic` inside a `drop`
the collector runs aborts the program at once, with the message and a
non-zero exit status; the remaining defers and drops do not run. A call to
`obj.drop()` you write yourself is an ordinary method call, and a panic in it
unwinds like any other.

The collector closes two kinds of resource the same way:

- A **suspended generator** with a `defer` armed at its current `yield` is
  closed when nothing reaches it: its pending defers run, last first. A
  panic in one aborts, as in a `drop`.
- A **`Stream`** nothing reaches gives its descriptor back. When `open` or
  `accept` fails with `IoError::TooManyOpenFiles`, the runtime collects
  once and tries again before it returns the error. The compiler warns
  (`E0148`) about a local stream a function opens and never closes or
  hands on.

`env::exit` ends the program at once: neither the pending defers nor the
drops run.

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

An object whose type has a `fn drop()` is freed early too when its `drop`
keeps nothing of `self` (it does not store `self`, or anything `self`
reaches, anywhere that outlives the call). The free runs the `drop` first,
right there: at the end of the block that holds the object, after a
`return`'s value is computed. A block-end free gives back the object itself,
so a `drop` object it holds is dropped by the collector. A `drop` that keeps
`self` leaves its objects to the collector. A panic in a `drop` run at a free
unwinds from there like any call.

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
slower, and `--nursery off` turns it off (regions then run as plain
blocks).

## Switches

Early freeing follows the optimization level: on at `-O1` and above, off
at `-O0` and `-Og`, where frames should match the source for the debugger.
Two flags change the defaults, for measuring and debugging:

| Flag | Effect |
| --- | --- |
| `--early-free on` / `off` | Compile the early frees, or not, whatever the `-O` level |
| `--early-free check` | Compile the frees, but free nothing when the program runs; at the next collection, abort if a freed object was still reachable |
| `--nursery on` / `off` | Turn the nursery on (the default) or off for `coil FILE`, `coil run` and `coil test` |
| `--cow-report` | At exit, print the copies copy-on-write made, per source line, for `coil FILE` |

`coil FILE` and `coil test` take `--early-free` and `--nursery`. `coil compile`, `coil package`
and `coil dissect` take `--early-free`, and `coil run` takes `--nursery`.
