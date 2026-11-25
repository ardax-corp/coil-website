---
title: "Memory management"
description: "How Coil manages memory: copy-on-write values, reference counts the compiler inserts and mostly removes, early freeing it proves safe, and a cycle collector for the few types that can form cycles."
---

# Memory management

Coil programs never free memory by hand. Three layers share the work:

1. **The compiler frees early.** Objects it can prove dead are freed where
   they die, whole: at the end of their scope, right after a call, or when
   an assignment replaces them.
2. **Reference counts** free every other object when its last owner lets go
   of it. The compiler inserts the count updates and removes most of them,
   so a loop over numbers or a read of a field usually counts nothing.
3. **The cycle collector** frees groups of objects that only own each other.
   Only a few kinds of type can form such a cycle, and a program without
   them never runs it.

None of these layers changes what a program computes. They change when
memory comes back. Nothing ever moves an object, and nothing stops the
program to scan its memory.

What a program computes depends on one rule that sits above all three:
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
so no thread ever waits on another to free memory.

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

A function may hand back the object it was given, or a field of it.
Assigning the result back to the same place copies nothing: the old
value is dead once the call returns, so the object moves into the call
and back out.

```coil
use tests::assert;

fn add(Vec<int> v, int x) -> Vec<int> {
    v.push(x);
    return v;
}

class Log {
    pub items: Vec<int>,
}

fn main() {
    let v: Vec<int> = Vec::new();
    let log = new Log(Vec::new());
    let i = 0;
    while i < 1000 {
        v = add(v, i);                   // no copy
        log.items = add(log.items, i);   // no copy
        i += 1;
    }
    assert!(v.len() == 1000 && log.items.len() == 1000);
}
```

The same holds for an element, `a[i] = f(a[i])`, when nothing else in
the call reads `a` or `i`. When the caller keeps the argument and also
binds the result, the two are separate values from then on: a write
through one never shows up in the other. A result the caller only reads
(`f(x).len()`) or drops (`let _ = f(x);`) is never copied, which is what
makes [`HashMap::entry`](/packages/stdlib/reference/collections/map)
updates such as `m.entry(k).and_modify(f).or_insert(init)` copy nothing.

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
While it lives, any other name made for the borrowed object is a copy
taken at that point: a `let`, a store into a field or a vector, a value a
function keeps or hands back, a `use (x)` capture, a `for` over it. Writes
through the borrow do not show through that name:

```coil
use tests::assert;

class Config {
    pub port: int,
}

fn main() {
    let a = new Config(1);
    let c = mut a;
    let before = a;
    c.port = 80;
    assert!(a.port == 80);
    assert!(before.port == 1);
}
```

Replacing the borrowed variable while the borrow lives (`a = new
Config(2)`) is still an error (E0149): the borrow would go on writing the
old object.

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

While a view is live, its place is not shared, moved or replaced
(E0149): `let other = c` after `c.slot(1)` is an error until the last use
of the slot, because writes through the view would show through both
names. (A plain `mut` borrow gives such a name a copy instead.)

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
for lines that copy over and over. That run is on the
[MIR interpreter](/docs/language/native-code#the-mir-interpreter), so it is
slower than a normal one.

### Threads and tasks

Values that cross to a thread or a task were always copied, and still
are. A value sent on a channel arrives as the receiver's own copy.

## When memory comes back

Every object has a count of the places that own it: variables, fields,
elements, captures. When the count reaches zero the object is freed at
once, and what it held loses an owner in turn. A variable lets go of its
object after its last use, not at the end of its scope, so a
[`gc::Weak`](/docs/reference/gc/Weak) can find an object gone right after
the last line that used it.

A class with a `fn drop()` runs it when its count reaches zero, or at the
end of the scope that owns it, at most once per object; its memory goes
right after. When the release has to happen at a known point, a
[`defer`](/docs/language/syntax#defer) states it in the code. A `panic`
inside a `drop` the runtime runs aborts the program at once, with the
message and a non-zero exit status; the remaining defers and drops do not
run. A call to `obj.drop()` you write yourself is an ordinary method call,
and a panic in it unwinds like any other.

Two kinds of resource are closed the same way:

- A **suspended generator** with a `defer` armed at its current `yield` is
  closed when its last owner goes: its pending defers run, last first. A
  panic in one aborts, as in a `drop`.
- A **`Stream`** whose last owner goes gives its descriptor back. When
  `open` or `accept` fails with `IoError::TooManyOpenFiles`, the runtime
  runs the cycle collector once and tries again before it returns the
  error. The compiler warns (`E0148`) about a local stream a function opens and never
  closes or hands on.

`env::exit` ends the program at once: neither the pending defers nor the
drops run.

### Cycles

A write to a shared value copies it, so values cannot point at
themselves. Only objects with an identity can close a cycle: a
`shared class` or a class with a `fn drop()` whose fields can lead back to
its own type, or one that holds a function or a generator. For those
types, and only those, the runtime runs a cycle collector as the heap
grows: it finds groups whose owners are all inside the group and frees
them, running their `drop`s. [`gc::collect`](/docs/reference/gc/collect)
runs it on demand.

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
so a `drop` object it holds is dropped when its own count reaches zero. A
`drop` that keeps `self` leaves its objects to their counts. A panic in a `drop` run at a free
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

## Switches

Early freeing follows the optimization level: on at `-O1` and above, off
at `-O0` and `-Og`, where frames should match the source for the debugger.
These flags change the defaults, for measuring and debugging:

| Flag | Effect |
| --- | --- |
| `--early-free on` / `off` | Compile the early frees, or not, whatever the `-O` level |
| `--early-free check` | Compile the frees, but free nothing when the program runs; abort at a free that something else still owns |
| `--cow-report` | At exit, print the copies copy-on-write made, per source line, for `coil FILE` (runs on the MIR interpreter) |

`coil FILE`, `coil test`, `coil compile`, `coil package` and `coil dissect`
take `--early-free`.
