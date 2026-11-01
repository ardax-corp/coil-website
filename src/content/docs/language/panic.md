---
title: "`panic`"
description: "Keyword that aborts the program with a string message. Writes panic: <msg> and stops the VM; the CLI exits with code 1. Under coil test, a language panic fails the current case…"
---

# `panic`

Keyword that aborts the program with a string message. Writes `panic: <msg>` and stops the VM; the CLI exits with code `1`. Under `coil test`, a language panic fails the current case only (the next case still runs unless `--fail-fast` is set).

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
panic "unreachable";
panic format("bad index %i", i);
```

Unlike `raise`, `panic` is not recoverable with `?` / `match`. Prefer `assert` + `?` when callers should handle failure.

See `examples/panic.coil`.

## Panics and cleanup

A panic unwinds: the [`defer`](/docs/language/syntax#defer) blocks of every
block and function it leaves run, innermost first, and a `for` loop it
leaves closes the generator it was running. A panic inside a deferred block
replaces the one being unwound, and the callers' defers still run.

A panic in cleanup the collector runs is different. The collector runs a
`fn drop()` and closes an unreachable suspended generator at no point the
program chose, so nothing can unwind to a caller. A panic there aborts the
program at once: it prints the message, exits with a non-zero status, and
runs no further defers or drops. A panic unwinds as usual from a `drop`
that runs at a point the program reaches: a call to `obj.drop()`, or the
end of a block where the compiler frees the object early.

## Locations and backtraces

A panic names the source line it came from, and a runtime error (an
out-of-bounds index, a finished coroutine resumed, …) also prints the call stack. Set
`COIL_BACKTRACE=1` to get the call stack for an explicit `panic` too:

```text
panic: boom: x too large at panic.coil:3:8
  in inner at panic.coil:3:8
  in outer at panic.coil:9:11
  in main at panic.coil:14:12
```

How much of this a program can print depends on the debug info it was
compiled with (`-g0`, `-g1` or `-g2` on `coil`, `coil compile`, `coil package`
and `coil test`):

| Level | Keeps | A panic prints |
|-------|-------|----------------|
| `-g2` | function names, lines, byte spans | the output above; `coil debug` and `coil test --coverage` need this level |
| `-g1` | function names, lines | the same output, from a smaller archive |
| `-g0` | nothing | the message and bare frames |

At `-g0` the same panic prints:

```text
panic: boom: x too large
  in <unknown>
  ... repeated 2 more times
```

`coil`, `coil compile` and `coil test` default to `-g2`; `-Os` and
`coil package` default to `-g1`. `--strip-debug` is the same as `-g0`. The
level never changes what the program does, only what a panic can report.
`defer` blocks still run when a panic unwinds at every level.

---

## Related

- [assert](/packages/stdlib/reference/tests/assert)
- [Keywords](/docs/reference/keywords)
